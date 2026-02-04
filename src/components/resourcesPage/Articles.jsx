import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { bodyCopy, colors, headlineTwo, medWrapper } from "../../Utilities"
import { Link } from "gatsby"

const Articles = ({ data }) => {
  console.log(data)
  const posts = data.edges
  return (
    <StyledSection className="articles">
      <div className="wrapper">
        <div className="articles-wrapper">
          {posts.map((post, index) => {
            return (
              <div className="post" key={index}>
                <div className="post-featured-image">
                  <Img
                    fluid={
                      post.node.acf.post_featured_image.localFile
                        .childImageSharp.fluid
                    }
                    alt={post.node.acf.post_featured_image.alt_text}
                  />
                </div>
                <div className="post-title">
                  <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                </div>
                <div className="post-excerpt">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.node.acf.post_excerpt,
                    }}
                  />
                </div>
                <div className="post-link">
                  <Link to="/resources">Read More</Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 2rem 0;

  .wrapper {
    ${medWrapper}
  }

  .articles-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .post {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(33.333333% - 2rem);
      margin: 3rem 1rem;
    }

    &-image {
    }

    &-title {
      width: 100%;
      padding: 2rem;

      h2 {
        ${headlineTwo};
        font-family: "Open Sans";
        font-weight: normal;
        margin: 0;
        margin-bottom: 1rem;
        color: ${colors.black};
      }
    }

    .post-excerpt {
      width: 100%;
      padding: 2rem 2rem 1rem;

      p {
        ${bodyCopy};
      }
    }

    .post-link {
      width: 100%;
      padding: 0 2rem;

      a {
        ${bodyCopy};
        color: ${colors.black};
        text-transform: uppercase;

        &:hover {
          color: ${colors.colorAccent};
        }
      }
    }
  }
`

export default Articles
