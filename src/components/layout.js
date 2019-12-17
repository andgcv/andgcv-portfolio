import React from 'react'
// Header and Footer
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Header title="Home" subtitle="I'm André">
                <p>An ambitious, naturally curious Software Engineer!</p>
            </Header>

            <div>{children}</div>

            <Footer />
        </div>
    )
}

export default Layout