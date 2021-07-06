import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

const Main = observer(() => {
  return (
    <MainFrame>
      <h1>포트폴리오</h1>
    </MainFrame>
  );
});

export default Main;

const MainFrame = styled.div`
  h1 {
    margin: 20px auto;
    text-align: center;
  }
`;
