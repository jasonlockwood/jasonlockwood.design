import styled from "styled-components";
import { theme } from "../styles/theme";

const TextButton = styled.button`
  margin: ${theme.space[3]} ${theme.space[0]};
  display: flex;
  color: ${theme.light.colors.shade_80};
  font-size: ${theme.fontSizes[0]};
  font-weight: ${theme.fontWeights.bold};
  font-family: "SF Mono", SFMono-Regular, ui-monospace, monospace;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  user-select: none;
  background: none;

  &:before {
    content: "→";
    position: absolute;
    transition: transform 0.2s ease-in-out;
    right: 0px;
    color: ${theme.light.colors.primary};
  }

  &:hover:before {
    transform: translateX(3px);
  }

  /* Remove default focus styles for mouse users ONLY if :focus-visible is supported on this platform. */
  :focus:not(:focus-visible) {
    outline: none;
  }
`;

export default TextButton;
