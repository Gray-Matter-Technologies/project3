import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const DatePickerLayout = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  top: 15px;
  left: 0;
  right: 0;
`;

function DatePickerTool({ onChange, value }) {
  return (
    <DatePickerLayout>
      <DatePicker
        /* selected={startDate}
        onChange={(date) => setStartDate(date)} */
        onChange={(e) => {
          onChange(e);
        }}
        selected={value}
      />
    </DatePickerLayout>
  );
}

export default DatePickerTool;
