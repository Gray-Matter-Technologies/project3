import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Home/components/Header";
import Task from "./components/Task";
import TaskDetail from "./components/TaskDetail";
import axios from "axios";
import avatarTrader from "./components/Task/pic/avatar-trader.png";
import detailImg1 from "./components/TaskDetail/pic/detailImg1.png";
import detailImg2 from "./components/TaskDetail/pic/detailImg2.png";
import detailImg3 from "./components/TaskDetail/pic/detailImg3.png";

const BrowseTaskContainer = styled.div`
  margin: 3rem auto 2rem;
  width: 84rem;
  display: flex;
  flex-direction: row;
`;

const TaskContainer = styled.div`
  width: 23rem;
  height: calc(100vh + 144px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #FFFFFF;
  }
  &::-webkit-scrollbar-thumb {
    background: #5EDEFC;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #5EDEFC;
  }
`;

const TaskDetailContainer = styled.div`
  padding: 1.375rem 2rem;
  width: 58rem;
`;

class BrowseTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      tasks: [],
      currentTask: null,
    }
  }

  componentDidMount() {
    async function getTask() {
      try {
        const response = await axios.get('/task/tasks');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    const { error, tasks, currentTask, } = this.state;
    return (
      <div>
        <Header />
        <BrowseTaskContainer>
          <TaskContainer>
              {tasks.map(task => (
                <Task {...task}
                onClick={() => this.setState({...this.state, currentTask: task})} />
              ))}
          </TaskContainer>
          <TaskDetailContainer>
            <TaskDetail {...currentTask} />
          </TaskDetailContainer>
        </BrowseTaskContainer>
      </div>
    );
  }
};


export default BrowseTask;