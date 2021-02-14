import styled from "styled-components";
import { theme } from "../styles/theme";

const Space = styled.div`
  width: 100%;
  display: block;

  ${(props) =>
    props.y8 &&
    `
    height: ${props.theme.space[2]};
  `}
  ${(props) =>
    props.tiny &&
    `
    height: ${props.theme.space[3]};
  `}
  ${(props) =>
    props.standard &&
    `
    height: ${props.theme.space[4]};
  `}
    ${(props) =>
    props.extra &&
    `
    height: ${props.theme.space[6]};
  `}

  user-select: none;
`;

export default Space;
