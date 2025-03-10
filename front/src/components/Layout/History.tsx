import React, { useEffect } from "react";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css";
import {
  Wrap,
  ImgBox,
  Img,
  DivideBox,
  ContentsBox,
  ContentsDiv,
  InfoTitleDiv,
} from "../../styles/Intro";
import Sidebar from "../Sidebar/Sidebar";
import Rainbow250 from "../../img/rainbowVer250.png";
import HistoryItem from "../History/HistoryItem";

export default function History() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrap>
      <div style={{ height: "80px" }}></div>
      <ImgBox>
        <Img
          src={Rainbow250}
          alt=""
          width="100%"
          height="100%"
          margin="0 0 -5px 0"
        />
      </ImgBox>
      <DivideBox>
        <Sidebar title="교회 연혁" />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">교회 연혁</InfoTitleDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <HistoryItem />
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
