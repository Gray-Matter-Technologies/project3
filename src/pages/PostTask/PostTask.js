import React, { useState } from "react";
import styled from "styled-components";
import DatePickerTool from "./components/DatePickerTool";
import CurrencyInput from "react-currency-input-field";
import api from '../../api';
import withAuth from '../../components/Auth/withAuth';
import {withRouter} from 'react-router-dom'
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
const TitleOne = styled.h3``;

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
`;

const TitleThree = styled.h3``;

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

const InputWrapper = styled.div `
position: relative;

`


const InputFlexBox = styled.div `
position: absolute;
margin-top:25px;
width:192px;
background-color:white;
z-index: 20;
`

const FLexItem = styled.div`
border: 1px solid rgb(246, 248, 253);

&:hover{
  background-color: #D3D3D3;
}
`

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
      availableAddress: [],
      showDropDown: false
    };
   this.handleItemClick = this.handleItemClick.bind(this)
   this.handleDropDown = this.handleDropDown.bind(this)
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
    api.get(`/task/address/${taskAddress}`)
    .then(res =>{
      this.setState({
        availableAddress: res.data.result
      },)
    })
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

  handleItemClick(e){
    this.setState({
      taskAddress:e.target.textContent
    },()=>{
      this.setState({
        showDropDown:false
      })
    })
  }

  handleDropDown(show){
    if(show){
      return(
        <InputFlexBox>
        { 
         this.state.availableAddress.map((record) => (
           record.length > 0
             ? (<FLexItem onClick={this.handleItemClick}>{record}</FLexItem>)
             : null
         ))
       }
       
       </InputFlexBox>
      )
    }else {
      return null
    }
  }


  handleSendTask(){

    
    api.post('/task/task',{
      "email" : this.props.value.user_email,
      "title" : this.state.taskName,
      "budget" : this.state.taskMoney,
      "location" : this.state.taskAddress,
      "date" : this.state.taskDate,
      "details" : this.state.taskDetail
    }).then(res=>{
      if(res.status == 200){
        this.props.history.push('/browse-tasks')

      }
      
    });

  }

  componentDidMount(){
    if(localStorage.getItem('AUTH_TOKEN')===null){
      this.props.history.push('/')
      alert('please login')
    }
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
            <textarea
              type="text"
              value={taskDetail}
              onChange={(e) => {
                this.setTaskDetail(e.target.value);
              }}
            ></textarea>
          </label>
        </PartOne>
        <PartTwo>
          <TitleTwo>Where & When</TitleTwo>
          <label>
            <strong>Address</strong>
          </label>
          <br />
         
          <InputWrapper>
              {this.handleDropDown(this.state.showDropDown)}
          <input
            type="text"
            value={taskAddress}
            onChange={(e) => {
              this.setState({
                showDropDown: true
              })
              this.setTaskAddress(e.target.value);
            }}
            
            
          />
          </InputWrapper>
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
          <br />
          <CurrencyInput
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
            <button
              onClick={this.handleSendTask.bind(this)}
            >
              Get quotes
            </button>
          </GetQuote>
        </PartThree>
      </Layout>
    );
  }
}

export default withRouter(withAuth(PostTask));
