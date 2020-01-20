import React from "react"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

const Book = props => {
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <h1>book</h1>
    </Layout>
  )
}

export default Book
