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
} from "../Utilities"

const AboutIntroStyled = styled.section`
  overflow: hidden;

  .wrapper {
    position: relative;
    ${standardWrapper};
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
      bottom: -5rem;
      left: -3.5rem;
      transform-origin: left center;
      transform: rotate(-90deg);
      text-align: right;
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
    position: absolute;
    width: 100%;
    top: 90%;
    right: -90%;
    transform-origin: left center;
    transform: rotate(-90deg);
    text-align: left;

    @media (min-width: 768px) {
      position: relative;
      top: auto;
      right: auto;
      width: 100%;
      padding-top: 5rem;
      transform: rotate(0deg);
      text-align: center;
    }

    @media (min-width: 1025px) {
      position: absolute;
      top: 50%;
      right: -100%;
      width: 100%;
      padding-top: 0;
      transform: rotate(-90deg);
      text-align: left;
    }

    p {
      ${headlineThree};
      margin: 0;
      color: #c3e6d7;
    }
  }
`

const AboutIntro = ({ data }) => {
  return (
    <AboutIntroStyled>
      <div className="wrapper">
        <div className="content-container">
          <div className="main-title">
            <h2>{data.acf._adw_about_intro_main_title}</h2>
          </div>
          <div className="side-title">
            <p>{data.acf._adw_about_intro_side_title}</p>
          </div>
          <div
            className="para-content"
            dangerouslySetInnerHTML={{
              __html: data.acf._adw_about_intro_main_content,
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

export default AboutIntro
