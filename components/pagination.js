import styled from "styled-components";
import { theme } from "../styles/theme";
import Space from "./spacing";
import TextButton from "./textbutton";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: saturate(180%) blur(20px);
  border-top: 1px solid ${theme.light.colors.shade_10};
  margin: 0 16px;
`;

const Pagination = ({hrefBefore, hrefAfter, beforeText, afterText, currentProject}) => (
  <Wrapper>

    <TextButton href={hrefBefore} before buttonText={beforeText} />
    <h3>{currentProject}</h3>
    <TextButton href={hrefAfter} after buttonText={afterText} /> 

  </Wrapper>
);

export default Pagination;
