import React from "react"
import styled from "styled-components"
import {
  standardWrapper,
  headlineOne,
  headlineThree,
  headlineThreeSmall,
  colors,
  bodyCopy,
} from "../../Utilities"

import PlantFive from "../../elelments/PlantFive"

const AboutIntroStyled = styled.section`
  position: relative;
  overflow: hidden;

  @media (min-width: 1025px) {
    padding-top: 10rem;
  }

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
      bottom: -7.5%;
      left: -5rem;
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
    position: relative;
    width: 100%;
    padding-top: 5rem;
    transform-origin: left center;
    text-align: center;

    @media (min-width: 768px) {
      position: relative;
      top: auto;
      right: auto;
      width: 100%;
      padding-top: 5rem;
      transform: rotate(0deg);
    }

    @media (min-width: 1025px) {
      position: absolute;
      top: 55%;
      right: -95%;
      width: 100%;
      padding-top: 0;
      transform: rotate(-90deg);
      text-align: left;
    }

    @media (min-width: 1150px) {
      right: -100%;
    }

    p {
      ${headlineThree};
      margin: 0;
      color: #c3e6d7;
    }
  }

  .plant {
    display: none;
    position: absolute;
    bottom: 1.5rem;
    right: 5vw;
    width: calc(74.8rem / 2.2);
    height: calc(100rem / 2.2);
    transform-origin: center center;
    transform: rotate(15deg);
    z-index: -1;

    @media (min-width: 768px) {
      display: block;
      bottom: 10rem;
      right: -4vw;
      width: calc(74.8rem / 3);
      height: calc(100rem / 3);
      transform: rotate(25deg);
    }

    @media (min-width: 1025px) {
      bottom: 1.5rem;
      right: 0vw;
      width: calc(74.8rem / 2.2);
      height: calc(100rem / 2.2);
    }

    @media (min-width: 1150px) {
      bottom: 1.5rem;
      right: 7.5vw;
      width: calc(74.8rem / 2.5);
      height: calc(100rem / 2.5);
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
      <div className="plant">
        <PlantFive />
      </div>
    </AboutIntroStyled>
  )
}

export default AboutIntro
