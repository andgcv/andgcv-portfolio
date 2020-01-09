import React from 'react'
import styled from 'styled-components'
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

    <Container>
            <StyledMain>{children}</StyledMain>
            <Footer />
    </Container>
)