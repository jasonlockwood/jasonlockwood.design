import styled from "styled-components";
import theme from "../styles/theme";
import Navbar from "./navbar";
import Footer from "./footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  height: 100%;
  max-width: 760px;
  margin: auto;
`;

const Main = styled.main``;

export default function Layout({ children }) {
  return (
    <>
      <Wrapper className="px-4 lg:px-0">
        {/* <Navbar /> */}

        <Main>{children}</Main>
        

        <hr/>
        <Footer />
      </Wrapper>
    </>
  );
}
