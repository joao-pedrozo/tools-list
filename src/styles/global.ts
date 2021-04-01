import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, 
    body {
      height: 100%;
      width: 100%;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

    ul, li {
      list-style: none;
    }
    
    input, textarea, button {
      &:focus {
        outline: none;
      }
    }
`;

export default GlobalStyles;
