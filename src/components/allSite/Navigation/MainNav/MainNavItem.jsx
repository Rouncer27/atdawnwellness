import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import MainNavSubMenu from "./MainNavSubMenu"
import { colors, fonts } from "../../../../Utilities"

const MainNavItemStyled = styled.li`
  display: flex;
  position: relative;
  margin: 0;
  font-size: 1.4rem;
  line-height: 1.19;

  a {
    padding: 1rem 2rem;
    transition: all 0.3s ease;
    color: ${props =>
      props.isCurrent ? colors.colorTertiary : colors.colorPrimary};
    font-family: ${fonts.fontPrimary};
    font-size: 1em;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    text-transform: uppercase;
    line-height: 1.75;
    letter-spacing: normal;

    @media (min-width: 1025px) {
      padding: 0.5rem 1.985rem;
    }

    &:hover {
      color: ${colors.colorAccent};
    }

    span {
      align-self: center;
    }
  }

  &:hover {
    .main-nav-sub {
      visibility: visible;
      opacity: 1;
    }
  }
`

const MainNavItem = ({ object_slug, title, location, wordpress_children }) => {
  const currentPageSlug = object_slug === "home" ? "/" : `/${object_slug}`
  const isCurrent =
    currentPageSlug === location
      ? true
      : `${currentPageSlug}/` === location
      ? true
      : false
  return (
    <MainNavItemStyled isCurrent={isCurrent}>
      <Link
        className="main-nav-item"
        to={object_slug === "home" ? "/" : `/${object_slug}`}
      >
        <span>{title}</span>
      </Link>
      {wordpress_children !== null && wordpress_children && (
        <MainNavSubMenu
          subItems={wordpress_children}
          currentPageSlug={currentPageSlug}
          location={location}
        />
      )}
    </MainNavItemStyled>
  )
}

export default MainNavItem
