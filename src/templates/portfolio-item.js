import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// UI
import Button from '../components/ui/button'
import { faExternalLinkAlt, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import defaultItem from '../images/portfolio-items/default-item.jpg'

const ItemWrapper = styled.div`
    margin: 0 auto;
    width: 80vw;
    padding: 7vh 0 14vh 0;
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
        width: 40%;
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
            <ItemHeading>{props.title}</ItemHeading>
            <ItemContentContainer>
                <img src={props.imgSrc} alt="Portfolio item screenshot" />
                <ItemTechContainer>
                    <ItemDescription>
                        <p>{props.description}</p>
                        <p><span>{props.techStack}</span></p>
                    </ItemDescription>
                    <ItemButtons>
                        <Button text="visit" icon={faExternalLinkAlt} />
                        <Button text="source" icon={faCodeBranch} />
                    </ItemButtons>
                </ItemTechContainer>
            </ItemContentContainer>
        </ItemWrapper>
    )
}

export default PortfolioItem

PortfolioItem.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired
}

// TODO: default img src should be a generic image
PortfolioItem.defaultProps = {
    title: '"Portfolio Item": "Awesome Project"',
    imgSrc: defaultItem,
    description: "This is an awesome project!",
    techStack: "Love"
}