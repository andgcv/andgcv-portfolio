import React from 'react'
import styled from 'styled-components'
import * as Scroll from 'react-scroll'

const NavBarWrapper = styled.nav`
    position: fixed;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    min-height: 6vh;
    height: 8vh;
    min-width: 100vw;
    width: 100vw;
    vertical-align: middle;
    font-size: 1.1rem;
    z-index: 10;
    background-color: ${props => props.theme.colors.deepDarkBlue};
    box-shadow: 20vw 5px ${props => props.theme.colors.lightSkyBlue};
`

const BrandContainer = styled.div`
    padding-left: 10vw;

    & a {
        color: ${props => props.theme.colors.lightSkyBlue};
        text-decoration: none;

        & :active {
            color: ${props => props.theme.colors.vibrantBlue};
        }

        & :hover {
            color: ${props => props.theme.colors.desaturatedSkyBlue};
        }
    }
`

const SectionsContainer = styled.div`
    text-align: right;
    padding-right: 10vw;

    & a {
        margin-left: 3vw;
        color: ${props => props.theme.colors.lightSkyBlue};
        text-decoration: none;

        & :active {
            color: ${props => props.theme.colors.vibrantBlue};
        }

        & :hover {
            color: ${props => props.theme.colors.desaturatedSkyBlue};
        }
    }

    & span {
        margin-left: 3vw;
        color: ${props => props.theme.colors.desaturatedSkyBlue};
    }
`

// TODO: Brand logo; Change to scroll Links when sections are done

const NavBar = (props) => {
    return (
        <NavBarWrapper>
            <BrandContainer>
                <a href="#home">home</a>
            </BrandContainer>
            <SectionsContainer>
                <span>&#x7b;</span>
                <a href="#about">"about me"</a>
                <a href="#portfolio">"portfolio"</a>
                <a href="#interests">"interests"</a>
                <a href="#contact">"contact"</a>
                <span>&#x7d;</span>
            </SectionsContainer>
        </NavBarWrapper>
    )
}

export default NavBar