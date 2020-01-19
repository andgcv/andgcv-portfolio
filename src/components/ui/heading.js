import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeadingWrapper = styled.div`
    text-align: center;
`

const Title = styled.h1`
    color: ${props => props.theme.colors.vibrantBlue};
    font-size: 2.4rem;
    margin-bottom: 3vh;

    & span {
        color: ${props => props.theme.colors.lightSkyBlue};
        margin: 0 3vw;
    }
`

const SubTitle = styled.h2`
    color: ${props => props.theme.colors.lightSkyBlue};
    font-weight: 400;
    font-size: 1.4rem;
`


const Heading = (props) => {
    return (
        <HeadingWrapper>
            <Title>
                <span>&#x7b;</span>{props.title}<span>&#x7d;</span>
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