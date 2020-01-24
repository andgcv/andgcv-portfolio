import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
// Layout
import Wrapper from '../components/layout/wrapper'
// UI
import Heading from '../components/ui/heading'
import Button from '../components/ui/button'
import bannerPhoto from '../images/me-banner.jpeg'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

const AboutContainer = styled.div`
    padding-top: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Banner = styled.img`
    max-height: 650px;
    width: 15vw;
    object-fit: cover;
    border: none;
    box-shadow: 5px 5px ${props => props.theme.colors.lightSkyBlue};
`

const AboutTextContainer = styled.div`
    margin: 0;
    padding-left: 5vw;
    min-width: 60vw;
    width: 60vw;
    font-size: 1rem;
    text-align: justify;
    text-justify: justify;
    line-height: 1.4;
    color: ${props => props.theme.colors.desaturatedSkyBlue};

    & p {
        margin-top: 0;
    }

    & span {
        color: ${props => props.theme.colors.lightSkyBlue};
    }

    & a {
        text-decoration: underline;
        color: ${props => props.theme.colors.vibrantBlue};

        & :hover {
            color: ${props => props.theme.colors.lightSkyBlue};
        }
    }
`

const AboutResumesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    & button {
        margin: 5vh 2vw;
    }
`

// TODO: Map About text from .md file to paragraphs, make reusable component for text styles maybe

const About = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        siteUrl
                    }
                }
            }
        `
    )

    return (
        <Wrapper id="about-section">
            <Heading 
                title='"about me"' 
                subtitle="So you do want to know more about me, that's wonderful!" />
            <AboutContainer>
                <Banner src={bannerPhoto} alt="Photo of me" />
                <AboutTextContainer>
                    <p>I’m <span>André Gonçalves</span>, a 22 year old Software Engineer from Portugal.</p>
                    <p>For the longest time, I was a kid with no ambitions or aspirations. Although I have always been a cheerful person, I had no vision of what I wanted to do or become in the future, I settled for mediocre grades and had no intentions of pushing myself to become the best version I could be. In other words, <span>all I sought was comfort</span>. But then, something clicked.</p>
                    <p>During the early stages of my Bachelor’s Degree in Multimedia Engineering, I suddenly found myself struggling to build the projects required to pass a class in Web Application Development. Although I had previous experience with programming through my Associate’s Degree in Multimedia Product Development, I had never tried to learn beyond what was required to achieve mediocre grades, as previously mentioned.</p>
                    <p>I had never failed a class, and <span>I was not willing to let it happen now</span>, so I decided to take desperate measures. I blocked myself from any kind of distraction, bought <a href="https://www.udemy.com/course/the-complete-web-developer-course-2/" target="_blank" rel="noopener noreferrer">The Complete Web Developer Course 2.0</a> online course (along with 2 other courses for distinct classes) and for the next few weeks, during my Winter break, I spent countless hours each day improving upon this skill and knocking down the required projects. I ended up scoring a <span>19/20</span> for this class.</p>
                    <p>This was the tipping point for me, the more I learned about programming, <span>the more I enjoyed learning about it</span>. I loved this feeling of improvement, so I started to crave it in all the other aspects of my life. All of a sudden, I started buying and undertaking more and more online courses on various subjects, I started reading books and listening to audiobooks, employing healthy habits throughout my days and exploring other interests such as photography, music and fashion.</p>
                    <p>Going forward, I expect to continue building upon these traits and habits, always focused on improving and being the best version of myself on a daily basis, as I firmly believe this is the path to a successful and fulfilling life. <span>I’m not going to stop reaching for my goals</span>, no matter how difficult or farfetched they may seem, and I hope you don’t stop reaching for yours as well.</p>
                    <p>If you’re interested in what my current tech stack is, I’ve been employing <span>JavaScript</span> (Node.js and frontend) in all of my projects (mostly with Express as the web framework), as well as <span>NoSQL</span> (MongoDB), <span>SQL</span> (MySQL), <span>HTML</span> and <span>CSS</span>. For other tools and technologies, I’m very comfortable with <span>Git</span> and <span>GitHub</span> (worth mentioning that I'm also very passionate about Open Source), and my favourite code editor is <span>Visual Studio Code</span>. Below you can find links to <span>my resume</span>, in both English and Portuguese.</p>
                </AboutTextContainer>
            </AboutContainer>
            <AboutResumesContainer>
                <Button destination={`${site.siteMetadata.siteUrl}/en-resume.pdf`} text="en resume" icon={faFileAlt} />
                <Button destination={`${site.siteMetadata.siteUrl}/pt-resume.pdf`} text="pt resume" icon={faFileAlt} />
            </AboutResumesContainer>
        </Wrapper>
    )
}

export default About