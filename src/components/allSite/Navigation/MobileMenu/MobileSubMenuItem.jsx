import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MobileSubMenuItemStyled = styled.li`
  font-size: 1.6rem;

  a.sub-menu-item-link {
    border: none;
    border-bottom: solid 0.1rem ${props => props.theme.colorPrim};
    color: ${props =>
      props.isCurrentSub
        ? props => props.theme.white
        : props => props.theme.colorPrim};
    font-family: ${props => props.theme.fontSec};
    font-weight: 500;
    background: ${props =>
      props.isCurrentSub ? props.theme.colorPrim : "transparent"};

    &:hover {
      background: ${props =>
        props.isCurrentSub
          ? props.theme.colorPrim
          : props => props.theme.colorSec};
      color: ${props => props.theme.white};
      cursor: ${props => (props.isCurrentSub ? "default" : "pointer")};
    }
  }
`

const MobileSubMenuItem = props => {
  const { title, currentPageSlug, objectSlug, location } = props
  const isCurrentSub =
    `${currentPageSlug}/${objectSlug}` === location ||
    `${currentPageSlug}/${objectSlug}/` === location
      ? true
      : false
  const baseSlug = currentPageSlug.split("/").join("")

  return (
    <MobileSubMenuItemStyled
      className="sub-menu-item"
      isCurrentSub={isCurrentSub}
    >
      <Link className="sub-menu-item-link" to={`/${baseSlug}/${objectSlug}`}>
        {title}
      </Link>
    </MobileSubMenuItemStyled>
  )
}

export default MobileSubMenuItem
