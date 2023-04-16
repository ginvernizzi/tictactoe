import React, { useEffect, useState } from 'react'
import Square from './Square'

export const ficha = {
  O: '🔴',
  X: '❌'
}

const posibilidadesGanador = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8]
]

const initTablero = () => {
  return new Array(9).fill(null)
}

const Tictactoe = () => {
  const [tablero, setTablero] = useState(initTablero)
  const [turno, setTurno] = useState(ficha.O)
  const [win, setWin] = useState(null)

  useEffect(() => {
    revisarTableroGanador()
  }, [tablero])

  const revisarTableroGanador = () => {
    for (const posibilidad in posibilidadesGanador) {
      const [a, b, c] = posibilidadesGanador[posibilidad]

      if ((tablero[a] !== null && tablero[b] !== null && tablero[c] !== null) && (tablero[a] === tablero[b] && tablero[b] === tablero[c])) {
        setWin(tablero[a])
      }
    }

    if (tablero.filter((item) => item === null).length === 0) {
      setWin('Empate')
    }
  }

  const cambiarTurno = () => {
    const calcTurno = turno === ficha.O ? ficha.X : ficha.O
    setTurno(calcTurno)
  }

  const onHandleReset = () => {
    setTablero(initTablero)
    setTurno(ficha.O)
    setWin(null)
  }

  const guardarJugada = (index, turno) => {
    if (tablero[index] === null) {
      const calcJugada = [...tablero]
      calcJugada[index] = turno
      setTablero(calcJugada)
      cambiarTurno()
    }
  }

  if (win !== null) {
    if (win === 'Empate') {
      return (
        <div>
          <h2>Hubo empate, se acabo el juego</h2>
          <button onClick={onHandleReset}>Volver a empezar?</button>
        </div>
      )
    }

    return (
      <div>
        <h2>Hay un winner {win}, se acabo el juego</h2>
        <button onClick={onHandleReset}>Volver a empezar?</button>
      </div>
    )
  }

  return (
    <>
      <header>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignContent: 'center'
          }}
        >
          {tablero.map((item, index) => {
            return (
              <Square
                key={index}
                index={index}
                item={item}
                turno={turno}
                cambiarTurno={cambiarTurno}
                guardarJugada={guardarJugada}
              />
            )
          })}
        </div>
      </header>
      <footer>
        <h2>Turno jugador: {turno}</h2>
      </footer>
    </>
  )
}
export default Tictactoe
