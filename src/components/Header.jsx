import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function Header({ onMoveToElement, onMoveToResumeElement, onMoveToProjectElement, onMoveToStudyElement }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  const onMoveTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    console.log(scrollPosition);
  });

  return (
    <>
      <Wrapper>
        <Nav
          style={{
            backgroundColor: scrollPosition > 80 && "black",
            color: scrollPosition > 80 && "white",
            opacity: scrollPosition > 80 && "0.95",
            boxShadow: scrollPosition > 80 && "1px 9px 6px -7px rgba(0,0,0,0.1)",
          }}
        >
          <Name onClick={onMoveTop}>
            Front-end <br />
            <Job>Developer</Job>
          </Name>

          <IndexLine>
            <Index onClick={onMoveToElement}>About me</Index>
            <Index onClick={onMoveToResumeElement}>Resume</Index>
            <Index onClick={onMoveToProjectElement}>Projects</Index>
            <Index onClick={onMoveToStudyElement}>Study</Index>
            <Link to="https://blog.naver.com/growingdeveloper" target="_blank">
              <Index>Blog</Index>
            </Link>
          </IndexLine>
        </Nav>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  color: white;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 12px 10px;
`;

const Name = styled.div`
  font-size: 28px;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
    scale: 1.1;
    transition-duration: 0.5s;
  }
`;

const Job = styled.div`
  font-size: 25px;
  text-align: center;
`;

const Index = styled.div`
  cursor: pointer;
  font-size: 18px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transition-duration: 0.5s;
    scale: 1.1;
  }
`;

const IndexLine = styled.div`
  display: flex;
  gap: 40px;
`;
