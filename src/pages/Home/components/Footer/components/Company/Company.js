import React from "react";
import styled from "styled-components";


const CompanyContainer = styled.div`
width: 400px;
list-style:none;
margin-top: 20px;

a { text-decoration: none; color:white } 
li {list-style-type:none;}
`

const Company = (props) => {
  return(
    <CompanyContainer>
      <ul className='footer__links-column'>
          <a  href='about:blank' target="_blank"  rel="noopener noreferrer">
            <li >Company</li>
          </a>
          <a  href='about:blank' target="_blank"  rel="noopener noreferrer">
            <li>About Us</li>
          </a>
          <a  href='about:blank' target="_blank"  rel="noopener noreferrer">
            <li>Careers</li>
          </a>
          <a  href='about:blank' target="_blank"  rel="noopener noreferrer">
            <li>Press</li>
          </a>
          <a  href='about:blank' target="_blank"  rel="noopener noreferrer">
            <li>TaskBunny for Good</li>
          </a>
          <a  href='about:blank' target="_blank"  rel="noopener noreferrer">
            <li>Blog</li>
          </a>
          <a  href='about:blank' target="_blank"  rel="noopener noreferrer">
            <li>Terms & Privacy</li>
          </a>
          <a  href='about:blank' target="_blank"  rel="noopener noreferrer">
            <li>Australia Consumer Notice</li>
          </a>
          <a  href='about:blank' target="_blank"  rel="noopener noreferrer">
            <li>Do Not Sell My Personal</li>
          </a>
          <a  href='about:blank' target="_blank"  rel="noopener noreferrer">
            <li>Information</li>
          </a>
      </ul>
    </CompanyContainer>
  );
};

export default Company;