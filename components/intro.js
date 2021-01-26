import styled from "styled-components";
import { theme } from "../styles/theme";

const Wrapper = styled.section`

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media ${theme.breakpoint.sm} {
    margin: ${theme.space[3]};
    flex-direction: row;
  }

  aside:first-child {
    z-index: 1;
  }

  h1 {
    margin: ${theme.space[5]};
    color: ${theme.light.colors.primary_30};
    transition: all .2s ease-in-out;

    @media ${theme.breakpoint.sm}{
      font-size: ${theme.fontSizes[4]};
      margin: ${theme.space[3]};
      width: 150%;

    }

    @media ${theme.breakpoint.md} {
      font-size: ${theme.fontSizes[5]};
    }

    @media ${theme.breakpoint.lg} {
      font-size: ${theme.fontSizes[6]};
      width: 130%;
    }

    span {
      color: ${theme.light.colors.primary_80};
    }
  }

  img {
    width: 100%;
    transition: all .2s ease-in-out;

    @media ${theme.breakpoint.sm} {
      min-width: 300px;
      margin: ${theme.space[3]};
      width: -webkit-fill-available;
      width: fill-available;
    }

    @media ${theme.breakpoint.md}{
      min-width: 400px;
    }

    @media ${theme.breakpoint.lg}{
      min-width: 500px;
    }
  }
`;

const Intro = () => (
  <Wrapper>
    <aside>
      <h1>
        <span>Jason Lockwood </span>
        is a Product Designer focused on crafting thoughtful, intuitive, and
        engaging digital products that help improve lives.
      </h1>
    </aside>
    <aside>
      <img src="/images/PlaceholderImage.png"></img>
    </aside>
  </Wrapper>
);

export default Intro;
