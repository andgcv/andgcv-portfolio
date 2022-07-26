import React from 'react'
import styled from 'styled-components'

const currentYear = new Date().getFullYear();

const StyledFooter = styled.footer`
    height: 10vh;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${props => props.theme.colors.desaturatedSkyBlue};
`

const Footer = () => {
    return (
        <StyledFooter>
            <p>Copyright © {currentYear} - André Gonçalves</p>
        </StyledFooter>
    )
}

export default Footer