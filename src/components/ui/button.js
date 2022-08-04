import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useSpring, animated } from "react-spring"
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// Navigation
import { Link } from "react-scroll"

const StyledLink = styled(Link)`
  width: 15vw;
  height: 80px;

  @media (max-width: 1055px) {
    width: 20vw;
  }

  @media (max-width: 928px) {
    width: 25vw;
  }

  @media (max-width: 562px) {
    width: 40vw;
    height: 70px;
  }

  @media (max-width: 360px) {
    width: 50vw;
    height: 60px;
  }

  @media (max-height: 485px) {
    width: 11vw;
    height: 60px;
  }

  @media (max-height: 405px) {
    height: 40px;
  }

  @media (max-width: 928px) and (max-height: 485px) {
    width: 20vw;
    height: 50px;
  }

  @media (max-width: 562px) and (max-height: 405px) {
    width: 20vw;
    height: 40px;
  }
`

const StyledButton = styled(animated.button)`
    background-color: ${(props) => props.theme.colors.vibrantBlue};
    color: ${(props) => props.theme.colors.lightSkyBlue};
    width: 100%;
    height: 100%;
    font-family: ${(props) => props.theme.fonts[0]};
    font-weight: 500;
    font-size: 1.4rem;
    padding: 0.25vh 1vw;
    cursor: pointer;
    border: none;
    box-shadow: 5px 5px ${(props) => props.theme.colors.lightSkyBlue};

    @media (max-width: 562px) {
        font-size: 1.3rem;
    }

    @media (max-width: 360px) {
        font-size: 1.2rem;
    }

    @media (max-height: 485px) {
        font-size 1.1rem;
    }

    @media (max-height: 405px) {
        font-size: 0.9rem;
    }

    @media (max-width: 928px) and (max-height: 485px) {
        font-size: 1rem;
    }

    @media (max-width: 562px) and (max-height: 405px) {
        font-size: 0.9rem;
    }

    ${(props) =>
      props.isSmall &&
      `
        width: 11vw;
        height: 60px;
        font-size: 1.1rem;

        @media (max-width: 928px) {
            width: 20vw;
            height: 50px;
            font-size: 1rem;
        }

        @media (max-width: 562px) {
            width: 25vw;
            font-size: 0.9rem;
        }

        @media (max-width: 360px) {
            font-size: 0.8rem;
        }
    `}

    ${(props) =>
      props.isBig &&
      `
        width: 37vw;
        height: 60px;

        @media (max-width: 928px) {
            width: 64vw;
            height: 50px;
            font-size: 1.2rem;
        }

        @media (max-width: 562px) {
            width: 78vw;
            font-size: 1rem;
        }
    `}
`

const Button = (props) => {
  const [hover, setHover] = useState(false)
  const ButtonSpring = useSpring({
    config: {
      tension: 350,
      friction: 8,
    },
    to: {
      transform: `scale(${hover ? 1.1 : 1})`,
    },
  })

  // If the Button's goal is a scroll to another section, then return a scroll link
  if (props.scroll) {
    return (
      <StyledLink to={props.destination} smooth={true} spy={true}>
        <StyledButton
          style={ButtonSpring}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          isSmall={props.small}
          isBig={props.big}
        >
          <FontAwesomeIcon
            icon={props.icon}
            style={{ marginRight: 1 + "vw" }}
          />
          {props.text}
        </StyledButton>
      </StyledLink>
    )
    // If the Button's goal is a link to a file or external sources, return an <a> Button
  } else {
    return (
      <a href={props.destination} target="_blank" rel="noopener noreferrer">
        <StyledButton
          style={ButtonSpring}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          isSmall={props.small}
          isBig={props.big}
        >
          <FontAwesomeIcon
            icon={props.icon}
            style={{ marginRight: 1 + "vw" }}
          />
          {props.text}
        </StyledButton>
      </a>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string,
}

Button.defaultProps = {
  text: "button",
}

export default Button
