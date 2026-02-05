import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MainNavSubMenuItemStyled = styled.li`
  width: 100%;
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontSec};
  font-weight: 300;
  font-size: 1.4rem;
  text-align: center;

  a.sub-menu-link {
    display: block;
    width: 100%;
    font-weight: 300;
    color: ${props => props.theme.white};
    padding: 0.5rem 1rem;
    color: ${props =>
      props.isCurrentSub ? props.theme.black : props.theme.white};
    cursor: ${props => (props.isCurrentSub ? "default" : "pointer")};
    line-height: 1;

    &:hover {
      color: ${props => props.theme.black};
    }
  }
`

const MainNavSubMenuItem = ({
  currentPageSlug,
  objectSlug,
  isSubCurrent,
  title,
  location,
}) => {
  const isCurrentSub =
    `${currentPageSlug}/${objectSlug}` === location ||
    `${currentPageSlug}/${objectSlug}/` === location
      ? true
      : false
  return (
    <MainNavSubMenuItemStyled isCurrentSub={isSubCurrent}>
      <Link className="sub-menu-link" to={`/${objectSlug}`}>
        {title}
      </Link>
    </MainNavSubMenuItemStyled>
  )
}

export default MainNavSubMenuItem
