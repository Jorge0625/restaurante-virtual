import React, { useState } from "react";
import { postUsers} from "../services/Llamados";
import"../styles/Register.css"
import { Navigate, useNavigate } from 'react-router-dom'

function FormRegister() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gmail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate
 
  async function enviarDatos() {
    const usuario = {
      name: name,
      age: age,
      gmail: gmail,
      password: password,
    };


    console.log(usuarioValido);
    
    if (usuarioValido) {
       console.log("entra")
       navigate("/login")
    }
   
    await postUsers(usuario, "usuarios");
  }
  


  return (
    <div className="div-1" >
      <div className="lol">
      <h1 className="h1">Registro</h1>
      <br />
      <label htmlFor="" className="input-r">Nombre</label><br />
      <input className="input-registro" placeholder="Pedro" type="name"onChange={(evento) => setName(evento.target.value)} /> <br />
      <br />
      <label htmlFor="" className="input-r">Edad</label > <br /> 
      <input className="input-registro" placeholder="20"  type="age" onChange={(evento) => setAge(evento.target.value)} /> <br />
      <br />
      <label htmlFor="" className="input-r">Gmail</label><br />
      <input className="input-registro" placeholder="pedro20@gmil.com" type="email" onChange={(evento) => setEmail(evento.target.value)} /> <br />
      <br />
      <label htmlFor="" className="input-r">Password</label><br />
      <input className="input-registro" placeholder="*****" type="password"onChange={(evento) => setPassword(evento.target.value)} /> <br />
      <br />
      <br />
      <button className="button-registro" onClick={enviarDatos}>Registrarse</button>
      </div>
    </div>
  );
}

export default FormRegister;
