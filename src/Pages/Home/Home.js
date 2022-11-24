import React from "react";
import Ads from "./Ads";
import Banner from "./Banner";
import Catagories from "./Catagory";
import Description from "./Description";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Ads></Ads>
      <Catagories></Catagories>
      <Description></Description>
    </div>
  );
};

export default Home;
