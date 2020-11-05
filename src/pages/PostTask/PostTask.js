import React, { useState } from "react";
import styled from "styled-components";
import DatePickerTool from "./components/DatePickerTool";
import CurrencyInput from "react-currency-input-field";
import api from "../../api";
import withAuth from "../../components/Auth/withAuth";

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 60px;
  margin-right: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PartOne = styled.div`
  width: 30%;
  & > input,
  textarea {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 25px;
  }
  & > textarea {
    height: 120px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 380px;
    margin-bottom: 20px;
  }
`;
const TitleOne = styled.h3`
  margin-top: 35px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 8px;
`;

const PartTwo = styled.div`
  width: 30%;
  & > input {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 25px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 380px;
    margin-bottom: 20px;
  }
`;

const TitleTwo = styled.h3`
  margin-bottom: 20px;
  margin-top: 35px;
`;

const DatePickerContainer = styled.div`
  position: relative;
`;

const PartThree = styled.div`
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    height: 380px;
  }
  & > input {
    margin-right: 5px;
  }
  & > label {
    margin-right: 8px;
  }
`;

const TitleThree = styled.h3`
  margin-top: 35px;
`;

const GetQuote = styled.div`
  margin-top: 120px;
  & > button {
    width: 100%;
    height: 38.84px;
    border-radius: 90px;
    border: 3px solid black;
    background-color: #f3d250;
    cursor: pointer;
  }
`;

const YellowRectangle = styled.div`
  width: 100%;
  height: 84px;
  background-color: #f3d250;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RecLeft = styled.div`
  padding: 10px;
  & > p {
    font-size: 0.6rem;
    padding-bottom: 8px;
  }
`;

const RecRight = styled.div`
  padding: 10px;
`;

class PostTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      taskDetail: "",
      taskAddress: "",
      taskBudgetType: "",
      taskDate: "",
      taskMoney: "",
    };
  }

  setTaskName(taskName) {
    this.setState({
      taskName,
    });
  }

  setTaskDetail(taskDetail) {
    this.setState({
      taskDetail,
    });
  }

  setTaskAddress(taskAddress) {
    this.setState({
      taskAddress,
    });
  }

  setTaskBudgetType(taskBudgetType) {
    this.setState({
      taskBudgetType,
    });
  }

  setTaskDate(taskDate) {
    this.setState({
      taskDate,
    });
  }

  setTaskMoney(taskMoney) {
    this.setState({
      taskMoney,
    });
  }

  handleSendTask() {
    //调用后端接口，实现发送任务
    api
      .post("/task/task", {
        email: this.props.value.user.email,
        title: this.state.taskName,
        budget: parseInt(this.state.taskMoney),
        location: this.state.taskAddress,
        date: this.state.taskDate,
        details: this.state.taskDetail,
      })
      .then((res) => {
        if (res.status == 200) {
          //跳转到任务浏览页面 —— /browse-tasks 的页面，需要补充...
        }
      });
  }

  render() {
    const {
      taskName,
      taskDetail,
      taskAddress,
      taskBudgetType,
      taskDate,
      taskMoney,
    } = this.state;
    return (
      <Layout>
        <PartOne>
          <TitleOne>What you need done?</TitleOne>
          <label>
            <strong>What do you need done?</strong>
            <br />
            <small>
              This'll be the title of your task -e.g. Help move my sofa
            </small>
          </label>
          <br />
          <input
            type="text"
            value={taskName}
            onChange={(e) => {
              this.setTaskName(e.target.value);
            }}
          />
          <br />
          <label>
            <strong>What are the details?</strong>
            <br />
            <small>Be as specific as you can about what needs doing</small>
            <br />
            <TextArea
              type="text"
              value={taskDetail}
              onChange={(e) => {
                this.setTaskDetail(e.target.value);
              }}
            ></TextArea>
          </label>
        </PartOne>
        <PartTwo>
          <TitleTwo>Where & When</TitleTwo>
          <label>
            <strong>Address</strong>
          </label>
          <br />
          <input
            type="text"
            value={taskAddress}
            onChange={(e) => {
              this.setTaskAddress(e.target.value);
            }}
          />
          <br />
          <label style={{ marginBottom: 300 }}>
            <strong>When do you need it done?</strong>
          </label>
          <br />
          <DatePickerContainer>
            <DatePickerTool
              value={taskDate}
              onChange={(e) => {
                this.setTaskDate(e);
              }}
            />
          </DatePickerContainer>
        </PartTwo>
        <PartThree>
          <TitleThree>Suggest how much</TitleThree>
          <strong>What is your budget?</strong>
          <br style={{ marginBottom: 500 }} />
          <input
            type="radio"
            onClick={() => {
              this.setTaskBudgetType("total budget");
            }}
            checked={taskBudgetType === "total budget"}
          />
          <label>Total</label>
          <input
            type="radio"
            onClick={() => {
              this.setTaskBudgetType("hourly rate");
            }}
            checked={taskBudgetType === "hourly rate"}
          />
          <label>Hourly rate</label>
          <CurrencyInput
            style={{ marginTop: 10 }}
            id="input-example"
            name="input-name"
            placeholder="$1,000"
            defaultValue={1000}
            allowDecimals={true}
            decimalsLimit={2}
            onChange={(value) => this.setTaskMoney(value)}
          />
          <GetQuote>
            <YellowRectangle>
              <RecLeft>
                <h4>ESTIMATED BUDGET</h4>
                <p>Final payment will be agreed later</p>
              </RecLeft>
              <RecRight>
                <span>$ {this.state.taskMoney}</span>
              </RecRight>
            </YellowRectangle>
            <button onClick={this.handleSendTask.bind(this)}>Get quotes</button>
          </GetQuote>
        </PartThree>
      </Layout>
    );
  }
}

export default withAuth(PostTask);
