import React from 'react'
import"../styles/Navbar.css"
import Mariscos from "../Img/Mariscos.jpg";
import Pina from "../Img/Pina.jpg";
import Olla from "../Img/Olla.jpg";
import Ramen from "../Img/Ramen.jpg"
import SopaAzteca from "../Img/Sopa Azteca.jpg"
import Riceandbeans from "../Img/Rice and beans.jpg"
import porotos from "../Img/porotos.jpg"
import Pinto from "../Img/Pinto.jpg"
import Tamarindo from "../Img/Tamarindo.jpg"

function Navbar() {
  return (
    <div className='principal'>
      <div className='Bar'>
         <h2 className='H2-1'>Restaurante Don Pinto</h2>
         <h2 className='h2-0'>Bienvenidos!!!</h2>
         <ul ><a className='Navbar' href="/Menu">Menu</a></ul>
         <ul ><a className='Navbar' href="/Reserver">Reservaciones</a></ul>
      </div>
      <br />
      <div className='secundario'>
       <h2 className='H2-2'>Maneras de cocinar</h2>
       <br />
       <h3 className='H3-2'>Cocina Marina</h3>
       <img src={Mariscos} alt="Mariscos.jpg" />
       <h3 className='H3-2'>Bebidas naturales</h3>
       <img src={Pina} alt="Pina.jpg" />
       <h3 className='H3-2'>Cocina a Leña</h3>
       <img src={Olla} alt="Olla.jpg" />
     </div>
     <br />
     <div className='tercero'>
       <h2 className='H2-3'>Especialidades de la casa</h2>
       < br />
       <h3 className='H3-3'>Comida Japonesa</h3>
       <img src={Ramen} alt="Img de Ramen" />
       <h3 className='H3-3'>Comida Mexicana</h3>
       <img src= {SopaAzteca} alt="Img de Sopa Azteca" />
       <h3 className='H3-3'>Comida Afrocaribena</h3>
       <img src={Riceandbeans} alt="Img de Rice and beans" />
       </div>
       <div className='cuarto'>
       <h3 className='H3-4'>Comida Chilena</h3>      
       <img src={porotos} alt="Img de porotos" />
        <h3 className='H3-4'>Especialidad de la casa</h3>
       <img src={Pinto} alt="Img de Pinto" />
       <h3 className='H3-4'>Bebida de la casa</h3>
       <img src={Tamarindo} alt="Img de Tamarindo " />
       </div>
    </div>
    )
}

export default Navbar
