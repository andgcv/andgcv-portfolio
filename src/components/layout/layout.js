import React from 'react'
import styled from 'styled-components'
import Footer from '../ui/footer'

// Global Styles
import GlobalStyles from '../ui/global-styles'

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

    <Container>
            <StyledMain>{children}</StyledMain>
            <GlobalStyles />
    </Container>
)