import { createGlobalStyle} from "styled-components";
import { theme } from '../styles/theme'

const GlobalStyle = createGlobalStyle`

html,
body {
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
  width: 100%;
  height: 100%;
}

* {
  border: 0px;
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  font-weight: inherit;
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  text-rendering: optimizelegibility;
  appearance: none;
}

h1, h2, h3, h4 ,h5{
    letter-spacing: -1.2px;
    font-weight: 700;
}

h1 {
    line-height: ${theme.lineHeights.body};
    font-size: ${theme.fontSizes[3]};

    @media ${theme.breakpoint.sm}{
      font-size: ${theme.fontSizes[4]};
    }

    @media ${theme.breakpoint.md} {
      font-size: ${theme.fontSizes[5]};
    }

    @media ${theme.breakpoint.lg} {
      font-size: ${theme.fontSizes[6]};
    }
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}
`;

export default GlobalStyle;