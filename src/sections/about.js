import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// Layout
import Wrapper from "../components/layout/wrapper"
// UI
import Heading from "../components/ui/heading"
import Button from "../components/ui/button"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"

const AboutContainer = styled.div`
  padding-top: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 80vw;

  @media (max-width: 562px) {
    width: 90vw;
  }
`

const Banner = styled(Img)`
  max-height: 650px;
  width: 15vw;
  border: none;
  box-shadow: 5px 5px ${(props) => props.theme.colors.lightSkyBlue};

  @media (max-width: 562px) {
    display: none;
  }
`

const AboutTextContainer = styled.div`
  margin: 0;
  padding-left: 5vw;
  min-width: 60vw;
  width: 60vw;
  font-size: 1rem;
  text-align: justify;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.desaturatedSkyBlue};

  & p {
    margin-top: 0;
  }

  & span {
    color: ${(props) => props.theme.colors.lightSkyBlue};
  }

  & a {
    text-decoration: underline;
    transition: color 0.2s ease-in-out;
    color: ${(props) => props.theme.colors.vibrantBlue};

    & :hover {
      color: ${(props) => props.theme.colors.lightSkyBlue};
    }
  }

  @media (max-width: 562px) {
    width: 90vw;
    padding-left: 0;
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

const About = () => {
  const { site, aboutBanner } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
        aboutBanner: file(name: { eq: "me-banner" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <Wrapper id="about-section">
      <Heading
        title="about me"
        subtitle="Oh! You do want to know more about me, that's wonderful!"
      />
      <AboutContainer>
        <Banner
          fluid={aboutBanner.childImageSharp.fluid}
          title="Yours truly, André Gonçalves"
        />
        <AboutTextContainer>
          <p>
            I’m <span>André Gonçalves</span>, a Software Engineer based in
            Lisbon, Portugal.
          </p>
          <p>
            For the longest time, I was a kid with no ambitions or aspirations.
            Although I have always been a cheerful person, I had no vision of
            what I wanted to do or become in the future, I settled for mediocre
            grades and had no intentions of pushing myself to become the best
            version I could be. In other words,{" "}
            <span>all I sought was comfort</span>. But then, something clicked.
          </p>
          <p>
            During the early stages of my Bachelor’s Degree in Multimedia
            Engineering, I suddenly found myself struggling to build the
            projects required to pass a class in Web Application Development.
            Although I had previous experience with programming through my
            Associate’s Degree in Multimedia Product Development, I had never
            tried to learn beyond what was required to achieve mediocre grades,
            as previously mentioned.
          </p>
          <p>
            I had never failed a class, and{" "}
            <span>I was not willing to let it happen now</span>, so I decided to
            take desperate measures. I blocked myself from any kind of
            distraction, bought{" "}
            <a
              href="https://www.udemy.com/course/the-complete-web-developer-course-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Complete Web Developer Course 2.0
            </a>{" "}
            online course (along with 2 other courses for distinct classes) and
            for the next few weeks, during my Winter break, I spent countless
            hours each day improving upon this skill and knocking down the
            required projects. I ended up scoring a <span>19/20</span> for this
            class.
          </p>
          <p>
            This was the tipping point for me, the more I learned about
            programming, <span>the more I enjoyed learning about it</span>. I
            loved this feeling of improvement, so I started to crave it in all
            the other aspects of my life. All of a sudden, I started buying and
            undertaking more and more online courses on various subjects, I
            started reading books and listening to audiobooks, employing healthy
            habits throughout my days and exploring other interests such as
            photography, music and fashion.
          </p>
          <p>
            Going forward, I expect to continue building upon these traits and
            habits, always focused on improving and being the best version of
            myself on a daily basis, as I firmly believe this is the path to a
            successful and fulfilling life.{" "}
            <span>I’m not going to stop reaching for my goals</span>, no matter
            how difficult or farfetched they may seem, and I hope you don’t stop
            reaching for yours as well.
          </p>
        </AboutTextContainer>
      </AboutContainer>
      <AboutResumesContainer>
        <Button
          small
          destination={`${site.siteMetadata.siteUrl}/en-resume.pdf`}
          text="en resume"
          icon={faFileAlt}
        />
      </AboutResumesContainer>
    </Wrapper>
  )
}

export default About
