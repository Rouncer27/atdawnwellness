import React from "react"
import BgImg from "gatsby-background-image"
import styled from "styled-components"
import { colors, fonts, headlineThreeSmall, bodyCopy } from "../Utilities"

const HeroDividerSection = styled.section`
  position: relative;
  width: 100%;

  .wrapper {
    position: relative;
    width: 100%;
    padding-top: 20rem;
    padding-bottom: 20rem;

    @media (min-width: 768px) {
      width: 90%;
      margin-right: 0;
      margin-left: auto;
    }
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

const HeroDivider = ({ data }) => {
  const heroFluid = data.acf._adw_hq_image.localFile.childImageSharp.fluid
  return (
    <HeroDividerSection>
      <div className="wrapper">
        <div className="background-image">
          <BgImg tag="div" fluid={heroFluid} />
        </div>
      </div>
    </HeroDividerSection>
  )
}

export default HeroDivider
