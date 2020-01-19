import React from 'react'
import styled from 'styled-components'
import Button from '../components/ui/button'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const HomeWrapper = styled.div`
    height: 100vh;
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    align-self: center;
`

const Title = styled.h1`
    margin: 0;
    margin-bottom: 4rem;
    line-height: 1.3;
    font-size: 4rem;
    font-weight: 500;
    color: ${props => props.theme.colors.desaturatedSkyBlue};

    & span {
        color: ${props => props.theme.colors.lightSkyBlue};
    }
`

const SubTitle = styled.h2`
    margin: 0;
    margin-bottom: 7rem;
    font-size: 2rem;
    font-weight: 400;
    color: ${props => props.theme.colors.desaturatedSkyBlue};
`

const Home = () => {
    return (
        <HomeWrapper>
            <Title>Hi there <span role="img" aria-label="Greeting hand emoji">✋🏻</span>
                <br/>I'm <span>André</span></Title>
            <SubTitle>An ambitious, naturally curious Software Engineer!</SubTitle>
            <Button text="about me" icon={faInfoCircle} />
        </HomeWrapper>
    )
}

export default Home