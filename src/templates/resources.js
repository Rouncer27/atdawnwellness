import React from "react"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"
import TopQuote from "../components/shared/TopQuote"

import styled from "styled-components"

import {
  bodyCopy,
  colors,
  headlineFive,
  headlineTwo,
  medWrapper,
} from "../Utilities"

const resources = props => {
  const { topQuote, seoInfo } = props.data
  return (
    <Layout location={props.location.pathname}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={props.location.pathname}
      />
      <TopQuote data={topQuote} />
      <StyledSection>
        <div className="resources-wrapper">
          <div className="resources-title">
            <h1>Resources</h1>
          </div>
          <div>
            <p>Resources section coming soon!</p>
          </div>
        </div>
      </StyledSection>
    </Layout>
  )
}

const StyledSection = styled.section`
  padding: 3rem 0;

  .resources-wrapper {
    ${medWrapper};
  }

  .resources-title {
    width: 100%;
    text-align: center;
  }
`

export const query = graphql`
  query resourcesPage($id: Int!) {
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
  }
`

export default resources
