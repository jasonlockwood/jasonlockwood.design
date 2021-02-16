import styled from "styled-components";
import Space from "./spacing";
import Link from "next/link";
import { theme } from "../styles/theme";

const BumpLink = styled.div`
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
      <a className="grid grid-cols-1 md:grid-cols-12">
        <h2 className="col-span-1 lg:col-span-8">{title}</h2>
        <Space className="col-span-1 lg:col-span-8" tiny />
        <p className="col-span-1 lg:col-span-8">{description}</p>
      </a>
    </Link>
  </BumpLink>
);

export default BumpLinkComponent;
