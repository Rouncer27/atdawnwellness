import React from "react"
import styled from "styled-components"
import {
  bodyCopy,
  colors,
  fonts,
  fontSizer,
  headlineFive,
  headlineFour,
  headlineOne,
  headlineThree,
  headlineTwo,
  medWrapper,
} from "../../Utilities"

const PostArticle = ({ data }) => {
  return (
    <StyledArticle>
      <div className="article-wrapper">
        <PostWysiwygStyled>
          <div
            className="article-wysiwyg wysiwygContent"
            dangerouslySetInnerHTML={{ __html: data.acf.post_article }}
          />
        </PostWysiwygStyled>
      </div>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  .article-wrapper {
    ${medWrapper}
    max-width: 120rem !important;
  }

  .article-wysiwyg {
    width: 100%;
  }
`

const PostWysiwygStyled = styled.div`
  width: 100%;

  .flexboxDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .wysiwygContent {
    width: 100%;
    max-width: 100%;
    margin-bottom: 2.5rem;
    overflow: hidden;

    &::after {
      display: table;
      clear: both;
      content: "";
    }

    .post-edit-link {
      font-size: 1.6rem;
    }

    video {
      width: 35rem !important;

      @media (min-width: 768px) {
        width: 75rem !important;
        min-height: 40rem !important;
      }

      @media (min-width: 1025px) {
        width: 90rem !important;
      }
    }

    blockquote {
      display: block;
      width: 95%;
      margin: 1.5rem auto 2rem;
      padding: 0 2.25rem;
      border-right: 5px solid ${colors.colorAccent};
      border-left: 5px solid ${colors.colorAccent};
      font-size: 1.6rem;
      font-style: $italic;

      @media (min-width: 768px) {
        width: 80%;
        margin: 5em auto;
        padding: 0 3rem;
      }

      p {
        margin-bottom: 0;

        &::before,
        &::after {
          font-family: ${fonts.fontAwesome};
          color: rgba($color-secondary, 1);
        }

        &::before {
          padding-right: 0.25em;
          content: "\f10d";
        }

        &::after {
          padding-left: 0.25em;
          content: "\f10e";
        }
      }
    }

    hr {
      display: block;
      height: 0.25em;
      background-color: ${colors.colorSecondary};
    }

    ul {
      margin-bottom: 2.5rem;

      li {
        ${bodyCopy};
        position: relative;
        margin-bottom: 0.75em;
        padding-left: 0.75em;
        font-size: 1.6rem;

        &::before {
          font-family: ${fonts.fontAwesome};
          position: absolute;
          top: 1rem;
          left: 0;
          padding-right: 0.5em;
          color: ${colors.colorSecondary};
          font-weight: bold;
          font-size: 0.7rem;
          content: "\f111";
        }

        ul {
          li {
            margin-bottom: 0.25em;
            &::before {
              content: "\f10c";
            }
          }
        }
      }
    }

    ol {
      margin-bottom: 2.5rem;
      margin-left: 0rem;
      overflow: visible;

      li {
        ${bodyCopy};
        position: relative;
        margin-bottom: 0.75em;
        padding-left: 0.75em;
        font-size: 1.6rem;
        list-style-position: inside;
        list-style-type: decimal;

        ol {
          li {
            margin-bottom: 0.25em;
          }
        }
      }
    }

    strong {
      font-weight: bold;
    }

    em {
      font-style: $italic;
    }

    h1 {
      ${headlineOne};
    }

    h2 {
      ${headlineTwo};
    }

    h3 {
      ${headlineThree}
    }

    h4 {
      ${headlineFour}
    }

    h5 {
      ${headlineFive}
    }

    h6 {
      ${headlineFive}
      ${fontSizer(1.8, 2, 76.8, 150, 2)};
    }

    p {
      ${bodyCopy};

      a {
        transition: all 0.3s;
        color: ${colors.colorSecondary};
        font-weight: bold;
        font-size: 1em;

        &:hover {
          color: ${colors.colorPrimary};
        }
      }
    }

    a {
      transition: all 0.3s;
      color: ${colors.colorSecondary};
      font-weight: bold;
      font-size: 1em;

      &:hover {
        color: ${colors.colorPrimary};
      }
    }

    del {
      color: ${colors.colorSecondary};
    }

    /* WordPress Core */
    .alignnone {
      max-width: 100% !important;
      margin: 5px 20px 20px 0;

      @media (max-width: 767px) {
        width: 100% !important;
        max-width: 34rem !important;
        margin: 5px auto !important;
        padding-left: 5rem;
      }

      @media (min-width: 768px) {
        width: 75% !important;
      }

      @media (min-width: 1025px) {
        width: 100% !important;
      }
    }

    .aligncenter,
    div.aligncenter {
      display: block;
      margin: 2rem auto;
    }

    .alignright {
      float: right;
      margin: 5px 0 20px 20px;
    }

    .alignleft {
      float: left;
      margin: 5px 20px 20px 0;
    }

    a img.alignright {
      float: right;
      margin: 5px 0 20px 20px;
    }

    a img.alignnone {
      margin: 5px 20px 20px 0;
    }

    a img.alignleft {
      float: left;
      margin: 5px 20px 20px 0;
    }

    a img.aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .wp-caption {
      background: #fff;
      border: 1px solid #f0f0f0;
      max-width: 96%; /* Image does not overflow the content area */
      padding: 5px 3px 10px;
      text-align: center;
    }

    .wp-caption.alignnone {
      margin: 5px 20px 20px 0;
    }

    .wp-caption.alignleft {
      margin: 5px 20px 20px 0;
    }

    .wp-caption.alignright {
      margin: 5px 0 20px 20px;
    }

    .wp-caption img {
      border: 0 none;
      height: auto;
      margin: 0;
      max-width: 98.5%;
      padding: 0;
      width: auto;
    }

    .wp-caption p.wp-caption-text {
      font-size: 1.1rem;
      line-height: 17px;
      margin: 0;
      padding: 0 4px 5px;
    }

    /* Text meant only for screen readers. */
    .screen-reader-text {
      clip: rect(1px, 1px, 1px, 1px);
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }

    .screen-reader-text:focus {
      background-color: #f1f1f1;
      border-radius: 3px;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
      clip: auto !important;
      color: #21759b;
      display: block;
      font-size: 14px;
      font-size: 0.875rem;
      font-weight: bold;
      height: auto;
      left: 5px;
      line-height: normal;
      padding: 15px 23px 14px;
      text-decoration: none;
      top: 5px;
      width: auto;
      z-index: 100000; /* Above WP toolbar. */
    }

    img {
      width: auto;
    }
  }
`
export default PostArticle
