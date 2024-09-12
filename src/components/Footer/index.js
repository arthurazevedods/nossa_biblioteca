import './Footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='redes'>
                <img src='./imagens/yt.png' alt='youtube'></img>
                <img src='./imagens/ig.png' alt='instagram'></img>
                <img src='./imagens/linkedin.png' alt='linkedin'></img>
            </div>
            <div className='logo'>
                <img src='./imagens/logo.png' alt='logo'></img>
            </div>
                
            <div className='desenvolvido'>
                <span>Desenvolvido por Arthur</span>
            </div>
        </section>
    )
}

export default Footer