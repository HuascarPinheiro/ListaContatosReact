import styled from 'styled-components'

export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Item = styled.li`
  background: #f1f3f5;
  padding: 16px;
  border-radius: 6px;
`

export const Acoes = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
`

export const Input = styled.input`
  margin-bottom: 8px;
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Botao = styled.button`
  background: #0d6efd;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;

  &:hover {
    background: #084cd1;
  }

  &.remover {
    background: #dc3545;

    &:hover {
      background: #a71d2a;
    }
  }

  &.cancelar {
    background: #6c757d;

    &:hover {
      background: #4f565e;
    }
  }
`
