// 사이드바 컴포넌트
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 400px;
  margin-top: 10px;
  margin-left: 5px;
  border-radius: 20px;
  border: 0.1px solid #eff0eb;
  box-shadow: 0 0.375rem 0.75rem rgba(140, 152, 164, 0.075);
`;

const Category = styled.div`
  width: 178.6px;
  height: 37px;
  color: #132144;
  margin: 0px 0px 4px;
  padding: 8px 14px;
  font-size: 13px;
  text-align: center;
  font-weight: 400;

  &:hover {
    color: #6e6e6e;
    cursor: pointer;
  }
`;

const Sidebar = () => {
  return (
    <>
      <Container>
        <Category>국가 선택</Category>
        <Category>국가 별 커뮤니티</Category>
        <Category>국가별 후기</Category>
        <Category>출국 전 정보</Category>
        <Category>해외 생활 정보</Category>
        <Category>귀국 후 정보</Category>
        <Category>공동구매</Category>
      </Container>
    </>
  );
};

export default Sidebar;
