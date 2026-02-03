import React from "react"
import styled from "styled-components"
import { colors, headlineFive, medWrapper } from "../../Utilities"

const RelatedArticles = ({ data }) => {
  return (
    <StyledSection>
      <div className="related-wrapper">
        <div className="related-title">
          <h2>Related Articles</h2>
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
`

export default RelatedArticles
