import React from "react";
import styled from "styled-components";
import taskImg from "./pic/task.svg";
import starImg from "./pic/star.svg";


const ProjectCard = styled.div`
  margin: 0 0.5rem 1rem;
  width: calc(50% - 1rem);
  float: left;
  @media(min-width: 768px) {
    margin: 0 0.9375rem 3rem;
    width: calc(25% - 1.875rem);
  }
`;

const ProjectLink = styled.div`
  display: block;
  border: 2px solid #E5E5E5;
  border-radius: 15px;

  & a {
    text-decoration: none;
  }
  & a:visited {
    color: inherit;
  }
`;

const ProjectImg = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 5.625rem;
  width: 100%;
  @media(min-width: 768px) {
    height: 11.25rem;
  }
`;

const ProjectText = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.875rem;
  margin: 0.75rem 0 0.75rem 0.875rem;
  @media(min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.3125rem;
    margin: 1.5rem 0 1.5rem 1.875rem;
  }

  h3 {
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.875rem;
    margin-bottom: 0.5rem;
    @media(min-width: 768px) {
      font-size: 1.125rem;
      line-height: 1.3125rem;
      margin-bottom: 1rem;
    }
  }

  & span {
      color: #5EDEFC;
  }

  img {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.5rem;
    vertical-align: middle;
    @media(min-width: 768px) {
      width: 1.6875rem;
      height: 1.6875rem;
      margin-right: 1rem;
    }
  }
`;

const Project = (props) => {
  return(
    <ProjectCard>
      <ProjectLink>
        <a href={props.link}>
          <ProjectImg src={props.img}></ProjectImg>
          <ProjectText>
            <h3><img src={taskImg} alt="task"/>{props.title}</h3>
            <span><img src={starImg} alt="star"/>{props.price}</span>
          </ProjectText>
        </a>
      </ProjectLink>
    </ProjectCard>
  );
};

export default Project;