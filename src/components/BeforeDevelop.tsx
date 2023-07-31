import React from "react";
import styled from "styled-components";
import ImageSrc from "../../public/assets/개발이전이력1.png";
import ImageTwoSrc from "../../public/assets/개발이전이력2.png";

export default function BeforeDevelop() {
  return (
    <ImageSection>
      <Image src={ImageSrc}></Image>
      <Image src={ImageTwoSrc} />
    </ImageSection>
  );
}

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 50px;
`;

const Image = styled.img`
  width: 600px;
  height: 400px;
`;
