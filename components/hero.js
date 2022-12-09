import styled from "styled-components";
import Button from "./button";
import Space from "./spacing";
import Link from "next/link";
import Image from "next/legacy/image";
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


  .border {
    display: inline-flex;
    position: relative;
  
    img{
      border: 2px solid ${theme.light.colors.shade_90} !important;
      border-radius: 100%;
      z-index: 1;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      transition: transform 0.2s ease-in-out;
    }

    &:after {
      height: 100px;
      width: 100px;
      background: ${theme.light.colors.primary};
      border: 2px solid ${theme.light.colors.shade_90};
      border-radius: 100%;
      left: 8px;
      position: absolute;
      z-index: 0;
      transform: translateX(0);
    }

    &:before {
      height: 100px;
      width: 100px;
      background: ${theme.light.colors.shade_10};
      border: 2px solid ${theme.light.colors.shade_90};
      border-radius: 100%;
      left: 16px;
      position: absolute;
      z-index: 0;
      transform: translateX(0);
    }

    &:hover:after {
      transform: translateX(8px);
      background: ${theme.light.colors.primary_hover};
    }

    &:hover:before {
      transform: translateX(16px);
      background: ${theme.light.colors.background};
    }
  }
`;

const HeroComponent = () => (
  <Hero>
    <Space extra />
    <Space extra />
    <div className="border">
      <Image
        src="/images/me.jpg"
        alt="My ugly mug"
        width={96}
        height={96}
        priority="true"
      />
    </div>
    <Space standard/>
    <h1>Jason Lockwood</h1>
    <h1 className="muted">Digital Product Designer</h1>
    <Space standard />
    <div>
      <p>
        <strong>Hello!</strong> I'm Jason, a seasoned designer specializing in UI/UX design, user research, product development & strategy, and design systems.</p>
        
        <Space tiny/>
        <p>Currently, I work at {" "}
        <a
          target="_blank"
          href="//www.madhive.com"
          className="link-effect"
        >
          MadHive
        </a>
        <span className="outlink">↗</span> {" "}
        where I help build industry-leading programmatic advertising experiences for OTT advertisers. 
      </p>
      <Space tiny/>
      <p>If you’d like to connect or request work samples feel free to reach out.</p>

    </div>

    <Space standard />
    <Link href="/about">
        <Button primary className="mb-4 sm:mb-0">
          Find out more
        </Button>
    </Link>

    <Link href="mailto:hello@jasonlockwood.design?subject=Reaching out from your website">
        <Button secondary>Get in touch</Button>
    </Link>

    <Space extra />
    <Space extra />
    </Hero>
);

export default HeroComponent;
