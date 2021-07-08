import React from "react";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import styled from "styled-components";
import { dateFormatter, monthDiff } from "../Functions/CommonFuncs";

const Education = observer(() => {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const exp = [
    {
      inst: "Wecode",
      major: "프론트엔드 개발 교육 이수",
      img: "wecode.png",
      desc: ``,
      period: [new Date("June 01, 2020"), new Date("September 01, 2020")],
    },
    {
      inst: "인하대학교",
      major: "국제통상학",
      img: "inha.jpeg",
      desc: ``,
      period: [new Date("March 02, 2009"), new Date("Feburary 16, 2016")],
    },
  ];

  return (
    <EducationFrame>
      <h2 className="bigTitle">Education</h2>
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
                <h3>{pr.major}</h3>
                <span>
                  ({dateFormatter(pr.period[0])} - {dateFormatter(pr.period[1])}
                  , {monthDiff(pr.period[0], pr.period[1])})
                </span>
              </Title>
              <p className="inst">{pr.inst}</p>
              <p>{pr.desc}</p>
              {pr.functions && (
                <div>
                  주요 구현 기능 :
                  {pr.functions.map((fu, idx) => {
                    return <li key={idx}>{fu}</li>;
                  })}
                </div>
              )}
            </div>
          </EachExp>
        );
      })}
    </EducationFrame>
  );
});

export default Education;

const EducationFrame = styled.div``;

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
