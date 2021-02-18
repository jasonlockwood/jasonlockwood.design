import { createGlobalStyle } from "styled-components";
import { theme } from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  


html,
body {
  font-family: "Gelica-SemiBold", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: ${theme.lineHeights.body};
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
    line-height: ${theme.lineHeights.heading};
    color: ${theme.light.colors.shade_80};
    display: flex;
}

p{
    font-family:  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    letter-spacing: 0.2px;
    font-weight: 500;
    color: ${theme.light.colors.shade_60};
}

h1 {
    font-size: ${theme.fontSizes[5]};

    @media ${theme.breakpoint.sm}{
      font-size: ${theme.fontSizes[6]};
    }

    @media ${theme.breakpoint.md} {
      font-size: ${theme.fontSizes[8]};
    }

    @media ${theme.breakpoint.lg} {
      font-size: ${theme.fontSizes[8]};
    }
}

h2 {
    font-size: ${theme.fontSizes[3]};

    @media ${theme.breakpoint.sm}{
      font-size: ${theme.fontSizes[5]};
    }
}

a, a > span {
  color: ${theme.light.colors.primary};
  text-decoration: none;
  position: relative;


  &:before, &:after {
    content: '';
    position: absolute;
    transition: transform .5s ease;
  }

  &:hover{
    color: ${theme.light.colors.primary_hover};
  }

}

.link-effect{
  overflow: hidden;
  display: inline-flex;

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

span.outlink {
    color: ${theme.light.colors.shade_30};
    margin-left: 0.25rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

img {
  max-width: 100%;
  display: block;
}

hr{
  height:2px;
  background: ${theme.light.colors.shade_10}
}
`;

export default GlobalStyle;
