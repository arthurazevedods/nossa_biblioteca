import Member from '../Member'
import './Estante.css'

const Estante = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    return (
        
        props.livros.length > 0 ? <section className='estante' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='livros'>
                {props.livros.map( livro => 
                    <Member 
                    key={livro.nome}
                    corDeFundo={props.corPrimaria}
                    nome={livro.nome} 
                    autor={livro.autor} 
                    imagem={livro.imagem}
                />
                )}
            </div>
        </section>
        : ''
        
    )
}

export default Estante