import styled from "styled-components";
import { theme } from "../styles/theme";

const Button = styled.button`
  padding: ${theme.space[3]} ${theme.space[5]};
  margin: ${theme.space[2]};
  display: flex;
  color: ${theme.light.colors.shade_80};
  font-size: ${theme.fontSizes[0]};
  font-weight: ${theme.fontWeights.bold};
  font-family: 'SF Mono', SFMono-Regular, ui-monospace, monospace;
  ${props => props.primary && `
    background-color: ${props.theme.light.colors.primary};
  `}
  ${props => props.secondary && `
    background-color: ${props.theme.light.colors.shade_10};
  `}
  border: 2px solid ${theme.light.colors.shade_80};
  border-radius: ${theme.borderRadius.standard};
  cursor: pointer;
  transition: .2s ease-in-out;
  user-select: none;

  :hover{
    ${props => props.primary && `
    background-color: ${props.theme.light.colors.primary_hover};
  `}
  ${props => props.secondary && `
    background-color: ${props.theme.light.colors.background};
  `}
      transform: translateY(-3px);
      box-shadow: 0 5px 0px 0 ${theme.light.colors.shade_80};
  }

  /* Remove default focus styles for mouse users ONLY if :focus-visible is supported on this platform. */
  :focus:not(:focus-visible) {
    outline: none;
  }
`;

export default Button;