import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
// Brand Logo
import BrandLogo from '../../../images/logo/main-logo.png'

const NavBarWrapper = styled.nav`
    position: fixed;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    min-height: 8vh;
    height: 10vh;
    min-width: 100vw;
    width: 100vw;
    vertical-align: middle;
    font-size: 1.1rem;
    z-index: 10;
    background-color: ${props => props.theme.colors.deepDarkBlue};
    box-shadow: 10vw 5px ${props => props.theme.colors.lightSkyBlue};
`

const BrandContainer = styled.div`
    padding-left: 10vw;
    padding-top: 7px;

    & img {
        height: 120px;
    }

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
                <Link to="home-section" smooth={true} spy={true}><img src={BrandLogo} alt="Brand logo" /></Link>
            </BrandContainer>
            <SectionsContainer>
                <span>&#x7b;</span>
                <Link to="about-section" smooth={true} spy={true}>&#x22;about me&#x22;</Link>
                <Link to="portfolio-section" smooth={true} spy={true}>&#x22;portfolio&#x22;</Link>
                <Link to="interests-section" smooth={true} spy={true}>&#x22;interests&#x22;</Link>
                <Link to="contact-section" smooth={true} spy={true}>&#x22;contact&#x22;</Link>
                <span>&#x7d;</span>
            </SectionsContainer>
        </NavBarWrapper>
    )
}

export default NavBar