import React from "react";
import Card from "../Card"
import AnalyticsTab from "./AnalyticsTab";
import { Fade } from "react-awesome-reveal";
const clientIcon = [
  {
    id: 1,
    path: "cl1.png",
  },
  {
    id: 2,
    path: "cl2.png",
  },
  {
    id: 3,
    path: "cl3.png",
  },
  {
    id: 4,
    path: "cl4.png",
  },
  {
    id: 5,
    path: "cl5.png",
  },
];

function Client() {
  return (
    <>

      <section className="mt-10 ">
    <Fade casade direction="up"  delay={300} duration={1000} triggerOnce >
        <div className="text-center  space-y-2">
          <h2 className="text-4xl font-semibold text-[#4D4D4D]">Our Clients</h2>
          <p className="text-pretty text-gray-500">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className=" mt-8 flex   justify-around space-x-6  w-[80vw] m-auto    ">
          {clientIcon.map((icon) => (
            <div key={icon.id}>
              <img width={"40px"} src={icon.path} alt="" />
            </div>
          ))}
        </div>
              </Fade>
      </section>
      <div className=" mt-10">
        <Fade  cascade  direction="up" duration={1000} triggerOnce>

        <div className="flex flex-col items-center space-y-2  text-center">
          <p className="text-2xl sm:text-3xl max-w-md font-bold text-[#4D4D4D] text-pretty ml-2">Manage your entire community in a single system</p>
          <p className="text-gray-500">Who is Nextcent suitable for?</p>
        </div>
          <div className="flex flex-col items-center sm:flex-row justify-around mt-10">
            <Card />
          </div>
        </Fade>
          <div className="mt-8">
            <AnalyticsTab/>
          </div>
      </div>
    </>
  );
}

export default Client;
