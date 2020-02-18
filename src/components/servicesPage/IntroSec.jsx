import React, { useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"
import {
  standardWrapper,
  headlineOne,
  headlineThree,
  headlineThreeSmall,
  colors,
  bodyCopy,
} from "../../Utilities"

const AboutIntroStyled = styled.section`
  @media (min-width: 1025px) {
    padding-top: 10rem;
  }
  .wrapper {
    ${standardWrapper};
    position: relative;
  }

  .content-container {
    position: relative;

    @media (min-width: 768px) {
      width: calc(65%);
      margin-right: 30%;
      margin-left: 5%;
    }
  }

  .main-title {
    width: 100%;

    @media (min-width: 768px) {
      max-width: 50rem;
    }

    h2 {
      ${headlineOne};
      color: ${colors.colorPrimary};
    }
  }

  .side-title {
    width: 100%;

    @media (min-width: 768px) {
      position: absolute;
      bottom: 15%;
      left: -5rem;
      transform-origin: left center;
      transform: rotate(-90deg);
      text-align: left;
    }

    p {
      ${headlineThreeSmall};
      margin-bottom: 1.5rem;

      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }
  }

  .para-content {
    p {
      ${bodyCopy};

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .mind-body-soul {
    position: relative;
    width: 100%;
    padding-top: 5rem;
    transform-origin: left center;
    text-align: center;

    @media (min-width: 1025px) {
      position: absolute;
      top: 100%;
      right: -95%;
      width: 100%;
      padding-top: 0;
      transform: rotate(-90deg);
      text-align: left;
      z-index: 10;
    }

    p {
      ${headlineThree};
      margin: 0;
      color: #c3e6d7;

      span {
        display: inline-block;
      }
    }
  }
`

const IntroSec = ({ data }) => {
  const title = data.acf._adw_ser_intro_title
  const sideTitle = data.acf._adw_ser_side_title
  const content = data.acf._adw_ser_content
  useEffect(() => {
    gsap
      .timeline({ delay: 0.5 })
      .fromTo(
        ".mind-body-soul p span",
        { autoAlpha: 0, scale: 2.5, transformOrigin: "50% 50%" },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          stagger: {
            each: 0.5,
          },
        }
      )
      .add("text")
      .fromTo(
        ".main-title",
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 1 },
        "text-=1.5"
      )
      .fromTo(
        ".para-content",
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 1 },
        "text-=1"
      )
      .fromTo(
        ".side-title",
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 1 },
        "text-=0.5"
      )
  }, [])
  return (
    <AboutIntroStyled>
      <div className="wrapper">
        <div className="content-container">
          <div className="main-title">
            <h2>{title}</h2>
          </div>
          <div className="side-title">
            <p>{sideTitle}</p>
          </div>
          <div
            className="para-content"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
        <div className="mind-body-soul">
          <p>
            <span>mind.</span> <span>body.</span> <span>soul.</span>
          </p>
        </div>
      </div>
    </AboutIntroStyled>
  )
}

export default IntroSec
