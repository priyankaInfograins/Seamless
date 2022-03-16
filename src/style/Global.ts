import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: radial-gradient(circle farthest-side, rgb(175, 238, 238), black);


    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
