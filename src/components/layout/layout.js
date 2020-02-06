import React from 'react'
// Styles
import styled from 'styled-components'
import GlobalStyles from '../ui/global-styles'
import Theme from '../ui/theme'
// Nav
import NavBar from './nav/navbar'
// UI
import Footer from '../ui/footer'
// SEO
import SEO from '../../utils/seo'


const Container = styled.div`
    margin: 0 auto;
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    @media (max-width: 562px) {
        max-width: 90vw;
    }
`

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
`

export default ({ children }) => (
    <Theme>
        <SEO />
        <NavBar />
        <Container>
            <GlobalStyles />
            <StyledMain>{children}</StyledMain>
            <Footer />
        </Container>
    </Theme>
)