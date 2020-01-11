import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        deepDarkBlue: "#282c37",
        desaturatedSkyBlue: "#9baec8",
        lightSkyBlue: "#d9e1e8",
        vibrantBlue: "#2b90d9"
    },
    fonts: ['Roboto Mono', 'monospace']
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme