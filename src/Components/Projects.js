import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import styled, { css } from "styled-components";
import { dateFormatter, goToPage } from "../Functions/CommonFuncs";

const Projects = observer(() => {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });

  const proj = [
    {
      title: "ZuKeeper",
      img: "zukeeper.png",
      skills: [
        "React",
        "React Hooks",
        "JavaScript",
        "MobX",
        "Styled-Components",
        "CRA",
        "Highcharts",
      ],
      introd:
        "개인과 기관 투자자의 금융 정보격차를 해소하기 위해 개인 투자자에게 양질의 금융 정보를 쉽게 전달하는 서비스",
      desc: `프론트엔드 개발환경을 구축하고 (CRA) AWS EC2를 이용하여 프로젝트를 배포 및 도메인을 연결했습니다. AWS Route53, Load Balancer 이용하여 HTTPS 통신 환경을 구축했습니다. MobX를 이용하여 전역상태를 관리한 첫 프로젝트입니다.`,
      functions: [
        "광고 : Google Adsense 적용",
        "SNS : 글쓰기, 사진 올리기, 좋아요/싫어요, 댓글, 대댓글, 공유",
        "베팅 : 주가 등락 예측과 실제 주가의 움직임에 따라 포인트 제공, 매일 4시 결과 안내",
        "주식 : 차트, 실적, 유사기업 구조도 등 데이터 시각화",
        "기타 : 모의투자 및 포트폴리오, 자동완성 검색과 기업 태그 기능 (AutoSuggest 이용)",
      ],
      url: "http://zukeeper.ai",
      period: [new Date("October 01, 2020"), new Date("June 30, 2021")],
      n_details: 4,
    },
    {
      title: "Mynter",
      img: "mynter.png",
      skills: [
        "React",
        "JavaScript",
        "MobX",
        "Styled-Components",
        "CRA",
        "Hooks",
        "Highcharts",
      ],
      introd:
        "기업 전문가를 대상으로 시장 및 기업의 실시간 데이터와 분석 내용을 통합한 모든 정보를 한곳에서 제공하는 서비스 (개발 진행 중)",
      desc: `Web socket으로 주가 자동 업데이트를 구현했습니다. Visualization library인 Highchart를 이용하여 데이터를 시각화했습니다.`,
      url: "",
      period: [new Date("July 01, 2021")],
      n_details: 2,
    },
    {
      title: "Unsplash",
      img: "unsplash.jpeg",
      skills: ["React", "JavaScript", "Styled-Components", "CRA", "Hooks"],
      introd: "Wecode 단기 팀 프로젝트 : 스톡 이미지 공유 웹 Unsplash Cloning",
      desc: `React 함수형 컴포넌트와 Hooks, Styled Component를 활용한 첫 프로젝트입니다. Intersection Observer로 Pagination을 구현했습니다.`,
      url: "https://youtu.be/ng-mGCnGlWo",
      period: [new Date("August 03, 2020"), new Date("August 14, 2020")],
    },
    {
      title: "La Roche-Posay",
      img: "laro.png",
      skills: ["React", "JavaScript", "CRA"],
      introd:
        "Wecode 단기 팀 프로젝트 : 스킨케어 전문 브랜드 라로슈포제 쇼핑몰 Cloning",
      desc: `첫 프로젝트입니다. React 클래스형 컴포넌트와 LifeCycle을 활용하였으며, 동적 Routing을 이용하여 페이지를 전환합니다.`,
      url: "https://youtu.be/AFIHSr-2HCU",
      period: [new Date("July 20, 2020"), new Date("July 31, 2020")],
    },
  ];

  const [bigImg, setBigImg] = useState(null);
  const [imgIdx, setImgIndex] = useState(null);

  const showBigImg = (src) => {
    const srcName = src.split(".")[0];
    setBigImg(src);
    setImgIndex(srcName.slice(-1));
  };

  const showOtherImg = (where) => {
    const acturalIdx = Number(imgIdx - 1);
    const totalLength = proj.find((p) =>
      bigImg.includes(p.title.toLocaleLowerCase())
    ).n_details;

    if (where === "prev" && acturalIdx !== 0) {
      setBigImg(bigImg.replace(`${imgIdx}.`, `${Number(imgIdx) - 1}.`));
      setImgIndex(Number(imgIdx) - 1);
    } else if (where === "next" && acturalIdx < totalLength - 1) {
      setBigImg(bigImg.replace(`${imgIdx}.`, `${Number(imgIdx) + 1}.`));
      setImgIndex(Number(imgIdx) + 1);
    }
  };
  return (
    <ProjectsFrame>
      <h2 className="bigTitle">Projects</h2>
      {proj.map((pr, idx) => {
        const details = pr.n_details
          ? Array.from(Array(pr.n_details).keys())
          : [];
        return (
          <EachProject isTablet={isTablet} key={idx}>
            <ImageFrame>
              <img
                src={`/Images/${pr.img}`}
                className="projImage"
                alt="projectImage"
              />
            </ImageFrame>
            <HoverFrame isTablet={isTablet}>
              <Title isMobile={isMobile}>
                <h3>
                  {pr.title}
                  {pr.url && (
                    <i
                      className="fas fa-globe"
                      onClick={() => goToPage(pr.url)}
                    />
                  )}
                </h3>

                <span>
                  ({dateFormatter(pr.period[0])} - {dateFormatter(pr.period[1])}
                  )
                </span>
              </Title>
              <p className="intro">{pr.introd}</p>
              <p className="description">{pr.desc}</p>
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
              {pr.n_details && (
                <ScreenshotsFrame isTablet={isTablet}>
                  {details.map((s, idx) => {
                    const src = `/Images/s-${pr.title.toLocaleLowerCase()}${
                      idx + 1
                    }.png`;
                    return (
                      <img
                        className="screenshots"
                        key={idx}
                        src={src}
                        alt="screenshots"
                        onClick={() => showBigImg(src)}
                      />
                    );
                  })}
                </ScreenshotsFrame>
              )}
            </HoverFrame>
          </EachProject>
        );
      })}
      {bigImg && (
        <>
          <BigImageFrame className="bigimageframe">
            <i className="fas fa-times" onClick={() => setBigImg(null)} />
            <p className="pages">
              {`${Number(imgIdx)} /
              ${
                proj.find((p) => bigImg.includes(p.title.toLocaleLowerCase()))
                  .n_details
              }`}
            </p>
            <ShowPrev onClick={() => showOtherImg("prev")}>
              <i className="fas fa-chevron-left" />
            </ShowPrev>
            <ShowNext onClick={() => showOtherImg("next")}>
              <i className="fas fa-chevron-right" />
            </ShowNext>
            <BigImage className="bigimage">
              <img src={bigImg} className="bigImage" alt="bigImage" />
            </BigImage>
          </BigImageFrame>
          <BigImageBackground onClick={() => setBigImg(null)} />
        </>
      )}
    </ProjectsFrame>
  );
});

