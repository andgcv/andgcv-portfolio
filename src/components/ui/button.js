import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
    border: none;
    box-shadow: 5px 5px ${props => props.theme.colors.lightSkyBlue};
`

// TODO: Will take in text (required) and an optional icon
const Button = (props) => {
    return (
        <StyledButton >
            <FontAwesomeIcon icon={props.icon} style={{marginRight: 0.5 + 'vw'}} />
            {props.text}
        </StyledButton>
    )
}

/*Button.propTypes = {
    text: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string
}*/

export default Button