import { Link } from "react-router";

function Header() {
  return (
    <div className="w-screen h-screen flex justify-center ">
       <header className="flex justify-between items-center h-15 container">
        <p className="font-bold text-3xl">Bem-Vindo</p>

        <div className="flex w-50 justify-between">
          <Link
            to="/Login"
            className=" flex justify-center items-center rounded"
          >
            <p className="text-f">Sign in</p>
          </Link>

          {/*
          *
          precisa mudar a rota
          *
          */}
          <Link
            to="/Login"
            className=" flex justify-center items-center w-20 h-10 rounded buttons"
          >
            <h1 className="text-f">Sign up</h1>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
