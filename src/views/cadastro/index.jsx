import './style.css'

export function Cadastro(){
    return(
        <div className="container">
            <header>

                <img width={100} src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/65aedab4ffec87abe59955410c466827/Derivates/675a147a461bdaf37aaa3e2e9743d5b0062ee735.jpg" alt="" />
                
                <div>
                    <h1>Café</h1>
                    <h3>O melhor café da região, e açai</h3>
                </div>

            </header>

            <h2>Acaí</h2>
            <section className='videos'>
                <iframe 
                    width="180" 
                    height="180" 
                    frameborder="0" 
                    title="YouTube video player" 
                    src="https://www.youtube.com/embed/H_bMsjO-fZM?si=z3hRMtHcP4nmDoMT" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>

                <iframe 
                    width="180" 
                    height="180" 
                    frameborder="0" 
                    title="YouTube video player" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    src="https://www.youtube.com/embed/esmjbl716Hg?si=mKUbhLwr7Q4S8hwd" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>

                <iframe width="180" height="180" src="https://www.youtube.com/embed/D7knnVlLVgc?si=uxvxRRSwp7jqCP70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>

            <section>
                <h2></h2>
            </section>

            <section>
                
            </section>
        </div>
    )
}