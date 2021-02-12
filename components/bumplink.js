import styled from "styled-components";
import Space from "./spacing";
import Link from "next/link";
import { theme } from "../styles/theme";

const BumpLink = styled.section`
  a {
    &:hover {
      h2,
      p {
        color: ${theme.light.colors.primary};
        transition: 0.2s ease-in-out;

        &:after {
          transform: translateX(3px);
        }
      }
    }
  }

  h2 {
    &:after {
      content: "→";
      position: relative;
      transition: transform 0.2s ease-in-out;
      left: 16px;
      top: 2px;
      color: ${theme.light.colors.primary};
    }
  }
`;

const BumpLinkComponent = ({ title, description }) => (
  <BumpLink>
    <Link href="/">
      <a>
        <h2>{title}</h2>
        <Space tiny />
        <p>{description}</p>
      </a>
    </Link>
  </BumpLink>
);

export default BumpLinkComponent;
