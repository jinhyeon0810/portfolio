import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function Skills({ resumeElement }) {
  return (
    <>
      <Ref ref={resumeElement}>
        <SkillsWrapper style={{ perspective: "1000px" }}>
          <Link to="https://www.notion.so/2bf56d24e4674be285e89faaa7c975d9" target="_blank">
            <SkillsTitle>
              <Front>RESUME</Front>
              <Back>바로가기</Back>
            </SkillsTitle>
          </Link>
        </SkillsWrapper>
      </Ref>
    </>
  );
}

const Ref = styled.div``;
const SkillsWrapper = styled.div`
  width: 100%;
  height: 230px;
  overflow: hidden;
  background-color: black;
`;

const SkillsTitle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: 1s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  width: 100%;
  // height: 100%;
  position: absolute;
  top: 38%;
  backface-visibility: hidden;
`;
const Back = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 38%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
