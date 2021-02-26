import styled from "styled-components";
import { theme } from "../styles/theme";

const TextButton = styled.button`
  margin: ${theme.space[3]} ${theme.space[0]};
  display: flex;
  color: ${theme.light.colors.shade_80};
  font-size: ${theme.fontSizes[2]};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  user-select: none;
  background: none;

  ${(props) =>
    props.after &&
    `
    &:after {
    content: "→";
    position: relative;
    transition: transform 0.2s ease-in-out;
    right: 0;
    top: 4px;
    margin-left:8px;
    color: ${theme.light.colors.primary};
    font-size: ${theme.fontSizes[3]};
    line-height: 1rem;
    padding-right: 8px;
  }
  `}
  

  ${(props) =>
    props.before &&
    `
    &:before {
    content: "←";
    position: relative;
    transition: transform 0.2s ease-in-out;
    left: 0;
    top: 4px;
    margin-right:8px;
    color: ${theme.light.colors.primary};
    font-size: ${theme.fontSizes[3]};
    line-height: 1rem;
    padding-left: 8px;
  }
  `}

  &:hover{
    color: ${theme.light.colors.primary_hover};
  }

  &:hover:after {
    transform: translateX(3px);
    color: ${theme.light.colors.primary_hover};
  }

  &:hover:before {
    transform: translateX(-3px);
    color: ${theme.light.colors.primary_hover};
  }

  /* Remove default focus styles for mouse users ONLY if :focus-visible is supported on this platform. */
  :focus:not(:focus-visible) {
    outline: none;
  }
`;

export default TextButton;
