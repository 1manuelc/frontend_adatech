import { useState, useEffect } from "react"

const minhaLista = [
  { id: 1, value: "Macarrão" },
  { id: 2, value: "Arroz" },
  { id: 3, value: "Feijão" }
]

export default function MinhaLista() {
  const [produtos, setProdutos] = useState(minhaLista)
  const [pesquisa, setPesquisa] = useState('')

  useEffect(() => {
    if (pesquisa) {
      const novaLista = minhaLista.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase())
      })
      setProdutos(novaLista)
    } else {
      setProdutos(minhaLista)
    }
  }, [pesquisa])

  return (
    <div>
      <h1>Efeitos colaterais</h1>
      <label htmlFor="campo-pesquisa">Pesquisa: </label>
      <input
        id="campo-pesquisa"
        type="text"
        placeholder="pesquise aqui"
        value={pesquisa}
        onChange={(evento) => setPesquisa(evento.target.value)}
      />
      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}
    </div>
  )
}