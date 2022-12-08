import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

import MainPageContent from "../components/booking/MainPageContent"

const Book = props => {
  const { pageContent, seoInfo } = props.data
  return (
    <Layout location={props.location.pathname}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <MainPageContent data={pageContent} />
    </Layout>
  )
}

export const query = graphql`
  query bookingPage($id: Int!) {
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

    pageContent: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_page_title
        _adw_page_main_content
      }
    }
  }
`

export default Book
