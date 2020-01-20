import React from "react"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

const DefaultPage = props => {
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <h1>defaultPage</h1>
    </Layout>
  )
}

export default DefaultPage
