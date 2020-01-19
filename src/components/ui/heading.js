import React from 'react'
import styled from 'styled-components'

const HeadingWrapper = styled.div`
    text-align: center;
`

const Title = styled.h1`
    color: ${props => props.theme.colors.vibrantBlue};
    font-size: 3rem;
    margin-bottom: 3vh;

    & span {
        color: ${props => props.theme.colors.desaturatedSkyBlue};
        margin: 0 3vw;
    }
`

const SubTitle = styled.h2`
    color: ${props => props.theme.colors.desaturatedSkyBlue};
    font-weight: 400;
    font-size: 2rem;
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

export default Heading