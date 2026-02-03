import React from "react"
import styled from "styled-components"
import { bodyCopy, colors, headlineFour, medWrapper } from "../../Utilities"
import Img from "gatsby-image"

const MainContent = ({ data }) => {
  return (
    <StyledSection>
      <div className="main-content-wrapper">
        <div className="main-content-image">
          <div>
            <Img
              fluid={
                data.acf.main_content_image.localFile.childImageSharp.fluid
              }
              alt={data.acf.main_content_image.alt_text}
            />
          </div>
        </div>
        <div className="main-content-content">
          <div>
            <h2>{data.acf.main_content_title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: data.acf.main_content_article }}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 2rem 0;

  .main-content-wrapper {
    ${medWrapper}
    max-width: 120rem !important;
  }

  .main-content-content {
    width: 100%;

    @media (min-width: 768px) {
      width: 75%;
    }

    h2 {
      ${headlineFour};
      margin-top: 0;
      color: ${colors.colorPrimary};
    }

    p {
      ${bodyCopy};
    }
  }

  .main-content-image {
    width: calc(100%);
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      width: calc(25% - 3rem);
      margin-top: 1rem;
      margin-right: 3rem;
    }
  }
`

export default MainContent
