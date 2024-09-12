import './Member.css'

const Member = ({nome,imagem,autor, corDeFundo}) =>{
    return(
        <div className='autor'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{autor}</h5>
            </div>
        </div>
    )
}

export default Member