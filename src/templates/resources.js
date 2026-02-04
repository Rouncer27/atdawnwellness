import React from "react"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"
import TopQuote from "../components/shared/TopQuote"
import Articles from "../components/resourcesPage/Articles"

const resources = props => {
  const { topQuote, posts, categories, seoInfo } = props.data
  return (
    <Layout location={props.location.pathname}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <TopQuote data={topQuote} />
      <Articles data={posts} categories={categories} />
    </Layout>
  )
}

export const query = graphql`
  query resourcesPage($id: Int!) {
    seoInfo: wordpressPage(wordpress_id: { eq: $id }) {
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

    topQuote: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_toq_quote
        _adw_toq_author
      }
    }

    posts: allWordpressPost {
      edges {
        node {
          title
          categories {
            slug
            name
          }
          slug
          acf {
            post_excerpt
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
              post_name
              post_title
            }
          }
        }
      }
    }

    categories: allWordpressCategory {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
`

export default resources
