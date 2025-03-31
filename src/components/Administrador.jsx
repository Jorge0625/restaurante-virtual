import React, { useEffect, useState } from 'react'
import { postPlatillos,getPlatillos,deletePlatillos, patchPlatillos } from '../services/Llamados-2'
import "../styles/Administrador.css"
import Cards from './Cards'


function Administrador() {
  const [nombrePlatillo,setNombrePlatillo] = useState("")
  const [precioPlatillo,setprecioPlatillo] = useState("")
  const [descripcionPlatillo,setdescripcionPlatillo] = useState("")
  const [menu,setMenu] = useState([])
  const [recarga,setRecarga]=useState(false)

  useEffect(()=>{
   async function leerInfo() {
     const platillos =  await getPlatillos("platillos")
      setMenu(platillos)
      console.log(menu);
      
    }
    leerInfo()
  },[recarga])

   async function enviarDatos() {
       const platillo = {
        nombrePlatillo:nombrePlatillo,
        descripcionPlatillo:descripcionPlatillo,
        precioPlatillo:precioPlatillo
       }
       await postPlatillos(platillo,"platillos")
       setRecarga(!recarga)
    }
    function eliminar(id) {
      setRecarga(!recarga)
      deletePlatillos("platillos",id)
      
    }
    function editar(id){
      const obj = {
        nombrePlatillo: nombrePlatillo,
        descripcionPlatillo: descripcionPlatillo,
        precioPlatillo: precioPlatillo
      }
      setRecarga(!recarga)
      patchPlatillos(obj,"platillos",id)
      
    }


  return (
    <div className='Ad'>
      <div className='adm'>
        <h1 className='h-0'>Administradores</h1>
        <br />
        <label className='Min' htmlFor="">Nombre platillo</label>
        <input type="text" onChange={(e)=>setNombrePlatillo(e.target.value)}/>
        <br />
        <label className='Min' htmlFor="">Precio platillo</label> 
        <input type="text" onChange={(e)=>setprecioPlatillo(e.target.value)}/>
        <br />
        <label className='Min' htmlFor="">Descripción platillo</label>
        <input type="text" onChange={(e)=>setdescripcionPlatillo(e.target.value)}/>
        <br />
        <button className='Doo' onClick={enviarDatos}>Añadir Platillo</button>
      </div>
      {menu.map((platillo)=>
      <ul>
        <h2>Administradores</h2>
        <li className='Lyon'>{platillo.nombrePlatillo}</li>
        <br />
        <li className='Lyon'>{platillo.descripcionPlatillo}</li>
        <br />
        <li className='Lyon'>{platillo.precioPlatillo}</li>
        <br />
        <li><button className='Br' onClick={()=>eliminar(platillo.id)}>Eliminar</button></li>
        <br />
        <li><button className='Cs' onClick={()=>editar(platillo.id)}>Editar</button></li>
      </ul>
    )}
    </div>
    
  )
}

export default Administrador
 