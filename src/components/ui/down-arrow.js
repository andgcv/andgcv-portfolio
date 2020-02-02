import React from 'react'
import styled from 'styled-components'
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// Navigation
import { Link } from 'react-scroll'

const ArrowWrapper = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    margin-bottom: 3vh;
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
    return (
        <ArrowWrapper>
            <Link to="about-section" smooth={true} spy={true}>
                <FontAwesomeIcon icon={faAngleDown} />
            </Link>
        </ArrowWrapper>
    )
}

export default DownArrow