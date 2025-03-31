import { useState } from 'react'
import { getUsers } from '../services/Llamados'
import"../styles/Login.css"
import { Navigate, useNavigate } from 'react-router-dom'

function FormLogin() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()
 
  async function enviarDatos() {
     const datos = await getUsers("usuarios")
    const usuarioValido = datos.find(usuario=> usuario.gmail === email && usuario.password === password )

    console.log(usuarioValido);
    
     if (usuarioValido.rol === "admin") {
        console.log("entra")
        localStorage.setItem("rol",usuarioValido.rol)
        navigate("/admin")
     }else if (usuarioValido){
      navigate("/home")
     }
  }   

  return ( 
    <div className='div-login'>
      <div className='div-style'>
      <h1 className='h1-login'>Login</h1>
      <br />
      <label htmlFor="email">Gmail</label>
      <input className="input-login" placeholder="Luis@gmail.com" type="email" onChange={(e)=>setEmail(e.target.value)} />
      <br /> <br /> 
      <label htmlFor="password">Password</label>
      <input className="input-login" placeholder="*****" type="password" onChange={(evento)=>setPassword(evento.target.value)} />
      <br />
      <br />
      <button className='button-login' onClick={enviarDatos}>Login</button>
      </div>
    </div>
  )
}
export default FormLogin

