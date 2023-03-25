import React from "react";

import Lottie from "lottie-react";
import trending from "../../assets/lotties/trending.json";

import ItemCard from "../UI/ItemCard";

import { dummyDishes } from "../../utils/dummyDishes";

const Trending = () => {
  return (
    <section id="trending" className="w-full pt-20 px-6">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex justify-start items-center gap-4 mb-10">
          <div className="w-20">
            <Lottie animationData={trending} loop={true} />
          </div>
          <h1 className="text-3xl text-secondary font-bold whitespace-nowrap">
            Trending Dishes
          </h1>
        </div>

        <div>
          <ul className="flex justify-center items-center flex-wrap gap-6">
            {dummyDishes
              .filter((dish) => dish.trending)
              .map((item) => (
                <li key={item.id}>
                  <ItemCard dish={item} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Trending;
