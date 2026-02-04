import React from "react"
import styled from "styled-components"
import { buttonOne, colors, headlineFive, medWrapper } from "../../Utilities"
import { Link } from "gatsby"

const RelatedArticles = ({ data }) => {
  return (
    <StyledSection>
      <div className="related-wrapper">
        <div className="related-title">
          <h2>Related Articles</h2>
        </div>
        <div className="related-home">
          <Link to="/services">Back to Services</Link>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 2rem 0;

  .related-wrapper {
    ${medWrapper}
    max-width: 120rem !important;
  }

  .related-title {
    width: 100%;

    h2 {
      ${headlineFive};
      color: ${colors.colorPrimary};
    }
  }

  .related-home {
    width: 100%;
    text-align: center;

    a {
      ${buttonOne};
      text-transform: uppercase;
    }
  }
`

export default RelatedArticles
