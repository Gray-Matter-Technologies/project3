import React from 'react';
import FollowUs from "./components/FollowUs";
import Discover from "./components/Discover";
import Company from "./components/Company";
import DownloadOurApp from "./components/DownloadOurApp";
import styled from "styled-components";

const FooterContainer = styled.div`
  margin-top: 20px;
  font-size: 16px;
  background: #778899;
  color: $white;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style:none;
  margin-top: 20px;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 50px;
  padding-left: 100px;
`

const Footer = () => {
  return (
    <div>
      <FooterContainer>
          <FollowUs />
          <FlexContainer>
            <Discover />
            <Company />
            <DownloadOurApp />
          </FlexContainer>
      </FooterContainer>
    </div>
  );
};

export default Footer;