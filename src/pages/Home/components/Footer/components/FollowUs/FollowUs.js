import React from "react";
import styled from "styled-components";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const TopContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
list-style-type:none
margin-top: 20px;
justify-content: space-between;
padding-top: 20px;
padding-bottom: 20px;
padding-left: 100px;

a { text-decoration: none; color:white } 
`

const FollowUs = (props) => {
  return(
    <TopContainer>
    <div>
      <p>&nbsp;</p>
      <div>
        <a href='about:blank' target="_blank"  rel="noopener noreferrer">
          <span>
          Follow us! We're friendly:
          </span>
        </a>
        &nbsp;

        <span>
          <a href='about:blank' target="_blank"  rel="noopener noreferrer"><FaFacebookSquare size='2rem' /></a>
        </span>
        &nbsp;
        <span>
          |
        </span>
        &nbsp;

        <span>
          <a href='about:blank' target="_blank"  rel="noopener noreferrer"><FaTwitterSquare size='2rem' /></a>
        </span>
        &nbsp;
        <span>
          |
        </span>
        &nbsp;


        <span>
          <a href='about:blank' target="_blank"  rel="noopener noreferrer"><FaInstagramSquare size='2rem' /></a>
        </span>
        &nbsp;
        
      </div>
    </div>
    </TopContainer>
  );
};

export default FollowUs;