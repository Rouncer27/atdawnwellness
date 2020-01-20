import React, { useRef } from "react"
import styled from "styled-components"
import BgImg from "gatsby-background-image"
import { colors, headlineThree } from "../Utilities"

const HeroImageStyled = styled.div`
  position: relative;
  width: 100%;

  .hero-image {
    width: 100%;
    height: 50rem;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 768px) {
      height: 60rem;
    }

    @media (min-width: 1025px) {
      height: 75rem;
    }
  }

  .hero-title {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 1rem 0 3rem;
    background-color: ${colors.white};

    @media (min-width: 768px) {
      bottom: 0;
    }

    @media (min-width: 1025px) {
      width: 75rem;
      top: ${props => `-${props.titleHeight / 10}rem`};
      bottom: auto;
      transform: rotate(-90deg);
      transform-origin: bottom right;
    }

    h2 {
      ${headlineThree};
      margin: 0;
      text-align: center;
      line-height: 1.5;
    }
  }
`

const HeroImage = props => {
  const { title } = props.data
  const { acf } = props.data
  const titleDiv = useRef(null)
  const height = titleDiv.current ? titleDiv.current.offsetHeight : 115
  return (
    <HeroImageStyled titleHeight={height}>
      <BgImg
        className="hero-image"
        Tag="div"
        fluid={acf._adw_hit_hero_image.localFile.childImageSharp.fluid}
      />
      <div ref={titleDiv} className="hero-title">
        <h2>{acf._adw_hit_hero_title ? acf._adw_hit_hero_title : title}</h2>
      </div>
    </HeroImageStyled>
  )
}

export default HeroImage
