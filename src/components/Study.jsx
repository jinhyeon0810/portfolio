import styled from "styled-components";
import StudyCard from "./StudyCard";
import StudyImageSrc from "../../src/assets/thumnails/youtube썸네일.png";
import SecondStudyImageSrc from "../../src/assets/thumnails/htmlcss1.png";
import ThirdStudyImageSrc from "../../src/assets/thumnails/mbtireact.png";
import FourthStudyImageSrc from "../../src/assets/thumnails/coupang-NavFooter.png";
import CoupangCategoryImageSrc from "../../src/assets/thumnails/coupang-category.png";
import TodoListImageSrc from "../../src/assets/thumnails/todolist.png";

// eslint-disable-next-line react/prop-types
export default function Projects({ studyElement }) {
  const datas = [
    {
      src: SecondStudyImageSrc,
      text: "Coupang-CloneCoding",
      name: "Coupang 오늘의발견",
      desc: "쿠팡 웹페이지 마크업 게시물 입니다.",
      work: "HTML, CSS",
      code: "https://github.com/jinhyeon0810/FirstTimeGit/tree/master/%EC%A0%9C%EB%A1%9C%EB%B2%A0%EC%9D%B4%EC%8A%A4%20%EA%B3%BC%EC%A0%9C/Mission-01/Mission-01",
      web: "https://htmlstudy.vercel.app/",
    },
    {
      src: CoupangCategoryImageSrc,
      text: "Coupang-Category",
      name: "Coupang 추천상품",
      desc: "쿠팡 웹페이지 추천상품 영역 마크업 게시물입니다.",
      work: "HTML, CSS",
      code: "https://github.com/jinhyeon0810/FirstTimeGit/tree/master/%EC%A0%9C%EB%A1%9C%EB%B2%A0%EC%9D%B4%EC%8A%A4%20%EA%B3%BC%EC%A0%9C/Mission-03/Mission-03",
      web: "https://coupang-category.vercel.app//",
    },
    {
      src: FourthStudyImageSrc,
      text: "Coupang-Nav/Footer",
      name: "Coupang 헤더영역",
      desc: "쿠팡 웹페이지 헤더영역 마크업 게시물입니다.",
      work: "HTML, CSS",
      code: "https://github.com/jinhyeon0810/FirstTimeGit/tree/master/%EC%A0%9C%EB%A1%9C%EB%B2%A0%EC%9D%B4%EC%8A%A4%20%EA%B3%BC%EC%A0%9C/Mission-05/Mission-05",
      web: "https://coupang-navfooter.vercel.app/",
    },
    {
      src: TodoListImageSrc,
      text: "TodoList",
      name: "TodoList 클론코딩",
      desc: "오늘 할일을 기록할 수 있는 사이트입니다.",
      work: "React, CSS",
      code: "https://github.com/jinhyeon0810/clone-coding",
      web: "https://clone-coding-todolist.vercel.app/",
    },
    {
      src: StudyImageSrc,
      text: "Youtube",
      name: "Youtube 클론코딩",
      desc: "유튜브 Open API를 활용한 사이트입니다.",
      work: "React, TailwindCSS",
      code: "https://github.com/jinhyeon0810/youtube-clone-coding",
      web: "https://youtube-clone-coding-three.vercel.app/",
    },
    {
      src: ThirdStudyImageSrc,
      text: "MBTI",
      name: "MBTI 클론코딩",
      desc: "MBTI 궁합 확인할 수 있는 사이트입니다.",
      work: "React, TypeScript, Styled-component",
      code: "https://github.com/jinhyeon0810/mbtitest_ts/tree/main/practice/mbtitest_ts",
      web: "https://mbtitest-clonecoding.vercel.app/",
    },
  ];
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
`;
