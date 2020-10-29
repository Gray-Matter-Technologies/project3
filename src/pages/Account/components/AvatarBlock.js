import React, { useState } from 'react';
import styled from "styled-components";
import AvatarImg from "../../../statics/tasker-samantha.jpg"

const BlockWrapper = styled.div `
    grid-row:1/3;
    grid-column:1/2;
    border-right: 1px solid #ccc;
    `

const AvatarWrapper = styled.div `
    width: 100%;
    height: 200px;
    `


const Avatar = styled.img `
    display: block;
    margin: 20px  auto ;
    width: 150px;
    height: 150px;
    background: url(${props => props.src});
    border-radius: 50%;
    background-size: contain;
    border: none;
`
const NameWrapper = styled.div `
    width: 100%;
    height: 30px;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    `




const AvatarBlock = (props) =>{
    return(
       
        <BlockWrapper>
           <AvatarWrapper>
               <Avatar src={props.img} />
               <NameWrapper>Xiao{' '}Wang</NameWrapper>
            </AvatarWrapper> 
        </BlockWrapper>
    )
}

export default AvatarBlock;