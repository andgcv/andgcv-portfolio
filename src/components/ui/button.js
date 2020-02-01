import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Navigation
import { Link } from 'react-scroll'


/* TODO: 3 Buttons, 1 small, 1 medium, 1 large
   Each of these buttons will have media queries */
const StyledButton = styled.button`
    background-color: ${props => props.theme.colors.vibrantBlue};
    color: ${props => props.theme.colors.lightSkyBlue};
    width: 15vw;
    height: 80px;
    font-family: ${props => props.theme.fonts[0]};
    font-weight: 500;
    font-size: 1.4rem;
    padding: 0.25vh 1vw;
    cursor: pointer;
    border: none;
    box-shadow: 5px 5px ${props => props.theme.colors.lightSkyBlue};

    @media (max-width: 1055px) {
        width: 20vw;
    }

    @media (max-width: 928px) {
        width: 25vw;
    }

    @media (max-width: 562px) {
        width: 30vw;
    }

    ${props => props.isSmall && `
        width: 11vw;
        height: 60px;
        font-size: 1.1rem;

        @media (max-width: 928px) {
            width: 20vw;
            height: 50px;
            font-size: 1rem;
        }

        @media (max-width: 562px) {
            width: 17vw;
            font-size: 0.9rem;
        }
    `}

    ${props => props.isBig && `
        width: 37vw;
        height: 60px;

        @media (max-width: 1055px) {
            width: 64vw;
        }

        @media (max-width: 928px) {
            height: 50px;
            font-size: 1.2rem;
        }

        @media (max-width: 562px) {
            width: 55vw;
            font-size: 1rem;
        }
    `}
`

const Button = (props) => {
    // If the Button's goal is a scroll to another section, then return a scroll link
    if (props.scroll) {
        return (
            <Link to={props.destination} smooth={true} spy={true}>
                <StyledButton isSmall={props.small} isBig={props.big}>
                    <FontAwesomeIcon icon={props.icon} style={{marginRight: 1 + 'vw'}} />
                    {props.text}
                </StyledButton>
            </Link>
        )
    // If it's referring to the email button, return custom property values;
    } else if (props.email) {
        return (
            <a href={props.destination} target="_blank" rel="noopener noreferrer">
                <StyledButton isSmall={props.small} isBig={props.big}>
                    <FontAwesomeIcon icon={props.icon} style={{marginRight: 1 + 'vw'}} />
                    {props.text}
                </StyledButton>
            </a>
        )
    // If the Button's goal is a link to a file or external sources, return an <a> Button
    } else {
        return (
            <a href={props.destination} target="_blank" rel="noopener noreferrer">
                <StyledButton isSmall={props.small} isBig={props.big}>
                    <FontAwesomeIcon icon={props.icon} style={{marginRight: 1 + 'vw'}} />
                    {props.text}
                </StyledButton>
            </a>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    destination: PropTypes.string
}

Button.defaultProps = {
    text: "button"
}

export default Button