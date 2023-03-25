import React from "react";

import Lottie from "lottie-react";
import heroIllustration from "../../assets/lotties/heroIllustration.json";
import delivery from "../../assets/lotties/delivery.json";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full pt-28 md:pt-16 px-6 bg-gradient-to-b from-secondary to-primary"
    >
      <div className="max-w-[90rem] min-h-screen mx-auto flex gap-8 flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="w-full flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-start">
          <div className="relative">
            <div className="absolute bottom-[120%] -left-20">
              <Lottie animationData={delivery} loop={true} />
            </div>
            <p className="font-semibold inline-block bg-secondary px-2 py-1 rounded-md">
              Free Delivery
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold">
            GET IT WHILE IT'S <span className="text-accent">HOT</span>
          </h1>
          <h2 className="text-2xl text-accent font-semibold">
            Farm-to-Table With a Twist
          </h2>
          <p className="text-xl">
            Inspired by traditional flavors, Rasoi offers a fresh, creative and
            respectful interpretation of Indian cuisine.
          </p>

          <a href="#hotDishes">
            <button className="bg-secondary rounded-md font-bold text-xl px-4 py-2">
              Order Now
            </button>
          </a>
        </div>

        <div className="w-full md:max-w-2xl">
          <Lottie animationData={heroIllustration} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
