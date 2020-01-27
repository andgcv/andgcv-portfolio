import React from 'react'
import styled from 'styled-components'
// Layout
import Wrapper from '../components/layout/wrapper'
// UI
import Heading from '../components/ui/heading'
import Button from '../components/ui/button'
import { faEnvelope, faCode, faUserTie, faBookOpen,  } from '@fortawesome/free-solid-svg-icons'

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & p {
        font-size 1.3rem;
        text-align: center;
        color: ${props => props.theme.colors.desaturatedSkyBlue};
        margin-bottom: 7vh;
    }
`

const SocialsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 7vh;

    & button {
        margin: 0 2vw 0 2vw;
    }
`

// TODO: Redirect email button to send email to my address
const Contact = () => {
    return (
        <Wrapper id="contact-section">
            <Heading
                title="contact"
                subtitle="Interested in getting to know me a little better?"
            />
            <ContactContainer>
                <p>Perhaps you have an offer that I just cannot refuse!
                <br/>If that's the case, do throw me an email or connect with me on one of my social medias:</p>
                <Button destination="" text="send me an email!" icon={faEnvelope} />
                <SocialsContainer>
                    <Button destination="https://github.com/andgcv" text="github" icon={faCode} />
                    <Button destination="https://www.linkedin.com/in/andgcv/" text="linkedin" icon={faUserTie} />
                    <Button destination="https://www.goodreads.com/andgcv" text="goodreads" icon={faBookOpen} />
                </SocialsContainer>
            </ContactContainer>
        </Wrapper>
    )
}

export default Contact