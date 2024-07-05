// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { isMobile } from "react-device-detect";
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
import AbroadLife from "./pages/AbroadLife";
import Intern from "./pages/Intern";
import Arrive from "./pages/Arrive";
import Review from "./pages/Review";
import GroupBuying from "./pages/GroupBuying";
import CommunityPage from "./pages/CommunityPage";
import Study from "./pages/Study";
import ScrollToTop from "./components/ScrollTop";
import MobileSignUp from "./pages/MobileSignUp";
import MobileLogin from "./pages/MobileLogin";
import MobileMain from "./pages/MobileMain";
import MobilePostList from "./pages/MobilePostList";
import MobilePostRead from "./pages/MobilePostRead";
import MobileHotList from "./pages/MobileHostList";
import MobileArrive from "./pages/MobileArriveList";
import Mobileback from "./pages/MobileBackList";
import MobileProfile from "./pages/MobileMypage";
import SideBarPage from "./pages/MobileSidebar";
import MobileAbroad from "./pages/MobileAbroadLife";
import "./App.css"; // CSS 애니메이션을 위한 파일
import MobileGroup from "./pages/MobileGroup";

const Container = styled.div`
  position: relative;
`;

const App = () => {
  const location = useLocation();
  return (
    <Container>
      <ScrollToTop />
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
            <Route
              path="/msignup"
              element={
                isMobile ? <MobileSignUp /> : <Navigate to="/signup" replace />
              }
            />
            <Route
              path="/mlogin"
              element={
                isMobile ? <MobileLogin /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/mmain"
              element={
                isMobile ? <MobileMain /> : <Navigate to="/main" replace />
              }
            />
            <Route
              path="/mcommunity"
              element={
                isMobile ? (
                  <MobilePostList />
                ) : (
                  <Navigate to="/CommunityPage" replace />
                )
              }
            />
            <Route
              path="/mhots"
              element={
                isMobile ? (
                  <MobileHotList />
                ) : (
                  <Navigate to="/CommunityPage" replace />
                )
              }
            />
            <Route
              path="/mpostread/:type/:postId"
              element={
                isMobile ? (
                  <MobilePostRead />
                ) : (
                  <Navigate to="/PostRead" replace />
                )
              }
            />
            <Route
              path="/marrive"
              element={
                isMobile ? (
                  <MobileArrive />
                ) : (
                  <Navigate to="/AbroadLife" replace />
                )
              }
            />
            <Route
              path="/mback"
              element={
                isMobile ? <Mobileback /> : <Navigate to="/Arrive" replace />
              }
            />
            <Route path="/mmypage" element={<MobileProfile />} />
            <Route
              path="/"
              element={
                isMobile ? <Mobileback /> : <Navigate to="/Arrive" replace />
              }
            />
            <Route path="/sidebar" element={<SideBarPage />} />
            <Route
              path="/mabroadlife"
              element={
                isMobile ? <MobileAbroad /> : <Navigate to="/Arrive" replace />
              }
            />
            <Route
              path="/mgroup"
              element={
                isMobile ? (
                  <MobileGroup />
                ) : (
                  <Navigate to="/GroupBuying" replace />
                )
              }
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
