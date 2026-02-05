import React from "react"
import styled from "styled-components"

import MainNavSubMenuItem from "./MainNavSubMenuItem"

const MainNavSubMenuStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  top: 100%;
  left: -1rem;
  width: 100%;
  min-width: 17.5rem;
  margin: 0 auto;
  padding: 2rem 1rem 2rem 0;
  background-color: #74a1a3;
  text-align: center;
  transition: all 0.3s ease;
  visibility: hidden;
  opacity: 0;
  z-index: 999999;
`

const MainNavSubMenu = ({ subItems, currentPageSlug, location }) => {
  return (
    <MainNavSubMenuStyled className="main-nav-sub">
      {subItems.map((item, index) => {
        return (
          <MainNavSubMenuItem
            key={index}
            title={item.title}
            currentPageSlug={currentPageSlug}
            isSubCurrent={item.isSubCurrent}
            objectSlug={item.object_slug}
            location={location}
          />
        )
      })}
    </MainNavSubMenuStyled>
  )
}

export default MainNavSubMenu
