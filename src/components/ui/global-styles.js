import { createGlobalStyle as GlobalStyle } from 'styled-components'
import Theme from './theme'

export default GlobalStyle`
    body {
        background-color: ${props => props.theme.colors.deepDarkBlue};
    }
`