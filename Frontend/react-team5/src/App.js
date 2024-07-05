// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Writing from "./pages/Writing";
import Home from "./pages/Home";
import PostList from "./pages/PostList";
import PostRead from "./pages/PostRead";
import WorkingHoliday from "./pages/WorkingHoliday";
import UserInfo from "./pages/UserInfo";
import LeavingInfo from "./pages/LeavingInfo";
import "./App.css"; // CSS 애니메이션을 위한 파일
import AbroadLife from "./pages/AbroadLife";
import Intern from "./pages/Intern";
import Arrive from "./pages/Arrive";
import Review from "./pages/Review";
import GroupBuying from "./pages/GroupBuying";
import CommunityPage from "./pages/CommunityPage";
import Study from "./pages/Study";

const Container = styled.div`
  position: relative;
`;

const App = () => {
  const location = useLocation();
  return (
    <Container>
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Routes location={location}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/postlist/:country" element={<PostList />} />
            <Route path="/postread/:postId" element={<PostRead />} />
            <Route path="/workingholiday" element={<WorkingHoliday />} />
            <Route path="/intern" element={<Intern />} />
            <Route path="/study" element={<Study />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/leavinginfo" element={<LeavingInfo />} />
            <Route path="/abroadlife" element={<AbroadLife />} />
            <Route path="/arrive" element={<Arrive />} />
            <Route path="/review/:category" element={<Review />} />
            <Route path="/groupbuying" element={<GroupBuying />} />
            <Route
              path="/communitypage/:category"
              element={<CommunityPage />}
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
