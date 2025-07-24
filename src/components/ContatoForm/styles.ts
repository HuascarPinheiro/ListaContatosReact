import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`

export const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #0d6efd;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  transition: background 0.3s;
  &:hover {
    background-color: #084cd1;
  }
`
