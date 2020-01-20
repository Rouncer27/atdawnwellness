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

const IntroCropStyled = styled.section`
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

  .close-crop-image {
    width: 100%;
    padding: 2rem 22.5rem 0 2.5rem;

    @media (min-width: 768px) {
      width: calc(35% - 2rem);
      margin-left: 2rem;
      padding: 0;
    }
  }
`

const IntroCrop = ({ data }) => {
  const title = data.acf._adw_icc_main_title
  const sideTitle = data.acf._adw_icc_side_title
  const content = data.acf._adw_icc_content
  const imgFluid = data.acf._adw_ic_crop_img.localFile.childImageSharp.fluid
  const imgAlt = data.acf._adw_ic_crop_img.alt_text

  return (
    <IntroCropStyled>
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
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className="close-crop-image">
          <Img fluid={imgFluid} alt={imgAlt} />
        </div>
      </div>
    </IntroCropStyled>
  )
}

export default IntroCrop
