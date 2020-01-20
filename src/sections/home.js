import React from 'react'
import styled from 'styled-components'
// UI
import Button from '../components/ui/button'
import DownArrow from '../components/ui/down-arrow'

const HomeWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5vw;
`

const Title = styled.h1`
    margin: 0;
    margin-bottom: 4vh;
    line-height: 1.3;
    font-size: 3.4rem;
    font-weight: 500;
    color: ${props => props.theme.colors.desaturatedSkyBlue};

    & span {
        color: ${props => props.theme.colors.lightSkyBlue};
    }
`

const SubTitle = styled.h2`
    margin: 0;
    margin-bottom: 7vh;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.theme.colors.desaturatedSkyBlue};
`

const Home = () => {
    return (
        <HomeWrapper>
            <Title>Hi there <span role="img" aria-label="Greeting hand emoji">✋🏻</span>
                <br/>I'm <span>André</span></Title>
            <SubTitle>An ambitious, naturally curious Software Engineer!</SubTitle>
            <Button text="about me" destination="about-section" scroll />
            <DownArrow />
        </HomeWrapper>
    )
}

export default Home