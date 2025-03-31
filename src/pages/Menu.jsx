import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import { getPlatillos } from '../services/Llamados-2'

function Menu() {
  const [platllos,setPlatillos] = useState([])

  useEffect(()=>{
     async function traePlatillos() {
        const datos = await getPlatillos("platillos")
        setPlatillos(datos)
     }
     traePlatillos()
  },[])


  return (
    <>
      {platllos.map((platillo)=>{
        return(
          <Cards
            nombre={platillo.nombrePlatillo}
            descripcion={platillo.descripcionPlatillo}
            precio={platillo.precioPlatillo}
          />
        )
      })}
    </>
  )
}

export default Menu
