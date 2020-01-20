import React from "react"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"

const Home = props => {
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <h1>home</h1>
    </Layout>
  )
}

export default Home
