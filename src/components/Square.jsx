import React from 'react'

const Square = ({ index, item, turno, guardarJugada }) => {
  const colocarFicha = () => {
    guardarJugada(index, turno)
  }

  return (
    <div
      style={{
        fontSize: '40px',
        width: '100px',
        height: '100px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={colocarFicha}
    >{item}
    </div>
  )
}

export default Square
