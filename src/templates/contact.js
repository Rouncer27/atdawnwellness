import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

import TopQuote from "../components/TopQuote"
import Intro from "../components/contactPage/Intro"
import LetChat from "../components/contactPage/LetChat"
import Feedback from "../components/contactPage/Feedback"

const Contact = props => {
  const { topQuote, intro, letsChat, feedback } = props.data
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <TopQuote data={topQuote} />
      <Intro data={intro} />
      <LetChat data={letsChat} />
      <Feedback data={feedback} />
    </Layout>
  )
}

export const query = graphql`
  query contactPage($id: Int!) {
    topQuote: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_toq_quote
        _adw_toq_author
      }
    }

    intro: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_contact_intro_title
        _adw_contact_intro_content
        _adw_contact_intro_button_text
        _adw_contact_intro_button_url
        _adw_contact_intro_image {
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

    letsChat: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_contact_chat_title
        _adw_contact_chat_google_url
        _adw_contact_chat_google_image {
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

    feedback: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _adw_contact_feed_title
        _adw_contact_feed_content
        _adw_contact_feed_btn_text
        _adw_contact_feed_btn_url
      }
    }
  }
`

export default Contact
