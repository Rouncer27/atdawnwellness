import React from "react"
import styled from "styled-components"
import { headlineThreeSmall, bodyCopy } from "../Utilities"

const TopQuoteSection = styled.div`
  @media (min-width: 1025px) {
    padding-top: 15rem;
  }

  .wrapper {
    max-width: 75rem;
    margin: auto;
    padding: 2rem;

    @media (min-width: 1025px) {
      max-width: 100%;
      margin: 0;
      padding: 0;
    }
  }

  .quote-container {
    width: 100%;
    text-align: center;

    @media (min-width: 768px) {
      width: 70%;
      margin-right: 15%;
      margin-left: 15%;
    }

    @media (min-width: 1025px) {
      width: 50%;
      margin-right: 25%;
      margin-left: 25%;
      text-align: left;
    }
  }

  .quote-body {
    p {
      ${headlineThreeSmall};
      margin-bottom: 2rem;
      color: #b7aa9b;
    }
  }

  .quote-author {
    p {
      ${bodyCopy};
      margin: 0;
      color: #81a5a3;
      font-weight: bold;
    }
  }
`

const TopQuote = ({ data }) => {
  const quote = data.acf._adw_toq_quote
  const author = data.acf._adw_toq_author
  return (
    <TopQuoteSection>
      <div className="wrapper">
        <div className="quote-container">
          <div
            className="quote-body"
            dangerouslySetInnerHTML={{ __html: quote }}
          />
          <div className="quote-author">
            <p>&ndash; {author}</p>
          </div>
        </div>
      </div>
    </TopQuoteSection>
  )
}

export default TopQuote
