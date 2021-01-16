import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { theme } from "./theme";
import styled from "styled-components";
import { motion } from "framer-motion"

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;

  .name {
    color: ${theme.light.colors.primary_100};
    font-weight: ${theme.fontWeights.bold};
    padding: 0;
    margin: ${theme.space[3]};
  }

  a {
    padding: 0 ${theme.space[3]};
    color: ${theme.light.colors.primary_60};
    font-weight: ${theme.fontWeights.medium};
    transition: 0.2s ease-in-out;
    text-decoration: none;
  }

  a:hover {
    color: ${theme.light.colors.primary_100};
  }

  a.active {
    color: ${theme.light.colors.primary_10};
    cursor: default;
  }
`;

const StyledNav = styled.div`
  margin: ${theme.space[3]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .page-links {
    display: none;
    margin: ${theme.space[3]} 0;
    flex-direction: row;

    @media ${theme.breakpoint.sm} {
      display: flex;
    }
  }

  .page-links.is-active {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    position: fixed;
    background: ${theme.light.colors.primary_100};
    height: calc(100vh + 2px);
    justify-content: center;
    align-items: center;
    z-index: 1;
    top:0;
    left:0;
    right:0;
    bottom:0;

    @media ${theme.breakpoint.sm} {
      flex-basis: unset;
      flex-direction: row;
    }

    a{
      font-size:48px;
      color: ${theme.light.colors.background};
    }

    a:hover{
      color: ${theme.light.colors.primary_30};
    }
  }

  .icon {
    width: ${theme.space[4]};
    height: ${theme.space[4]};
    margin: ${theme.space[2]};
    padding: ${theme.space[2]};
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: saturate(180%) blur(20px);
    position: fixed;
    right: 16px;
    z-index: 2;

    @media ${theme.breakpoint.sm} {
      display: none;
    }
  }
  .icon .line {
    width: ${theme.space[3]};
    height: 1px;
    background-color: ${theme.light.colors.primary_90};
    display: block;
    margin: 7px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .icon:hover {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    background: rgba(235, 236, 235, 0.5);
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

  const handleToggle = () => {
    setActive(!isActive);
  };

  const openNav = () => {
    setActive(!isActive);
    handleToggle();
  };

  const router = useRouter();

  return (
    <>
    <StyledNav>
      <Link href="/">
        <a className="name">Jason Lockwood</a>
      </Link>

      <div onClick={openNav} className={`icon ${isActive ? "" : "is-active"}`}>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <div className={`page-links ${isActive ? "" : "is-active"}`}>
        <Link href="/about">
          <a className={router.pathname == "/about" ? "active" : ""}>About</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname == "/casestudies" ? "active" : ""}>
            Case Studies
          </a>
        </Link>
        <Link href="/about">
          <a className={router.pathname == "/articles" ? "active" : ""}>
            Articles
          </a>
        </Link>
      </div>
    </StyledNav>

    </>
  );
};

// ====================  END Nav Component  ====================

// ====================  BEGIN NavMenu Component  ====================



// ====================  BEGIN Header Component  ====================

const Header = () => {
  return (
      <Navbar>
        <Nav />
      </Navbar>
  );
};

// ====================  BEGIN Header Component  ====================

export default Header;
