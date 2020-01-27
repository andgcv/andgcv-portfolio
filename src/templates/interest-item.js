import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// UI
import ItemWrapper from '../components/layout/item-layout/item-wrapper'
import ItemHeading from '../components/layout/item-layout/item-heading'

const ItemText = styled.div`
    color: ${props => props.theme.colors.desaturatedSkyBlue};
    text-align: justify;
    font-size: 1rem;
    line-height: 1.4;

    & p {
        margin-top: 0;
    }

    & span {
        color: ${props => props.theme.colors.lightSkyBlue};
    }

    & a {
        text-decoration: underline;
        color: ${props => props.theme.colors.vibrantBlue};

        & :hover {
            color: ${props => props.theme.colors.lightSkyBlue};
        }
    }
`

const InterestItem = (props) => {
    return (
        <ItemWrapper>
            <ItemHeading>&#x22;{props.title}&#x22;</ItemHeading>
            <ItemText>{props.children}</ItemText>
        </ItemWrapper>   
    )
}

export default InterestItem

InterestItem.propTypes = {
    title: PropTypes.string.isRequired
}

InterestItem.defaultProps = {
    title: "My Awesome Interest"
}