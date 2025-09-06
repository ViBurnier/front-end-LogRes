import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Link, useLocation } from "react-router";

import Login from './pages/Login'
import Header from './Components/Header'

function App() {

  
  const local = useLocation()
  return (
    <>

      {local.pathname !== "/Login" && <Header/>}

    
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>

    </>
  )
}

export default App
