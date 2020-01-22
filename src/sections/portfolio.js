import React from 'react'
import styled from 'styled-components'
// Layout
import Wrapper from '../components/layout/wrapper'
// UI
import Heading from '../components/ui/heading'
// Content
import PortfolioItem from '../templates/portfolio-item'

const Portfolio = () => {
    return (
        <Wrapper id="portfolio-section">
            <Heading title='"portfolio"' subtitle="Let’s see what I’ve been up to lately." />
            <PortfolioItem />
        </Wrapper>
    )
}

export default Portfolio