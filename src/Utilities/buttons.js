import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const buttonOne = `
  ${fontSizer(1.2, 1.4, 76.8, 110, 1.8)};
  display: inline-block;
  position: relative;
  min-width: 18rem;
  padding: 2rem 3rem;
  transition: all 0.3s ease;
  border: none;
  box-shadow: none;
  color: ${colors.colorPrimary};
  font-family: ${fonts.fontPrimary};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;

  @media(min-width: 768px) {
    line-height: 2;
  }

  &::before {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-family: ${fonts.fontAwesome};
    font-size: 0.75em;
    content: "\f054";
  }

  &:hover {
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
