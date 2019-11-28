import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import MobileItem from "./MobileItem"
import MobileLogo from "./MobileLogo"
import MobileButton from "./styles/MobileButtonStyles"
import MobileFooter from "./MobileFooter"

const NavMobileStyled = styled.div`
  position: relative;

  @media (min-width: ${props => props.theme.bpTablet}) {
    display: none;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
  }

  .mobile-nav {
    position: relative;

    z-index: 9999999;

    &__drawer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      transform: translateX(-100%);
      background: ${props => props.theme.white};
      border: 0.25rem solid ${props => props.theme.colorPrim};
      overflow-y: scroll;

      &--items {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
      }
    }

    .mobile-nav__button {
      color: ${props =>
        props.isOpen ? props.theme.colorPrim : props.theme.white};

      &::before {
        top: ${props => (props.isOpen ? "50%" : "1rem")};
        transform: rotate(${props => (props.isOpen ? "135deg" : "0deg")});
      }

      &::after {
        bottom: ${props => (props.isOpen ? "50%" : "1rem")};
        transform: rotate(${props => (props.isOpen ? "-135deg" : "0deg")});
      }

      &:hover {
        cursor: pointer;
        &::before {
          top: ${props => (props.isOpen ? "50%" : "0.5rem")};
        }

        &::after {
          bottom: ${props => (props.isOpen ? "50%" : "0.5rem")};
        }
      }
    }
  }
`

const MobileMenu = ({ location }) => {
  const [isOpen, setOpen] = useState(false)

  const slideNavOpen = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
  })

  return (
    <StaticQuery
      query={graphql`
        {
          wordpressWpApiMenusMenusItems(name: { eq: "Mobile Menu" }) {
            items {
              wordpress_id
              title
              object_slug
            }
          }
        }
      `}
      render={data => {
        const menuItems = data.wordpressWpApiMenusMenusItems.items
        return (
          <NavMobileStyled isOpen={isOpen}>
            <div className="mobile-nav">
              <MobileButton
                className="mobile-nav__button"
                onClick={() => setOpen(!isOpen)}
              >
                Menu
              </MobileButton>
              <animated.nav className="mobile-nav__drawer" style={slideNavOpen}>
                <MobileLogo />
                <ul className="mobile-nav__drawer--items">
                  {menuItems.map(item => {
                    return (
                      <MobileItem
                        key={item.wordpress_id}
                        {...item}
                        location={location}
                      />
                    )
                  })}
                  <MobileFooter />
                </ul>
              </animated.nav>
            </div>
          </NavMobileStyled>
        )
      }}
    />
  )
}

export default MobileMenu
