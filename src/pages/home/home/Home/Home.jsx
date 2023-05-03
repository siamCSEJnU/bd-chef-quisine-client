import React from "react";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";
import Traditional from "../Traditional/Traditional";
import Kitchens from "../Kitchens/Kitchens";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Chefs></Chefs>
      <Traditional></Traditional>
      <Kitchens></Kitchens>
    </div>
  );
};

export default Home;
