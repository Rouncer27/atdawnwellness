import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"

import MobileSubMenuItem from "./MobileSubMenuItem"

const MobileSubMenuStyled = styled.ul`
  max-width: 65%;
  max-height: 0px;
  margin: 0 auto;
  padding: 0rem;

  .sub-menu-button {
    position: absolute;
    top: 0;
    bottom: 0.3rem;
    right: 1.5rem;
    width: 5rem;
    max-height: 5rem;
    transition: all 0.3s ease;
    background: ${props => props.theme.colorSec};
    border: solid 0.2rem ${props => props.theme.colorSec};
    color: ${props => props.theme.white};
    font-size: 4rem;
    font-weight: bold;
    line-height: 1;

    &:hover {
      background: ${props => props.theme.colorTert};
      color: ${props => props.theme.white};
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  }

  .sub-menu-item {
  }

  .sub-menu-item:nth-of-type(1) {
    a {
      border-top: solid 0.1rem ${props => props.theme.colorTert};
    }
  }
`

const MobileSubMenu = props => {
  const { items, currentPageSlug, location } = props
  const [isOpen, setOpen] = useState(false)

  const slideNavOpen = useSpring({
    maxHeight: isOpen ? "253px" : "0px",
    padding: isOpen ? "3rem 0rem" : "0rem 0rem",
  })
  const AnimatedMobileSubMenuStyled = animated(MobileSubMenuStyled)

  return (
    <AnimatedMobileSubMenuStyled
      className="mobile-nav-sub"
      style={slideNavOpen}
    >
      <button
        className="sub-menu-button"
        onClick={() => {
          setOpen(!isOpen)
        }}
      >
        {isOpen ? "-" : "+"}
      </button>
      {items.map((item, index) => {
        return (
          <MobileSubMenuItem
            title={item.title}
            currentPageSlug={currentPageSlug}
            objectSlug={item.object_slug}
            location={location}
            key={index}
          />
        )
      })}
    </AnimatedMobileSubMenuStyled>
  )
}

export default MobileSubMenu
