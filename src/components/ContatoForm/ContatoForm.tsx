import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { adicionar } from '../../store/contatosSlice'
import * as S from './styles'
import { v4 as uuidv4 } from 'uuid'

const ContatoForm = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(adicionar({ id: uuidv4(), nome, email, telefone }))
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
        required
      />
      <S.Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <S.Input
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        placeholder="Telefone"
        required
      />
      <S.Button type="submit">Adicionar</S.Button>
    </S.Form>
  )
}

export default ContatoForm
