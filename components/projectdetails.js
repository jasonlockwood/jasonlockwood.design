import Link from "next/link";
import styled from "styled-components";
import { theme } from "../styles/theme";
import Space from "../components/spacing"

const ProjectDetails = styled.div`
  margin: ${theme.space[3]} ${theme.space[0]};
  display: flex;
 

  ul{
      text-transform: uppercase;

      li{
        text-transform: initial;
      }
  }

`;

const ProjectDetailsComponent = ({ listTitle, listItem1, listItem2, listItem3, listItem4, listItem5}) => (
  <ProjectDetails>
    <ul className="mono">{listTitle}
      <Space tiny/>
      <li>{listItem1}</li>
      <Space y8/>
      <li>{listItem2}</li>
      <Space y8/>
      <li>{listItem3}</li>
      <Space y8/>
      <li>{listItem4}</li>
      <Space y8/>
      <li>{listItem5}</li>
    </ul>
  </ProjectDetails>

);


export default ProjectDetailsComponent;
