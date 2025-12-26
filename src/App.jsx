import { Cadastro } from "./views/cadastro";

function App() {
  const validar = (e) =>{
    e.preventDefault()
  }
  return (
    
    <div class="container">
      <h1>Hello</h1>
      <Cadastro />
    </div>
  );
}

export default App
