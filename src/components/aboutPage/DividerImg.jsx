import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { medWrapper } from "../../Utilities"

const DividerImgSection = styled.div`
  .wrapper {
    ${medWrapper};
  }

  .img-container {
    width: calc(100% - 1rem);
    margin: 1rem 0.5rem;

    @media (min-width: 768px) {
      width: calc(50% - 1rem);
      margin: 1rem 0.5rem;
    }

    @media (min-width: 1025px) {
      width: calc(50% - 1rem);
      margin: 1rem 0.5rem;
    }
  }
`

const DividerImg = ({ data }) => {
  const imgOneFluid =
    data.acf._adw_dig_image_one.localFile.childImageSharp.fluid
  const imgOneAlt = data.acf._adw_dig_image_one.alt_text
  const imgTwoFluid =
    data.acf._adw_dig_image_two.localFile.childImageSharp.fluid
  const imgTwoAlt = data.acf._adw_dig_image_two.alt_text
  return (
    <DividerImgSection>
      <div className="wrapper">
        <div className="img-container img-one">
          <Img fluid={imgOneFluid} alt={imgOneAlt} />
        </div>
        <div className="img-container img-two">
          <Img fluid={imgTwoFluid} alt={imgTwoAlt} />
        </div>
      </div>
    </DividerImgSection>
  )
}

export default DividerImg
