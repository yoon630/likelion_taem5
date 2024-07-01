// 헤더 컴포넌트
import styled from "styled-components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

// 헤더 스타일
const Container = styled.div`
  display: flex;
  height: 62px;
  width: 1200px;
  color: #677788;
  font-size: 14px;
  /* padding: 8px 32px; */
  text-align: center;
`;
const Navebar = styled.div`
  height: 46px;
  width: 950px;
  display: flex;
  text-align: center;
  color: #677788;
  font-size: 14px;
  justify-content: end;
`;
const Searchbar = styled.input`
  width: 337px;
  height: 40px;
  padding: 10px 50px;
  margin-top: 5px;
  border: none;
  margin-right: auto;
  &:focus {
    outline: 0.1px solid #eff0eb;
    border-radius: 20px;
  }
`;
const Profile = styled.button`
  width: 42px;
  height: 42px;
  margin: 5px;
  cursor: pointer;
  border-radius: 50%;
  background-color: inherit;
  border: none;
  &:hover {
    background: #fafabe;
    color: #e7d355;
    /* transition: 0.5s; */
  }
`;
const Alarm = styled.button`
  width: 42px;
  height: 42px;
  margin-left: auto;
  border: none;
  margin: 5px;
  cursor: pointer;
  background-color: inherit;
  border-radius: 50%;

  &:hover {
    background: #fafabe;
    color: #e7d355;
    /* transition: 0.5s; */
  }
`;

const Logobar = styled.a`
  height: 62px;
  width: 245px;
  font-size: 16px;
  color: #677788;
`;
const Logo = styled.img`
  //여기에 이미지 URL 넣기
`;

const Header = () => {
  return (
    <Container>
      <Logobar>
        <Logo></Logo>
      </Logobar>
      <Navebar>
        <Searchbar placeholder="Search in" type="text"></Searchbar>
        <Alarm>
          <FontAwesomeIcon icon={faBell} />
        </Alarm>
        <Profile>
          <FontAwesomeIcon icon={faUser} />
        </Profile>
      </Navebar>
    </Container>
  );
};

export default Header;
