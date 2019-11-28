export const fontPrimary = "Montserrat"
export const fontSecondary = "Lora"
export const fontAwesome = "FontAwesome"

export const fontSizer = (
  minFont = 1.8,
  maxFont = 2.2,
  minScreen = 76.8,
  maxScreen = 110,
  mobileFont = 1.8
) => {
  return `
  font-size: calc(${mobileFont} * 1rem);

  @media (min-width: calc(${minScreen} * 10px)) {
    font-size: calc(
      (${minFont} * 1rem) + (${maxFont} - ${minFont}) *
        (((100vw - (${minScreen} * 1rem))) / (${maxScreen} - ${minScreen}))
    );
  }

  @media (min-width: calc(${maxScreen} * 10px)) {
    font-size: calc(${maxFont} * 1rem);
  }
  `
}

export default {
  fontPrimary,
  fontSecondary,
  fontAwesome,
}
