import React, { Component } from 'react';
import styled from "styled-components";
import avatorImg from "./images/avator.png";
import ventorImg from "./images/ventor.png";
import InfoBlock from './components/InfoBlock';
import moneyIcon from './components/InfoBlock/images/money.png';
import easyIcon from './components/InfoBlock/images/easy.png';
import thumbsIcon from './components/InfoBlock/images/thums_up.png';
import TitleWrapper from './components/TitleWrapper';
import ventor from './components/TitleWrapper/images/ventor.png';
import radioGroup from './components/TitleWrapper/images/group_radio.png';
import houseIcon from './components/InfoBlock/images/house.png';
import poolIcon from './components/InfoBlock/images/pool.png';
import pipeIcon from './components/InfoBlock/images/pipe.png';
import applianceIcon from './components/InfoBlock/images/appliance.png';
import sweepIcon from './components/InfoBlock/images/sweep.png';
import TaskCard from './components/TaskCard';
import firstImg from './components/TaskCard/images/first_img.png';
import secondImg from './components/TaskCard/images/second_img.png';
import tGroup from './components/TaskCard/images/t_group.png';
import calendar from './components/TaskCard/images/calendar.png';

const DashboardBlockWrapper = styled.div `
    display : flex;
    margin-left : 73px;
    margin-right : 73px;
    background : #fff;
`
const LeftPartBox = styled.section `
    width: 235px;
    border-right:1px solid rgba(0, 0, 0, 0.2);
    text-align:center;
`
const Avator = styled.img `
    width:170px;
    height:170px;
    border-radius:50%;
    margin-top:40px;
`
const RightPartBox = styled.section `
    flex : 1;
`
const AdvertisementWrapper = styled.div `
    margin:42px auto 62px auto;
    width:940px;
    height:380px;
    border: 1.5px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    text-align:center;
`
const Ventor = styled.img `
    margin-top:30px;
    width:50px;
    height:81px;
`
const HeadTitle = styled.h2 `
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
    margin-bottom:20px;
`
const SubTitle = styled.p `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: #000000;
`
const InfoWrapper = styled.section `
    display:flex;
    flex-direction : row;
    justify-content : center;
    margin-top:44px;
`
const SubTitleBox = styled.p `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-left:65px;
`
const TaskCardList = styled.ul `
    display:flex;
    width:100%;
    flex-direction : row;
    margin-left:63px;
    margin-top:20px;
    margin-bottom:90px;

`

const PostTaskBtn = styled.div `
    width:310px;
    height:48px;
    line-height:42px;
    text-align:center;
    cursor:pointer;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    border: 3px solid #000000;
    background-color: #5EDEFC;
    box-sizing: border-box;
    border-radius: 90px;
    margin-left:68px;
    margin-top:37px;
    margin-bottom:133px;
`

class MyDashboard extends Component {

