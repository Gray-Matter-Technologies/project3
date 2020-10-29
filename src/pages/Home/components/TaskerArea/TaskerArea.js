import React, { Component } from 'react';
import styled from "styled-components";
import TaskerBlock from "./components/TaskerBlock"

 

const TaskerWrapper = styled.div `
width: 100%;
height: 800px;
margin-top:50px;
`
const TakserTitle = styled.div `

    width: 100%;
    height: 50.33px;
    margin:10px; auto;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 58px;
    text-align: center;
`
const TaskerDesc = styled.div `

    width: 100%;
    height: 50px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
`
const BecomeTakser = styled.button `
    width: 200px;
    height: 65px;
    display:block;
    margin:0 auto;
    background: #5EDEFC;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 90px;
`

const TaskerList = styled.div `
    width: 20%;
    height: 30px;
    margin:5px auto;
    display:flex;
`


const TaskerItem = styled.div`
    align-content: flex-start;
    width: 70px;
    height：30px;
    line-height: 22px;
    text-align:center;

    font-family: museo-regular, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    line-height: 22px;

    &:after {
        display:block;
        content: '';
        border-bottom: solid 2px #019fb6;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }
    &:hover {
        &:after {
            transform: scaleX(1); 
        }
    }

    &:hover{
        
        color:#019fb6;
    }
    &.left{
        font-size: 12px;
        float: left;
    }
    &.right{
        font-size: 12px;
        float: right;
    }
`




class TaskerArea extends Component {
    render(){
        return (
        <TaskerWrapper>
             <TakserTitle>Meet some Taskers!</TakserTitle>
             <TaskerDesc>Discover the story behind the people that are making the TaskBunny <br/> community greawt, how and why they do what they do.</TaskerDesc>
             <TaskerList>
                 <TaskerItem>Tom</TaskerItem>
                 <TaskerItem>Emily</TaskerItem>
                 <TaskerItem>Brende</TaskerItem>
             </TaskerList>
             <TaskerBlock/>
             <BecomeTakser>Become a Tasker</BecomeTakser>
        </TaskerWrapper>

        )
    }

}

export default TaskerArea;