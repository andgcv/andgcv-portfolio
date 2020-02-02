import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
// UI
import ItemWrapper from '../components/layout/item-layout/item-wrapper'
import ItemHeading from '../components/layout/item-layout/item-heading'
import Button from '../components/ui/button'
import { faExternalLinkAlt, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const ItemContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 562px) {
        flex-direction: column;
    }
`

const ItemImg = styled(Img)`
    width: 40%;
    object-fit: cover;
    box-shadow: 5px 5px ${props => props.theme.colors.lightSkyBlue};

    @media (max-width: 562px) {
        width: 100%;
        height: 300px;
        margin-bottom: 5vh;
    }
`

const ItemTechContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5vw;

    @media (max-width: 562px) {
        width: 100%;
        margin-left: 0;
    }
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
        margin-right: 2vw;
    }

    @media (max-width: 562px) {
        justify-content: center;
    }
`

const PortfolioItem = (props) => {
    if (props.noVisit && props.noSource) {
        return (
            <ItemWrapper>
                <ItemHeading>{props.title}</ItemHeading>
                <ItemContentContainer>
                    <ItemImg fluid={props.imgSrc} title="Portfolio item screenshot" />
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
                    <ItemImg fluid={props.imgSrc} title="Portfolio item screenshot" />
                    <ItemTechContainer>
                        <ItemDescription>
                            <p>{props.description}</p>
                            <p><span>{props.techStack}</span></p>
                        </ItemDescription>
                        <ItemButtons>
                            <Button small text="source" icon={faCodeBranch} destination={props.sourceDestination} />
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
                    <ItemImg fluid={props.imgSrc} title="Portfolio item screenshot" />
                    <ItemTechContainer>
                        <ItemDescription>
                            <p>{props.description}</p>
                            <p><span>{props.techStack}</span></p>
                        </ItemDescription>
                        <ItemButtons>
                            <Button small text="visit" icon={faExternalLinkAlt} destination={props.visitDestination} />
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
                    <ItemImg fluid={props.imgSrc} title="Portfolio item screenshot" />
                    <ItemTechContainer>
                        <ItemDescription>
                            <p>{props.description}</p>
                            <p><span>{props.techStack}</span></p>
                        </ItemDescription>
                        <ItemButtons>
                            <Button small text="visit" icon={faExternalLinkAlt} destination={props.visitDestination} />
                            <Button small text="source" icon={faCodeBranch} destination={props.sourceDestination} />
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
    description: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    visitDestination: PropTypes.string,
    sourceDestination: PropTypes.string
}

PortfolioItem.defaultProps = {
    title: '"Portfolio Item": "Awesome Project"',
    description: "This is an awesome project!",
    techStack: "Love"
}