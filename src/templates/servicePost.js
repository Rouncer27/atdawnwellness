import React from "react"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

import TopQuote from "../components/shared/TopQuote"
import Intro from "../components/ServicePost/Intro"
import MainContent from "../components/ServicePost/MainContent"
import Team from "../components/ServicePost/Team"
import RelatedArticles from "../components/ServicePost/RelatedArticles"

const servicePost = props => {
  const { topQuote, intro, mainContent, team, posts, seoInfo } = props.data

  return (
    <Layout location={props.location.pathname}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <TopQuote data={topQuote} />
      <Intro data={intro} />
      <MainContent data={mainContent} />
      <Team data={team} />
      <RelatedArticles posts={posts} serviceTitle={intro.acf.service_title} />
    </Layout>
  )
}

export const query = graphql`
  query servicesPost($id: Int!) {
    seoInfo: wordpressAcfService(wordpress_id: { eq: $id }) {
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

    topQuote: wordpressAcfService(wordpress_id: { eq: $id }) {
      acf {
        _adw_toq_quote
        _adw_toq_author
      }
    }

    intro: wordpressAcfService(wordpress_id: { eq: $id }) {
      acf {
        service_title
        intro_content
        intro_callout
      }
    }

    mainContent: wordpressAcfService(wordpress_id: { eq: $id }) {
      acf {
        main_content_title
        main_content_article
        main_content_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    team: wordpressAcfService(wordpress_id: { eq: $id }) {
      acf {
        about_team_title
        about_team_content
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
  }
`

export default servicePost
