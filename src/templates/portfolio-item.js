import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// UI
import ItemWrapper from '../components/layout/item-layout/item-wrapper'
import ItemHeading from '../components/layout/item-layout/item-heading'
import Button from '../components/ui/button'
import { faExternalLinkAlt, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
// Content
import defaultItem from '../images/portfolio-items/default-item.jpg'

const ItemContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    & img {
        width: 40%;
        object-fit: cover;
        box-shadow: 5px 5px ${props => props.theme.colors.lightSkyBlue};
    }
`

const ItemTechContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5vw;
`

const ItemDescription = styled.div`
    color: ${props => props.theme.colors.desaturatedSkyBlue};
    text-align: justify;
    font-size: 1rem;
    line-height: 1.4;

    & p {
        margin: 0 0 32px 0;
    }

    & span {
        text-align: left;
        color: ${props => props.theme.colors.lightSkyBlue};
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
    if (props.noVisit && props.noSource) {
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
                    </ItemTechContainer>
                </ItemContentContainer>
            </ItemWrapper>
        )
    } else if (props.noVisit) {
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
                            <Button text="source" icon={faCodeBranch} destination={props.sourceDestination} />
                        </ItemButtons>
                    </ItemTechContainer>
                </ItemContentContainer>
            </ItemWrapper>
        )
    } else if (props.noSource) {
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
                            <Button text="visit" icon={faExternalLinkAlt} destination={props.visitDestination} />
                        </ItemButtons>
                    </ItemTechContainer>
                </ItemContentContainer>
            </ItemWrapper>
        )
    } else {
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
                            <Button text="visit" icon={faExternalLinkAlt} destination={props.visitDestination} />
                            <Button text="source" icon={faCodeBranch} destination={props.sourceDestination} />
                        </ItemButtons>
                    </ItemTechContainer>
                </ItemContentContainer>
            </ItemWrapper>
        )
    }
}

export default PortfolioItem

PortfolioItem.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    visitDestination: PropTypes.string,
    sourceDestination: PropTypes.string
}

PortfolioItem.defaultProps = {
    title: '"Portfolio Item": "Awesome Project"',
    imgSrc: defaultItem,
    description: "This is an awesome project!",
    techStack: "Love"
}