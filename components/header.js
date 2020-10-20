import Link from 'next/link'
import styled, { ThemeProvider } from 'styled-components'


const Wrapper = styled.header`
  display: flex;
  flex-direction:column;
  position:fixed;
  width:-webkit-fill-available;
  background:rgba(255, 255, 255, 0.35);

  aside{
    padding:16px;
    z-index:1;
  }
  .name{
    color: #333941;
    font-weight: 700;
    margin:0;
  }

  a {
    margin: 0 16px;
    color: #7B7E83;
    font-weight: 500;
  }
`



const MenuBarWrapper = styled.div`
padding: 16px;
display:flex;
justify-content: space-between;


.page-links{
    display:none;
  }

.icon{
    margin-top: 3px;
  }
  .icon .line{
  width: 24px;
  height: 2px;
  background-color: #474C54;
  display: block;
  margin: 4px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  }

  .icon:hover{
  cursor: pointer;
}

.icon.is-active .line:nth-child(2){
  opacity: 0;
}

.icon.is-active .line:nth-child(1){
  -webkit-transform: translateY(6px) rotate(45deg);
  -ms-transform: translateY(6px) rotate(45deg);
  -o-transform: translateY(6px) rotate(45deg);
  transform: translateY(6px) rotate(45deg);
}

.icon.is-active .line:nth-child(3){
  -webkit-transform: translateY(-6px) rotate(-45deg);
  -ms-transform: translateY(-6px) rotate(-45deg);
  -o-transform: translateY(-6px) rotate(-45deg);
  transform: translateY(-6px) rotate(-45deg);
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
`

const MenuContentWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
`

const Header = () => (
  <Wrapper>
    <MenuBarWrapper>
    <aside>
      <Link href='/'><a className="name">Jason Lockwood</a></Link>
    </aside>

    <aside>
    <div className="page-links">
      <Link href='/about'><a>About</a></Link>
      <Link href='/about'><a>Case Studies</a></Link>
      <Link href='/about'><a>Articles</a></Link>
    </div>
    
      <div className="icon">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
      </div>
    </aside>
    </MenuBarWrapper>

    <MenuWrapper className="toggled-page-links">
      <MenuContentWrapper>
        <Link href='/about'><a>About</a></Link>
        <Link href='/about'><a>Case Studies</a></Link>
        <Link href='/about'><a>Articles</a></Link>
      </MenuContentWrapper>
    </MenuWrapper>

  </Wrapper>
)

export default Header