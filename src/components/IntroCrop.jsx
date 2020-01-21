import React, { useRef, useEffect } from "react"
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
  padding-top: 12.5rem;
  padding-bottom: 10rem;

  .wrapper {
    ${standardWrapper};
  }

  .content-container {
    position: relative;

    @media (min-width: 768px) {
      width: calc(70% - 2rem);
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
    padding-left: 10rem;
  }

  .side-title {
    width: 100%;

    @media (min-width: 768px) {
      position: absolute;
      top: 100%;
      left: 5rem;
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

  .close-crop-image {
    width: 100%;
    padding: 2rem 22.5rem 0 2.5rem;

    @media (min-width: 768px) {
      width: calc(30% - 4rem);
      margin-left: 2rem;
      margin-right: 2rem;
      padding: 0;
    }
  }
`

const onLoadEvent = (divHeight, sideDiv) => {
  const topHeight = divHeight.current.offsetHeight - 5
  sideDiv.current.style.width = `${divHeight.current.offsetHeight}px`
  sideDiv.current.style.top = `${topHeight}px`
}

const changeHeightOnWinderResize = (divHeight, sideDiv) => {
  const topHeight = divHeight.current.offsetHeight - 5
  sideDiv.current.style.width = `${divHeight.current.offsetHeight}px`
  sideDiv.current.style.top = `${topHeight}px`
}

const addWindowResizeEventListener = (divHeight, sideDiv) => {
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      changeHeightOnWinderResize(divHeight, sideDiv)
    })
  }
}

const IntroCrop = ({ data }) => {
  const title = data.acf._adw_icc_main_title
  const sideTitle = data.acf._adw_icc_side_title
  const content = data.acf._adw_icc_content
  const imgFluid = data.acf._adw_ic_crop_img.localFile.childImageSharp.fluid
  const imgAlt = data.acf._adw_ic_crop_img.alt_text

  const bodyDiv = useRef(null)
  const sideDiv = useRef(null)

  addWindowResizeEventListener(bodyDiv, sideDiv)

  useEffect(() => onLoadEvent(bodyDiv, sideDiv), [])

  return (
    <IntroCropStyled>
      <div className="wrapper">
        <div className="content-container">
          <div className="main-title">
            <h2>{title}</h2>
          </div>
          <div className="para-wrapper">
            <div
              ref={bodyDiv}
              className="para-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div ref={sideDiv} className="side-title">
              <p>{sideTitle}</p>
            </div>
          </div>
        </div>
        <div className="close-crop-image">
          <Img fluid={imgFluid} alt={imgAlt} />
        </div>
      </div>
    </IntroCropStyled>
  )
}

export default IntroCrop
