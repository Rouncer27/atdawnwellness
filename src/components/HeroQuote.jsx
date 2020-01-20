import React from "react"
import BgImg from "gatsby-background-image"
import styled from "styled-components"
import { colors, fonts, headlineThreeSmall, bodyCopy } from "../Utilities"

const HeroQuoteSection = styled.section`
  position: relative;
  width: 100%;

  .wrapper {
    position: relative;
    width: 100%;
    padding-top: 15rem;
    padding-bottom: 15rem;

    @media (min-width: 768px) {
      width: 90%;
      margin-right: 0;
      margin-left: auto;
    }
  }

  .quote-content {
    width: 100%;
    margin: 0 auto;
    text-align: center;

    @media (min-width: 768px) {
      max-width: 65rem;
    }

    &__body {
      p {
        ${headlineThreeSmall};
        margin-bottom: 2.5rem;
        color: ${colors.white};
      }
    }

    &__author {
      p {
        ${bodyCopy};
        margin: 0;
        color: ${colors.colorAccent};
        text-transform: uppercase;
      }
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

const HeroQuote = ({ data }) => {
  const body = data.acf._adw_hq_quote_body
  const author = data.acf._adw_hq_quote_author
  const heroFluid = data.acf._adw_hq_image.localFile.childImageSharp.fluid

  return (
    <HeroQuoteSection>
      <div className="wrapper">
        <div className="quote-content">
          <div
            className="quote-content__body"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <div className="quote-content__author">
            <p>- {author}</p>
          </div>
        </div>
        <div className="background-image">
          <BgImg tag="div" fluid={heroFluid} />
        </div>
      </div>
    </HeroQuoteSection>
  )
}

export default HeroQuote
