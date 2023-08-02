import styled, { css } from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function StudyCard({ data }) {
  const navigate = useNavigate();
  const { src, text, name, desc, work, code, web } = data;
  console.log(data);
  const [direction, setDirection] = useState("front");
  const handleCard = () => {
    if (direction === "front") {
      setDirection("back");
    } else {
      setDirection("front");
    }
  };

  console.log(code);

  return (
    <>
      <Flip>
        <Card direction={direction}>
          <StudyArea onClick={handleCard}>
            <StudyImage src={src} />
            <ClickHere>
              <ClickTextArea>
                <ClickText>{text} </ClickText>
                <Click>click</Click>
              </ClickTextArea>
            </ClickHere>
          </StudyArea>
          <BackArea onClick={handleCard}>
            <BackSection>
              <BackTitle>{name}</BackTitle>
              <BackDesc>{desc}</BackDesc>
              <Work># SKILLS</Work>
              <BackWork>{work}</BackWork>
              <BackBottom>
                <Link to={code} target="_blank">
                  <CodeButton onClick={(e) => e.stopPropagation()}>CODE</CodeButton>
                </Link>
                <Link to={web} target="_blank">
                  <WebButton onClick={(e) => e.stopPropagation()}>WEB</WebButton>
                </Link>
              </BackBottom>
            </BackSection>
          </BackArea>
        </Card>
      </Flip>
    </>
  );
}
const Flip = styled.div`
  perspective: 1000px;
`;
const Card = styled.div`
  cursor: pointer;
  transition: 1s;
  transform-style: preserve-3d;
  ${(props) =>
    props.direction === "back" &&
    css`
      transform: rotateY(180deg);
    `}
`;
const ClickHere = styled.div`
  position: absolute;
  display: none;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-weight: bold;
  border: 1px solid white;
  cursor: pointer;
  width: 200px;
  height: 200px;
  padding: 10px;
`;

const StudyArea = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 320px;
  height: 280px;
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.18);
  backface-visibility: hidden;

  &:hover ${ClickHere} {
    display: flex;
    justify-content: center;
  }
  cursor: pointer;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:hover::before {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const StudyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Click = styled.div``;
const ClickText = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const ClickTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BackArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 16px;
  width: 320px;
  height: 280px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.18);

  ${(props) =>
    props.direction === "front" &&
    css`
      transform: rotateY(180deg);
    `}
`;
const BackSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const BackTitle = styled.div`
  margin: 10px 0;
  color: #4c4c6d;
  font-weight: bold;
  font-size: 22px;
`;
const BackDesc = styled.div`
  margin-bottom: 12px;
  line-height: 1.2;
`;
const BackWork = styled.ul`
  margin: 2px 0 12px 0;
  font-size: 14px;
`;
const BackBottom = styled.div``;

const Work = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

const CodeButton = styled.button`
  position: absolute;
  bottom: 12%;

  border-radius: 8px;
  padding: 10px;
  background-color: #ffc3c3;
  min-width: 70px;
`;

const WebButton = styled.button`
  position: absolute;
  bottom: 12%;
  right: 50%;
  border-radius: 8px;
  padding: 10px;
  background-color: #ffc3c3;
  min-width: 70px;
`;
