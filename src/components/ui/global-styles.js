import { createGlobalStyle as GlobalStyle } from 'styled-components'

export default GlobalStyle`
    html {
        font-size: 62.5%; //1rem = 10px
        box-sizing: border-box;
        line-height: 1.15;
    }

    body {
        background-color: ${props => props.theme.colors.deepDarkBlue};
        font-family: 'Roboto Mono', 'monospace', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', '!default';
    }
`