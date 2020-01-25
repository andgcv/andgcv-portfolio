import React from 'react'
import styled from 'styled-components'
// Layout
import Wrapper from '../components/layout/wrapper'
// UI
import Heading from '../components/ui/heading'
// Content
import InterestItem from '../templates/interest-item'


const Interests = () => {
    return (
        <Wrapper id="interests-section">
            <Heading 
                title="interests"
                subtitle="Now that you’ve seen my work, what else do I enjoy doing?"
            />

        </Wrapper>
    )
}

export default Interests