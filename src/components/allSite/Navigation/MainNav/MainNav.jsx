import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import MainNavItem from "./MainNavItem"
import SocialFollow from "../../SocialMedia/SocialFollow"

const MainNavStyled = styled.nav`
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    z-index: 10;
  }
`

const MainNavUl = styled.ul`
  display: none;
  align-self: center;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 1025px) {
    width: 70%;
  }
`

const MainLogo = styled.div`
  width: 100%;
  max-width: 16.5rem;
  margin: 5rem auto 2.5rem;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 20rem;
    margin: 5rem auto;
    align-self: center;
  }

  @media (min-width: 1025px) {
    width: 15%;
    padding: 2rem;
    margin: 0 auto;
  }

  h1 {
    position: absolute;
    left: -999%;
  }

  img {
    width: 100%;
  }
`

const SocialMedia = styled.div`
  display: none;
  width: 100%;

  @media (min-width: 768px) {
    display: block;
    align-self: center;
    margin-top: 2.5rem;
  }

  @media (min-width: 1025px) {
    width: 15%;
    margin-top: 0;
    padding: 2rem;
  }
`

const MainNav = ({ siteTitle, location }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          wordpressWpApiMenusMenusItems(name: { eq: "Main Menu" }) {
            items {
              wordpress_id
              title
              object_slug
            }
          }

          wordpressAcfOptions {
            options {
              swb_theme_main_logo {
                alt_text
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              swb_theme_social_media {
                social_url
                social_type
              }
            }
          }
        }
      `}
      render={data => {
        const menuItems = data.wordpressWpApiMenusMenusItems.items
        const mainLogo = data.wordpressAcfOptions.options.swb_theme_main_logo
        const socialIcons =
          data.wordpressAcfOptions.options.swb_theme_social_media

        return (
          <MainNavStyled>
            <MainLogo>
              <h1>{siteTitle}</h1>
              <Link to="/">
                <Img
                  fluid={mainLogo.localFile.childImageSharp.fluid}
                  alt={mainLogo.alt_text}
                />
              </Link>
            </MainLogo>
            <MainNavUl>
              {menuItems.map((item, index) => {
                return <MainNavItem key={index} {...item} location={location} />
              })}
            </MainNavUl>
            <SocialMedia>
              <SocialFollow icons={socialIcons} />
            </SocialMedia>
          </MainNavStyled>
        )
      }}
    />
  )
}

export default MainNav
