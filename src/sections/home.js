import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import Button from '../components/ui/button'

const HomeWrapper = styled.div`

`

const Title = styled.h1`
    margin: 0;
    margin-bottom: 2rem;
    line-height: 1.3;
    font-size: 3rem;
    color: #9baec8;

    & span {
        color: #d9e1e8;
    }
`

const SubTitle = styled.h2`
    margin: 0;
    margin-bottom: 7rem;
    font-size: 1.8rem;
    color: #9baec8;
`

const Home = () => {
    return (
        <HomeWrapper>
            <Title>Hi there <span role="img" aria-label="Greeting hand emoji">✋🏻</span>
                <br/>I'm <span>André</span></Title>
            <SubTitle>An ambitious, naturally curious Software Engineer!</SubTitle>
        </HomeWrapper>
    )
}

export default Home