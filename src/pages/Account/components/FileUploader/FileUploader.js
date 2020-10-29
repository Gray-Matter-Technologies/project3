import styled from 'styled-components';
import React, { useState, useRef } from 'react'
const Button = styled.button`
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
`;
const FileUploader = props => {
  const hiddenFileInput = React.useRef(null); 
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <Button onClick={handleClick}>
        Upload a file
      </Button>
      <input type="file"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
      /> 
    </>
  );
};
export default FileUploader;