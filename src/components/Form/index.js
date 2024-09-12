import './Form.css'
import TextField from '../TextField'
import Dropdown from '../Dropdown'
import CustomButton from '../CustomButton'
import { useState } from 'react'


const Form = (props) => {

    

    //hooks
    const [nome, setNome] = useState('')
    const [autor, setAutor] = useState('')
    const [imagem, setImagem] = useState('')
    const [estante, setEstante] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoLivroCadastrado({
            nome,
            autor,
            imagem,
            estante
        })
        setNome('')
        setAutor('')
        setImagem('')
        setEstante('')
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o Card do Livro.</h2>
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o Nome" 
                    valor={nome}
                    aoAlterado={valor =>setNome(valor)}
                />
                <TextField 
                    obrigatorio={true} 
                    label="Autor" 
                    placeholder="Digite o autor" 
                    valor={autor}
                    aoAlterado={valor =>setAutor(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor =>setImagem(valor)}

                />
                <Dropdown 
                    obrigatorio={true}
                    label='Estante' 
                    itens={props.estantes} 
                    valor={estante}
                    aoAlterado={valor =>setEstante(valor)}
                />
                <CustomButton>
                    Criar Card
                </CustomButton>
            </form>
        </section>
    )
}

export default Form