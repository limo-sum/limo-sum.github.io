import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

const UnderLine = observer(() => {
  return <UnderLineFrame className="underline" />;
});

export default UnderLine;

const UnderLineFrame = styled.div`
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 5px;
  bottom: 3px;
  background: yellowgreen;
  opacity: 0.3;
  z-index: -1;
`;
