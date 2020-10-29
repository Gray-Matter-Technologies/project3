import React from "react";
import Project from "./components/Project";
import styled from "styled-components";
import pic1 from "./components/Project/pic/pic1.png";
import pic2 from "./components/Project/pic/pic2.png";
import pic3 from "./components/Project/pic/pic3.png";
import pic4 from "./components/Project/pic/pic4.png";
import pic5 from "./components/Project/pic/pic5.png";
import pic6 from "./components/Project/pic/pic6.png";
import pic7 from "./components/Project/pic/pic7.png";
import pic8 from "./components/Project/pic/pic8.png";

const ProjectContainer = styled.div`
  width: 88.533%;
  margin: auto;
  @media(min-width: 768px) {
    width: 91.81%;
    max-width: 1322px;
  }

  & > h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin: 0 auto 2rem;
    text-align: center;
    width: 15rem;
    @media(min-width: 768px) {
      font-size: 2.25rem;
      line-height: 3.625rem;
      margin: 3rem auto 2rem;
      width: auto;
    }
  }

  &::after {
    content: "";
    clear: both;
    display: table;
  }
`

const projects = [
  {
    title: "House Cleaning",
    price: "Starting at $22/hr",
    link: "/",
    img: pic1,
  },
  {
    title: "Pipe Cleaning",
    price: "Starting at $29/hr",
    link: "/",
    img: pic2,
  },
  {
    title: "Oven Clean",
    price: "Starting at $22/hr",
    link: "/",
    img: pic3,
  },
  {
    title: "Ground Clean",
    price: "Starting at $29/hr",
    link: "/",
    img: pic4,
  },
  {
    title: "Sofa/furniture Clean",
    price: "Starting at $20/hr",
    link: "/",
    img: pic5,
  },
  {
    title: "Floor Clean",
    price: "Starting at $22/hr",
    link: "/",
    img: pic6,
  },
  {
    title: "Roof Clean",
    price: "Starting at $22/hr",
    link: "/",
    img: pic7,
  },
  {
    title: "Drain Pipe Clean",
    price: "Starting at $29/hr",
    link: "/",
    img: pic8,
  },
]



const PopularProjects = () => {
  return (
    <ProjectContainer>
      <h2>Popular projects in your area</h2>
      {projects.map(project => (
        <Project {...project} />
      ))}
    </ProjectContainer>
  );
};

export default PopularProjects;
