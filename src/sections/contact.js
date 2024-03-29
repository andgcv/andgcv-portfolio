import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
// Layout
import Wrapper from "../components/layout/wrapper"
// UI
import Heading from "../components/ui/heading"
import Button from "../components/ui/button"
import {
  faEnvelope,
  faCode,
  faUserTie,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons"

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & p {
        font-size 1.3rem;
        text-align: center;
        color: ${(props) => props.theme.colors.desaturatedSkyBlue};
        margin-bottom: 7vh;

        @media (max-width: 562px) {
            font-size: 1.1rem;
        }

        @media (max-width: 360px) {
            font-size: 1rem;
            text-align: justify;
            text-justify: inter-word;
        }
    }
`

const SocialsContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4vh;

  & button {
    margin: 0 1vw 0 1vw;
  }
`

const Contact = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              email
              github
              linkedin
              goodreads
            }
          }
        }
      }
    `
  )

  return (
    <Wrapper contact>
      <Heading
        title="contact"
        subtitle="Interested in getting to know me a little better?"
      />
      <ContactContainer>
        <p>
          Perhaps you have an offer that I just cannot refuse!
          <br />
          If that's the case, do throw me an email or connect with me on one of
          my social medias:
        </p>
        <Button
          big
          destination={`mailto:${site.siteMetadata.social.email}`}
          text={site.siteMetadata.social.email}
          icon={faEnvelope}
        />
        <SocialsContainer>
          <Button
            small
            destination={`https://github.com/${site.siteMetadata.social.github}`}
            text="github"
            icon={faCode}
          />
          <Button
            small
            destination={`https://www.linkedin.com/in/${site.siteMetadata.social.linkedin}/`}
            text="linkedin"
            icon={faUserTie}
          />
          <Button
            small
            destination={`https://www.goodreads.com/${site.siteMetadata.social.goodreads}`}
            text="goodreads"
            icon={faBookOpen}
          />
        </SocialsContainer>
      </ContactContainer>
    </Wrapper>
  )
}

export default Contact
