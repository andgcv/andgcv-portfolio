import React from 'react'
import styled from 'styled-components'
import Button from '../components/ui/button'

const ItemWrapper = styled.div`
    height: 300px;
    margin: 0 auto;
    padding-top: 7vh;
    display: flex;
    flex-direction: column;
`

const ItemHeading = styled.h3`
    font-size: 1.2rem;
    color: ${props => props.theme.colors.vibrantBlue};
    text-align: center;
`

const ItemContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 3vh 10vw 0 10vw;

    & img {
        height: 300px;
        object-fit: cover;
        box-shadow: 5px 5px ${props => props.theme.colors.lightSkyBlue};
    }
`

const ItemTechContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5vw;
`

const ItemDescription = styled.div`
    color: ${props => props.theme.colors.lightSkyBlue};
    text-align: justify;
    text-justify: inter-word;

    & p {
        margin: 0 0 32px 0;
    }

    & span {
        text-align: left;
        color: ${props => props.theme.colors.desaturatedSkyBlue};
        font-weight: 500;
    }
`

const ItemButtons = styled.div`
    display: flex;
    flex-direction: row;

    & button {
        margin-right: 5vw;
    }
`

const PortfolioItem = (props) => {
    return (
        <ItemWrapper>
            <ItemHeading>"Test Item": "Awesome Title"</ItemHeading>
            <ItemContentContainer>
                <img src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
                <ItemTechContainer>
                    <ItemDescription>
                        <p>This exact web application! My personal website where you can connect with me, get to know me a little better and see what I’ve been up to lately! I wanted something easy to use, easy to maintain and with good SEO, and considering the fact that I had previous experience with React, Gatsby seemed like a great fit!</p>
                        <p><span>React : Gatsby : Styled-components : Git</span></p>
                    </ItemDescription>
                    <ItemButtons>
                        <Button text="visit" />
                        <Button text="source" />
                    </ItemButtons>
                </ItemTechContainer>
            </ItemContentContainer>
        </ItemWrapper>
    )
}

export default PortfolioItem