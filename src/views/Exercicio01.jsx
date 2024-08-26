export function Exercicio01(){
    return(
        <div className="container">
             <div className="
        py-5 
        rounded
        container 
        bg-warning
      ">
        <h1 className="text-white mb-5"> App React </h1>

        <div className="d-flex flex-column p-5 bg-white gap-3 rounded">
            <p className="fs-2 fw-bold text-white bg-primary p-3 text-center rounded">Form 1</p>
            
            <input type="text" className='p-3 rounded' placeholder='nome' />
            <div className="d-flex gap-3">
              <button className="btn btn-outline-success fs-6 fw-bold">Cadastrar</button>
              <button className="btn btn-outline-warning fs-6 fw-bold">Editar</button>
              <button className="btn btn-outline-danger fs-6 fw-bold">Excluir</button>
            </div>
        </div>

       <div className='d-flex flex-column p-5 bg-white gap-3 rounded'>
        <p className='fs-2 fw-bold text-white bg-primary p-3 text-center rounded'>Form 2</p>
        <input type="text" className='p-3 rounded' placeholder='nome' />
        <div className='d-flex gap-3'>
          <button className='btn btn-outline-success fs-6 fw-bold'>Cadastrar</button>
          <button className='btn btn-outline-warning fs-6 fw-bold'>Editar</button>
          <button className='btn btn-outline-danger fs-6 fw-bold'>Excluir</button>
        </div>


       </div>
        
      </div>
        </div>
    )
}