import Head from "next/head";
import styled from "styled-components";
import theme from "../styles/theme";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  height: 100%;
  max-width: 1200px;
  margin: auto;
`;

const Main = styled.main`
`;

export default function Layout({ children, home }) {
  return (
    <>
      

      <Wrapper>
        <Navbar />

        <Main>{children}</Main>

        <Footer />
      </Wrapper>
    </>
  );
}
