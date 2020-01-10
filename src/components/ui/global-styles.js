import { createGlobalStyle as GlobalStyle } from 'styled-components'

export default GlobalStyle`
    body {
        background-color: ${props => props.theme.colors.deepDarkBlue};
    }
`