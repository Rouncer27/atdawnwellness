import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import MobileSubMenu from "./MobileSubMenu"

const MobileItemStyled = styled.li`
  position: relative;
  width: 100%;
  align-self: center;
  font-size: 1.8rem;
  text-align: center;
  overflow: hidden;

  a {
    display: block;
    padding: 1rem 2rem;
    background: ${props =>
      props.isCurrent ? props.theme.colorPrim : "transparent"};
    border-bottom: 0.25rem solid
      ${props =>
        props.isCurrent
          ? props.theme.colorTert
          : props => props.theme.colorPrim};
    color: ${props =>
      props.isCurrent ? props.theme.white : props => props.theme.colorPrim};

    &:hover {
      color: ${props => props.theme.colorSec};
    }
  }

  &:first-of-type a {
    border-top: 0.25rem solid
      ${props =>
        props.isCurrent
          ? props.theme.colorTert
          : props => props.theme.colorPrim};
  }
`

const MobileItem = props => {
  const { object_slug, title, location, wordpress_children } = props
  const currentPageSlug = object_slug === "home" ? "/" : `/${object_slug}`
  const isCurrent = currentPageSlug === location ? true : false

  return (
    <MobileItemStyled isCurrent={isCurrent}>
      <Link to={object_slug === "home" ? "/" : `/${object_slug}`}>{title}</Link>
      {wordpress_children !== null &&
        wordpress_children !== undefined &&
        wordpress_children.length > 0 && (
          <MobileSubMenu
            items={wordpress_children}
            currentPageSlug={currentPageSlug}
            location={location}
          />
        )}
    </MobileItemStyled>
  )
}

export default MobileItem
