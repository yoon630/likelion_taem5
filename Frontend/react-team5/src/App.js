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
import "./App.css"; // CSS 애니메이션을 위한 파일

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
            <Route path="/postread" element={<PostRead />} />
            <Route path="/workingholiday" element={<WorkingHoliday />} />
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
