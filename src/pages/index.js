import React from 'react'
// Layout
import Layout from '../components/layout/layout'
// Sections
import Home from '../sections/home'
import About from '../sections/about'
import Portfolio from '../sections/portfolio'
import Interests from '../sections/interests'
import Contacts from '../sections/contact'

const IndexPage = () => {
    return (
        <Layout>
            <p>Hi!</p>
            <About />
        </Layout>
    )
}

export default IndexPage