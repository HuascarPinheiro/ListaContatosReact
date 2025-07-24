import { useDispatch, useSelector } from 'react-redux'
import { editar, remover, Contato } from '../../store/contatosSlice'
import * as S from './styles'
import { RootState } from '../../store'
import { useState } from 'react'

const ListaContatos = () => {
  const contatos = useSelector((state: RootState) => state.contatos)
  const dispatch = useDispatch()

  const [editandoId, setEditandoId] = useState<string | null>(null)
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' })

  const iniciarEdicao = (contato: Contato) => {
    setEditandoId(contato.id)
    setForm({
      nome: contato.nome,
      email: contato.email,
      telefone: contato.telefone
    })
  }

  const salvarEdicao = () => {
    if (!editandoId) return
    dispatch(editar({ id: editandoId, ...form }))
    setEditandoId(null)
    setForm({ nome: '', email: '', telefone: '' })
  }

  return (
    <S.Lista>
      {contatos.map((contato) => (
        <S.Item key={contato.id}>
          {editandoId === contato.id ? (
            <>
              <S.Input
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
              />
              <S.Input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <S.Input
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              />
              <S.Acoes>
                <S.Botao onClick={salvarEdicao}>Salvar</S.Botao>
                <S.Botao
                  className="cancelar"
                  onClick={() => setEditandoId(null)}
                >
                  Cancelar
                </S.Botao>
              </S.Acoes>
            </>
          ) : (
            <>
              <strong>{contato.nome}</strong>
              <br />
              {contato.email} | {contato.telefone}
              <S.Acoes>
                <S.Botao onClick={() => iniciarEdicao(contato)}>Editar</S.Botao>
                <S.Botao
                  className="remover"
                  onClick={() => dispatch(remover(contato.id))}
                >
                  Remover
                </S.Botao>
              </S.Acoes>
            </>
          )}
        </S.Item>
      ))}
    </S.Lista>
  )
}

export default ListaContatos
