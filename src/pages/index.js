import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
    return (
        <div>
            <Header
                title="Home"
                subtitle="I'm André"
            />

            <p>An ambitious, hands-on Back-end Engineer!</p>

            <Footer />
        </div>
    )
}

export default IndexPage