import React from "react";
import styled from "styled-components";
import rabbit from "./elements/logo.svg";
import taskman from "./elements/taskman.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Link } from "react-router-dom";
import SignUpModal from './components/SignUpModal';
import LogInModal from './components/LogInModal';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: white;
  padding-bottom: 10px;
  @media (max-width: 768px) {
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 70px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: 85.84px;
  height: 72.66px;
  margin: 15px 20px 20px 70px;
  object-fit: fill;
`;

const ButtonLeft = styled.span`
  margin-right: 15px;
  cursor: pointer;
  margin-top: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonYellow = styled.span`
  margin-right: 15px;
  cursor: pointer;
  background: #f3d250;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 90px;
  padding: 10px;
  margin-top: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonRight = styled.span`
  margin-left: 15px;
  cursor: pointer;
  margin-top: 10px;
`;

const ButtonWhite = styled.span`
  margin-left: 15px;
  cursor: pointer;
  background: #ffffff;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 90px;
  padding: 10px;
  margin-top: 10px;
`;

const AvatarContainer = styled.div`
  margin-top: 20px;
  margin-right: 15px;
  cursor: pointer;
  & > img {
    object-fit: fill;
    width: 65.33px;
    height: 56.33px;
    border-radius: 50%;
  }
`;

const MenuButton = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
    position: absolute;
    right: 60px;
    top: 45px;
    cursor: pointer;
  }
`;

const HiddenMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
`;

const CloseMenuButton = styled.div`
  margin-left: 40px;
  margin-top: 45px;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  color: white;
  & > div {
    margin-left: 40px;
    margin-top: 25px;
    cursor: pointer;
    font-size: 1.2rem;
  }
  & > div:nth-child(1) {
    color: #5edefc;
  }
  & > :nth-child(4) {
    color: #f3d250;
  }
`;

const MODAL = {
  LOG_IN: 'LOG_IN',
  SIGN_UP: 'SIGN_UP',
  EMPTY: '',
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      showMenu: false,

      showModal: MODAL.EMPTY,
    };

    this.showModal = this.showModal.bind(this);
  }

  showModal(target) {
    return (event) => {
      event.preventDefault();

      this.setState({
        showModal:target,
      });
    }
  }

  setLoggedIn(loggedIn) {
    this.setState({
      loggedIn,
    });
  }

  setShowMenu(showMenu) {
    this.setState({
      showMenu,
    });
  }

  render() {
    const { showModal } = this.state;
    const { loggedIn, showMenu } = this.state;
    return (
      <HeaderWrapper>
        {showMenu && (
          <HiddenMenu>
            <CloseMenuButton
              onClick={() => {
                this.setShowMenu(false);
              }}
            >
              <FontAwesomeIcon icon={faTimes} size="2x" color="white" />
            </CloseMenuButton>
            <MenuWrapper>
              <div>Become a Tasker</div>
              <div
                onClick={() => {
                  this.setLoggedIn(true);
                }}
              >
                Log in
              </div>
              <div>Home</div>
              <div>
                <Link to="/post-a-task">Post a Task</Link>
              </div>
              <div>Categories</div>
              <div>Browse tasks</div>
              <div>How it works</div>
            </MenuWrapper>
          </HiddenMenu>
        )}

        <HeaderLeft>
          <LogoContainer>
            <img src={rabbit} alt="taskbunny" />
          </LogoContainer>
          <ButtonYellow>Post a task</ButtonYellow>
          <ButtonLeft>Categories</ButtonLeft>
          <ButtonLeft>Browse tasks</ButtonLeft>
          <ButtonLeft>How it works</ButtonLeft>
        </HeaderLeft>
        {!loggedIn && (
          <React.Fragment>
            <MenuButton
              onClick={() => {
                this.setShowMenu(true);
              }}
            >
              <FontAwesomeIcon icon={faBars} size="2x" />
            </MenuButton>
          </React.Fragment>
        )}

        <HeaderRight>
          {loggedIn ? (
            <AvatarContainer
              onClick={() => {
                this.setLoggedIn(false);
              }}
            >
              <img src={taskman} alt="avatar" />
            </AvatarContainer>
          ) : (
            <React.Fragment>
              <ButtonRight onClick={this.showModal(MODAL.SIGN_UP)}>Sign up</ButtonRight>
              <ButtonRight
                onClick={() => {
                  this.setLoggedIn(true);
                }}
                onClick={this.showModal(MODAL.LOG_IN)}
              >
                Log in
              </ButtonRight>
              <ButtonWhite>Become a tasker</ButtonWhite>

              {showModal === MODAL.LOG_IN && (
              <LogInModal 
              onClose={this.showModal(MODAL.EMPTY)} 
              onSignUp={this.showModal(MODAL.SIGN_UP)}
              />
              )}
              {showModal === MODAL.SIGN_UP && (
              <SignUpModal 
              onClose={this.showModal(MODAL.EMPTY)} 
              onLogIn={this.showModal(MODAL.LOG_IN)}
              />
              )}
            </React.Fragment>
          )}
          {/* {loggedIn && <div>avatar</div>}
            {!loggedIn && (
              <React.Fragment>
                <ButtonRight>Sign up</ButtonRight>
                <ButtonRight
                  onClick={() => {
                    this.setLoggedIn(true);
                  }}
                >
                  Log in
                </ButtonRight>
                <ButtonWhite>Become a tasker</ButtonWhite>
              </React.Fragment>
            )} */}
        </HeaderRight>
      </HeaderWrapper>
    );
  }
}

export default Header;
