import styled from "styled-components";
import { theme } from "../styles/theme";
import Space from "./spacing";
import TextButton from "./textbutton";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const Pagination = ({ beforeText, afterText }) => (
  <Wrapper>
    <Space extra />
    <hr />

    <TextButton before>{beforeText}</TextButton>
    <TextButton after>{afterText}</TextButton>

    <Space extra />
  </Wrapper>
);

export default Pagination;
