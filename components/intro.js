import styled from "styled-components";
import { theme } from "./theme";

const Wrapper = styled.section`
  padding: ${theme.space[3]};
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: ${theme.fontSizes[6]};
    font-weight: ${theme.fontWeights.bold};
    padding: ${theme.space[3]};
    color: ${theme.light.colors.primary_30};
    line-height: ${theme.lineHeights.body};

    span {
      color: ${theme.light.colors.primary_80};
    }
  }
`;

const Intro = () => (
  <Wrapper>
    <aside>
      <h1>
        <span>Jason Lockwood </span>
        is a professional designer - who codes, and is focused on crafting
        thoughtful, intuitive, and engaging products that help improve lives.
      </h1>
    </aside>
    <aside>
      <img src="/images/PlaceholderImage.png"></img>
    </aside>
  </Wrapper>
);

export default Intro;
