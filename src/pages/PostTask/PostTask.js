import React, { useState } from "react";
import styled from "styled-components";
import DatePickerTool from "./components/DatePickerTool";
import CurrencyInput from "react-currency-input-field";

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 60px;
  margin-right: 60px;

  & > div {
    border: 2px solid red;
  }
`;

const PartOne = styled.div`
  width: 30%;
  & > input,
  textarea {
    width: 100%;
  }
`;
const TitleOne = styled.h3``;

const PartTwo = styled.div`
  width: 30%;
  & > input {
    width: 100%;
  }
`;
const TitleTwo = styled.h3``;

const DatePickerContainer = styled.div`
  position: relative;
`;

const PartThree = styled.div`
  width: 30%;
`;

const TitleThree = styled.h3``;

const GetQuote = styled.div`
  margin-top: 120px;
  & > button {
    width: 100%;
    height: 38.84px;
    border-radius: 90px;
    border: 3px solid black;
    background-color: #f3d250;
    cursor: pointer;
  }
`;

const YellowRectangle = styled.div``;

function PostTask() {
  return (
    <Layout>
      <PartOne>
        <TitleOne>What you need done?</TitleOne>
        <label>
          <strong>What do you need done?</strong>
          <br />
          <small>
            This'll be the title of your task -e.g. Help move my sofa
          </small>
        </label>
        <br />
        <input type="text" />
        <br />
        <label>
          <strong>What are the details?</strong>
          <br />
          <small>Be as specific as you can about what needs doing</small>
          <br />
          <textarea></textarea>
        </label>
      </PartOne>
      <PartTwo>
        <TitleTwo>Where & When</TitleTwo>
        <label>
          <strong>Address</strong>
        </label>
        <br />
        <input type="text" />
        <br />
        <label>
          <strong>When do you need it done?</strong>
        </label>
        <br />
        <DatePickerContainer>
          <DatePickerTool />
        </DatePickerContainer>
      </PartTwo>
      <PartThree>
        <TitleThree>Suggest how much</TitleThree>
        <strong>What is your budget?</strong>
        <br />
        <input type="radio" />
        <label>Total</label>
        <input type="radio" />
        <label>Hourly rate</label>
        <CurrencyInput
          id="input-example"
          name="input-name"
          placeholder="$1,000"
          defaultValue={1000}
          allowDecimals={true}
          decimalsLimit={2}
          onChange={(value, name) => console.log(value, name)}
        />
        <GetQuote>
          <YellowRectangle>123</YellowRectangle>
          <button>Get quotes</button>
        </GetQuote>
      </PartThree>
    </Layout>
  );
}

export default PostTask;
