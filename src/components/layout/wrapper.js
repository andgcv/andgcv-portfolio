import React from "react"
import styled from "styled-components"
import { animated } from "react-spring"

const SectionWrapper = styled(animated.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const HomeWrapper = styled(SectionWrapper)`
  padding-left: 5vw;
  justify-content: center;

  @media (max-width: 928px) {
    margin-top: 5vh;
    justify-content: start;
  }
`

const ContactWrapper = styled(SectionWrapper)`
  min-height: 90vh !important;
`

const NotFoundWrapper = styled(SectionWrapper)`
  justify-content: center;
  align-items: center;
`

const Wrapper = (props) => {
  // If the wrapper is being used in the Home section, serve the <HomeWrapper>
  if (props.home) {
    return (
      <HomeWrapper style={props.style} id="home-section">
        {props.children}
      </HomeWrapper>
    )
    // If the wrapper is being used in the Contact section, serve the <ContactWrapper>
  } else if (props.contact) {
    return (
      <ContactWrapper id="contact-section">{props.children}</ContactWrapper>
    )
    // If the wrapper is being used in the 404 Page, serve the <NotFoundWrapper>
  } else if (props.notFound) {
    return <NotFoundWrapper>{props.children}</NotFoundWrapper>
    // Else, serve the generic <SectionWrapper>
  } else {
    return <SectionWrapper id={props.id}>{props.children}</SectionWrapper>
  }
}

export default Wrapper
