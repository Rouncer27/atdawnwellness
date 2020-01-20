import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

import HeroImage from "../components/HeroImage"
import IntroCrop from "../components/IntroCrop"
import HeroQuote from "../components/HeroQuote"
import ContentCircleImg from "../components/ContentCircleImg"
import ServicesList from "../components/ServicesList"
import ImageGallery from "../components/ImageGallery"
import Testimonials from "../components/Testimonials"

const IndexPage = props => {
  const {
    heroImage,
    introCrop,
    heroQuote,
    contentCircleImg,
    servicesList,
    testimonials,
    imageGallery,
  } = props.data
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <HeroImage data={heroImage} />
      <IntroCrop data={introCrop} />
      <HeroQuote data={heroQuote} />
      <ContentCircleImg data={contentCircleImg} />
      <ServicesList data={servicesList} />
      <ImageGallery data={imageGallery} />
      <Testimonials data={testimonials} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    heroImage: wordpressPage(slug: { eq: "home" }) {
      title
      acf {
        _adw_hit_hero_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _adw_hit_hero_title
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

    heroQuote: wordpressPage(slug: { eq: "home" }) {
      acf {
        _adw_hq_quote_body
        _adw_hq_quote_author
        _adw_hq_image {
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
