import * as secondary from "../../../../fonts/secondary"

const SecondaryFonts = `
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  src: local('Playfair Display Regular'), local('PlayfairDisplay-Regular'),
       url('${secondary.WOFF2_4}') format('woff2'),
       url('${secondary.WOFF_4}') format('woff');
}

@font-face {
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 400;
  src: local('Playfair Display Italic'), local('PlayfairDisplay-Italic'),
       url('${secondary.WOFF2_4I}') format('woff2'),
       url('${secondary.WOFF_4I}') format('woff');
}

@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'),
       url('${secondary.WOFF2_7}') format('woff2'),
       url('${secondary.WOFF_7}') format('woff');
}

@font-face {
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 700;
  src: local('Playfair Display Bold Italic'), local('PlayfairDisplay-BoldItalic'),
       url('${secondary.WOFF2_7I}') format('woff2'),
       url('${secondary.WOFF_7I}') format('woff');
}


`

export default SecondaryFonts
