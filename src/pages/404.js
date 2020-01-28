import React from 'react'
import styled from 'styled-components'
// Styles
import Theme from '../components/ui/theme'
import GlobalStyles from '../components/ui/global-styles'
// Layout
import Wrapper from '../components/layout/wrapper'

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & p {
        font-size: 1.2rem;
        align-text: center;
        color: ${props => props.theme.colors.desaturatedSkyBlue};
    }

    & a {
        font-size: 1.2rem;
        font-weight: 600;
        color: ${props => props.theme.colors.lightSkyBlue};
        text-decoration: underline;

        & :hover {
            color: ${props => props.theme.colors.vibrantBlue};
        }

        & :active {
            color: ${props => props.theme.colors.vibrantBlue};
        }
    }
`

const StatusCode = styled.h3`
    font-size: 11rem;
    color: ${props => props.theme.colors.vibrantBlue};
    margin: 0;

    & span {
        color: ${props => props.theme.colors.lightSkyBlue};
        margin: 0 6vw;
    }
`

const NotFoundPage = () => {
    return (
        <Theme>
            <GlobalStyles />
            <Wrapper notFound>
                <NotFoundContainer>
                    <StatusCode><span>&#x7b;</span>&#x22;404&#x22;<span>&#x7d;</span></StatusCode>
                    <p>That was probably a mistake on my part. Here, let me help you out:</p>
                    <a href="/">Take me back</a>
                </NotFoundContainer>
            </Wrapper>
        </Theme>
    )
}

export default NotFoundPage