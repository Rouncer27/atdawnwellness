import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import theme from "./allSite/styles/Theme"
import GlobalStyle from "./allSite/styles/Golbal"
import Header from "./allSite/header"
import Footer from "./allSite/Footer"

import BookNow from "./shared/BookNow"

const Layout = ({ children, location }) => {
  const slug = location.split("/").join("")
  let displayBookBtn = false
  if (
    slug === "" ||
    slug === "home" ||
    slug === "contact" ||
    slug === "services" ||
    slug === "about-us"
  ) {
    displayBookBtn = true
  }

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
          {displayBookBtn && <BookNow />}
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
