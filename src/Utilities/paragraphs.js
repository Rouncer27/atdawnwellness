import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const bodyCopy = `
  ${fontSizer(1.6, 1.8, 76.8, 150, 1.6)};
  color: ${colors.grey};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.78;
  letter-spacing: normal;
`

export const callOut = `
  ${fontSizer(1.8, 2.2, 76.8, 150, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
`
