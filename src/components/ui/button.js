import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/* TODO: 3 Buttons, 1 small, 1 medium, 1 large
   Each of these buttons will have media queries */
const StyledButton = styled.button`
    background-color: ${props => props.theme.colors.vibrantBlue};
    color: ${props => props.theme.colors.lightSkyBlue};
    min-width: 25vh;
    min-height: 8vh;
    width: 25vh;
    height: 8vh;
    font-family: ${props => props.theme.fonts[0]};
    font-weight: 500;
    font-size: 2em;
    padding: 0.25em 1em;
    border: none;
    box-shadow: 5px 5px ${props => props.theme.colors.lightSkyBlue};
`

// TODO: Will take in text (required) and an optional icon
const Button = (props) => {
    return (
        <StyledButton >
            <FontAwesomeIcon icon={props.icon} style={{marginRight: 1.5 + 'vh'}} />
            {props.text}
        </StyledButton>
    )
}

/*Button.propTypes = {
    text: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string
}*/

export default Button