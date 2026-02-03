import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

import TopQuote from "../components/shared/TopQuote"
import IntroSec from "../components/servicesPage/IntroSec"
import KeyServices from "../components/servicesPage/KeyServices"
import Testimonials from "../components/shared/Testimonials"

const Services = props => {
  const {
    topQuote,
    introContent,
    keyServices,
    testimonials,
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
      <TopQuote data={topQuote} />
      <IntroSec data={introContent} />
      <KeyServices data={keyServices} />
      <Testimonials data={testimonials} />
    </Layout>
  )
}

export const query = graphql`
  query servicesPage($id: Int!) {
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

    introContent: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_ser_intro_title
        _adw_ser_side_title
        _adw_ser_content
      }
    }

    keyServices: allWordpressAcfService {
      edges {
        node {
          acf {
            service_title
            featured_image {
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
      }
    }

    servicsDescriptions: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_ser_services {
          title
          description
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          icon
        }
      }
    }

    servicesIcons: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_ser_services_icons {
          title
          description
          icon
          image {
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

export default Services
