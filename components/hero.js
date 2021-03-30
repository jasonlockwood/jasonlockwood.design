import styled from "styled-components";
import Button from "./button";
import TextButton from "./textbutton";
import Space from "./spacing";
import Link from "next/link";
import Image from "next/image";
import { theme } from "../styles/theme";

const Hero = styled.div`
  h1 {
    color: ${theme.light.colors.shade_90};
  }

  .muted {
    color: ${theme.light.colors.shade_30};
  }

  button {
    margin-right: ${theme.space[3]};
    display: inline-flex;
  }

  img {
    border-radius: 100%;
  }

  .border {
    border-radius: 100%;
    border: 2px solid ${theme.light.colors.shade_90};
    display: inline-flex;
    position: relative;

    &:before,
    &:after {
      content: "";
      position: absolute;
      transition: transform 0.2s ease-in-out;
    }

    &:before {
      height: 92px;
      width: 92px;
      background: ${theme.light.colors.primary};
      border: 2px solid ${theme.light.colors.shade_90};
      border-radius: 100%;
      left: 6px;
      top: -2px;
      position: absolute;
      z-index: -1;
      transform: translateX(0);
    }

    &:after {
      height: 92px;
      width: 92px;
      background: ${theme.light.colors.shade_10};
      border: 2px solid ${theme.light.colors.shade_90};
      border-radius: 100%;
      left: 14px;
      top: -2px;
      position: absolute;
      z-index: -2;
      transform: translateX(0);
    }

    &:hover:before {
      transform: translateX(8px);
      background: ${theme.light.colors.primary_hover};
    }

    &:hover:after {
      transform: translateX(16px);
      background: ${theme.light.colors.background};
    }
  }
`;

const HeroComponent = () => (
  <Hero>
    <Space extra />
    <div className="border">
      <Image
        src="/images/me.jpg"
        alt="My ugly mug"
        width={88}
        height={88}
        priority="true"
      />
    </div>
    <Space standard />
    <h1>Jason Lockwood</h1>
    <h1 className="muted">Digital Product Designer</h1>
    <Space standard />
    <div>
      <p>
        Hello! I am Jason, as a product designer I exercise passion, grit, expertise and a collaborative spirit to craft meaningful experiences that delight.</p>
        <Space tiny/>
        <p>Most recently, I worked at{" "}
        <a
          target="_blank"
          href="http://www.informed.co"
          className="link-effect"
        >
          Informed.co
        </a>
        <span className="outlink">↗</span>{" "}
        where I designed and coded impactful user experiences, created the brand identity, and institutionalized a design system that improved consistency and results.
      </p>

      <p></p>
    </div>

    <Space standard />
    <Link href="/about">
      <a>
        <Button primary className="mb-4 sm:mb-0">Find out more</Button>
      </a>
    </Link>

    <Link href="mailto:hello@jasonlockwood.design?subject=Reaching out from your website">
      <a>
        <Button secondary>Get in touch</Button>
      </a>
    </Link>

    {/* <TextButton 
      href="/about"
      after="after"
      buttonText="Learn more about me"/> */}
    
    <Space extra />
    <Space extra />
  </Hero>
);

export default HeroComponent;
