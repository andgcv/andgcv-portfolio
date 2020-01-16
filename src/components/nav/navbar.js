import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const NavBarWrapper = styled.nav`
    position: fixed;
    height: 10vh;
    display: block;
    background-color: ${props => props.theme.colors.lightSkyBlue};
`
const NavBarContainer = styled.div`

`

// Need wrapper to wrap everything
    // Need container to define general styles (shadow of the bar, use theme colors)
        // Need to add brand that redirects to index
        // Need to style each nav item

const NavBar = (props) => {
    return (
        <NavBarWrapper>
            <NavBarContainer>
                <Link to='/'>Hi</Link>
            </NavBarContainer>
        </NavBarWrapper>
    )
}

export default NavBar