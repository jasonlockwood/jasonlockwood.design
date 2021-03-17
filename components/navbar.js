import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { theme } from "../styles/theme";
import styled from "styled-components";
import { motion } from "framer-motion";
import Headroom from "react-headroom";

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: unset;
  z-index: 9999;
  border-bottom: 1px solid ${theme.light.colors.shade_10};

  @media ${theme.breakpoint.sm} {
    backdrop-filter: saturate(180%) blur(20px);
  }

  .name {
    color: ${theme.light.colors.shade_100};
    font-weight: ${theme.fontWeights.bold};
    padding: 0;
    margin: ${theme.space[3]};
    line-height: 1.375;
  }

  a {
    padding: ${theme.space[2]} ${theme.space[7]};
    color: ${theme.light.colors.shade_60};
    font-weight: ${theme.fontWeights.medium};
    text-decoration: none;
    transition: 0.2s ease-in-out;
    border-radius: ${theme.space[2]};
    
  }

  a:hover {
    color: ${theme.light.colors.shade_100};

    @media ${theme.breakpoint.sm} {
      background-color: ${theme.light.colors.shade_10};
    }
  }

  a.active {
    color: ${theme.light.colors.primary};
    cursor: default;
  }
`;

const StyledNav = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .page-links {
    display: none;
    flex-direction: row;

    @media ${theme.breakpoint.sm} {
      display: flex;
      margin: ${theme.space[2]};
    }
  }

  .page-links.is-active {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    position: fixed;
    background: ${theme.light.colors.shade_100};
    height: calc(100vh + 2px);
    width: calc(100vw + 2px);
    justify-content: center;
    align-items: center;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;

    @media ${theme.breakpoint.sm} {
      flex-basis: unset;
      flex-direction: row;
      background: none;
      position: inherit;
      height: unset;
      width: unset;
    }

    a {
      font-size: 48px;
      color: ${theme.light.colors.background};

      @media ${theme.breakpoint.sm} {
        font-size: unset;
        color: ${theme.light.colors.shade_60};
      }
    }

    a:hover {
      color: ${theme.light.colors.shade_30};
    }
  }

  .icon {
    width: ${theme.space[5]};
    height: ${theme.space[5]};
    margin: ${theme.space[2]};
    padding: 5px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: saturate(180%) blur(20px);
    position: fixed;
    right: 8px;
    top: 16px;
    z-index: 3;

    @media ${theme.breakpoint.sm} {
      display: none;
    }
  }
  .icon .line {
    width: ${theme.space[3]};
    height: 1px;
    background-color: ${theme.light.colors.shade_90};
    display: block;
    margin: 7px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  @media (hover: hover) {
    .icon:hover {
      cursor: pointer;
      transition: 0.2s ease-in-out;
      background: rgba(235, 236, 235, 0.5);
    }
  }

  .icon.is-active .line:nth-child(1) {
    -webkit-transform: translateY(4px) rotate(45deg);
    -ms-transform: translateY(4px) rotate(45deg);
    -o-transform: translateY(4px) rotate(45deg);
    transform: translateY(4px) rotate(45deg);
  }

  .icon.is-active .line:nth-child(2) {
    -webkit-transform: translateY(-4px) rotate(-45deg);
    -ms-transform: translateY(-4px) rotate(-45deg);
    -o-transform: translateY(-4px) rotate(-45deg);
    transform: translateY(-4px) rotate(-45deg);
  }
`;

// const MenuWrapper = styled.div`

//   background:rgba(255, 255, 255, 0.75);
//   box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 0px;
//   backdrop-filter: saturate(180%) blur(20px);
//   padding:16px;
//   position:fixed;
//   width:-webkit-fill-available;
//   padding-top:92px;
//   display:none;
// `

// const Menu = styled.div`
//   display:flex;
//   flex-direction:column;
//   align-items:flex-end;
// `

// ====================  BEGIN Nav Component  ====================

const Nav = () => {
  const [isActive, setActive] = useState("false");

  const openNav = () => {
    setActive(!isActive);
  };

  const router = useRouter();

  return (
    <>
      <StyledNav>
        <div
          onClick={openNav}
          className={`icon ${isActive ? "" : "is-active"}`}
        >
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <motion.div className={`page-links ${isActive ? "" : "is-active"}`}>
        <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href="/#Work">
            <a className={router.pathname == "/#Work" ? "active" : ""}>Work</a>
          </Link>
          <Link href="/about">
            <a className={router.pathname == "/about" ? "active" : ""}>About</a>
          </Link>
          <Link href="/articles">
            <a className={router.pathname == "/articles" ? "active" : ""}>
              Articles
            </a>
          </Link>
        </motion.div>
      </StyledNav>
    </>
  );
};

// ====================  END Nav Component  ====================

// ====================  BEGIN NavMenu Component  ====================

// ====================  BEGIN Header Component  ====================

const Header = () => {
  return (
    <Headroom
    style={{
      webkitTransition: 'all .2s ease-in-out',
      mozTransition: 'all .2s ease-in-out',
      oTransition: 'all .2s ease-in-out',
      transition: 'all .2s ease-in-out'
    }}>
      <Navbar>
        <Nav />
      </Navbar>
    </Headroom>
  );
};

// ====================  BEGIN Header Component  ====================

export default Header;
