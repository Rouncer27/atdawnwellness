import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  standardWrapper,
  headlineOne,
  headlineThreeSmall,
  colors,
  bodyCopy,
} from "../Utilities"

const AboutIntroStyled = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .content-container {
    position: relative;

    @media (min-width: 768px) {
      width: calc(65% - 2rem);
      margin-right: 2rem;
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
      bottom: 0;
      left: -3.5rem;
      transform-origin: left center;
      transform: rotate(-90deg);
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
      </div>
    </AboutIntroStyled>
  )
}

export default AboutIntro
