### 1. Como criar um projeto NodeJS
    * AngularJS
    * ReactJS ( web responsive )
    * React Expo
    * React Native
    * VUEJS
    * NextJS Baseado em ReactJS ( web responsive )
    * Nutx

### 2. Link
    https://www.youtube.com/watch?v=tUQDzI26TLo

### 3. Criando o projeto
    ```
    npm create vite@latest
    ```
    * entrar na pasta do projeto cd nomeProjeto
    * voltar um diretório cd ..
    * npm i

### 4. Rodando o projeto
    npm run dev

### 5. Limpando o projeto
```
    function App(){
        return (
            <>
                <h1>Aula 01 ReactJS</h1>
            </>
        )
    }
    export default App;
```

### 6. Comandos git
    * git init
    * git add .
    * cola os comandos do repositorio
```
https://github.com/srodrigo28/aula-start-react.git
```

### 7. usar o git clone
    git clone https://github.com/srodrigo28/aula-start-react.git

### 8. Bootstrap 5.3
    * CDNs
``` Javascript Bootstrap
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js" ></script>
```

```Bootstrap CSS   
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap-grid.min.css" />
```

### 9. Hooks React
    * useState ( aula de hoje )
    * 10

### 10. Exemplo React com useState
```
import { useState } from "react";

function App(){

  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  return (
    <>
      <h1>Aula 01 ReactJS</h1>

      <div>
        <input type="text" placeholder="nome" value={nome} onChange={ (e) =>  setNome(e.target.value)} />
        <input type="text" value={sobreNome} onChange={ (e) =>  setSobreNome(e.target.value)} />
        <p>{nome} {sobreNome}</p>
      </div>
    </>
  )
}
export default App;
```

### 11. json-server
    ```
    npm i json-server
    ```
    * dentro das script {}

    ``` package json
        "api": " json-server --watch ./src/dados.json --port 8080 ",
    ```