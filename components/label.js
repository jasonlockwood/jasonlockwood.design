import styled from "styled-components";
import { theme } from "../styles/theme";

const Label = styled.label`
  padding: ${theme.space[1]} ${theme.space[3]};
  display: inline-flex;
  color: ${theme.light.colors.shade_80};
  font-size: ${theme.fontSizes[0]};
  font-weight: ${theme.fontWeights.bold};
  font-family: "SF Mono", SFMono-Regular, ui-monospace, monospace;
  transition: 0.2s ease-in-out;
  user-select: none;
  border: 2px solid ${theme.light.colors.shade_80};
  border-radius: ${theme.borderRadius.standard};
  background: none;
  width: fit-content;

`;

export default Label;
