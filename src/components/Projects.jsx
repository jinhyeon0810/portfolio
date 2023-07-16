import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function Projects({ projectElement }) {
  return (
    <>
      <Ref ref={projectElement}></Ref>
      <PortfolioWrap>
        <Link to="https://www.notion.so/portfolio-30bd35fae81f4a79a03323c72eb73b9e" target="_blank">
          <ProjectWrap> PROJECTS</ProjectWrap>
        </Link>
      </PortfolioWrap>
    </>
  );
}
const Ref = styled.div``;
const PortfolioWrap = styled.div`
  padding: 64px 32px;
  margin: auto 0;
  overflow: hidden;
`;

const ProjectWrap = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  color: black;
  cursor: pointer;
  &:hover {
    color: blue;
    transform: translate(0, -5px);
    transition-duration: 0.5s;
  }
`;