export default Projects;

const ProjectsFrame = styled.div`
  padding: 0 20px;
`;

const EachProject = styled.div`
  display: ${({ isTablet }) => (isTablet ? "block" : "flex")};
  margin-bottom: 20px;

  &:hover {
    opacity: 0.7;
  }

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

  .description {
    white-space: pre-line;
  }
`;

const Title = styled.div`
  display: ${({ isMobile }) => (isMobile ? "block" : "flex")};
  align-items: flex-end;

  h3 {
    position: relative;
    margin-right: 5px;
    font-size: 24px;
    cursor: pointer;
    line-height: ${({ isMobile }) => (isMobile ? "1" : "48px")};

    .fa-globe {
      margin: 0 5px;
      line-height: 48px;
      font-size: 16px;
      color: gray;
      cursor: pointer;
    }
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: ${({ isMobile }) => (isMobile ? "1" : "48px")};
  }
`;

const ImageFrame = styled.div`
  width: 120px;
`;

const HoverFrame = styled.div`
  width: ${({ isTablet }) => (isTablet ? "100%" : "calc(100% - 120px)")};
`;

const ScreenshotsFrame = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
  height: 200px;
  overflow-y: hidden;

  img {
    width: 200px;
    cursor: pointer;
  }
`;

const ImgFrameCss = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  overflow-y: scroll;
`;

const BigImageFrame = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 960px;
  min-width: 300px;
  height: 80vh;
  overflow-y: scroll;
  border-radius: 10px;
  background-color: #fff;
  -webkit-box-shadow: 5px 5px 7px 0px #d6d6d6;
  box-shadow: 5px 5px 7px 0px #d6d6d6;
  z-index: 2;

  .pages {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 20px;
    font-weight: 600;
    line-height: 1.3;
    border-radius: 10px;
    color: #fff;
    background-color: yellowgreen;
    z-index: 4;
  }

  .fa-times {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 4;
  }
`;

const BigImage = styled.div`
  ${ImgFrameCss}
  height: 100%;
  background-color: #fff;
  overflow-y: scroll;

  .bigImage {
    position: absolute;
    width: 100%;
  }
`;

const ArrowFrameCss = css`
  position: absolute;
  width: 20%;
  height: 100%;
  cursor: pointer;
  z-index: 3;

  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    opacity: 0.3;

    &:hover {
      color: yellowgreen;
      opacity: 1;
    }
  }
`;

const ShowPrev = styled.div`
  ${ArrowFrameCss}
  left: 0;
`;

const ShowNext = styled.div`
  ${ArrowFrameCss}
  right: 0;
`;

const BigImageBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;
