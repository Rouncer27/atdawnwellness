import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  bodyCopy,
  bodyCopyTwo,
  colors,
  headlineOne,
  headlineTwo,
  medWrapper,
} from "../../Utilities"
import { Link } from "gatsby"

const Articles = ({ data, categories }) => {
  const [activeCategory, setActiveCategory] = useState("")

  const posts = data.edges
  const cats = categories.edges

  const activePosts =
    activeCategory === ""
      ? posts
      : posts.filter(post =>
          post.node.categories.some(cat => cat.slug === activeCategory)
        )

  const handleChangeCategory = slug => {
    setActiveCategory(slug)
  }

  return (
    <StyledSection className="articles">
      <div className="wrapper">
        <div className="articles-title">
          <h2>Resources</h2>
        </div>
        <div className="articles-navigation">
          <ul>
            <li
              onClick={() => handleChangeCategory("")}
              className={activeCategory === "" ? "active" : ""}
            >
              All <span> | </span>
            </li>
            {cats.map((cat, index) => {
              return (
                <li
                  key={cat.node.slug}
                  onClick={() => handleChangeCategory(cat.node.slug)}
                  className={activeCategory === cat.node.slug ? "active" : ""}
                >
                  {cat.node.name}
                  {cats.length > index + 1 ? <span> | </span> : null}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="articles-wrapper">
          {activePosts.length > 0 ? (
            activePosts.map((post, index) => {
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
                    <Link to={`/resources/${post.node.slug}`}>Read More</Link>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="articles-no-found">
              <div>
                <p>No Posts in your selected Category - {activeCategory}</p>
              </div>
            </div>
          )}
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

  .articles-title {
    width: 100%;

    h2 {
      ${headlineOne};
      color: ${colors.colorPrimary};
    }
  }

  .articles-navigation {
    width: 100%;
    margin-bottom: 2.5rem;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;

      li {
        ${bodyCopyTwo};
        color: ${colors.colorPrimary};
        cursor: pointer;
        padding-left: 0.5rem;
        text-transform: uppercase;

        @media (max-width: 767px) {
          width: 100%;

          span {
            display: none;
          }
        }

        &.active {
          color: ${colors.colorAccent};
          cursor: default;

          span {
            color: ${colors.colorPrimary};
          }
        }
      }
    }
  }

  .articles-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .post {
    width: calc(100%);
    margin-bottom: 2.5rem;

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

  .articles-no-found {
    width: 100%;
    margin: 5rem auto 2rem;
    text-align: center;

    p {
      ${headlineTwo};
      color: ${colors.colorPrimary};
    }
  }
`

export default Articles
