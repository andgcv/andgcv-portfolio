import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PortfolioSectionWrapper = styled.div`
    text-align: left;
    margin-top: 10vh;
`

const Section = styled.h2`
    color: ${props => props.theme.colors.lightSkyBlue};
    font-weight: 400;
    font-size: 1.4rem;
    padding: 0.25vh 1vw;
    box-shadow: -5px 5px ${props => props.theme.colors.lightSkyBlue};

    @media (max-width: 562px) {
        font-size: 1.1rem;
    }

    @media (max-width: 360px) {
        font-size: 1rem;
    }
`


const PortfolioSection = (props) => {
    return (
        <PortfolioSectionWrapper>
            <Section>
                &#x22;{props.section}&#x22;
            </Section>
        </PortfolioSectionWrapper>
    )
}

PortfolioSection.propTypes = {
    section: PropTypes.string.isRequired
}

PortfolioSection.defaultProps = {
    section: '"title"'
}

export default PortfolioSection