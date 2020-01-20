import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { medWrapper } from "../Utilities"

const ImageGalleryStyled = styled.div`
  padding: 10rem 0;
  padding-bottom: 20rem;

  .wrapper {
    ${medWrapper};
    align-items: center;
  }
`

const ImageOne = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1025px) {
    width: calc(50%);
    margin-top: auto;
    margin-left: 0;
    margin-bottom: -45rem;
    padding: 2rem;
  }
`

const ImageTwo = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1025px) {
    width: calc(50% - 20rem);
    margin-top: auto;
    margin-right: 20rem;
    margin-bottom: 0;
    padding: 2rem;
  }
`

const ImageThree = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1025px) {
    width: calc(50% - 20rem);
    margin-top: auto;
    margin-left: 20rem;
    margin-bottom: -15rem;
    padding: 2rem;
  }
`

const ImageFour = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1025px) {
    padding: 2rem;
  }
`

const ImageGallery = ({ data }) => {
  const imgOneFluid =
    data.acf._adw_pal_image_one.localFile.childImageSharp.fluid
  const imgOneAlt = data.acf._adw_pal_image_one.alt_text

  const imgTwoFluid =
    data.acf._adw_gal_image_two.localFile.childImageSharp.fluid
  const imgTwoAlt = data.acf._adw_gal_image_two.alt_text

  const imgThreeFluid =
    data.acf._adw_gal_image_three.localFile.childImageSharp.fluid
  const imgThreeAlt = data.acf._adw_gal_image_three.alt_text

  const imgFourFluid =
    data.acf._adw_gal_image_four.localFile.childImageSharp.fluid
  const imgFourAlt = data.acf._adw_gal_image_four.alt_text

  return (
    <ImageGalleryStyled>
      <div className="wrapper">
        <ImageOne>
          <Img fluid={imgOneFluid} alt={imgOneAlt} />
        </ImageOne>

        <ImageTwo>
          <Img fluid={imgTwoFluid} alt={imgTwoAlt} />
        </ImageTwo>

        <ImageThree>
          <Img fluid={imgThreeFluid} alt={imgThreeAlt} />
        </ImageThree>

        <ImageFour>
          <Img fluid={imgFourFluid} alt={imgFourAlt} />
        </ImageFour>
      </div>
    </ImageGalleryStyled>
  )
}

export default ImageGallery
