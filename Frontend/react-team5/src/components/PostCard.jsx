//카드 형식의 글 PostCard
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
  background-color: #ffffff;
`;

const CardHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const LikeCount = styled.span`
  float: right;
  color: #ff4081;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const Author = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const Date = styled.span`
  margin-left: 8px;
  font-size: 12px;
  color: #999;
`;

const Preview = styled.p`
  margin: 8px 0;
  font-size: 14px;
  color: #333;
`;

const Location = styled.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #2196f3;
`;

const PostCard = ({
  title,
  likes,
  author,
  date,
  preview,
  continent,
  country,
}) => {
  return (
    <CardContainer>
      <CardHeader>
        <Title>
          {title} <LikeCount>❤ {likes}</LikeCount>
        </Title>
      </CardHeader>
      <CardBody>
        <Author>
          {author} <Date>{date}</Date>
        </Author>
        <Preview>{preview}</Preview>
        <Location>
          {continent}, {country}
        </Location>
      </CardBody>
    </CardContainer>
  );
};

export default PostCard;
