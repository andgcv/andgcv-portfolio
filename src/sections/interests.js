import React from 'react'
import styled from 'styled-components'
// Layout
import Wrapper from '../components/layout/wrapper'
// UI
import Heading from '../components/ui/heading'
// Content
import InterestItem from '../templates/interest-item'
import WorkGallery from '../templates/work-gallery'


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
            <WorkGallery />
            <InterestItem title="Graphic Design">
                <p>I started to learn this craft through my Associate’s Degree, and although it is definitely not as fulfilling as photography (for me), it has proven to be crucial in various aspects in my life. Whether it is creating illustrations for friends or family, or building prototypes and designs for personal projects, graphic design has found its way into my personal or professional life, one way or other, and I welcome it! I’ve worked with it on a professional setting (in conjunction with photography), and although I wouldn’t want to build a career off graphic design, I have thoroughly enjoyed practicing and improving in this craft.</p>
            </InterestItem>
            <InterestItem title="Playing the Guitar">
                <p>This is something I have picked up in May of 2019, and have been making slow and steady progress since then! Music is a huge part of my life, as is for many people. Being exposed to various sub-genres of Metal at an early age (thus becoming a Metalhead at heart), and developing my music taste in other genres over the years, this has allowed me to maintain an open mind, and has proven to be fundamental in my ability to empathise with other people, not only when it comes to music, but also in many other topics.</p>
                <p>That being said, learning Music Theory and this beautiful 6-string instrument has provided me a beautiful view into the technicalities that all types of artists go through and, although I still have a long way before I become a decent guitar player, I’m sure I’ll have a blast throughout the whole process.</p>
            </InterestItem>
            <InterestItem title="Reading">
                <p>I know I’m late to the party, but I have only been able to employ a consistent reading schedule since October of 2019. I’ve been listening to Audiobooks for a while, while commuting or performing low-effort tasks, but sitting down to read a book used to be very challenging for me. Having said that, at the moment I read exclusively Non-Fiction, Human Psychology, Business or Self-Help books, and despite not reading for entertainment or pleasure, I still love, love, love learning and picking up ideas to improve myself, so I always look forward to that time of the day when I grab a book (or, in this case, a kindle) and go to town!</p>
            </InterestItem>
            <InterestItem title="Learning from all kinds of domains">
                <p>Here’s the thing, I’m a naturally curious human being, and I’m constantly looking for ways to improve, not only my work process, but in all aspects of my life. I can’t help but delve deep into all kinds of domains, most of which I’m not qualified for, in hopes of gathering new, useful, information that helps me come up with interesting solutions to problems that may emerge.</p>
                <p>How do I do this? Well, that depends on what I’m researching, but I'll name a few of the resources that I use: Engineering Blogs, Books and Audiobooks, Online Courses, Podcasts, YouTube and other Social Medias, and any other websites I may find on the topic at hand!</p>
            </InterestItem>
        </Wrapper>
    )
}

export default Interests