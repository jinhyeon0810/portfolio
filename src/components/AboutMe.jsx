/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiBloglovin } from "react-icons/si";
import { LuNewspaper } from "react-icons/lu";
import { Link } from "react-router-dom";
import BeforeDevelop from "./BeforeDevelop";
import { useState } from "react";

export default function AboutMe() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ProfileWrapper>
        <ProfileTitle>ABOUT ME</ProfileTitle>
        <ProfileWrap>
          <Profile>
            <FaUser />
            <NameWrap>
              <Name>이름</Name>
              <NameContent>김진현</NameContent>
            </NameWrap>
          </Profile>
          <Profile>
            <ImLocation />
            <NameWrap>
              <Name>주소</Name>
              <NameContent>서울특별시 서대문구</NameContent>
            </NameWrap>
          </Profile>
          <Profile>
            <BsTelephoneFill />
            <NameWrap>
              <Name>연락처</Name>
              <NameContent>010-8306-1876</NameContent>
            </NameWrap>
          </Profile>
          <Profile>
            <AiOutlineMail />
            <NameWrap>
              <Name>이메일</Name>
              <NameContent>5drop@naver.com</NameContent>
            </NameWrap>
          </Profile>
          <Profile>
            <BsGithub />
            <NameWrap style={{ cursor: "pointer" }}>
              <Link to="https://github.com/jinhyeon0810" target="_blank">
                <Name>Github</Name>
              </Link>
            </NameWrap>
            <SiBloglovin style={{ marginLeft: "20px", fontSize: "19px" }} />
            <NameWrap style={{ cursor: "pointer", marginLeft: "8px" }}>
              <Link to="https://blog.naver.com/growingdeveloper" target="_blank">
                <Name>Blog</Name>
              </Link>
            </NameWrap>
          </Profile>
          <Profile>
            <LuNewspaper />
            <NameWrap style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
              <Name>비전공자</Name>
              <NameContent>개발공부 이전 이력들</NameContent>
            </NameWrap>
          </Profile>
        </ProfileWrap>
      </ProfileWrapper>
      {open && <BeforeDevelop />}
    </>
  );
}

const ProfileWrapper = styled.div`
  padding: 64px 32px;
  margin: auto 0;
  overflow: hidden;
`;

const ProfileTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 730px) {
    font-size: 30px;
  }
`;

const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  width: 70%;
  margin: 0 auto;
  @media (max-width: 730px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px 10px;
    width: 100%;
  }
  @media (min-width: 730px) and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px 10px;
    width: 100%;
  }
`;

const Profile = styled.div`
  display: flex;
  font-size: 30px;
`;
const NameWrap = styled.div`
  margin-left: 20px;
`;
const Name = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
const NameContent = styled.div`
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
