import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import MainNavItem from "./MainNavItem"
import SocialFollow from "../../SocialMedia/SocialFollow"
import { colors } from "../../../../Utilities"

const MainNavStyled = styled.nav`
  position: relative;
  padding: 2.5rem 0;
  background-color: ${colors.colorPrimary};

  @media (min-width: 768px) {
    padding: 2.5rem 0 0;
    background-color: ${colors.colorPrimary};
  }

  @media (min-width: 1025px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    background-color: transparent;
    z-index: 10;
  }
`

const MenuWrapper = styled.div`
  display: none;
  align-self: flex-start;
  background-color: ${colors.colorPrimary};

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media (min-width: 1025px) {
    width: 80%;
    padding: 1rem;
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
    justify-content: flex-start;
    width: 80%;
    padding-left: 5rem;
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
    width: 20%;
    max-width: 27.5rem;
    padding: 2rem 2rem;
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
    width: 20%;
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
              target
              type
              url
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
            <MenuWrapper>
              <MainNavUl>
                {menuItems.map((item, index) => {
                  return (
                    <MainNavItem key={index} {...item} location={location} />
                  )
                })}
              </MainNavUl>
              <SocialMedia>
                <SocialFollow icons={socialIcons} />
              </SocialMedia>
            </MenuWrapper>
          </MainNavStyled>
        )
      }}
    />
  )
}

export default MainNav
