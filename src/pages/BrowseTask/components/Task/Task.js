import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import taskerImg from "./pic/avatar-trader.png";
import locationImg from "./pic/location.svg";
import dateImg from "./pic/date.svg";

const TaskCard = styled.div`
  width: 20rem;
  height: 12.5rem;
  border: 3px solid #5EDEFC;
  border-radius: 3px;
  box-sizing: border-box;
  margin: 1.375rem;
`;

const TaskLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:visited {
    color: inherit;
  }
`;

const TaskBudget = styled.div`
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 2.625rem;
  margin: 0.75rem 1.375rem;
  float: left;
`;

const TaskAvatar = styled.div`
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 50%;
    margin: 0.75rem 1.375rem;
    float: right;
`;

const TaskTitle = styled.div`
  clear: both;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.375rem;
  margin: 1rem 1.375rem;
`;

const TaskLocation = styled.div`
  margin: 0.75rem 1.375rem;
  font-size: 0.875rem;
  line-height: 1.125rem;

  & img {
    width: 0.875rem;
    height: 1.25rem;
    margin-right: 1.25rem;
    vertical-align: middle;
  }
`;

const TaskDate = styled.div`
  margin: 0rem 1.375rem;
  font-size: 0.875rem;
  line-height: 1.125rem;
  float: left;

  & img {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.9rem;
    vertical-align: middle;
  }
`;

const TaskStatus = styled.div`
  &::before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background-color: #5EDEFC;
    margin-right: 4px;
  }

  color: #5EDEFC;
  font-size: 1.125rem;
  line-height: 1.375rem;
  margin: 0rem 1.375rem;
  float:right;
`;

const Task = (props) => {
  return (
    <TaskCard>
      <TaskLink onClick={props.onClick}>
        <TaskBudget>${props.budget}</TaskBudget>
        <TaskAvatar src={taskerImg}></TaskAvatar>
        <TaskTitle>{props.title}</TaskTitle>
        <TaskLocation><img src={locationImg} alt="location" />{props.location}</TaskLocation>
        <TaskDate><img src={dateImg} alt="date" />{props.date}</TaskDate>
        <TaskStatus>{props.status}</TaskStatus>
      </TaskLink>
    </TaskCard>
  );
};

export default Task;