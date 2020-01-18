import React from 'react'
// Styles
import styled from 'styled-components'
import GlobalStyles from '../ui/global-styles'
import Theme from '../ui/theme'
// Nav
import NavBar from '../nav/navbar'
// UI
import Footer from '../ui/footer'


const Container = styled.div`
    margin: 0 auto;
    padding-top: 10vh;
    max-width: 90rem;
    display: flex;
    flex-direction: column;
`

const StyledMain = styled.main`

`

export default ({ children }) => (
    // SEO, NavBar
    <Theme>
        <NavBar />
        <Container>
            <GlobalStyles />
            <StyledMain>{children}</StyledMain>
        </Container>
    </Theme>
)