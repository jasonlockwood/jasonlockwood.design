import styled from "styled-components";
import theme from "../styles/theme";
import Navbar from "./navbar";
import Footer from "./footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  height: 100%;
  max-width: 968px;
  margin: auto;
`;

const Main = styled.main``;

export default function Layout({ children }) {
  return (
    <>
      <Wrapper>
        {/* <Navbar /> */}

        <Main>{children}</Main>

        <Footer />
      </Wrapper>
    </>
  );
}
