import React from "react";
import styled, { css } from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 30px;
  padding: 0 100px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 35px;
  }

  @media (min-width: 768px) and (max-width: 1224px) {
    padding: 0 85px;
  }

  @media (min-width: 1224px) and (max-width: 1824px) {
    padding: 0 155px;
  }
`;

const Tab = styled.span`
  font-size: 20px;
  padding: 12px 0 16px;
  margin: 5px 22px;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
    color: #f3d250;
  }
`;

function Tabs({ onClick }) {
  return (
    <Layout>
      <Tab
        onClick={() => {
          onClick();
        }}
      >
        Home Cleaning
      </Tab>
      <Tab
        onClick={() => {
          onClick();
        }}
      >
        Backyard & Pool
      </Tab>
      <Tab
        onClick={() => {
          onClick();
        }}
      >
        Roof & Pipe
      </Tab>
      <Tab
        onClick={() => {
          onClick();
        }}
      >
        Appliance
      </Tab>
      <Tab
        onClick={() => {
          onClick();
        }}
      >
        Something different
      </Tab>
    </Layout>
  );
}

export default Tabs;
