import React from "react"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

const DefaultPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>defaultPage</h1>
    </Layout>
  )
}

export default DefaultPage
