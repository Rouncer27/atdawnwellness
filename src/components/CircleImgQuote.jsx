import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  medWrapper,
  headlineThree,
  headlineThreeSmall,
  bodyCopy,
} from "../Utilities"

const CircleImgQuoteSection = styled.div`
  .wrapper {
    ${medWrapper};
  }

  .quote-image {
    align-self: center;

    @media (min-width: 1025px) {
      width: calc(30% - 10rem);
      margin: auto 5rem;
    }

    &__square {
      border: solid 2rem #e8ecf5;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .quote-content {
    align-self: center;

    @media (min-width: 1025px) {
      width: calc(70% - 10rem);
      margin: 1rem 5rem;
    }

    &__body {
      text-align: center;

      p {
        ${headlineThreeSmall};
        margin-bottom: 2.5rem;
        color: #2c2c2c;
      }
    }

    &__name {
      text-align: center;

      p {
        ${bodyCopy};
        margin-bottom: 0;
        color: #437a7e;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
`

const CircleImgQuote = ({ data }) => {
  const imgFluid = data.acf._adw_ciq_image.localFile.childImageSharp.fluid
  const imgAlt = data.acf._adw_ciq_image.alt_text
  const quote = data.acf._adw_ciq_quote
  const name = data.acf._adw_ciq_name
  return (
    <CircleImgQuoteSection>
      <div className="wrapper">
        <div className="quote-image">
          <div className="quote-image__square">
            <Img fluid={imgFluid} alt={imgAlt} />
          </div>
        </div>
        <div className="quote-content">
          <div
            className="quote-content__body"
            dangerouslySetInnerHTML={{ __html: quote }}
          />
          <div className="quote-content__name">
            <p>&ndash; {name}</p>
          </div>
        </div>
      </div>
    </CircleImgQuoteSection>
  )
}

export default CircleImgQuote
