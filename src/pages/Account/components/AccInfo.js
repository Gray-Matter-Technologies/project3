import React, {useState} from 'react';
import styled from "styled-components";
import FileUploader, {fileUploaded} from './FileUploader'

const AccInfoWrapper = styled.div `
    grid-row:1/3;
    grid-column:2/3;
    `

const AccHeader = styled.div `
    width: 100%;
    height: 80px;
    `

const HeaderTitle = styled.h4 `
    padding-left: 50px;
    padding-top: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 42px;
    `

const Form = styled.form `
`;



const UpdateButton = styled.button `
    width: 200px;
    height: 65px;
    margin-left: 50px;
    display:block;
    background: #5EDEFC;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 90px;
    font-size: 20px;
    cursor:pointer
`
const InputBox = styled.div `
    margin-top: 20px;
    width: 100%;
    height: 700px;
    
`
const InputLabel = styled.label`
    display: block;
    margin-left: 20px;
    font-weight: 500;
    width: 400px;
    height: 65px;
    margin-bottom: 20px;
    color: #545a77;
    `

const InputForm = styled.input `
    background: none;
    outline: none; 
    border: none;
    display:block;
    width: 400px;
    height: 40px;
    line-height: 30px;
    padding: 0 10px;
    border: 1px solid #bbc2dc;
    &.is-invalid {
        border-color:red;
    }
    &.form-control{
       border-color:green;
    }

    &:focus {
       box-shadow: 0 0 3px 2px rgba(1,164,209,.29);
        border-color: rgba(1,164,209,.5);
    }
  
`



const RadioItem = styled.input`
    `;

class AccInfo extends React.Component{
    constructor(props){
        super(props)
      
      
    }
  

    render(){
        return( <AccInfoWrapper>
            <AccHeader>
                <HeaderTitle>Account</HeaderTitle>
            </AccHeader>
            <FileUploader handleFile = {this.props.handleFile}/>
            <InputBox>
            
                <InputLabel >First{' '}Name<InputForm placeholder='Mian' name="firstName" value={this.props.firstName}  onChange={this.props.onTodoChange} /></InputLabel>
                <InputLabel >Last{' '}Name<InputForm placeholder='Wang' name="lastName"  value={this.props.lastName} ref={(input) =>{this.lastName = input}}  onChange={this.props.onTodoChange}/></InputLabel>
                <InputLabel >Mobile{' '}Number<InputForm placeholder='131301' name='phoneNumber' value={this.props.phoneNumber} ref={(input) =>{this.phoneNumber = input}}  onChange={this.props.onTodoChange}/></InputLabel>
                <InputLabel >Email{' '}Address<InputForm className={this.props.invalid_email ? `is-invalid` : `form-control`} placeholder='1213@163.com' name='email' value={this.props.email} ref={(input) =>{this.email = input}}  onChange={this.props.checkEmail}/></InputLabel>
                <InputLabel >Location<InputForm placeholder='Melbourne,AUS' name='location' value={this.props.location} ref={(input) =>{this.location = input}}  onChange={this.props.onTodoChange} /></InputLabel>
               
                <UpdateButton onClick={this.props.updateInfo}>Save{' '}Details</UpdateButton>
             
                
            </InputBox>
        </AccInfoWrapper>)
    }
  
}






export default AccInfo;