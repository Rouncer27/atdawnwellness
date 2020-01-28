import React from "react"
import styled from "styled-components"
import ImgBG from "gatsby-background-image"
import { headlineOne, bodyCopy, fontSizer, fonts } from "../../Utilities"

const WhereFindSection = styled.section`
  position: relative;
  min-height: 40rem;

  @media (min-width: 768px) {
    min-height: 50rem;
  }

  @media (min-width: 1025px) {
    min-height: 70rem;
    margin-left: 15%;
  }
  .wrapper {
    width: 100%;
    padding: 5rem 7.5rem;

    @media (min-width: 768px) {
      padding: 5rem 7.5rem;
    }
    @media (min-width: 1025px) {
      max-width: 50rem;
      padding: 5rem 7.5rem;
    }
  }

  .titles {
    h2 {
      ${headlineOne}
      margin-top: 0;
      margin-bottom: 1rem;
      color: #fff;
      font-weight: normal;
    }

    h3 {
      ${bodyCopy};
      ${fontSizer(2.6, 3.6, 76.8, 150, 2)};
      margin-top: 0;
      color: #fff;
      font-family: ${fonts.fontSecondary};
    }
  }

  .content {
    p {
      ${bodyCopy};
      color: #fff;
    }
  }

  .gatsby-image-wrapper,
  .background-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

const WhereFind = ({ data }) => {
  const title = data.acf._adw_htfu_title
  const subTitle = data.acf._adw_htfu_sub_title
  const content = data.acf._adw_htfu_content
  const imgFluid = data.acf._adw_htfu_image.localFile.childImageSharp.fluid

  return (
    <WhereFindSection>
      <div className="wrapper">
        <div className="titles">
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
        </div>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
      <div className="background-image-wrapper">
        <ImgBG tag="div" fluid={imgFluid} />
      </div>
    </WhereFindSection>
  )
}

export default WhereFind
