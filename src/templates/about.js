import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

import TopQuote from "../components/shared/TopQuote"
import AboutIntro from "../components/aboutPage/AboutIntro"
import DividerImages from "../components/aboutPage/DividerImg"
import PeopleBehind from "../components/aboutPage/PeopleBehind"
import WhereFind from "../components/aboutPage/WhereFind"
import CircleImgQuote from "../components/aboutPage/CircleImgQuote"
import GalleryLoading from "../components/aboutPage/GalleryLoading"

const About = props => {
  const { topQuote } = props.data
  const { aboutIntro } = props.data
  const { dividerImg } = props.data
  const { peopleBehind } = props.data
  const { whereToFind } = props.data
  const { circleImgQuote } = props.data
  const { loadGallery } = props.data
  const { seoInfo } = props.data
  return (
    <Layout location={props.location.pathname}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <TopQuote data={topQuote} />
      <AboutIntro data={aboutIntro} />
      <DividerImages data={dividerImg} />
      <PeopleBehind data={peopleBehind} />
      <WhereFind data={whereToFind} />
      <CircleImgQuote data={circleImgQuote} />
      <GalleryLoading data={loadGallery} />
    </Layout>
  )
}

export const query = graphql`
  query aboutPage($id: Int!) {
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

    aboutIntro: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_about_intro_main_title
        _adw_about_intro_side_title
        _adw_about_intro_main_content
      }
    }

    dividerImg: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_dig_image_one {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _adw_dig_image_two {
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

    peopleBehind: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_pbi_main_title
        _adw_pbi_team {
          team
          name
          sub_title
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

    whereToFind: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_htfu_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _adw_htfu_title
        _adw_htfu_sub_title
        _adw_htfu_content
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
