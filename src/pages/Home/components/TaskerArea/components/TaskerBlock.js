import React, { Component } from 'react';
import styled from "styled-components";

import cardImg from "../../../../../statics/tasker-samantha.jpg"
import starSvg from "../../../../../statics/icon/star-svgrepo-com.svg"
import indenIcon from "../../../../../statics/icon/id-card-svgrepo-com.svg"
import houseImg from "../../../../../statics/icon/house-svgrepo-com.svg"


const TaskerBlockWrapper = styled.div `
    overflow: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr 1.5fr 1.5fr ;
    grid-template-columns: 1fr 1fr 1fr  ;
    margin:30px  auto;
    width: 900px;
    height: 400px;

    border-radius: 15px;
`

const TaskerSpec = styled.div `
    grid-row:1/3;
    grid-column:1/3;
    background-color: #5EDEFC;
    `

    const TaskerReview = styled.div `
    grid-row:3/5;
    grid-column:1/2;
    background-color: #5EDEFC
`

const TaskerBagdes = styled.div `
    grid-row:3/5;
    grid-column:2/3;
    background-color: #5EDEFC;
`

const TaskerName = styled.h1 `
    width: 77px;
    height: 28px;
    margin-left: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

color: #000000;
`

const TaskerSpecicalize = styled.p `
    margin-left: 20px;

    font-style: italic;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;

    color: #545a77;
`
const TaskerCredit = styled.h5 `
    font-size: 11px;

    letter-spacing: .8px;
    color: #292b32;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0;
    margin: 0 15px 12px;
    position: relative;
    z-index: 2;
    }
    color: #000000;
`
const TaskerRate = styled.div `
    margin-left: 20px;
    margin-top: 10px;

    width:230px;
    height: 2opx
`

const TaskerStar = styled.div `
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background: url(${starSvg}) no-repeat 50%;
    background-size: 15px 16px;
    background-repeat: no-repeat;
    margin-right: 4px;`


const TaskerRateDesc = styled.div `
    padding-top: 10px;
    margin-left: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 15px;
    color: #545a77;
    line-height: 22px;
    font-weight: 300;
    padding: 0;
    font-size: 15px;
    font-family: museo_sans,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
`

const TaskerQuote = styled.div `

    margin-top: 8px;
    margin-bottom: 15px;
    font-size: 15px;
    color: #545a77;
    line-height: 22px;
    font-weight: 300;
    padding: 0;
    font-size: 15px;
    font-family: museo_sans,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
`

const Img = styled.a `
    width: auto;
    grid-row:1/5;
    grid-column:3/4;

    background: url(${cardImg}) no-repeat;
    background-size: cover;
`;

const Indent = styled.img `
    width:28px;
    height:28px;
    background: url(${indenIcon}) no-repeat;
    background-size: contain;
    border: none;
`;

const HouseIcon = styled.img `
    width:28px;
    height:28px;
    background: url(${houseImg}) no-repeat;
    background-size: contain;
    border: none;
`;






class TaskerBlock extends Component {
    
    render(){
        return (
            <TaskerBlockWrapper>
               <TaskerSpec>
                   <TaskerName >Bred</TaskerName>
                   <TaskerSpecicalize>Specialities: handyman, electrician, delivery. <br/><br/> this is desc </TaskerSpecicalize>
                </TaskerSpec>
                <TaskerReview>
                    <TaskerCredit>TRUST</TaskerCredit>
                    <TaskerRate>
                        <TaskerStar/>
                        <TaskerStar/>
                        <TaskerStar/>
                        <TaskerStar/>
                        <TaskerStar/>
                    </TaskerRate>
                    <TaskerRateDesc>5 Stars from 305 reviews</TaskerRateDesc>
                    <TaskerCredit>What the reviews says</TaskerCredit>
                    <TaskerRateDesc>Very nice and caring in trying circumstances! Thanks again<br/><TaskerQuote>— Tim S.</TaskerQuote> </TaskerRateDesc>
                </TaskerReview>
               <TaskerBagdes>
                    <TaskerCredit>BADGES</TaskerCredit>
                    <TaskerRateDesc><Indent/> Digital iD</TaskerRateDesc>
                    <TaskerRateDesc><HouseIcon/> IKEA</TaskerRateDesc>      
               </TaskerBagdes>
               <Img/>
            </TaskerBlockWrapper>
        )
    }

    componentDidMount() {
       
    }

}



export default TaskerBlock;