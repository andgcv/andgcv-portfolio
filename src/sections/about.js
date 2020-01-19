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
    min-width: 10vw;
    width: 20vw;
    box-shadow: 5px 5px ${props => props.theme.colors.lightSkyBlue};
`

const AboutTextContainer = styled.p`
    min-height: 100%;
    min-width: 60vw;
    width: 60vw;
    color: ${props => props.theme.colors.lightSkyBlue};
`

// TODO: Add Banner, AboutText,

const About = () => {
    return (
        <AboutWrapper>
            <Heading 
                title='"about me"' 
                subtitle="So you do want to know more about me, that's wonderful!" />
            <AboutContainer>
                <Banner src="../images/me-1.jpeg" alt="Photo of the website's owner" />
                <AboutTextContainer>

                </AboutTextContainer>
            </AboutContainer>
        </AboutWrapper>
    )
}

export default About