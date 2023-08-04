import styled from "styled-components";
import StudyCard from "./StudyCard";
import { datas } from "../data/data";

// eslint-disable-next-line react/prop-types
export default function Projects({ studyElement }) {
  return (
    <>
      <Ref ref={studyElement}></Ref>
      <PortfolioWrap>
        <ProjectWrap>STUDY</ProjectWrap>
        <GridTemplate>
          {datas.map((data, i) => {
            return <StudyCard data={data} key={i} />;
          })}
        </GridTemplate>
      </PortfolioWrap>
    </>
  );
}
const Ref = styled.div``;
const PortfolioWrap = styled.div`
  padding: 70px 32px;
  margin: auto 0;
  overflow: hidden;
`;

const ProjectWrap = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  justify-items: center;
  gap: 10px 10px;
  margin: 20px auto 0;
  width: 980px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 5px 5px;
    width: 300px;
  }
  @media (max-width: 674px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 5px 5px;
    width: 300px;
  }
`;
