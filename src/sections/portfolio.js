import React from 'react'
import styled from 'styled-components'
// Layout
import Wrapper from '../components/layout/wrapper'
// UI
import Heading from '../components/ui/heading'
import MyWebsite from '../images/portfolio-items/my-website.jpg'
// Content
import PortfolioItem from '../templates/portfolio-item'

const Portfolio = () => {
    return (
        <Wrapper id="portfolio-section">
            <Heading title='"portfolio"' subtitle="Let’s see what I’ve been up to lately." />
            <PortfolioItem />
            <PortfolioItem 
                title='"Web Application”: "Andgcv Portfolio"' 
                imgSrc={MyWebsite}
                description="This exact web application! My personal website where you can connect with me, get to know me a little better and see what I’ve been up to lately! I wanted something easy to use, easy to maintain and with good SEO, and considering the fact that I had previous experience with React, Gatsby seemed like a great fit!"
                techStack="React - Gatsby - Styled-components - Git"
                noVisit
                sourceDestination="https://github.com/andgcv/andgcv-portfolio#readme"
            />
        </Wrapper>
    )
}

export default Portfolio