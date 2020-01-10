import React from 'react'
// Styles
import styled from 'styled-components'
import GlobalStyles from '../ui/global-styles'
import Theme from '../ui/theme'
// UI
import Footer from '../ui/footer'


const Container = styled.div`
    margin: 1rem auto;
    max-width: 70rem;
    display: flex;
    flex-direction: column;
`

const StyledMain = styled.main`
    
`

export default ({ children }) => (
    //ThemeProvider, SEO, NavBar
    <Theme>
        <Container>
                <StyledMain>{children}</StyledMain>
                <GlobalStyles />
        </Container>
    </Theme>
)