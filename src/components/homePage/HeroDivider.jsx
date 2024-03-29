import React from "react"
import BgImg from "gatsby-background-image"
import styled from "styled-components"

import PlantFour from "../../elelments/PlantFour"

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

  .plant {
    display: none;
    position: absolute;
    transform-origin: center center;
    transform: rotate(0deg);
    z-index: -1;

    @media (min-width: 768px) {
      display: block;
      top: 5rem;
      left: 2.5vw;
      width: calc(38.2rem / 1.75);
      height: calc(110rem / 1.75);
    }

    @media (min-width: 1025px) {
      top: 0;
      left: 2.5vw;
      width: calc(38.2rem / 1.5);
      height: calc(110rem / 1.5);
    }

    @media (min-width: 1150px) {
      left: 5vw;
      width: calc(38.2rem / 1.4);
      height: calc(110rem / 1.4);
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
      <div className="plant">
        <PlantFour />
      </div>
    </HeroDividerSection>
  )
}

export default HeroDivider
