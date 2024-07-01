// 여기안에 sidebar 들어가야함
import Sidebar from "./Sidebar";
import React from "react";
import styled from "styled-components";
import canada from "../assets/canada.png";
import australia from "../assets/australia.png";
import newzealand from "../assets/newzealand.png";
import england from "../assets/england.png";
import netherlands from "../assets/netherlands.png";
import germany from "../assets/germany.png";

const BackGround = styled.div`
  width: 1200px;
  height: 1000px;
  background-color: white;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
`;

const Keyword = styled.div`
  display: flex;
  width: 900px;
  align-items: center; /* 세로 방향으로 중앙 정렬 */
  background-color: none;
  border: none;
  color: #0a124d;
  padding: 15px 32px;
  text-align: center;
  /* text-decoration: none; */
  font-size: 13px;
  margin: 4px 10px;
  justify-content: space-around;
`;
const KeywordBox = styled.div`
  /* flex-direction: row; */
  background-color: white;
  text-align: center;
  width: 160px;
  height: 50px;
  padding: 10px;
  box-shadow: 0 0.375rem 0.75rem rgba(140, 152, 164, 0.075);
  border-radius: 30px;
  margin: auto;
  border: 0.1px solid #eff0eb;
  &:hover {
    box-shadow: 0 0.375rem 0.75rem #fafabe;
    border: 0.1px solid #fafabe;
  }
`;

const SectionContainer = styled.div`
  display: flex;
`;
const CommunityBox = styled.div`
  width: 450px;
  height: 520px;
  border-radius: 20px;
  border: 0.1px solid #eff0eb;
  box-shadow: 0 0.375rem 0.75rem rgba(140, 152, 164, 0.075);
  margin: 20px;
`;
const Title = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #0a124d;
  border-bottom: 0.5px solid #dcdcdc;
  padding-top: 20px;
`;

const CommunityDiv = styled.div`
  width: 400px;
  height: 50px;
  font-size: 15px;
  color: #0a124d;
  padding: 15px 10px;
  font-weight: bold;
  align-items: center;

  margin-left: 5px;
`;
const CountryFlag = styled.img`
  /* 국가 이미지 */
  width: 30px;
  height: 30px;
  margin-right: 10px;
  justify-content: center;
  text-align: center;
`;

const ContentBox = styled.div`
  width: 520px;
  height: 450px;
  border-radius: 20px;
  border: 0.1px solid #eff0eb;
  box-shadow: 0 0.375rem 0.75rem rgba(140, 152, 164, 0.075);
  margin: 20px;
`;

const CountryBox = styled.div`
  width: 400px;
  height: 50px;
  font-size: 15px;
  color: #0a124d;
  padding: 15px 10px;
  font-weight: 600;
  align-items: center;
  /* text-align: center; */
  margin-left: 30px;
`;

const AdvBanner = styled.div`
  width: 1000px;
  height: 120px;
  border: 0.1px solid #eff0eb;
  border-radius: 20px;
  box-shadow: 0 0.375rem 0.75rem rgba(140, 152, 164, 0.075);
  font-size: 20px;
  font-weight: 550;
  color: #0a124d;
  padding: 10px;
`;
const Section = () => {
  return (
    <BackGround>
      <Sidebar></Sidebar>
      <Wrapper>
        <Keyword>
          <KeywordBox>Hot 게시물</KeywordBox>
          <KeywordBox>New Information</KeywordBox>
          <KeywordBox>이달의 글</KeywordBox>
        </Keyword>
        <SectionContainer>
          <CommunityBox>
            <Title>국가별 한인 Community</Title>
            <CommunityDiv>
              <CountryFlag src={canada} />
              캐나다
            </CommunityDiv>
            <CommunityDiv>
              <CountryFlag src={australia} />
              호주
            </CommunityDiv>
            <CommunityDiv>
              <CountryFlag src={newzealand} />
              뉴질랜드
            </CommunityDiv>
            <CommunityDiv>
              <CountryFlag src={england} />
              영국
            </CommunityDiv>
            <CommunityDiv>
              <CountryFlag src={netherlands} />
              네덜란드
            </CommunityDiv>
            <CommunityDiv>
              <CountryFlag src={germany} />
              독일
            </CommunityDiv>
          </CommunityBox>
          <ContentBox>
            <Title>Working Holiday Information</Title>
            <CountryBox>북아메리카</CountryBox>
            <CountryBox>유럽</CountryBox>
            <CountryBox>아시아</CountryBox>
            <CountryBox>남아메리카</CountryBox>
            <CountryBox>오세아니아</CountryBox>
          </ContentBox>
        </SectionContainer>
        <AdvBanner>공동구매 & 해외 용품 이벤트</AdvBanner>
      </Wrapper>
    </BackGround>
  );
};

export default Section;
