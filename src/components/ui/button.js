import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.theme.colors.vibrantBlue};
    color: ${props => props.theme.colors.lightSkyBlue};
    min-width: 25vh;
    min-height: 8vh;
    font-family: ${props => props.theme.fonts[0]};
    font-weight: 500;
    font-size: 2em;
    padding: 0.25em 1em;
    border: none;
    box-shadow: 5px 5px ${props => props.theme.colors.lightSkyBlue};
`

export default (props) => (
    <Button>
        {props.text}
    </Button>
)