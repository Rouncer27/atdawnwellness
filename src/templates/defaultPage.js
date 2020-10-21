import React from "react"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

import IntroCrop from "../components/DefaultPage/IntroCrop"
import HeroDivider from "../components/homePage/HeroDivider"
import ContentCircleImg from "../components/homePage/ContentCircleImg"
import ContentWysiwyg from "../components/DefaultPage/ContentWysiwyg"

const DefaultPage = props => {
  const {
    introCrop,
    heroDivider,
    contentCircleImg,
    constentWysiwyg,
    seoInfo,
  } = props.data

  return (
    <Layout location={props.location.pathname}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <IntroCrop data={introCrop} />
      <ContentWysiwyg content={constentWysiwyg} />
      <HeroDivider data={heroDivider} />
      <ContentCircleImg data={contentCircleImg} />
    </Layout>
  )
}

export const defaultPageQuery = graphql`
  query defaultPage($id: Int!) {
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

    introCrop: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_icc_main_title
        _adw_icc_side_title
        _adw_icc_content
        _adw_ic_crop_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    heroDivider: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_hq_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    contentCircleImg: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_cci_main_title
        _adw_cci_side_title
        _adw_cci_main_content
        _adw_cci_circle_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    constentWysiwyg: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_wys_main_page_content
      }
    }
  }
`

export default DefaultPage
