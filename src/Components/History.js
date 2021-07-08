import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import styled, { css } from "styled-components";
import { dateFormatter, monthDiff, goToPage } from "../Functions/CommonFuncs";

const History = observer(({ data, title }) => {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });

  const [bigImg, setBigImg] = useState(null);
  const [eachTitle, setEachTitle] = useState(null);
  const [imgIdx, setImgIndex] = useState(null);

  const showBigImg = (title, idx) => {
    const details = data.find((p) => p.title === title).n_details;
    setBigImg(details[idx]);
    setEachTitle(title);
    setImgIndex(idx);
  };

  const showOtherImg = (where) => {
    const details = data.find((p) => p.title === eachTitle).n_details;
    const acturalIdx = Number(imgIdx);
    const totalLength = details.length;

    if (where === "prev" && acturalIdx !== 0) {
      setBigImg(details[imgIdx - 1]);
      setImgIndex(Number(imgIdx) - 1);
    } else if (where === "next" && acturalIdx < totalLength - 1) {
      setBigImg(details[imgIdx + 1]);
      setImgIndex(Number(imgIdx) + 1);
    }
  };
  return (
    <HistoryFrame>
      <h2 className="bigTitle">{title}</h2>
      {data.map((pr, idx) => {
        const details = pr.n_details ? pr.n_details : [];

        const months = `${dateFormatter(pr.period[0])} - ${dateFormatter(
          pr.period[1]
        )}`;

        const period = monthDiff(pr.period[0], pr.period[1]);
        return (
          <EachExp isTablet={isTablet} key={idx}>
            <ImageFrame>
              <img src={pr.img} className="projImage" alt="expImage" />
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
                  ({months}
                  {period && ` , ${period}`})
                </span>
              </Title>
              {pr.at && <p>{pr.at}</p>}
              {pr.introd && <p className="intro">{pr.introd}</p>}
              {pr.desc && <p>{pr.desc}</p>}
              {pr.functions && (
                <div>
                  주요 구현 기능 :
                  {pr.functions.map((fu, idx) => {
                    return <li key={idx}>{fu}</li>;
                  })}
                </div>
              )}
              {pr.skills && (
                <ul>
                  {pr.skills.map((sk, idx) => {
                    return <li key={idx}>#{sk}</li>;
                  })}
                </ul>
              )}
              {pr.n_details && (
                <ScreenshotsFrame isTablet={isTablet}>
                  {details.map((src, idx) => {
                    return (
                      <img
                        className="screenshots"
                        key={idx}
                        src={src}
                        alt="screenshots"
                        onClick={() => showBigImg(pr.title, idx)}
                      />
                    );
                  })}
                </ScreenshotsFrame>
              )}
            </HoverFrame>
          </EachExp>
        );
      })}
      {bigImg && (
        <>
          <BigImageFrame className="bigimageframe">
            <i className="fas fa-times" onClick={() => setBigImg(null)} />
            <p className="pages">
              {`${Number(imgIdx + 1)} /
              ${data.find((p) => p.title === eachTitle).n_details.length}`}
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
    </HistoryFrame>
  );
});

export default History;

const HistoryFrame = styled.div`
  padding: 0 20px;
`;

const EachExp = styled.div`
  display: ${({ isTablet }) => (isTablet ? "block" : "flex")};
  margin-bottom: 20px;
  .projImage {
    margin-right: 20px;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    box-shadow: 1px 1px 1px lightgray;
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
  display: ${({ isMobile }) => (isMobile ? "block" : "flex")};
  align-items: flex-end;

  h3 {
    position: relative;
    margin-right: 5px;
    font-size: 24px;
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

const ImageFrame = styled.div``;

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
