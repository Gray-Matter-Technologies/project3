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
  ${(props) => {
    if (props.active) {
      return css`
        border-bottom: 2px solid #f3d250;
      `;
    }
  }}
`;

class Tabs extends React.Component {
  render() {
    const { activeTab, handleTabClick } = this.props;

    return (
      <Layout>
        <Tab
          active={activeTab === "HOME_CLEANING"}
          onClick={() => handleTabClick("HOME_CLEANING")}
        >
          Home Cleaning
        </Tab>
        <Tab
          active={activeTab === "BACKYARD_&_POOL"}
          onClick={() => handleTabClick("BACKYARD_&_POOL")}
        >
          Backyard & Pool
        </Tab>
        <Tab
          active={activeTab === "ROOF_&_PIPE"}
          onClick={() => handleTabClick("ROOF_&_PIPE")}
        >
          Roof & Pipe
        </Tab>
        <Tab
          active={activeTab === "APPLIANCE"}
          onClick={() => handleTabClick("APPLIANCE")}
        >
          Appliance
        </Tab>
        <Tab
          active={activeTab === "SOMETHING_DIFFERENT"}
          onClick={() => handleTabClick("SOMETHING_DIFFERENT")}
        >
          Something different
        </Tab>
      </Layout>
    );
  }
}

export default Tabs;
