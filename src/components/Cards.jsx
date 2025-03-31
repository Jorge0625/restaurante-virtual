import React from 'react'
import "../styles/Cards.css"
import Omelette from "../Img/Omelette.jpg"


function Cards({nombre,descripcion,precio,editar,}) {
    return (
     <div className='background'>
        <div className='cards-1'>
         <img className='img-1' src={Omelette} alt='Omelette.jpg'></img> 
         <h2 className='h2-tittle-1'>{nombre}</h2>
         <p className='text-1'>{descripcion}</p>
         <p className='text-1'>{precio}</p>
        </div>
        <br />
      
     </div>
    )
}

export default Cards