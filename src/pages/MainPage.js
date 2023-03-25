import React from "react";

import Hero from "../components/Main/Hero";
import Trending from "../components/Main/Trending";
import HotDishes from "../components/Main/HotDishes";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Trending />
      <HotDishes />
    </>
  );
};

export default MainPage;
