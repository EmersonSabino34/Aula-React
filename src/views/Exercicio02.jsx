export function Exercicio02(){
    return(
        <div className="containe-fluid mt-3">
            <div className="py-5 rounded container bg-info">
                 
                <form>
                    <div className="containe bg-success py-4 d-flex justify-content-center mb-5 rounded">
                        <h1 className="text-white"> App React 02 </h1>
                    </div>

                    <div className="row">
                        <div className="col-8">
                            <input type="text"  className="form-control p-4" placeholder="Nome do produto" />
                        </div>
                        <div className="col">
                            <input type="date" className="form-control p-4" />
                        </div>
                        <div className="col">
                            <input type="number"  className="form-control p-3" placeholder="QTD" />
                        </div>
                        <div className="col">
                            <input type="number"  className="form-control p-3" placeholder="R$ 0,00" />
                        </div>
                    </div>

                    <div className="d-flex gap-3 mt-3">
                        <button className="btn btn-outline-success text-white fw-bold fs-5">Cadastrar</button>
                        <button className="btn btn-outline-warning text-white fw-bold fs-5">Editar</button>
                        <button className="btn btn-outline-danger  text-white fw-bold fs-5">Excluir</button>
                    </div>
                </form>
            </div>
        </div>
    )
}