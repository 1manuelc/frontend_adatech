/* eslint-disable react/prop-types */
import { useState } from "react"
import styles from "../assets/contador.module.css"

export default function MeuContador(props) {
  const [contador, setContador] = useState(0);

  function aumentar() { setContador(contador + props.intervalo) }
  function diminuir() { setContador(contador - props.intervalo) }

  if (contador >= 30) {
    return (
      <div className={styles.containerContador}>
        <h1>Meu contador ({props.intervalo})</h1>
        <button onClick={diminuir}>-</button>
        <h3>{contador}</h3>
        <button onClick={aumentar}>+</button>
        <p>Valor extremamente alto!</p>
      </div>
    )
  }

  return (
    <div className={styles.containerContador}>
      <h1>Meu contador ({props.intervalo})</h1>
      <button onClick={diminuir}>-</button>
      <h3>{contador}</h3>
      <button onClick={aumentar}>+</button>

      {contador >= 10 ? <p>Valor muito alto</p> : null}
      {contador <= 0 ? <p>Valor muito baixo</p> : null}
    </div>
  )
}