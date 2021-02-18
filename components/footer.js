import styled from "styled-components";
import { theme } from "../styles/theme";
import Space from "../components/spacing";

const Wrapper = styled.footer`
  display: flex;
  color: ${theme.light.colors.shade_30};
  font-size: ${theme.fontSizes[0]};
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  a {
    color: ${theme.light.colors.shade_60};
    overflow: hidden;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;

   
  }

  span{
    margin-right: ${theme.space[2]};

  }

  .m-link{
      font-size: ${theme.fontSizes[2]};
    }
`;

const flex = styled.div`
  display: flex;
  flex-direction: column;

`;

const Footer = () => (
  <Wrapper>
    <Space extra />
    <flex className="pr-8">
      <p>Let's build something together</p>
      <h1>Get in touch</h1>
      <Space y8/>
    </flex>

    <flex>
      <a
        href="mailto:hello@jasonlockwood.design?subject=Reaching out from your website"
        className="link-effect m-link"
      >
        hello@jasonlockwood.design
      </a>

      <Space y8 />

      <a href="//www.twitter.com/jlockwoodtweets" className="link-effect">
        Dribbble
      </a><span className="outlink">↗</span>
      <a href="//www.twitter.com/jlockwoodtweets" className="link-effect">
        Github
      </a><span className="outlink">↗</span>
      <a href="//www.twitter.com/jlockwoodtweets" className="link-effect">
        Twitter
      </a><span className="outlink">↗</span>
      <a href="//www.twitter.com/jlockwoodtweets" className="link-effect">
        Linkedin
      </a><span className="outlink">↗</span>
      <Space y8/>
    </flex>
    <Space extra/>
  </Wrapper>
);

export default Footer;
