import Link from 'next/link'
import { useRouter } from "next/router";
import styled, { ThemeProvider } from 'styled-components'



// =====  BEGIN Responsive Presets   ==========

const size = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export const breakpoint = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
};

// =====  END Responsive Presets   ==========

const Navbar = styled.nav`
  display: flex;
  flex-direction:column;
  position:fixed;
  width:100%;
  background:rgba(255, 255, 255, 0.35);

  aside{
    margin:16px;
    z-index:1;
  }
  .name{
    color: #333941;
    font-weight: 700;
    padding:0;
  }

  a {
    padding: 0 16px;
    color: #7B7E83;
    font-weight: 500;
    transition: .2s ease-in-out;
    text-decoration:none;
  }

  a:hover{
    color:#333941;
  }

  a.active{
      color:#EBECEB;
      cursor: default;
    }
`



const Nav = styled.div`
margin: 16px;
display:flex;
justify-content: space-between;


.page-links{
    display:none;
    margin: 0 -16px;
    
    @media ${breakpoint.sm} {
    display:flex;
    }
  }

.icon{
    margin-top: 9px;

    @media ${breakpoint.sm} {
      display:none;
    }
  }
  .icon .line{
  width: 16px;
  height: 1px;
  background-color: #474C54;
  display: block;
  margin: 7px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  }

  .icon:hover{
  cursor: pointer;
}


.icon.is-active .line:nth-child(1){
  -webkit-transform: translateY(4px) rotate(45deg);
  -ms-transform: translateY(4px) rotate(45deg);
  -o-transform: translateY(4px) rotate(45deg);
  transform: translateY(4px) rotate(45deg);
}

.icon.is-active .line:nth-child(2){
  -webkit-transform: translateY(-4px) rotate(-45deg);
  -ms-transform: translateY(-4px) rotate(-45deg);
  -o-transform: translateY(-4px) rotate(-45deg);
  transform: translateY(-4px) rotate(-45deg);
}
`

const MenuWrapper = styled.div`
  
  background:rgba(255, 255, 255, 0.75);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 0px;
  backdrop-filter: saturate(180%) blur(20px);
  padding:16px;
  position:fixed;
  width:-webkit-fill-available;
  padding-top:92px;
  display:none;
`

const Menu = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
`  

const Header = () => {

  const router = useRouter();

  return(

  <Navbar>
    <Nav>
    <aside>
      <Link href='/'><a className="name">Jason Lockwood</a></Link>
    </aside>

    <aside>
    <div className="page-links">
      <Link href='/about'><a className={router.pathname == "/about" ? "active" : ""}>About</a></Link>
      <Link href='/about'><a className={router.pathname == "/casestudies" ? "active" : ""}>Case Studies</a></Link>
      <Link href='/about'><a className={router.pathname == "/articles" ? "active" : ""}>Articles</a></Link>
    </div>
    
      <div className="icon">
          <span class="line"></span>
          <span class="line"></span>
      </div>
    </aside>
    </Nav>

    <MenuWrapper className="toggled-page-links">
      <Menu>
        <Link href='/about'><a className={router.pathname == "/about" ? "active" : ""}>About</a></Link>
        <Link href='/about'><a className={router.pathname == "/casestudies" ? "active" : ""}>Case Studies</a></Link>
        <Link href='/about'><a className={router.pathname == "/articles" ? "active" : ""}>Articles</a></Link>
      </Menu>
    </MenuWrapper>

  </Navbar>
  )
}


function displayNav() {
  // alert('Hello!');
  
}


export default Header 
