import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function Header({ onMoveToElement, onMoveToResumeElement, onMoveToProjectElement }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
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
            backgroundColor: scrollPosition > 140 && "black",
            color: scrollPosition > 140 && "white",
            opacity: scrollPosition > 140 && "0.95",
            boxShadow: scrollPosition > 140 && "1px 9px 6px -7px rgba(0,0,0,0.1)",
          }}
        >
          <Name>
            Front-end <br />
            <Job>Developer</Job>
          </Name>
          <IndexLine>
            <Index onClick={onMoveToElement}>About me</Index>
            <Index onClick={onMoveToResumeElement}>Resume</Index>
            <Index onClick={onMoveToProjectElement}>Projects</Index>
            <Link to="https://blog.naver.com/growingdeveloper" target="_blank">
              <Index>Blog</Index>
            </Link>
            <Link to="https://www.notion.so/8ed83c74292e450db5d7017b9ef5da2b?v=7b47b5ebdca240a7844399299c29d8b4" target="_blank">
              <Index>Notion</Index>
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
  padding: 20px 10px;
`;

const Name = styled.div`
  font-size: 35px;
  opacity: 0.7;
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
