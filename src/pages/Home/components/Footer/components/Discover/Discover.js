import React from "react";
import styled from "styled-components";


const DiscoverContainer = styled.div`
width: 400px;
list-style:none;
margin-top: 20px;

a { text-decoration: none; color:white } 
li {list-style-type:none;}
`

const Discover = (props) => {
  return(
    <DiscoverContainer>
    <ul>
      <a href='about:blank' target="_blank"  rel="noopener noreferrer">
        <li>Discover</li>
      </a>
      <a href='about:blank' target="_blank"  rel="noopener noreferrer">
        <li>Become a Tasker</li>
      </a>
      <a href='about:blank' target="_blank"  rel="noopener noreferrer">
        <li>Services By City</li>
      </a>
      <a href='about:blank' target="_blank"  rel="noopener noreferrer">
        <li>All Services</li>
      </a>
      <a href='about:blank' target="_blank"  rel="noopener noreferrer">
        <li>Buy a Gift Card</li>
      </a>
      <a href='about:blank' target="_blank"  rel="noopener noreferrer">
        <li>Elity Taskers</li>
      </a>
      <a href='about:blank' target="_blank"  rel="noopener noreferrer">
        <li>Help</li>
      </a>
    </ul>
    </DiscoverContainer>
  );
};

export default Discover;