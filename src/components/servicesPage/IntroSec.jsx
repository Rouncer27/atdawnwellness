import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  standardWrapper,
  headlineOne,
  headlineThree,
  headlineThreeSmall,
  colors,
  bodyCopy,
} from "../../Utilities"

const AboutIntroStyled = styled.section`
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
      left: -3.5rem;
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
    }
  }
`

const IntroSec = ({ data }) => {
  const title = data.acf._adw_ser_intro_title
  const sideTitle = data.acf._adw_ser_side_title
  const content = data.acf._adw_ser_content
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
          <p>mind. body. soul.</p>
        </div>
      </div>
    </AboutIntroStyled>
  )
}

export default IntroSec
