import Link from 'next/link'
import Menu from '../components/nav'
import styled, { ThemeProvider } from 'styled-components'


const Wrapper = styled.header`
  padding: 16px;
  display: flex;

  aside{
    flex-grow:1;
    padding:16px;
  }
  .name{
    color: #333941;
    font-weight: 700;
  }
`

const Header = () => (
  <Wrapper>
    
    <aside>
      <Link href='/'><a className="name">Jason Lockwood</a></Link>
    </aside>
    

    <Menu />  {/* <-- Navigation Component */}

  </Wrapper>
)

export default Header