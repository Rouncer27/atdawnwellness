import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

import HeroImage from "../components/HeroImage"

const Services = props => {
  const { heroImage } = props.data
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <HeroImage data={heroImage} />
    </Layout>
  )
}

export const query = graphql`
  query servicesPage($id: Int!) {
    heroImage: wordpressPage(wordpress_id: { eq: $id }) {
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
  }
`

export default Services
