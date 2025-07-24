import ContatoForm from './components/ContatoForm/ContatoForm'
import ListaContatos from './components/ListaContatos/ListaContatos'
import GlobalStyle, { Container } from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Lista de Contatos</h1>
        <ContatoForm />
        <ListaContatos />
      </Container>
    </>
  )
}

export default App
