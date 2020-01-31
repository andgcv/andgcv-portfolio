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
    width: 220px;
    height: 80px;
    font-family: ${props => props.theme.fonts[0]};
    font-weight: 500;
    font-size: 1.4rem;
    padding: 0.25vh 1vw;
    cursor: pointer;
    border: none;
    box-shadow: 5px 5px ${props => props.theme.colors.lightSkyBlue};
`

const EmailButton = styled(StyledButton)`
    margin: 0 2vw 0 2vw;
    width: 56vw !important;
`

const Button = (props) => {
    // If the Button's goal is a scroll to another section, then return a scroll link
    if (props.scroll) {
        return (
            <Link to={props.destination} smooth={true} spy={true}>
                <StyledButton >
                    <FontAwesomeIcon icon={props.icon} style={{marginRight: 1 + 'vw'}} />
                    {props.text}
                </StyledButton>
            </Link>
        )
    // If it's referring to the email button, return custom property values;
    } else if (props.email) {
        return (
            <a href={props.destination} target="_blank" rel="noopener noreferrer">
                <EmailButton >
                    <FontAwesomeIcon icon={props.icon} style={{marginRight: 1 + 'vw'}} />
                    {props.text}
                </EmailButton>
            </a>
        )
    // If the Button's goal is a link to a file or external sources, return an <a> Button
    } else {
        return (
            <a href={props.destination} target="_blank" rel="noopener noreferrer">
                <StyledButton >
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