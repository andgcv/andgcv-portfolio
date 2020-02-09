import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// Navigation
import { Link } from 'react-scroll'

const ArrowWrapper = styled(animated.div)`
    position: absolute;
    bottom: 3vh;
    left: 50%;
    margin-left: -16px;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    color: ${props => props.theme.colors.desaturatedSkyBlue};
    font-size: 3rem;

    & :hover {
        color: ${props => props.theme.colors.vibrantBlue};
    }

    @media (max-height: 485px) {
        visibility: hidden;
    }

    @media (max-width: 928px) and (max-height: 650px) {
        visibility: hidden;
    }
`

const DownArrow = () => {
    const DownArrowSpring = useSpring({
        config: config.wobbly,
        delay: 300,
        from: { 
            opacity: 0,
            transform: 'translateY(-30px)' 
        },
        to: {
            opacity: 1,
            transform: 'translateY(0px)'
        }
    })

    return (
        <ArrowWrapper style={DownArrowSpring}>
            <Link to="about-section" smooth={true} spy={true}>
                <FontAwesomeIcon icon={faAngleDown} />
            </Link>
        </ArrowWrapper>
    )
}

export default DownArrow