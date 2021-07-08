import React from "react";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import styled from "styled-components";
import { briefInfo } from "../data.json";
import UnderLine from "../CommonComponents/UnderLine";
import profile from "../Images/profile.jpeg";

const AboutMe = observer(() => {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });

  const goToPage = (addr, idx) => {
    idx !== 0 && window.open(addr, "_blank");
  };

  return (
    <AboutMeFrame isTablet={isTablet}>
      <img className="profile" alt="profile" src={profile} />
      <Text isTablet={isTablet} isMobile={isMobile}>
        <h2 className="name">
          이지윤 <UnderLine />
        </h2>
        {briefInfo.map((el, idx) => {
          return (
            <Category key={idx} isTablet={isTablet}>
              <p className="button">{el.category}</p>
              <p className="address" onClick={() => goToPage(el.address, idx)}>
                {el.address}
              </p>
            </Category>
          );
        })}
      </Text>
    </AboutMeFrame>
  );
});

export default AboutMe;

const AboutMeFrame = styled.div`
  display: ${({ isTablet }) => (isTablet ? "block" : "flex")};
  align-items: center;
  grid-gap: 30px;
  width: 60%;
  min-width: ${({ isTablet }) => (isTablet ? "300px" : "600px")};
  max-width: ${({ isTablet }) => (isTablet ? "300px" : "600px")};
  margin: 0 auto 80px;

  .profile {
    display: block;
    margin: 0 auto;
    width: 160px;
    border-radius: 60px;
  }
`;

const Text = styled.div`
  .name {
    position: relative;
    display: block;
    margin: ${({ isTablet }) => (isTablet ? "20px auto 10px" : "0 0 10px 0")};
    width: fit-content;
    font-size: ${({ isMobile }) => (isMobile ? "28px" : "36px")};
    line-height: ${({ isMobile }) => (isMobile ? "36px" : "48px")};
    text-align: center;
  }
`;

const Category = styled.div`
  display: ${({ isTablet }) => (isTablet ? "block" : "flex")};
  align-items: center;
  height: ${({ isTablet }) => (isTablet ? "50px" : "30px")};
  font-size: 20px;
  max-width: ${({ isTablet }) => (isTablet ? "300px" : "")};

  .button {
    margin: ${({ isTablet }) => (isTablet ? "0 auto" : "0 15px 0 0")};
    width: 60px;
    height: 20px;
    background: #9acd324f;
    color: darkgreen;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    border-radius: 5px;
  }

  .address {
    text-align: center;
    &:hover {
      color: yellowgreen;
    }
    cursor: pointer;
  }
`;
