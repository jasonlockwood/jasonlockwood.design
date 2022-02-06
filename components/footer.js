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
  max-width: 940px;
  margin: auto;

  a {
    color: ${theme.light.colors.shade_60};
    overflow: hidden;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;

    &:hover{
      color: ${theme.light.colors.primary_hover}
    }

   
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
    <Space />
    <flex className="pr-8">
    <a
        href="mailto:hello@jasonlockwood.design?subject=Reaching out from your website"
        className="link-effect"
      >
        hello@jasonlockwood.design
      </a>
      <Space y8/>
    </flex>

    <flex>
      
      <Space y8 />

      <a href="//www.github.com/jasonlockwood" className="link-effect">
        Github
      </a><span className="outlink">↗</span>
      <a href="//www.twitter.com/jlockwoodtweets" className="link-effect">
        Twitter
      </a><span className="outlink">↗</span>
      <a href="//www.linkedin.com/in/jasonlockwoodin/" className="link-effect">
        Linkedin
      </a><span className="outlink">↗</span>
      <Space y8/>
    </flex>
    <Space/>
  </Wrapper>
);

export default Footer;
