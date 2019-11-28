import React from "react"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ fontWeight: "bold" }}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
