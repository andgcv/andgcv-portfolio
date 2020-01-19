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
    min-width: 12vw;
    min-height: 8vh;
    width: 12vw;
    height: 8vh;
    font-family: ${props => props.theme.fonts[0]};
    font-weight: 500;
    font-size: 1.4rem;
    padding: 0.25vh 1vw;
    cursor: pointer;
    border: none;
    box-shadow: 5px 5px ${props => props.theme.colors.lightSkyBlue};
`

const Button = (props) => {
    return (
        <Link to={props.target} smooth={true} spy={true}>
            <StyledButton >
                <FontAwesomeIcon icon={props.icon} style={{marginRight: 1 + 'vw'}} />
                {props.text}
            </StyledButton>
        </Link>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    target: PropTypes.string
}

Button.defaultProps = {
    text: "button"
}

export default Button