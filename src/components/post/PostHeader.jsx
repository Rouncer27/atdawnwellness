import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { bodyCopy, colors, headlineFive, medWrapper } from "../../Utilities"

const PostHeader = ({ data }) => {
  return (
    <StyledHeader>
      <div className="header-wrapper">
        <div className="header-image">
          <div className="header-image-inner">
            <Img
              fluid={
                data.acf.post_featured_image.localFile.childImageSharp.fluid
              }
              alt={data.acf.post_featured_image.alt_text}
            />
          </div>
        </div>
        <div className="header-title">
          <h1 dangerouslySetInnerHTML={{ __html: data.title }} />
        </div>
        <div className="header-meta">
          <p>By {data.acf.article_author}</p>
          <p>Category: {data.acf.service_category[0].post_title}</p>
        </div>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.section`
  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1025px) {
    padding: 25rem 0 2rem;
  }

  .header-wrapper {
    ${medWrapper}
    max-width: 120rem !important;
  }

  .header-image {
    width: 100%;

    &-inner {
      max-width: 45rem;
    }
  }

  .header-title {
    width: 100%;

    h1 {
      ${headlineFive};
      color: ${colors.colorPrimary};
    }
  }

  .header-meta {
    width: 100%;

    p {
      ${bodyCopy};
      margin: 0;
      text-transform: uppercase;
    }
  }
`

export default PostHeader
