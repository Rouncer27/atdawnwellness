import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"
import theme from "./Theme"

import FontAwesome from "./Fonts/FontAwesome"
import PrimaryFonts from "./Fonts/PrimaryFonts"
import SecondaryFonts from "./Fonts/SecondaryFonts"
import TertiaryFonts from "./Fonts/TertiaryFonts"

import { fontSizer } from "../../../Utilities/index"

const GlobalStyle = createGlobalStyle`
/* Browser Reset */
${styledNormalize}
/* Fonts */
${FontAwesome}
${PrimaryFonts}
${SecondaryFonts}
${TertiaryFonts}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    ${"" /* overflow-x: hidden !important; */}
  }

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: ${theme.fontPrim};
    font-weight: normal;
    letter-spacing: 0.1rem;
    line-height: 1.5;
    ${"" /* overflow-x: hidden !important; */}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1.8rem;
    font-weight: normal;
    line-height: ${theme.baseLineHeight};
  }
  h1 {
    font-family: ${theme.fontSec};
    ${fontSizer(3.2, 5.6, 76.8, 120)}
}

h2 {
  ${fontSizer(2.6, 4.6, 76.8, 120)}
  }

h3 {
  ${fontSizer(2.2, 3.4, 76.8, 120)}
}

h4 {
  ${fontSizer(2, 2.8, 76.8, 120)}
}

h5 {
  ${fontSizer(2, 2.4, 76.8, 120)}
}

h6 {
  ${fontSizer(1.8, 2.2, 76.8, 120)}
}

p {
  ${fontSizer(1.8, 2, 76.8, 120)}
  margin: 0;
  margin-bottom: 1.5em;
  line-height: 1.4;
}

a {
  ${fontSizer(1.8, 2, 76.8, 120)}
  text-decoration: none;
  color: ${props => props.theme.colorPrim};
  font-weight: normal;
  transition: all 0.3s ease;
}

a:hover {
	color: ${props => props.theme.colorSec}
}

span {
  font-size: 1em;
}

ul,
li {
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  list-style-type: none;
}

img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}


/* Just testing this out... */

.main-nav-item {
  color: #182a3e;
}

`

export default GlobalStyle
