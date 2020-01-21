import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

import HeroImage from "../components/HeroImage"
import AboutIntro from "../components/AboutIntro"
import PeopleBehind from "../components/PeopleBehind"
import CircleImgQuote from "../components/CircleImgQuote"
import GalleryLoading from "../components/GalleryLoading"

const About = props => {
  const { heroImage } = props.data
  const { aboutIntro } = props.data
  const { peopleBehind } = props.data
  const { circleImgQuote } = props.data
  const { loadGallery } = props.data
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <HeroImage data={heroImage} />
      <AboutIntro data={aboutIntro} />
      <PeopleBehind data={peopleBehind} />
      <CircleImgQuote data={circleImgQuote} />
      <GalleryLoading data={loadGallery} />
    </Layout>
  )
}

export const query = graphql`
  query aboutPage($id: Int!) {
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

    aboutIntro: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_about_intro_main_title
        _adw_about_intro_side_title
        _adw_about_intro_main_content
      }
    }

    peopleBehind: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_pbi_main_title
        _adw_pbi_team {
          name
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          bio
        }
      }
    }

    circleImgQuote: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_ciq_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _adw_ciq_quote
        _adw_ciq_name
      }
    }

    loadGallery: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_lig_main_title
        _adw_lig_gallery {
          id
          source_url
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default About
