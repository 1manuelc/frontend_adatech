/* eslint-disable react/prop-types */
import { useState } from "react"
import "../assets/meuContador.css"

export default function MeuContador(props) {
  const [contador, setContador] = useState(0);

  function aumentar() { setContador(contador + props.intervalo) }
  function diminuir() { setContador(contador - props.intervalo) }

  return (
    <div className="container-contador">
      <h1>Meu contador ({props.intervalo})</h1>
      <button onClick={diminuir}>-</button>
      <h3>{contador}</h3>
      <button onClick={aumentar}>+</button>
    </div>
  )
}