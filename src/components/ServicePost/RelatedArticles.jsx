import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  bodyCopy,
  buttonOne,
  colors,
  headlineFive,
  headlineTwo,
  medWrapper,
} from "../../Utilities"
import { Link } from "gatsby"
import slugify from "slugify"

const RelatedArticles = ({ posts, serviceTitle }) => {
  const currentService = slugify(serviceTitle, {
    lower: true,
    strict: true,
    trim: true,
  })

  const releatedPosts = posts.edges.filter(post =>
    post.node.acf.service_category.some(
      category => category.post_name === currentService
    )
  )

  return (
    <StyledSection>
      <div className="related-wrapper">
        <div className="related-title">
          <h2>Related Articles</h2>
        </div>

        <div>
          {releatedPosts.length > 0 ? (
            <div>
              {releatedPosts.map((post, index) => {
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
                      <h2
                        dangerouslySetInnerHTML={{ __html: post.node.title }}
                      />
                    </div>
                    <div className="post-excerpt">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.node.acf.post_excerpt,
                        }}
                      />
                    </div>
                    <div className="post-link">
                      <Link to={`/resources/${post.node.slug}`}>Read More</Link>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div>
              <p>There are no related articles about {serviceTitle} yet.</p>
            </div>
          )}
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
