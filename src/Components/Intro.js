import React from "react";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import styled from "styled-components";

const Intro = observer(() => {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <IntroFrame isTablet={isTablet}>
      <Introduce>
        <h2 className="bigTitle"> Frontend Developer</h2>
        <p>
          1년차 프론트엔드 개발자로 React와 AWS, Github을 이용하여 개발환경
          구축부터 배포까지 전반적인 개발프로세스를 경험하였습니다. 동료들과
          함께 지속적인 성장이 가능하며 새로운 배움을 얻을 수 있는 환경을
          선호합니다.
        </p>
      </Introduce>

      <Skills>
        <h2 className="bigTitle">Skills</h2>
        <SkillImage>
          <i className="fab fa-html5" style={{ color: "#e55125" }} />
          <i className="fab fa-css3-alt" style={{ color: "#0a73b8" }} />
          <i className="fab fa-react" style={{ color: "#61DAFB" }}></i>
          <i className="fab fa-js-square" style={{ color: "#E5A228" }} />
          <i className="fab fa-git" />
          <img src="/Images/mobx.png" alt="mobx" />
          <img src="/Images/aws.png" alt="aws" />
        </SkillImage>
        <p>React.js, HTML, CSS(SCSS)로 웹을 개발합니다.</p>
        <p>Styled-Component를 이용하며, 반응형 웹을 만들 수 있습니다.</p>
        <p>상태 관리 도구로 React Hooks와 MobX를 이용합니다.</p>
        <p>Git으로 코드를 관리하고 협업합니다.</p>
        <p>AWS를 이용하여 서비스를 배포하고 HTTPS 통신환경을 구축합니다.</p>
      </Skills>
    </IntroFrame>
  );
});

export default Intro;

const IntroFrame = styled.div`
  display: ${({ isTablet }) => (isTablet ? "block" : "grid")};
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ isTablet }) => (isTablet ? "0" : "30px")};
  padding: 0 20px;
`;

const SkillImage = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  i {
    font-size: 45px;
  }
  img {
    width: 40px;
  }

  i,
  img {
    margin: 0 15px 15px 0;
  }
`;
const Introduce = styled.div``;
const Skills = styled.div``;
