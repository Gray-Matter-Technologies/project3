import React from "react";
import styled from "styled-components";
import taskman from "./elements/taskman.jpeg";

const CardDesign = styled.div`
  width: 246.28px;
  height: 139.56px;
  background: #ffffff;
  border: 1px solid #ececec;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px 16px 12px;
  margin: 6px;
`;

const CardLeft = styled.div`
  & > p {
    font-size: 0.5rem;
  }
`;

const CardRight = styled.div`
  & > img {
    width: 58.99px;
    height: 52.99px;
    border-radius: 50%;
  }
`;

const Task = ({ title, description, price }) => {
  return (
    <CardDesign>
      <CardLeft>
        <h3>{title}</h3>
        <h2>{price}</h2>
        <p>{description}</p>
      </CardLeft>
      <CardRight>
        <img src={taskman} alt="" />
      </CardRight>
    </CardDesign>
  );
};

export default Task;
