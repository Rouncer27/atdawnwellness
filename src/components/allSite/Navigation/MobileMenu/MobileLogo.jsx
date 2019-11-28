import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const MobileLogoStyled = styled.div`
  width: 100%;
  max-width: 20rem;
  margin: 2rem auto;
  padding: 1rem;
`

const getData = graphql`
  query mobileLogo {
    wordpressAcfOptions {
      options {
        swb_theme_main_logo {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const MobileLogo = () => {
  const data = useStaticQuery(getData)
  const mainLogo = data.wordpressAcfOptions.options.swb_theme_main_logo

  return (
    <MobileLogoStyled className="mobile-logo">
      <Img
        fluid={mainLogo.localFile.childImageSharp.fluid}
        alt={mainLogo.alt_text}
      />
    </MobileLogoStyled>
  )
}

export default MobileLogo
