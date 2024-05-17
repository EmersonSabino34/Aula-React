import { useState } from "react"

function App() {
  // Definindo as variaveis
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")

  return (
    <div className="container">

      <h2 className="text-center">Aula React</h2>

      <div>
        {/* Iputs que colocam um valor na variavel */}
        <input className="form-control mt-2 mb-2" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input className="form-control" type="text" placeholder="Nome" value={sobrenome} onChange={(event) => setSobrenome(event.target.value)} />
      </div>

        {/* Mostrando os valores */}
      <p className="text-center">Nome: {nome}  Sobrenome: {sobrenome} </p>
    </div>
  )
}

export default App
