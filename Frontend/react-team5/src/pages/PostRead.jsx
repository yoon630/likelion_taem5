import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background-color: #fff;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const PostTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const PostInfo = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const PostBody = styled.div`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const PostRead = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://43.200.226.225/intern/community/${postId}`
        );
        console.log("API Response:", response.data); // 응답 데이터를 콘솔에 출력
        setPostData(response.data);
      } catch (error) {
        console.error("Error fetching post data:", error);
        setError("게시글을 불러오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostData();
  }, [postId]);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!postData) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <MainContent>
          <PostTitle>{postData.title}</PostTitle>
          <PostInfo>
            작성자: {postData.author_id || "익명"} | 작성일:{" "}
            {postData.created_at || "Unknown date"}
          </PostInfo>
          <PostBody>{postData.content}</PostBody>
        </MainContent>
      </Container>
    </>
  );
};

export default PostRead;
