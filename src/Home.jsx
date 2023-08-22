import React from "react";
// import { NavLink } from "react-router-dom";
import Common from './Common'

const Home = () => {
  return (
    <>
      <Common
       name="Grow your business with us"
       imgsrc="https://www.designbolts.com/wp-content/uploads/2021/09/10-Award-Winning-Most-Beautiful-Website-Designs-of-2021.jpg"
       visit="/service"
       btname="Get started" />
    </>
  );
};

export default Home;
