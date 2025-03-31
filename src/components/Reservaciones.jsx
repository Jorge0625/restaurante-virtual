import React from 'react'

function Reservaciones() {
  return (
    <div>
      <div>
      <h2>Bienvenido, aqui podras hacer tus reservaciones</h2>
      <br />
      <h2>Reserva Hora, Mesa y Dia</h2>
      <br />
      <h3>Agregue la Hora</h3>
      <label htmlFor="">Hora</label>
      <input type="text" />
      <br />
      <h3>Agregue el numero de mesa</h3>
      <label htmlFor="">Mesa</label>
      <input type="number" />
      <br />
      <h3>Agregue el dia que la va a reservar</h3>
      <label htmlFor="">Dia</label>
      <input type="number" />
      </div>
    </div>
  )
}

export default Reservaciones
