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
            <InterestItem title="Photography">
                <p>A passion I first discovered around 4 years ago through my Associate’s Degree in Multimedia Product Development, while I was renting camera equipment for some of my media production and post-production coursework. I decided to acquire a digital camera and start shooting as much as possible, as well as studying the theory behind the art of taking photos, and this quickly became one of the most important hobbies in my life. In conjunction with Graphic Design, this became one of the gateways for me to express my creativity, and turns out, I do have an eye for Photography! Or at least I like to think I do...</p>
                <p>Since then, I have fully converted to analog photography, as I much prefer the whole process of buying, developing and processing the film instead of the shoot-and-pray, and instant gratification nature of digital photography. This slow, perhaps tedious, process allows me to disconnect myself from the photos I take, improving my ability to judge them in a (mostly) unbiased manner. The limited number of exposures per roll also forces me to be conscious of the photos I’m taking, which results in better content overall.</p>
            </InterestItem>
        </Wrapper>
    )
}

export default Interests