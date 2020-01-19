import React from 'react'
import styled from 'styled-components'
import Heading from '../components/ui/heading'

const AboutWrapper = styled.div`
    min-height: 100vh;
    padding-top: 10vh;
`

const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Banner = styled.img`
    min-height: 100%;
`

// TODO: Add Banner, AboutText,

const About = () => {
    return (
        <AboutWrapper>
            <Heading 
                title='"about me"' 
                subtitle="So you do want to know more about me, that's wonderful!" />
            <AboutContainer>
            </AboutContainer>
        </AboutWrapper>
    )
}

export default About