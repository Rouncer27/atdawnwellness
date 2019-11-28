import React from "react"
import MainNav from "./Navigation/MainNav/MainNav"
import MobileMenu from "./Navigation/MobileMenu/MobileMenu"

const Header = ({ siteTitle, location }) => (
  <header>
    <MainNav siteTitle={siteTitle} location={location} />
    <MobileMenu location={location} />
  </header>
)

export default Header
