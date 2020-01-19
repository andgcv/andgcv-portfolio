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
    min-width: 100%;
    width: 100%;
    vertical-align: middle;
    font-size: 1.7rem;
    background-color: ${props => props.theme.colors.deepDarkBlue};
    box-shadow: 30rem 5px ${props => props.theme.colors.lightSkyBlue};
`

const BrandContainer = styled.div`
    padding-left: 10vh;

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
    padding-right: 10vh;

    & a {
        margin-left: 10vh;
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
        margin-left: 10vh;
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