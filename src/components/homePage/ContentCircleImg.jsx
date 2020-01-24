import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  medWrapper,
  bodyCopy,
  headlineThreeSmall,
  colors,
  headlineOne,
} from "../../Utilities"

import PlantTwo from "../../elelments/PlantTwo"

const ContentCircleImgContent = styled.section`
  position: relative;
  .wrapper {
    ${medWrapper};
    position: relative;
    flex-direction: row-reverse;
  }

  .content {
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
      width: 60%;
      margin-right: 5%;
      margin-left: 35%;
    }

    @media (min-width: 1025px) {
      width: 60%;
      margin-right: 10%;
      margin-left: 30%;
    }

    @media (min-width: 1150px) {
      width: 50%;
      margin-right: 20%;
      margin-left: 30%;
    }

    &__title {
      @media (min-width: 1025px) {
        padding-bottom: 5rem;
      }

      h2 {
        ${headlineOne};
        margin-bottom: 1rem;
        color: ${colors.colorPrimary};
      }
    }

    &__side {
      width: 100%;
      @media (min-width: 768px) {
        position: absolute;
        bottom: 0;
        left: -4rem;
        width: 100%;
        padding-right: 6rem;
        transform-origin: left center;
        transform: rotate(-90deg);
        text-align: right;
      }

      h3 {
        ${headlineThreeSmall};
        margin-bottom: 1.5rem;
        color: ${colors.colorSec1};
      }
    }

    &__para {
      position: relative;

      p {
        ${bodyCopy};
      }
    }
  }

  .circleImage {
    width: 20rem;
    height: 20rem;
    margin-right: auto;
    margin-left: 0;
    border-radius: 50%;
    border: solid 1.25rem #e8ecf5;
    overflow: hidden;

    @media (min-width: 768px) {
      position: absolute;
      top: 50%;
      left: 5%;
      width: 20vw;
      max-width: 21rem;
      height: 20vw;
      max-height: 21rem;
      transform: translateY(-50%);
    }

    @media (min-width: 1025px) {
      position: absolute;
      top: 65%;
      left: 5%;
      width: 17vw;
      max-width: 21rem;
      height: 17vw;
      max-height: 21rem;
      transform: translateY(-50%);
      border: solid 1.25rem #e8ecf5;
    }
  }

  .plant {
    position: absolute;
    bottom: 1.5rem;
    right: 5vw;
    width: calc(28.8rem / 1.75);
    height: calc(110rem / 1.75);
    transform-origin: center center;
    transform: rotate(0deg);
    z-index: -1;
  }
`

const ContentCircleImg = ({ data }) => {
  const title = data.acf._adw_cci_main_title
  const sideTitle = data.acf._adw_cci_side_title
  const content = data.acf._adw_cci_main_content
  const imgFluid =
    data.acf._adw_cci_circle_image.localFile.childImageSharp.fluid
  const imgAlt = data.acf._adw_cci_circle_image.alt_text
  return (
    <ContentCircleImgContent>
      <div className="wrapper">
        <div className="content">
          <div className="content__title">
            <h2>{title}</h2>
          </div>

          <div className="content__para">
            <div className="content__side">
              <h3>{sideTitle}</h3>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
        <div className="circleImage">
          <Img fluid={imgFluid} alt={imgAlt} />
        </div>
      </div>
      <div className="plant">
        <PlantTwo />
      </div>
    </ContentCircleImgContent>
  )
}

export default ContentCircleImg
