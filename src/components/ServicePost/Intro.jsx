import React from "react"
import styled from "styled-components"
import {
  bodyCopy,
  colors,
  headlineFive,
  headlineTwo,
  medWrapper,
} from "../../Utilities"

const Intro = ({ data }) => {
  return (
    <StyledSection>
      <div className="intro-wrapper">
        <div className="intro-title">
          <h2>{data.acf.service_title}</h2>
        </div>
        <div
          className="intro-content"
          dangerouslySetInnerHTML={{ __html: data.acf.intro_content }}
        />
        <div
          className="intro-callout"
          dangerouslySetInnerHTML={{ __html: data.acf.intro_callout }}
        />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 2rem 0;

  .intro-wrapper {
    ${medWrapper}
    max-width: 120rem !important;
  }

  .intro-title {
    width: 100%;

    h2 {
      ${headlineFive};
      color: ${colors.colorPrimary};
    }
  }

  .intro-content {
    width: 100%;
    margin-bottom: 5.5rem;

    p {
      ${bodyCopy};
    }
  }

  .intro-callout {
    width: 100%;
    padding: 3.5rem 1rem;
    text-align: center;
    border-top: 0.1rem solid ${colors.colorPrimary};
    border-bottom: 0.1rem solid ${colors.colorPrimary};

    p {
      ${headlineTwo};
      margin: 0;
      color: ${colors.colorPrimary};
    }
  }
`

export default Intro
