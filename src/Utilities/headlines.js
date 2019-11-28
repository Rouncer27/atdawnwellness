import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const headlineOne = `
    ${fontSizer(3, 4, 76.8, 150, 2.8)}
    color: ${colors.black}
    font-family: ${fonts.fontSecondary};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    line-height: 1.25;
  `

export const headlineTwo = `
    ${fontSizer(1.8, 2, 76.8, 160, 2)}
    color: ${colors.black}
    font-family: ${fonts.fontSecondary};
`

export const headlineThree = `
    ${fontSizer(1.8, 2.4, 76.8, 160, 2)}
    color: ${colors.colorSecondary}
    font-family: ${fonts.fontSecondary};
    font-weight: normal;
    font-stretch: normal;
    font-style: italic;
    line-height: 1.33;
    letter-spacing: normal;
`
