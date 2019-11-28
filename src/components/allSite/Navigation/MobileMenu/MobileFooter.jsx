import React from "react"
import styled from "styled-components"
import SocialFollow from "../../SocialMedia/SocialFollow"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  query mobileSocialFollow {
    themeOps: wordpressAcfOptions {
      options {
        swb_theme_social_media {
          social_url
          social_type
        }
      }
    }
  }
`

const MobileFooterStyled = styled.div`
  width: 100%;
  margin-top: 5rem;
  padding: 2rem;
  text-align: center;

  .wrapper {
    justify-content: center;
  }
`

const MobileFooter = () => {
  const data = useStaticQuery(getData)
  const { options } = data.themeOps
  const socialIcons = options.swb_theme_social_media
  return (
    <MobileFooterStyled>
      <SocialFollow icons={socialIcons} />
    </MobileFooterStyled>
  )
}

export default MobileFooter
