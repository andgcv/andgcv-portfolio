import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SectionWrapper = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const HomeWrapper = styled(SectionWrapper)`
    padding-left: 5vw;
    justify-content: center;
`

const Wrapper = (props) => {
    // If the wrapper is being used in the Home section, serve the <HomeWrapper> instead
    if (props.home) {
        return (
            <HomeWrapper id="home-section">{props.children}</HomeWrapper>
        )
    // Else, serve the generic <SectionWrapper>
    } else {
        return (
            <SectionWrapper id={props.id}>{props.children}</SectionWrapper>
        )
    }
}

export default Wrapper

Wrapper.propTypes = {
    id: PropTypes.string
}

Wrapper.defaultProps = {
    id: PropTypes.string
}