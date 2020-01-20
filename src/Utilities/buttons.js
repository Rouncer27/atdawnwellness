import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const buttonOne = `
  ${fontSizer(1.6, 1.8, 76.8, 150, 1.8)};
  display: inline-block;
  min-width: 18rem;
  padding: 1rem 4rem;
  transition: all 0.3s ease;
  border: none;
  box-shadow: none;
  background: ${colors.colorPrimary};
  color: ${colors.white};
  font-family: ${fonts.fontPrimary};
  font-style: normal;
  font-stretch: normal;
  font-weight: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;

  @media(min-width: 768px) {
    line-height: 1.25;
  }

  &:hover {
    background: ${colors.colorSecondary};
    color: ${colors.colorTertiary};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const buttonTwo = `
  ${fontSizer(1.2, 1.4, 76.8, 110, 2)};
  display: inline-block;
  padding: 2rem 3rem;
  transition: all 0.3s ease;
  border: solid 0.2rem ${colors.colorPrimary};
  color: ${colors.colorPrimary};
  font-family: ${fonts.fontPrimary};
  background: transparent;

  &:hover {
    color: ${colors.white};
    border: solid 0.2rem ${colors.colorTertiary};
    background: ${colors.colorTertiary};
    cursor: pointer;
  }
`
