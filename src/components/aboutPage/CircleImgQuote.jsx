import React, { useEffect, useRef } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  medWrapper,
  headlineThree,
  headlineThreeSmall,
  bodyCopy,
} from "../../Utilities"

const CircleImgQuoteSection = styled.div`
  padding: 5rem 0;

  @media (min-width: 1025px) {
    padding: 10rem 0;
  }

  .wrapper {
    ${medWrapper};
  }

  .quote-image {
    align-self: center;
    width: calc(50% - 5rem);
    margin: 0 5rem 2.5rem;

    @media (min-width: 768px) {
      width: calc(30% - 5rem);
    }

    @media (min-width: 1025px) {
      width: calc(30% - 10rem);
      margin: auto 5rem;
    }

    &__square {
      border: solid 1rem #e8ecf5;
      border-radius: 50%;
      overflow: hidden;

      @media (min-width: 1025px) {
        border: solid 2rem #e8ecf5;
      }
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
        color: #b7aa9b;
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

const preventTheWidows = quoteSec => {
  const quote = [...quoteSec.current.querySelectorAll("p")]

  quote.forEach(para => {
    const wordArray = para.innerText.split(" ")

    if (wordArray.length > 1) {
      wordArray[wordArray.length - 2] +=
        "&nbsp;" + wordArray[wordArray.length - 1]
      wordArray.pop()
    }

    const newQuote = wordArray.join(" ")
    para.innerHTML = newQuote
  })
}

const CircleImgQuote = ({ data }) => {
  const imgFluid = data.acf._adw_ciq_image.localFile.childImageSharp.fluid
  const imgAlt = data.acf._adw_ciq_image.alt_text
  const quote = data.acf._adw_ciq_quote
  const name = data.acf._adw_ciq_name
  const quoteSec = useRef(null)
  useEffect(() => preventTheWidows(quoteSec), [])

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
            ref={quoteSec}
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
