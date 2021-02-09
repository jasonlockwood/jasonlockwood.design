import Layout, { siteTitle } from "../components/layout";
import styled from "styled-components";
import { theme } from "../styles/theme";
import Link from "next/link";

const Wrapper = styled.section`
  max-width: 640px;
  margin: auto;

  h1 {
    margin: ${theme.space[5]};
    color: ${theme.light.colors.primary_30};
    transition: all 0.2s ease-in-out;

    @media ${theme.breakpoint.sm} {
      margin: ${theme.space[3]};
    }

    span {
      color: ${theme.light.colors.primary_80};
    }
  }

  img {
    margin-bottom: ${theme.space[5]};
  }

  p {
    margin-bottom: ${theme.space[5]};
  }
`;

export default function About() {
  return (
    <Layout>
      <Wrapper>
        
        <img src="/images/About.png" alt="Profile Picture" />

        <h2>👋</h2>

        <p>
          I'm a product designer currently living in Hoboken.
        </p>

        <p>
          Most recently, I worked as Senior Product Designer at{" "}
          <Link href="http://www.informed.co">
            <a className="link-effect">Informed.co</a>
          </Link>
          . In my 5 years at Informed.co, I designed the brand identity, worked across teams to design and code successful user experiences for the web app, built a foundational design system to boost the acceleration and quality of team output, shaped design processes, and learned a ton from some really great people.
        </p>

      </Wrapper>
    </Layout>
  );
}
