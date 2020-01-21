import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

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
            cursor: pointer;
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
            cursor: pointer;
        }
    }

    & span {
        margin-left: 3vw;
        color: ${props => props.theme.colors.desaturatedSkyBlue};
    }
`

// TODO: Brand logo, change color of current section

const NavBar = () => {
    return (
        <NavBarWrapper>
            <BrandContainer>
            <Link to="home-section" smooth={true} spy={true}>home</Link>
            </BrandContainer>
            <SectionsContainer>
                <span>&#x7b;</span>
                <Link to="about-section" smooth={true} spy={true}>"about me"</Link>
                <Link to="portfolio-section" smooth={true} spy={true}>"portfolio"</Link>
                <Link to="interests-section" smooth={true} spy={true}>"interests"</Link>
                <Link to="contact-section" smooth={true} spy={true}>"contact"</Link>
                <span>&#x7d;</span>
            </SectionsContainer>
        </NavBarWrapper>
    )
}

export default NavBar