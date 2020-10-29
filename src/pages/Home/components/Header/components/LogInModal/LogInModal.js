import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../Modal'
import NakedButton from '../NakedButton'
import Button from '../Button'
import FormItem from '../FormItem'
import Input from '../Input'
import rabbit from "../../elements/logo.svg";

const LogoContainer = styled.div`
  width: 85.84px;
  height: 72.66px;
  margin:20px auto;
`;

const Form = styled.form`
  padding:16px 0;
`;

const EMAIL_REGEXP = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const FORM = {
  email: {
    label: 'Email',
    type: 'text',
    getErrorMessage: (value) => {
      if (!value) {
        return 'Please enter your email address';
      }

      return '';
    },
  },
  password: {
    key: 'password',
    label: 'Password',
    type: 'password',
    getErrorMessage: (value) => {
      if (!value) {
        return 'Please enter your password';
      }

      return '';
    },
  },
};

class LogInModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData:{
        email: {
          value: '',
          touched: false,
        },
        password: {
          value: '',
          touched: false,
        },
      },
    };

    this.handleFormDataChange = this.handleFormDataChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  getErrorMessage(target) {
    const { formData } = this.state;
    const data = Object
    .keys(formData)
    .reduce((obj, key) => ({
      ...obj,
      [key]: formData[key].value,
    }), {});

    return FORM[target].getErrorMessage(formData[target].value, data);
  }

  handleFormDataChange(target) {
    return (event) => {
      const {value} = event.target;
      event.preventDefault();

      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [target]: {
            value,
            touched: true,
          },
        },
      }));
    };
  }

  handleFormSubmit(event) {
    const {formData} = this.state;
    event.preventDefault();

    if (!this.isFormValid()){
      console.log('There are validation errors')
      return;
    }
    console.log('Log In...', formData)
  }

  isFormValid(){
    const {formData} = this.state;

    const errorMessages = Object
      .keys(formData)
      .map((key) => {
        const errorMessage = this.getErrorMessage(key);

        return errorMessage;
      })
      .filter((v) => !!v);

    return !errorMessages.length;
  }



  render() {
    const {formData} = this.state;
    const {onClose, onSignUp} = this.props;

    return (
      <Modal onClose={onClose}>
        
          <LogoContainer>
            <img src={rabbit} alt="taskbunny" />
          </LogoContainer>
        
        <Modal.Body>
          <Form onSubmit={this.handleFormSubmit}>
          {Object.keys(FORM).map((key) => {
            const { label, type, } = FORM[key];

            const { value, touched } = formData[key];

            const errorMessage = touched ? this.getErrorMessage(key) : '';

            return (
              <FormItem 
                key={key} 
                label={label} 
                htmlFor={key} 
                errorMessage={errorMessage}
              >
                <Input 
                  onChange={this.handleFormDataChange(key)} 
                  id={key} 
                  type={type}
                  errorMessage={errorMessage}
                  value={value}
                >
                </Input>
            </FormItem>
            );
          })}
            <FormItem>
              <Button 
                disabled={!this.isFormValid()}
                width="100%" 
                variant="success"
              >
                Log In
              </Button>
            </FormItem>
          </Form>
          <Form>
          <Modal.Header>---------- or log in with ----------</Modal.Header>
          <FormItem>
            <Button width="100%" 
                variant="primary">
              Facebook
            </Button >
          </FormItem>
          <FormItem>
            <br></br>
            <Button width="100%" 
                variant="secondary">
              Google
            </Button >
          </FormItem>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          Don't Have an account? &nbsp;
          <NakedButton variant="link" onClick={onSignUp}>Sign Up Now</NakedButton>
        </Modal.Footer>
      </Modal>
    );
  }
}

LogInModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export default LogInModal;
