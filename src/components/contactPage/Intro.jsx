import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import {
  headlineOne,
  headlineThree,
  colors,
  bodyCopy,
  standardWrapper,
  buttonOne,
} from "../../Utilities"

const IntroStyled = styled.section`
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
      width: calc(55% - 2rem);
      margin-right: 2rem;
    }
  }

  .main-title {
    width: 100%;

    @media (min-width: 768px) {
      max-width: 100%;
    }

    h2 {
      ${headlineOne};
      color: ${colors.colorPrimary};
    }
  }

  .para-wrapper {
    position: relative;
    padding-left: 0;
    @media (min-width: 768px) {
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

  .close-crop-image {
    align-self: flex-end;
    width: 100%;
    max-width: 40rem;
    padding: 2rem;

    @media (min-width: 768px) {
      width: calc(45% - 4rem);
      max-width: 100%;
      margin-left: 2rem;
      margin-right: 2rem;
      padding: 0 2rem;
    }
  }

  .mind-body-soul {
    position: relative;
    width: 100%;
    top: auto;
    right: auto;
    transform-origin: left center;
    transform: rotate(0deg);
    text-align: center;

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
      top: 77.5%;
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

  .intro-button {
    margin: 4rem auto 2rem;

    a {
      ${buttonOne};
      text-transform: uppercase;
    }
  }
`

const Intro = ({ data }) => {
  const title = data.acf._adw_contact_intro_title
  const content = data.acf._adw_contact_intro_content
  const btnText = data.acf._adw_contact_intro_button_text
  const btnUrl = data.acf._adw_contact_intro_button_url
  const imgFluid =
    data.acf._adw_contact_intro_image.localFile.childImageSharp.fluid
  const imgAlt = data.acf._adw_contact_intro_image.alt_text
  return (
    <IntroStyled>
      <div className="wrapper">
        <div className="content-container">
          <div className="main-title">
            <h2>{title}</h2>
          </div>
          <div className="para-wrapper">
            <div
              className="para-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          <div className="intro-button">
            <a target="_blank" rel="noopener noreferrer" href={btnUrl}>
              {btnText}
            </a>
          </div>
        </div>
        <div className="close-crop-image">
          <Img fluid={imgFluid} alt={imgAlt} />
        </div>
        <div className="mind-body-soul">
          <p>mind. body. soul.</p>
        </div>
      </div>
    </IntroStyled>
  )
}

export default Intro
