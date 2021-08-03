import { createGlobalStyle } from "styled-components";
import { theme } from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  


html,
body {
  font-family: "Gelica-Bold", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: ${theme.lineHeights.body};
  width: 100%;
  height: 100%;
  background: #F2F2F2;
  
}

* {
  border: 0px;
  box-sizing: border-box;
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

p, li{
    font-family:  'iA Writer Quattro S', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    letter-spacing: -0.2px;
    font-weight: 500;
    color: ${theme.light.colors.shade_80};
    font-size: ${theme.fontSizes[2]};
    line-height: ${theme.lineHeights.body};
}

h1 {
    font-size: ${theme.fontSizes[6]};

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
    font-size: ${theme.fontSizes[4]};

    @media ${theme.breakpoint.sm}{
      font-size: ${theme.fontSizes[5]};
    }
}

h3{
  font-size: ${theme.fontSizes[2]};

  @media ${theme.breakpoint.sm}{
    font-size: ${theme.fontSizes[3]};
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
    background: ${theme.light.colors.primary_hover};
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
  width: 100%;
  display: block;
}

hr{
  height:2px;
  background: ${theme.light.colors.shade_10}
}

.shadow{ 
  box-shadow: 0 52px 74px rgb(0 21 64 / 14%);
}

.drop-shadow{
  -webkit-filter: drop-shadow(0 52px 74px rgb(0 21 64 / 14%));
  filter: drop-shadow(0 52px 74px rgb(0 21 64 / 14%)); 
}

.mono{
  font-family: "SF Mono", SFMono-Regular, ui-monospace, monospace;
  color: ${theme.light.colors.shade_30};
}

.wait{
  cursor: wait;

}

/* ========= REACT CAROUSEL STYLING ============  */

.carousel .slide .legend{
  right:0;
  left:0;
  margin:auto;
  width: fit-content;
  background: rgba(0,0,0,.75);
}

.carousel.carousel-slider .control-arrow{

  &:hover{
    background:none;
  }
}

/* ========= REACT CAROUSEL STYLING ============  */


/* ========= HEADROOM STYLING ============  */

#headroomContainer{
  .headroom {
  bottom: 0;
  left: 0;
  right: 0;
  z-Index: 1;
}
.headroom--unfixed {
  position: relative;
  transform: translateY(0);
}
.headroom--scrolled {
  transition: transform 200ms ease-in-out;
}
.headroom--unpinned {
  position: fixed;
  transform: translateY(0%);
}
.headroom--pinned {
  position: fixed;
  transform: translateY(100%);
}
}

/* ========= HEADROOM STYLING ============  */

`;

export default GlobalStyle;
