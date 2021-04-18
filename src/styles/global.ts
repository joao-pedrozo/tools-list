import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 300;
      src:
          url('/fonts/source-sans-pro-v14-latin-regular.woff2') format('woff2'); /* Super Modern Browsers */
    }
    /* source-sans-pro-600 - latin */
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 600;
      src: 
          url('/fonts/source-sans-pro-v14-latin-600.woff2') format('woff2'); /* Super Modern Browsers */
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      font-family: ${({ theme }) => theme.font.family};
    }

    html, 
    body,
    #__next {
      height: 100%;
      width: 100%;
      overflow: auto;
      font-size: ${({ theme }) => theme.font.sizes.small};
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

    ul, li {
      list-style: none;
    }

    button {
      cursor: pointer;
    }
    
    input, textarea, button {
      &:focus {
        outline: none;
      }
    }

    path, g, svg {
      stroke: currentColor;
      fill: currentColor; 
     }
     `;

export default GlobalStyles;
