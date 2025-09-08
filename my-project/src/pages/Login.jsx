import axios from "axios";
import config from "../config/index";
import '../css/Login.css'
// function formDataToJsonMapper(email, password){
//     let newData = {
//         email: email,
//         password: password
//     }

//     return JSON.stringify(newData)
// }

async function formHandle(e) {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  // const jsonData = formDataToJsonMapper(email, password)

  const newData = {
    email: email,
    password: password,
  };

  const axiosConfig = { headers: { "Content-Type": "application/json" } };
  
  try {
    const response = await axios.post(`${config.BACKEND_URL}account/login`, newData, axiosConfig);

    console.log("Resposta da API:", response.data);
  }
  
  catch (error) {
      if (error.response) {
      const data = error.response.data;
      //const status = error.response.status;
      const p = document.getElementById("errorMensagem");

      const email = document.getElementById('email')
      const password = document.getElementById('password')

      if(email.value == "" || password.value == ""){
        p.innerHTML = "Preencha todos os campos."
      }else{
        p.innerHTML = data.mensagem;       
      }

    } else {
      console.error("Erro de rede:", error);
    }  }
}

function Login() {
  
  // mar@example.com
  //   @Segura789

  return (
    <div className="flex justify-center items-center h-screen">

      <div className=" flex justify-center items-center grid grid-rows w-120 h-150 rounded-2xl form-login p-2">


          <p className="flex justify-center">LogRes</p>
        <div>

          <form className=" h-85  grid grid-rows-4" onSubmit={async (e) => await formHandle(e)}>
              

              <input className="row-1 border-2 border-black" id="email" type="text" name="email" placeholder="EMAIL" />
            
              <input className="row-2 border-2 border-black" id="password" type="text" name="password" placeholder="PASSWORD" />
            
              <input className="row-4 border-2 border-black" type="submit" value="Login" />
            
          </form>

          <p className="flex justify-center bg-red-600 rounded-md" id="errorMensagem"></p>
        </div>

      </div>

    </div>
  );
}

export default Login;
