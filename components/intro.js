import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

const Wrapper = styled.section`
  padding: 16px;
  display: flex;
  justify-content: space-between;

  h1{
    font-size: 3rem;
    font-weight: 900;
    padding:16px;
    color: #575C62;
    line-height: 140%;
  }
`

const Intro = () => (
  <Wrapper>
        <aside>
            <h1>Jason Lockwood <span style={{color:'#B0B2B4'}}>is a professional designer - who codes, and is focused on crafting thoughtful, intuitive, and engaging products that help improve lives.</span> </h1>
        </aside>
        <aside>
            <img src="/images/PlaceholderImage.png"></img>
        </aside>

  </Wrapper>
)

export default Intro