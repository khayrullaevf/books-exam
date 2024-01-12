import React from "react";
import "./about.scss";
import { useParams } from "react-router-dom";
const About = () => {
  const { id } = useParams();
  return (
    <div className="about">
      <h1>About</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default About;
