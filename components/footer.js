import Link from "next/link";
import styled from "styled-components";
import { theme } from "./theme";

const Wrapper = styled.footer`
  padding: ${theme.space[3]};
  display: flex;
  color: ${theme.light.colors.primary_30};
  font-size: ${theme.fontSizes[0]};

  a {
    padding: 0 ${theme.space[3]};
    color: ${theme.light.colors.primary_30};
  }
`;

const Footer = () => (
  <Wrapper>
    {/* <Link href='/'><a>Home</a></Link>
    <Link href='/about'><a>About</a></Link>
    <Link href='/about'><a>Case Studies</a></Link>
    <Link href='/about'><a>Articles</a></Link> */}
    <Link href="//www.twitter.com/jlockwoodtweets">
      <a>@jlockwoodtweets</a>
    </Link>
  </Wrapper>
);

export default Footer;
