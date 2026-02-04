import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { bodyCopy, medWrapper } from "../../Utilities"

const PostNav = ({ prevSlug, nextSlug }) => {
  return (
    <StyledNavigation>
      <div className="post-nav-wrapper">
        <ul>
          <li>
            {nextSlug ? (
              <Link to={`/resources/${nextSlug}`}>Next Article</Link>
            ) : (
              <button type="button" disabled={true}>
                Next Article
              </button>
            )}
          </li>
          <li>
            <Link to="/resources">Back To Articles</Link>
          </li>
          <li>
            {prevSlug ? (
              <Link to={`/resources/${prevSlug}`}>Previous Article</Link>
            ) : (
              <button type="button" disabled={true}>
                Previous Article
              </button>
            )}
          </li>
        </ul>
      </div>
    </StyledNavigation>
  )
}

const StyledNavigation = styled.article`
  margin: 0 auto 5rem;

  .post-nav-wrapper {
    ${medWrapper}
    max-width: 120rem !important;
    border-top: 0.1rem solid #000;
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: center;

    li {
      width: calc(33.333333%);

      a,
      button {
        ${bodyCopy};
        text-transform: uppercase;
        background-color: transparent;
        border: none;
      }

      button {
        cursor: default;
      }
    }
  }
`

export default PostNav
