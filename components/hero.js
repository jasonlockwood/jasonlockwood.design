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
        placeholder="blur"
      />
    </div>
    <Space standard/>
    <h1>Jason Lockwood</h1>
    <h1 className="muted">Digital Product Designer</h1>
    <Space standard />
    <div>
      <p>
        <strong>Hello!</strong> I am Jason Lockwood, a seasoned product designer at {" "}
        <a
          target="_blank"
          href="http://www.madhive.com"
          className="link-effect"
        >
          MadHive
          <span className="outlink">↗</span>
        </a>
        , working on building campaign experiences and driving innovation in AdTech.

        <Space tiny/>

       I apply expertise and excellence in my craft to identify, understand and solve complex user problems with bold and intuitive design solutions that delight.

        {/* I exercised agency over design strategy in order to develope the effectiveness of the Informed product experiences. This meant identifying gaps and building levers within the organization to improve the design team's efficacy. */}
      </p>
    </div>

    <Space standard />
    <Link href="/about">
      <a>
        <Button primary className="mb-4 sm:mb-0">
          Find out more
        </Button>
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
