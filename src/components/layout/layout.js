import React from 'react'
import styled from 'styled-components'
// Header and Footer
import Header from './header'
import Footer from './footer'
const Layout = styled.div`
    margin: 1rem auto;
    max-width: 70rem;
    display: flex;
    flex-direction: column;
`

export default ({ children }) => (
    <Layout>
            <Header title="Home" subtitle="I'm André">
                <p>An ambitious, naturally curious Software Engineer!</p>
            </Header>

            <div>{children}</div>

            <Footer />
    </Layout>
)