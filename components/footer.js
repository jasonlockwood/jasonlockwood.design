import Link from 'next/link'
import styled, { ThemeProvider } from 'styled-components'


const Wrapper = styled.footer`
  position: absolute;
  bottom:0;
  padding: 16px;
  display: flex;
  color: grey;
  font-size:12px;

  a {
    padding: 0 16px;
    color: grey;
  }
`

const Footer = () => (
  <Wrapper>
    {/* <Link href='/'><a>Home</a></Link>
    <Link href='/about'><a>About</a></Link>
    <Link href='/about'><a>Case Studies</a></Link>
    <Link href='/about'><a>Articles</a></Link> */}
    <Link href='//www.twitter.com/jlockwoodtweets'><a>@jlockwoodtweets</a></Link>
  </Wrapper>
)

export default Footer