import React, { useState } from 'react';
import styled from "styled-components";
import AvatarBlock from './components/AvatarBlock';
import AccInfo from './components/AccInfo';
import axios from "axios"


const AccountWrapper = styled.div `
width: 80%;
height: 1100px;
margin:0 auto;
display: grid;
grid-template-columns: 1fr 4fr;
grid-template-row: 1fr 3fr 1fr;
background: #fff;
`

class Account extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName : '',
            lastName: '',
            phoneNumber:'',
            location: '',
            email:'',
            avatar: null,
            
            invalid_email: '',
        }
     
        this.handleFile = this.handleFile.bind(this);
  
    }

   
    checkEmail = (e) => {
		let reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
		this.setState({
            email:e.target.value,
			invalid_email: !reg.test(e.target.value),
        })
        console.log(this.state.invalid_email)
    };
    handleFile = (f) =>{
       console.log(this)
        console.log(this.state.firstName) 
        this.setState({
            avatar: f,
            firstName: 5
        },() =>{
            const data = new FormData()
            data.append('file', this.state.avatar)
            axios.post("/upload/wm194@qq.com", data).then(res =>{
                this.setState({
                    imgUrl: res.data.avatar
                })
            })});
        
    }



    render(){
        return (
            <AccountWrapper>
            <AccInfo firstName={this.state.firstName} lastName={this.state.lastName}  phoneNumber={this.state.phoneNumber}  location={this.state.location} email={this.state.email } invalid_email={this.state.invalid_email} handleFile={this.handleFile.bind(this)}  checkEmail={this.checkEmail.bind(this)} onTodoChange ={this.onTodoChange.bind(this)} updateInfo= {this.updateInfo.bind(this)} />
            <AvatarBlock img={this.state.imgUrl}/>
        </AccountWrapper>
        )
    }
    componentDidMount(){
        
       
        
        axios.get('/user/info/wm194@qq.com').then((res) =>{
            
            this.setState({
                imgUrl: res.data.data.avatar,
                firstName: res.data.data.firstName,
                lastName: res.data.data.lastName,
                phoneNumber: res.data.data.phoneNumber,
                location: res.data.data.location,
                email:  res.data.data.email,
                avatar: ''
            });
            console.log(this.state.imgUrl)
        })
    }
    onTodoChange(e){
        const {name, value} = e.target;
        
        this.setState({[name]: value});
        console.log(this.state.firstName)
    }
    


    updateInfo(){
        const {firstName, lastName,phoneNumber,location,email} = this.state
        axios.put('user/profile',
        {
            "firstName": firstName,
            "lastName": lastName,
            "phoneNumber":phoneNumber,
            "location":location,
            "email":email
        }
        ).then(response => (
        this.setState({
            firstName:response.firstName,
            lastName:response.lastName,
            phoneNumber:response.phoneNumber,
            location:response.location,
            email:response.email,
        })
    ))
    }


}


export default Account;