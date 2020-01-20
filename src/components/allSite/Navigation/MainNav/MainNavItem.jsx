import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import MainNavSubMenu from "./MainNavSubMenu"
import { colors, fonts } from "../../../../Utilities"
import BirdSvg from "../../../../elelments/svgs/BirdSvg"

const MainNavItemStyled = styled.li`
  display: flex;
  position: relative;
  margin: 0;
  font-size: 1.6rem;
  line-height: 1.19;

  @media (min-width: 1025px) {
    font-size: 1.4rem;
  }

  .nav-item-indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    top: -1rem;
    right: 0;
    left: 0;
    margin: auto;
  }

  a {
    padding: 1rem 2rem;
    transition: all 0.3s ease;
    color: ${props => (props.isCurrent ? colors.colorSecondary : colors.white)};
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

const MainNavItem = ({
  object_slug,
  title,
  location,
  wordpress_children,
  type,
  target,
  url,
}) => {
  const currentPageSlug = object_slug === "home" ? "/" : `/${object_slug}`
  const isCurrent =
    currentPageSlug === location
      ? true
      : `${currentPageSlug}/` === location
      ? true
      : false

  return (
    <MainNavItemStyled isCurrent={isCurrent}>
      {isCurrent && (
        <div className="nav-item-indicator">
          <BirdSvg />
        </div>
      )}
      {type === "custom" ? (
        <a target={target} href={url}>
          <span>{title}</span>
        </a>
      ) : (
        <Link
          className="main-nav-item"
          to={object_slug === "home" ? "/" : `/${object_slug}`}
        >
          <span>{title}</span>
        </Link>
      )}
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
