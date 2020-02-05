import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeadingWrapper = styled.div`
    text-align: center;
    margin-top: 10vh;
`

const Title = styled.h1`
    color: ${props => props.theme.colors.vibrantBlue};
    font-size: 2.4rem;
    margin-bottom: 3vh;

    & span {
        color: ${props => props.theme.colors.lightSkyBlue};
        margin: 0 3vw;
    }

    @media (max-width: 562px) {
        font-size: 2rem;
    }

    @media (max-width: 360px) {
        font-size: 1.7rem;
    }
`

const SubTitle = styled.h2`
    color: ${props => props.theme.colors.lightSkyBlue};
    font-weight: 400;
    font-size: 1.4rem;

    @media (max-width: 562px) {
        font-size: 1.1rem;
    }

    @media (max-width: 360px) {
        font-size: 1rem;
    }
`


const Heading = (props) => {
    return (
        <HeadingWrapper>
            <Title>
                <span>&#x7b;</span>&#x22;{props.title}&#x22;<span>&#x7d;</span>
            </Title>
            <SubTitle>{props.subtitle}</SubTitle>
        </HeadingWrapper>
    )
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

Heading.defaultProps = {
    title: '"title"',
    subtitle: "Sub Title"
}

export default Heading