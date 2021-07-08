import React from "react";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import styled from "styled-components";
import AboutMe from "../Components/AboutMe";
import Intro from "../Components/Intro";
import Projects from "../Components/Projects";
import Experiences from "../Components/Experiences";
import Education from "../Components/Education";

const Main = observer(() => {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <MainFrame isTablet={isTablet} isMobile={isMobile}>
      <h1>{"{ JiYun Lee }"}</h1>
      <AboutMe />
      <Intro />
      <Projects />
      <Experiences />
      <Education />
    </MainFrame>
  );
});

export default Main;

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 100px;
  padding: 0 20px;
  max-width: 960px;

  h1 {
    margin: 100px auto;
    width: 320px;
    font-family: "GongGothicBold";
    font-size: ${({ isMobile }) => (isMobile ? "36px" : "48px")};
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
  }
  h1:hover {
    text-align: center;

    background: linear-gradient(
      to right,
      #000 20%,
      yellowgreen 40%,
      yellowgreen 60%,
      #000 80%
    );
    background-size: 200% auto;

    color: #000;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 3s linear infinite;
    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
  }

  .bigTitle {
    margin: 25px 0 10px;
    font-size: 36px;
  }
`;
