import React, { useState } from "react";

import Lottie from "lottie-react";
import hotDishes from "../../assets/lotties/hotDishes.json";

import ItemCard from "../UI/ItemCard";

import { dummyDishes } from "../../utils/dummyDishes";

import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HotDishes = () => {
  let [categories] = useState({
    Fruits: dummyDishes.filter((fruit) => fruit.type === "fruit"),
    Vegetables: dummyDishes.filter((fruit) => fruit.type === "vegetable"),
    Meals: dummyDishes.filter((fruit) => fruit.type === "meal"),
  });
  return (
    <section id="hotDishes" className="w-full pt-20 px-6">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex justify-start items-center gap-4 mb-4">
          <div className="w-20">
            <Lottie animationData={hotDishes} loop={true} />
          </div>
          <h1 className="text-3xl text-secondary font-bold">Hot Dishes</h1>
        </div>

        <Tab.Group>
          <Tab.List className="flex justify-center items-center flex-wrap gap-2 sm:gap-8 rounded-xl py-3 mb-8">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "rounded-md p-3 font-semibold leading-5",
                    "ring-accent ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2",
                    selected
                      ? "bg-accent shadow text-primary"
                      : "bg-secondary hover:bg-secondary/[0.9] hover:text-primary"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-1"
                )}
              >
                <ul className="flex justify-center items-center flex-wrap gap-6">
                  {posts.map((post) => (
                    <li key={post.id}>
                      <ItemCard dish={post} />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default HotDishes;
