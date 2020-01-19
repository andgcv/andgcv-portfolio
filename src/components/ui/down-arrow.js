import React from 'react'
import styled from 'styled-components'
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const ArrowWrapper = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    cursor: pointer;
    color: ${props => props.theme.colors.desaturatedSkyBlue};
    font-size: 3rem;

    & :hover {
        color: ${props => props.theme.colors.vibrantBlue};
    }
`

const DownArrow = () => {
    return (
        <ArrowWrapper>
            <FontAwesomeIcon icon={faAngleDown} />
        </ArrowWrapper>
    )
}

export default DownArrow