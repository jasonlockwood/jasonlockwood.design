import styled from "styled-components";
import { theme } from "../styles/theme";

const Button = styled.button`
  padding: ${theme.space[3]} ${theme.space[6]};
  display: flex;
  color: ${theme.light.colors.shade_80};
  font-family: "IA Writer Quattro S";
  font-size: ${theme.fontSizes[1]};
  font-weight: ${theme.fontWeights.bold};
  ${(props) =>
    props.primary &&
    `
    background-color: ${props.theme.light.colors.primary};
    color: white;
  `}
  ${(props) =>
    props.secondary &&
    `
    background-color: ${props.theme.light.colors.shade_10};
    border: 1px solid ${props.theme.light.colors.shade_10};
  `}
  border-radius: ${theme.borderRadius.standard};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  user-select: none;
  justify-content: center;
  width: 100%;

  @media ${theme.breakpoint.sm} {
    width: inherit;
  }

  :hover {
    ${(props) =>
      props.primary &&
      `
    background-color: ${props.theme.light.colors.primary_hover};
  `}
    ${(props) =>
      props.secondary &&
      `
      ;
  `}
      transform: translateY(-3px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }

  /* Remove default focus styles for mouse users ONLY if :focus-visible is supported on this platform. */
  :focus:not(:focus-visible) {
    outline: none;
  }
`;

export default Button;
