import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, 
    body,
    #__next {
      height: 100%;
      width: 100%;
      overflow: auto;
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
`;

export default GlobalStyles;
