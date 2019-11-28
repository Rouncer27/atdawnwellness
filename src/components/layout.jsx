import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import theme from "./allSite/styles/Theme"
import GlobalStyle from "./allSite/styles/Golbal"
import Header from "./allSite/header"
import Footer from "./allSite/footer"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Header
            siteTitle={data.site.siteMetadata.title}
            location={location}
          />
          <main>{children}</main>
          <Footer />
        </React.Fragment>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
