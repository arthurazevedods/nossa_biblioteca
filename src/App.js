import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react'
import Estante from './components/Estante';
import Footer from './components/Footer';

const App = () => {

  //Não vai ser useState por ser estático
  //Não tem como alterar essa lista no momento
  const estantes = [
    {
      nome: '1',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: '2',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: '3',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: '4',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: '5',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: '6',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: '7',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [livros, setLivros] = useState([])
  const aoNovoLivroAdicionar = (livro) => {
    //espalha os antigos livros e adiciona o novo no final
    setLivros([...livros, livro])
  }
  return (
    <div className="App">
      <Banner />
      <Form estantes={estantes.map(estante => estante.nome)} aoLivroCadastrado={livro => aoNovoLivroAdicionar(livro)} />
      {estantes.map(
        estante => <Estante
          key={estante.nome}
          nome={estante.nome}
          corPrimaria={estante.corPrimaria}
          corSecundaria={estante.corSecundaria}
          livros={livros.filter(livro => livro.estante === estante.nome)}
        />
      )}

      <Footer/>
    </div>
  );
}

export default App;
