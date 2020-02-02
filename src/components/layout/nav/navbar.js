import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { useStaticQuery, graphql } from 'gatsby'
import { useSpring, animated, config } from 'react-spring'
import Img from 'gatsby-image'

const NavBarWrapper = styled(animated.nav)`
    position: fixed;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0 10vw 0 10vw;
    height: 70px;
    width: 80vw;
    font-size: 1.1rem;
    z-index: 10;
    background-color: ${props => props.theme.colors.deepDarkBlue};
    box-shadow: 10vw 5px ${props => props.theme.colors.lightSkyBlue};

    @media (max-width: 928px) {
        flex-direction: column;
        height: 140px;
        justify-content: start;
        position: static;
    }

    @media (max-height: 485px) {
        position: static;
    }

    @media (max-width: 928px) and (max-height: 650px) {
        position: static;
    }

    @media (max-width: 928px) and (max-height: 485px) {
        height: 110px;
    }
`

const BrandContainer = styled(animated.div)`
    padding-top: 7px;
    order: 0;
`

const BrandImg = styled(Img)`
    width: 200px;
    cursor: pointer;

    @media (max-width: 928px) {
        width: 150px;
    }

    @media (max-width: 928px) and (max-height: 485px) {
        width: 120px;
    }
`

const SectionsContainer = styled(animated.div)`
    display: flex;
    flex-flow: row nowrap;
    order: 1;
    text-align: right;

    & a {
        margin-left: 3vw;
        transition: color 0.2s ease-in-out;
        color: ${props => props.theme.colors.lightSkyBlue};
        text-decoration: none;

        & :hover {
            color: ${props => props.theme.colors.desaturatedSkyBlue};
            cursor: pointer;
        }
    }

    & span {
        margin-left: 3vw;
        color: ${props => props.theme.colors.desaturatedSkyBlue};
    }

    & .active {
        color: ${props => props.theme.colors.vibrantBlue};
    }

    @media (max-width: 1055px) {
        font-size: 1rem;
        
        & a {
            margin-left: 2vw;
        }
    }
    
    @media (max-width: 928px) {
        font-size: 0.9rem;
    }

    @media (max-width: 562px) {
        font-size: 0.7rem;
    }
`

const NavBar = () => {
    const { brandLogo } = useStaticQuery(
        graphql`
            query {
                brandLogo: file(name: {eq: "main-logo"}) {
                    childImageSharp {
                        fluid(
                            maxWidth: 300
                        ) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )

    const NavSpring = useSpring({
        config: config.wobbly,
        delay: 300,
        from: { 
            opacity: 0,
        },
        to: {
            opacity: 1,
        }
    })

    const BrandSpring = useSpring({
        config: config.wobbly,
        delay: 400,
        from: { 
            opacity: 0,
            transform: 'scale(0.5)'
        },
        to: {
            opacity: 1,
            transform: 'scale(1)'
        }
    })

    const SectionsSpring = useSpring({
        delay: 300,
        from: { 
            opacity: 0,
            transform: 'translateX(-100px)' 
        },
        to: {
            opacity: 1,
            transform: 'translateX(0px)'
        }
    })

    return (
        <NavBarWrapper style={NavSpring}>
            <BrandContainer style={BrandSpring}>
                <Link to="home-section" smooth={true} spy={true}><BrandImg fluid={brandLogo.childImageSharp.fluid} title="Brand logo" /></Link>
            </BrandContainer>
            <SectionsContainer>
                <span>&#x7b;</span>
                <Link to="about-section" activeClass="active" smooth={true} spy={true}>&#x22;about me&#x22;</Link>
                <Link to="portfolio-section" activeClass="active" smooth={true} spy={true}>&#x22;portfolio&#x22;</Link>
                <Link to="interests-section" activeClass="active" smooth={true} spy={true}>&#x22;interests&#x22;</Link>
                <Link to="contact-section" activeClass="active" smooth={true} spy={true}>&#x22;contact&#x22;</Link>
                <span>&#x7d;</span>
            </SectionsContainer>
        </NavBarWrapper>
    )
}

export default NavBar