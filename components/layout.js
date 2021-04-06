import styled from "styled-components";
import { theme } from "../styles/theme";
import Navbar from "./navbar";
import Footer from "./footer";

const Wrapper = styled.div`
  z-index:-9999;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  height: 100%;
  max-width: 940px;
  margin: auto;
  
`;

export default function Layout({ children }) {
  return (
    <>
      <Wrapper>
        <Navbar />

        <Main className="px-4 lg:px-0">{children}</Main>

        
        <Footer />
      </Wrapper>
    </>
  );
}
