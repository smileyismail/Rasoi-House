import React from "react";

import { motion } from "framer-motion";
import { RiEBike2Line } from "react-icons/ri";

import { homePageRecipes } from "../../utils/data";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col gap-16 md:flex-row justify-between items-center md:justify-around w-screen h-auto md:h-[95vh] md:p-20 px-8 py-20"
    >
      {/* left side */}

      <div className="flex flex-col justify-center md:items-start items-center gap-10 w-full md:w-4/5 filter drop-shadow-2xl">
        <p className="bg-secondaryColor rounded-lg px-4 py-2 flex justify-center items-center text-center gap-3 font-bold text-lg">
          Free Delivery
          <span className="bg-headingColor rounded-full text-primaryColor p-2 text-xl">
            <RiEBike2Line />
          </span>
        </p>
        <h1 className="font-extrabold text-5xl text-center md:text-start text-primaryColor tracking-wide md:w-4/5 w-full">
          Get amazing <span className="text-secondaryColor">Indian food </span>
          at your door step!
        </h1>
        <p className="text-primaryColor text-center md:text-start md:w-4/5">
          Indian cuisine made up of a variety of regional and traditional
          dishes. Cuisines that are spicy, rich, flavorful, and diverse, made
          with locally available spices, herbs, vegetables, and fruits. Discover
          the variety of dishes available from north to south.
        </p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          type="button"
          className="bg-secondaryColor text-primaryColor font-bold text-2xl px-2 py-4 w-4/5 md:w-auto md:px-10 rounded-xl hover:text-headingColor active:text-headingColor shadow-2xl"
        >
          Order now
        </motion.button>
      </div>

      {/* right Side */}

      <div className="flex justify-center items-center flex-wrap gap-10 w-full md:w-3/5 filter drop-shadow-2xl">
        {homePageRecipes.map((recipe) => (
          <motion.div
            key={recipe.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            className=" w-32 md:w-44 cursor-pointer rounded-xl overflow-hidden text-primaryColor text-center bg-overlay p-21"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-50 filter brightness-75 hover:brightness-100"
            />
            <p className="w-full  font-bold md:text-xl filter drop-shadow-2xl py-1">
              {recipe.name}
            </p>
            <p>{recipe.Description}</p>
            <p className="font-bold py-1">
              <span className="text-red-500">₹ </span>
              {recipe.price}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Home;
