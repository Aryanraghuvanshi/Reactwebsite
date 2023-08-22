import React from "react";
// import { NavLink } from "react-router-dom";
import Common from './Common'
const About = () => {
  return (
    <>
      <Common
      name="Welcome to about page"
      imgsrc="https://i.pinimg.com/originals/77/bc/e6/77bce66c690e444d8339d33eee267639.jpg"
      visit="/contact"
      btname="Contact Now"
      />  
    </>
  );
};

export default About;
