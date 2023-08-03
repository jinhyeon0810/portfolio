import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function Intro({ element, onMoveToElement }) {
  return (
    <>
      <Wrapper>
        <Introduce>JinHyeon&apos;s Portfolio</Introduce>
        <IntroContents>
          <IntroContent>안녕하세요. </IntroContent>
          <IntroContent style={{ fontWeight: "bold" }}>&apos;강한 자가 살아남는게 아니라 살아남는 자가 강한 것이다&apos; </IntroContent>
          <IntroContent> 제가 제일 좋아하는 말입니다. </IntroContent>
          <IntroContent>꾸준히 공부해서 나아가며 새로운 것을 두려워 하지 않는 </IntroContent>
          <IntroContent> 프론트엔드 개발자가 되겠습니다.</IntroContent>
        </IntroContents>
        <MoreButton onClick={onMoveToElement}> 더보기 ↓ </MoreButton>
        <Ref ref={element}></Ref>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-image: url("https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_960_720.jpg");
  background-size: cover;
  opacity: 1;
  padding: 50px 0 50px 0;
`;

const Introduce = styled.div`
  padding-top: 140px;
  font-size: 40px;
  margin-bottom: 50px;
  color: white;
  @media (max-width: 730px) {
    font-size: 30px;
  }
`;

const IntroContent = styled.div`
  color: white;
  font-size: 20px;
  @media (max-width: 730px) {
    font-size: 14px;
  }
`;

const IntroContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

const MoreButton = styled.button`
  background-color: red;
  padding: 16px 32px;
  font-size: 16px;
  border-radius: 40px;
  color: white;
  opacity: 0.7;
`;

const Ref = styled.div``;
