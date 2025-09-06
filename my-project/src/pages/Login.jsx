import axios from "axios";

function formDataToJsonMapper(email, password){
    let newData = {
        email: email,
        password: password
    }

    return JSON.stringify(newData)
}

async function formHandle(e) {
    e.preventDefault();
   
    const email = e.target.email.value;
    const password = e.target.password.value;

    axios.
}


function Login() {
  // const [email, setEmail] = useState("")
  // const [senha, setSenha] = useState("")

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" w-200 h-190 bg-blue-500 rounded-xl">
        <h1>Bem-Vindo</h1>

        <div className="home-form" >
            <form onSubmit={async (e) =>  await formHandle(e)}>
            <p><input type="text" name="email" placeholder="EMAIL" /></p>
            <p><input type="text" name="password" placeholder="PASSWORD" /></p>

            <p><input type="submit" value="Login" /></p>
            </form>
        </div>

        
      </div>
    </div>
  );
}

export default Login;
