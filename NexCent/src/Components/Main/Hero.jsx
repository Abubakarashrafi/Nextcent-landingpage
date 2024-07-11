import React from "react";

function Hero() {
  return (
    
    <div className="bg-[#eff2f8]  md:flex text-center md:text-left   min-h-[580px]   md:pl-10 md:pr-2    items-center gap-x-4 ">
        <div
          className=" m-2 pt-4 text-pretty
            ">
          <h1 className=" text-4xl mt-8 md:mt-0 md:text-5xl lg:text-7xl font-bold  md:font-semibold text-[#4D4D4D]  pb-6 ">
            Lessons and insights{" "}
            <span className="text-primary">from 8 years</span>
          </h1>
          <p className="md:text-lg text-gray-500 md:max-w-md lg:max-w-2xl md:text-left text-center mx-auto md:mx-0 ">
            Where to grow your buisness as a photographer: site or social media?
          </p>
          <button className="btn-primary my-8  px-8 py-3 font-medium ">
            Register
          </button>
        </div>
        <div className="">
          <img
            className=" md:max-w-[320px] lg:max-w-[400px] max-w-[280px] mx-auto md:mx-0"
            src="hero.png"
            alt="image"
          />
        </div>
      </div>
    
  );
}

export default Hero;
