import React from "react";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import styled from "styled-components";
import { dateFormatter, monthDiff } from "../Functions/CommonFuncs";

const Experiences = observer(() => {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const exp = [
    {
      company: "앤서테크놀로지스",
      title: "프론트엔드 개발자",
      img: "anser.png",
      skills: [
        "React",
        "React Hooks",
        "JavaScript",
        "MobX",
        "Styled-Components",
        "CRA",
        "Highcharts",
      ],
      desc: `개인투자자를 위한 주식 플랫폼 ZuKeeper와 기업전문가를 대상으로 종합 정보를 제공하는 Mynter 프로젝트 진행`,
      period: [new Date("September 21, 2020"), new Date()],
    },
    {
      company: "코스모이엔지",
      title: "무역팀 수출 담당자",
      img: "cosmo.jpeg",
      skills: [],
      desc: `General Motors의 전세계 지사에 부품 납품 (수출)`,
      period: [new Date("January 09, 2017"), new Date("January 10, 2020")],
    },
  ];

  return (
    <ExperiencesFrame>
      <h2 className="bigTitle">Work Experiences</h2>
      {exp.map((pr, idx) => {
        return (
          <EachExp isTablet={isTablet} key={idx}>
            <ImageFrame>
              <img
                src={`/Images/${pr.img}`}
                className="projImage"
                alt="expImage"
              />
              {pr.url && <i className="fas fa-globe" />}
            </ImageFrame>

            <div>
              <Title>
                <h3>{pr.title}</h3>
                <span>
                  ({dateFormatter(pr.period[0])} - {dateFormatter(pr.period[1])}
                  , {monthDiff(pr.period[0], pr.period[1])})
                </span>
              </Title>
              <p className="company">{pr.company}</p>
              <p>{pr.desc}</p>
              {pr.functions && (
                <div>
                  주요 구현 기능 :
                  {pr.functions.map((fu, idx) => {
                    return <li key={idx}>{fu}</li>;
                  })}
                </div>
              )}
              <ul>
                {pr.skills.map((sk, idx) => {
                  return <li key={idx}>#{sk}</li>;
                })}
              </ul>
            </div>
          </EachExp>
        );
      })}
    </ExperiencesFrame>
  );
});

export default Experiences;

const ExperiencesFrame = styled.div``;

const EachExp = styled.div`
  display: ${({ isTablet }) => (isTablet ? "block" : "flex")};
  margin-bottom: 20px;
  .projImage {
    margin-right: 20px;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    box-shadow: 1px 1px 1px lightgray;
    cursor: pointer;
  }
  ul {
    display: flex;
    grid-gap: 5px;
    flex-wrap: wrap;
    li {
      list-style: none;
      text-decoration: underline;
    }
  }

  .intro {
    color: gray;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;

  h3 {
    position: relative;
    margin-right: 5px;
    font-size: 24px;
    cursor: pointer;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 48px;
  }
`;

const ImageFrame = styled.div``;
