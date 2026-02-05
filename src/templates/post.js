import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"
import PostHeader from "../components/post/PostHeader"
import PostArticle from "../components/post/PostArticle"
import PostNav from "../components/post/PostNav"

const post = props => {
  const { postHeader, postArticle, seoInfo } = props.data

  return (
    <Layout location={props.location.pathname}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <PostHeader data={postHeader} />
      <PostArticle data={postArticle} />
      <PostNav
        prevSlug={props.pathContext.prev}
        nextSlug={props.pathContext.next}
      />
    </Layout>
  )
}

export const query = graphql`
  query singlePostQuery($slug: String!) {
    seoInfo: wordpressPost(slug: { eq: $slug }) {
      acf {
        _swb_theme_meta_title
        _swb_theme_description
        _swb_theme_image {
          localFile {
            publicURL
          }
        }
      }
    }

    postHeader: wordpressPost(slug: { eq: $slug }) {
      title
      acf {
        article_author
        post_featured_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        service_category {
          post_title
        }
      }
    }

    postArticle: wordpressPost(slug: { eq: $slug }) {
      title
      acf {
        post_article
      }
    }
  }
`

export default post
