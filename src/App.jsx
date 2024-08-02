import { Cadastro } from "./views/cadastro";

function App() {
  const validar = (e) =>{
    e.preventDefault()
  }
  return (
    <div class="container">
      <Cadastro />
    </div>
  );
}

export default App
