import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Contato = {
  id: string
  nome: string
  email: string
  telefone: string
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [] as Contato[],
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      state.push(action.payload)
    },
    remover: (state, action: PayloadAction<string>) => {
      return state.filter((c) => c.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const i = state.findIndex((c) => c.id === action.payload.id)
      if (i >= 0) state[i] = action.payload
    }
  }
})

export const { adicionar, remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
