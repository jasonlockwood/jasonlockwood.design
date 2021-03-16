import styled from "styled-components";
import Space from "./spacing";
import { theme } from "../styles/theme";

const BumpLink = styled.div`

    h2,p,img{
      transition: all 0.2s ease-in-out;
    }
  &:hover {
    h2,
    p {
      color: ${theme.light.colors.primary};
      

      &:after {
        transform: translateX(3px);
      }
    }
    img {
      transform: translateY(-3px);
      
    }
  }

  h2 {
    &:after {
      content: "→";
      position: relative;
      transition: transform 0.2s ease-in-out;
      left: 16px;
      top: 2px;
    }
  }

  img {
    border-radius: 16px;
  }
`;

const BumpLinkComponent = ({ discipline, image, title, description }) => (
  <BumpLink>
    <p className="mono text-xs">{discipline}</p>
    <Space tiny />
    <h2>{title}</h2>
    <Space tiny />
    <p>{description}</p>
    <Space standard />
    <img src={image} />
  </BumpLink>
);

export default BumpLinkComponent;