    render(){
        
        const cardList_one = [
            {
                imgIcon : ventor,
                text : 'From $70'
            },
            {
                imgIcon : tGroup,
                text : 'Once-off home clean'
            },
            {
                imgIcon : calendar,
                text : 'Choose a time $ day'
            }
        ];
        const cardList_two = [
            {
                imgIcon : ventor,
                text : 'From $70/wk'
            },
            {
                imgIcon : tGroup,
                text : 'Regular home clean'
            },
            {
                imgIcon : calendar,
                text : 'Choose your frequency'
            }
        ];

        const anotherCardList_one = [
            {
                imgIcon : ventor,
                text : 'From $70'
            },
            {
                imgIcon : tGroup,
                text : 'Once-off home clean'
            },
            {
                imgIcon : '',
                text : '2 bedroom，1 bathroom'
            }
        ];

        const anotherCardList_two = [
            {
                imgIcon : ventor,
                text : 'From $70/wk'
            },
            {
                imgIcon : tGroup,
                text : 'Regular home clean'
            },
            {
                imgIcon : '',
                text : '2 bedroom，1 bathroom'
            }
        ];

        return (
            <DashboardBlockWrapper>
               <LeftPartBox>
                   <Avator src={avatorImg}></Avator>
               </LeftPartBox>
               <RightPartBox>
                    <AdvertisementWrapper>
                        <Ventor src={ventorImg}></Ventor>
                        <HeadTitle>Meet Instant Book</HeadTitle>
                        <SubTitle>Book a top-rated Tasker in just a few clicks</SubTitle>
                        <InfoWrapper>
                            <InfoBlock boxWidth="125px" width="50px" height="50px" top="3px" left="3px" imgSrc={moneyIcon} infoText="Upfront pricing" bold="true"></InfoBlock>
                            <InfoBlock boxWidth="125px" width="50px" height="50px" top="4px" left="9px" imgSrc={easyIcon} infoText="Quick & easy" bold="true"></InfoBlock>
                            <InfoBlock boxWidth="140px" width="50px" height="50px" top="0px" left="6px" imgSrc={thumbsIcon} infoText="Skilled & reviewed" bold="true"></InfoBlock>
                        </InfoWrapper>
                    </AdvertisementWrapper>
                    
                    <TitleWrapper imgWidth="18px" imgSrc={ventor} infoText="Book now & consider the job done"></TitleWrapper>
                    <SubTitleBox>Arrange & pay for a top-rated Tasker in just a few clicks</SubTitleBox>
                    <TaskCardList>
                        <TaskCard type={'normal'} imgSrc={firstImg} cardContents={cardList_one}></TaskCard>
                        <TaskCard type={'normal'} imgSrc={secondImg} cardContents={cardList_two}></TaskCard>
                    </TaskCardList>
                    <TitleWrapper imgWidth="30px" imgSrc={radioGroup} infoText="Post a task & get offers"></TitleWrapper>
                    <SubTitleBox>Receive & review offers from Taskers who can help</SubTitleBox>
                    <InfoWrapper>
                        <InfoBlock boxWidth="125px" width="50px" height="50px" top="-3px" left="2px" imgSrc={houseIcon} infoText="Home Cleaning" bold="false"></InfoBlock>
                        <InfoBlock boxWidth="135px" width="50px" height="50px" top="2px" left="-7px" imgSrc={poolIcon} infoText="Backyard & Pool" bold="false"></InfoBlock>
                        <InfoBlock boxWidth="100px" width="50px" height="50px" top="0px" left="6px" imgSrc={pipeIcon} infoText="Roof & Pipe" bold="false"></InfoBlock>
                        <InfoBlock boxWidth="80px" width="50px" height="50px" top="0px" left="6px" imgSrc={applianceIcon} infoText="Appliance" bold="false"></InfoBlock>
                        <InfoBlock boxWidth="160px" width="50px" height="50px" top="0px" left="-4px" imgSrc={sweepIcon} infoText="Something different" bold="false"></InfoBlock>
                    </InfoWrapper>
                    <TitleWrapper imgWidth="18px" imgSrc={ventor} infoText="Popular Instant Bookings" marginTop='90px'></TitleWrapper>
                    <TaskCardList>
                        <TaskCard type={'unnormal'} imgSrc={firstImg} cardContents={anotherCardList_one}></TaskCard>
                        <TaskCard type={'unnormal'} imgSrc={secondImg} cardContents={anotherCardList_two}></TaskCard>
                    </TaskCardList>
                    <TitleWrapper imgWidth="0px" imgSrc={''} infoText="Can't find what you need ?"></TitleWrapper>
                    <SubTitleBox>Post a task and receive offers from Taskers on how they can help !</SubTitleBox>
                    <PostTaskBtn>Post a task & get offers</PostTaskBtn>
               </RightPartBox>
            </DashboardBlockWrapper>
        )
    }
}

export default MyDashboard;
