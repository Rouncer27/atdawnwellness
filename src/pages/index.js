import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

import TopQuote from "../components/shared/TopQuote"
import IntroCrop from "../components/homePage/IntroCrop"
import HeroDivider from "../components/homePage/HeroDivider"
import ContentCircleImg from "../components/homePage/ContentCircleImg"
import ServicesList from "../components/homePage/ServicesList"
import ImageGallery from "../components/homePage/ImageGallery"
import Testimonials from "../components/shared/Testimonials"

const IndexPage = props => {
  const {
    topQuote,
    introCrop,
    heroDivider,
    contentCircleImg,
    servicesList,
    testimonials,
    imageGallery,
    seoInfo,
  } = props.data
  return (
    <Layout location={props.location.pathname}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo._swb_theme_description}
        metaImg={seoInfo._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <TopQuote data={topQuote} />
      <IntroCrop data={introCrop} />
      <HeroDivider data={heroDivider} />
      <ContentCircleImg data={contentCircleImg} />
      <ServicesList data={servicesList} />
      <ImageGallery data={imageGallery} />
      <Testimonials data={testimonials} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    seoInfo: wordpressPage(slug: { eq: "home" }) {
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

    topQuote: wordpressPage(slug: { eq: "home" }) {
      acf {
        _adw_toq_quote
        _adw_toq_author
      }
    }

    introCrop: wordpressPage(slug: { eq: "home" }) {
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

    heroDivider: wordpressPage(slug: { eq: "home" }) {
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

    contentCircleImg: wordpressPage(slug: { eq: "home" }) {
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

    servicesList: wordpressPage(slug: { eq: "home" }) {
      acf {
        _adw_srl_services_list {
          service_title
          service_icon
          service_description
        }
      }
    }

    imageGallery: wordpressPage(slug: { eq: "home" }) {
      acf {
        _adw_pal_image_one {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _adw_gal_image_two {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _adw_gal_image_three {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _adw_gal_image_four {
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

    testimonials: allWordpressAcfTestimonials {
      edges {
        node {
          acf {
            _adw_tpt_testimonial_body
            _adw_tpt_testimonial_name
          }
        }
      }
    }
  }
`

export default IndexPage
