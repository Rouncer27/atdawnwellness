import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

import TopQuote from "../components/shared/TopQuote"
import IntroSec from "../components/servicesPage/IntroSec"
import ServicesDes from "../components/servicesPage/ServicesDes"
import ServicesIcons from "../components/servicesPage/ServicesIcons"
import Testimonials from "../components/shared/Testimonials"

const Services = props => {
  const {
    topQuote,
    introContent,
    servicsDescriptions,
    servicesIcons,
    testimonials,
  } = props.data
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <TopQuote data={topQuote} />
      <IntroSec data={introContent} />
      <ServicesDes data={servicsDescriptions} />
      <ServicesIcons data={servicesIcons} />
      <Testimonials data={testimonials} />
    </Layout>
  )
}

export const query = graphql`
  query servicesPage($id: Int!) {
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
