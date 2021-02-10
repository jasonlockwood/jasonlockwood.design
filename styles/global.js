import { createGlobalStyle } from "styled-components";
import { theme } from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  


html,
body {
  font-family: "Gelica-SemiBold", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
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

  ::selection {
    background-color: ${theme.light.colors.primary};
    color: white;
  }
}

section{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: ${theme.space[5]};

    @media ${theme.breakpoint.sm} {
        margin: ${theme.space[3]};
    }
}

h1, h2, h3, h4 ,h5{
    letter-spacing: -1.2px;
    font-weight: 700;
}

p{
    font-family:  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    letter-spacing: 0.2px;
    font-weight: 500;
    color: ${theme.light.colors.primary_80};
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

a, a > span {
  color: ${theme.light.colors.primary};
  text-decoration: none;
  position: relative;
  display: inline-flex;

  &:before, &:after {
    content: '';
    position: absolute;
    transition: transform .5s ease;
  }
}

.link-effect{
  overflow: hidden;

  &:before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${theme.light.colors.primary};
    transform:  translateX(-100%);
    opacity: 0;
  }
  &:hover:before {
    transform:  translateX(0);
    opacity: 1;
  }

}

img {
  max-width: 100%;
  display: block;
}
`;

export default GlobalStyle;
