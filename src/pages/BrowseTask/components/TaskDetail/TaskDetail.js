import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import taskerImg from "./pic/avatar-trader.png";
import locationImg from "./pic/location.svg";
import dateImg from "./pic/date.svg";
import Task from "../../../Home/components/Others/components/Tasks/components/Task";
import MakeOfferModal from "../MakeOfferModal";


const TaskSummary = styled.div`

`;

const TaskStatus = styled.div`
  float: left;
  margin-right: 2rem;
  font-size: 1.125rem;
  line-height: 1.375rem;
  &::before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background-color: rgba(0,0,0,0.5);
    margin-right: 4px;
  }
`;

const TaskTitle = styled.div`
  clear: both;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.625rem;
  padding: 1.375rem 0;
`;

const TaskBudget = styled.div`
  border: 1px solid rgba(0,0,0,0.2);
  font-size: 1.125rem;
  line-height: 1.375rem;
  width: 12.5rem;
  height: 10.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  float: left;
  margin-right: 3rem;

  & span {
    font-size: 3rem;
    font-weight: 900;
    line-height: 3.5rem;
    padding: 8px 0;
  }
`;

const Button = styled.button`
  width: 11.25rem;
  height: 3rem;
  background-color: #5EDEFC;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 5rem;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 2.5rem;
  text-align: center;
`;

const TaskPostBy = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  & span {
    color: #5EDEFC;
  }
`;

const TaskAvatar = styled.div`
  display: inline-block;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  margin-right: 2rem;
  vertical-align: middle;
`;

const TaskLocation = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  & img {
    width: 2rem;
    height: 2.5rem;
    vertical-align: middle;
    margin: 1rem 2.5rem 0.5rem 0.5rem;
  }
`;

const TaskDate = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  & img {
    width: 2.5rem;
    height: 2.5rem;
    vertical-align: middle;
    margin: 1rem 2rem 0.5rem 0.5rem;
  }
`;

const TaskContent = styled.div`
  clear: both;
  margin: 3.5rem 0;
  & h3 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;
  }
  & div {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-bottom: 10px;
  }
  & img {
    width: 25%;
    height: auto;
    padding-right: 1rem;
  }
`;

const TaskOffer = styled.div`
  margin: 3.5rem 0;
  & h3 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;
  }
`;

const TaskQuestion = styled.div`
  margin: 3.5rem 0;
  & h3 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;
  }
`;

const Question = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 1rem 0;
  padding-top: 10px;
  padding-bottom: 10px;

`;

const QuestionerAvatar = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 2rem;
  margin-bottom: 10px;
  vertical-align: middle;
  float: left;
`;

const QuestionerName = styled.div`
  font-weight: 700;

`;

const QuestionContent = styled.div`
  clear: both;
  background-color: #f6f8fd;
  border-radius: 10px;
  margin: 1rem 0;
  padding: 10px;
`;

const SignIn = styled.div`
  margin: 3.5rem 0;
  & h3 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;
  }
  & span {
    margin: 0 1.25rem;
  }
`;



const TaskDetail = (props) => {
  const [ showModal, setShowModal ] = useState(false);
  return (
    <div>
      <TaskSummary>
        <TaskStatus>Open</TaskStatus>
        <TaskStatus>Assigned</TaskStatus>
        <TaskStatus>Completed</TaskStatus>
        <TaskTitle>{props.title}</TaskTitle>
        <TaskBudget>
          Task Budget
          <span>${props.budget}</span>
          <Button onClick={ () => setShowModal(true) }>Make an offer</Button>
        </TaskBudget>
        <TaskPostBy>
          <TaskAvatar src={props.avatar} />
          Post by <span>{props.name}</span>
        </TaskPostBy>
        <TaskLocation><img src={locationImg} alt="location" />{props.location}</TaskLocation>
          <TaskDate><img src={dateImg} alt="date" />{props.date}</TaskDate>
      </TaskSummary>
      <TaskContent>
        <h3>Details</h3>
        <div>{props.details}</div>
        <div>{props.details}</div>
        {(props.images || []).map( image => (
          <img src={image} alt="" />
        ))}
      </TaskContent>
      <TaskOffer>
        <h3>Offers</h3>
        <Button onClick={ () => setShowModal(true) }>Make an offer</Button>
      </TaskOffer>

      <TaskQuestion>
        <h3>Question ({(props.questions || []).length})</h3>
        <div>Please don't share personal info – insurance won't apply to tasks not done through Airtasker!</div>
        {(props.questions || []).map( question => (
          <Question>
            <QuestionerAvatar src={question.avatar} />
            <QuestionerName>{question.name}</QuestionerName>
            <QuestionContent>{question.content}</QuestionContent>
          </Question>
        ))}
      </TaskQuestion>

      <SignIn>
        <h3>To join the conversation</h3>
        <Button>Join TaskBunny</Button><span>or</span><Button>Log in</Button>
      </SignIn>
      {
        showModal && <MakeOfferModal task={props} onClose={() => setShowModal(false)}></MakeOfferModal>
      }
    </div>
  );
};

export default TaskDetail;