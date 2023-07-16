import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function Skills({ resumeElement }) {
  return (
    <>
      <Ref ref={resumeElement}></Ref>
      <SkillsWrapper>
        <Link to="https://www.notion.so/2bf56d24e4674be285e89faaa7c975d9" target="_blank">
          <SkillsTitle>RESUME</SkillsTitle>
        </Link>
      </SkillsWrapper>
    </>
  );
}

const Ref = styled.div``;
const SkillsWrapper = styled.div`
  padding: 64px 32px;
  margin: auto 0;
  overflow: hidden;
  background-color: black;
`;

const SkillsTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  color: white;
  cursor: pointer;
  &:hover {
    color: blue;
    transform: translate(0, -5px);
    transition-duration: 0.5s;
  }
`;
