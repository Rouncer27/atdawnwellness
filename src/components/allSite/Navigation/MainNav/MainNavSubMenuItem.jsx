import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MainNavSubMenuItemStyled = styled.li`
  width: 100%;
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontSec};
  font-weight: 500;
  font-size: 1.4rem;
  text-align: left;

  a.sub-menu-link {
    display: block;
    width: 100%;
    color: ${props => props.theme.black};
    padding: 0.5rem 1rem;
    background: ${props =>
      props.isCurrentSub ? props.theme.colorPrim : "transparent"};

    &:hover {
      background: ${props =>
        props.isCurrentSub
          ? props.theme.colorPrim
          : props => props.theme.colorSec};
    }
  }
`

const MainNavSubMenuItem = ({
  currentPageSlug,
  objectSlug,
  title,
  location,
}) => {
  const isCurrentSub =
    `${currentPageSlug}/${objectSlug}` === location ||
    `${currentPageSlug}/${objectSlug}/` === location
      ? true
      : false
  return (
    <MainNavSubMenuItemStyled isCurrentSub={isCurrentSub}>
      <Link className="sub-menu-link" to={`/${currentPageSlug}/${objectSlug}`}>
        {title}
      </Link>
    </MainNavSubMenuItemStyled>
  )
}

export default MainNavSubMenuItem
