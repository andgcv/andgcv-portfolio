import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
// Layout
import Wrapper from "../components/layout/wrapper"
// UI
import Button from "../components/ui/button"
import DownArrow from "../components/ui/down-arrow"

const Title = styled(animated.h1)`
    margin: 0;
    margin-bottom: 4vh;
    line-height: 1.3;
    font-size: 3.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.desaturatedSkyBlue};

    & span {
        color: ${(props) => props.theme.colors.lightSkyBlue};
    }

    @media (max-height: 485px) {
        font-size: 3rem;
        line-height: 1.2;
    }

    @media (max-height: 405px) {
        font-size: 2.6rem;
        line-height: 1.1;
    }

    @media (max-width: 562px) {
        font-size 3.2rem;
        line-height: 1.2;
    }

    @media (max-width: 440px) {
        font-size 2.6rem;
    }

    @media (max-width: 360px) {
        font-size 2.2rem;
    }
`

const SubTitle = styled(animated.h2)`
    margin: 0;
    margin-bottom: 7vh;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.desaturatedSkyBlue};

    @media (max-height: 485px) {
        font-size: 1.2rem;
    }

    @media (max-height: 405px) {
        font-size: 1rem;
    }

    @media (max-width: 562px) {
        font-size 1.2rem;
    }

    @media (max-width: 440px) {
        font-size 1rem;
    }
`

const Home = () => {
  const HomeWrapperSpring = useSpring({
    config: config.wobbly,
    delay: 300,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  const TitleSpring = useSpring({
    config: config.wobbly,
    delay: 300,
    from: {
      transform: "translateX(-100px)",
    },
    to: {
      transform: "translateX(0px)",
    },
  })

  const SubTitleSpring = useSpring({
    config: config.wobbly,
    delay: 400,
    from: {
      transform: "translateX(-100px)",
    },
    to: {
      transform: "translateX(0px)",
    },
  })

  return (
    <Wrapper home style={HomeWrapperSpring}>
      <Title style={TitleSpring}>
        Hi there{" "}
        <span role="img" aria-label="Greeting hand emoji">
          ✋🏻
        </span>
        <br />
        I'm <span>André</span>
      </Title>
      <SubTitle style={SubTitleSpring}>
        An ambitious, naturally curious Software Engineer!
      </SubTitle>
      <Button text="about me" destination="about-section" scroll />
      <DownArrow />
    </Wrapper>
  )
}

export default Home
