import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/allSite/seo/seo"
import styled from "styled-components"

import { buttonOne } from "../Utilities"

const StyledNotFound = styled.section`
  width: 100%;
  max-width: 75rem;
  margin-top: 5rem;
  margin-right: auto;
  margin-bottom: 5rem;
  margin-left: auto;
  padding: 2.5rem;

  a {
    ${buttonOne};
  }
`

const NotFoundPage = props => (
  <Layout location={props.location.pathname}>
    <SEO title="404: Not found" />
    <StyledNotFound>
      <h1>NOT FOUND</h1>
      <p>Sorry, but the page you are looking for cannot be found.</p>
      <Link to="/">Go Back Home</Link>
    </StyledNotFound>
  </Layout>
)

export default NotFoundPage
