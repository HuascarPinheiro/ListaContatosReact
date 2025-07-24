import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #f8f9fa;
    color: #333;
    padding: 40px;
  }

  button {
    cursor: pointer;
  }
`

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: #ffffff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`
