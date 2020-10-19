import Link from 'next/link'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

const Wrapper = styled.menu`
  display: flex;
  padding:16px;

  .page-links{
    display:none;
  }

  a {
    margin: 0 16px;
    color: #7B7E83;
    font-weight: 500;
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

const Menu = () => (
  <Wrapper>
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
  </Wrapper>
)

export default Menu