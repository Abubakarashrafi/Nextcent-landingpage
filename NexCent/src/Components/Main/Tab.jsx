import React from "react";
import { Fade } from "react-awesome-reveal";
function Tab({ tabInfo, imgWidth }) {
  return (
    <>

      <div className="sm:flex min-h-[420px] items-center justify-center w-full">
        <Fade direction="down" duration={1000} triggerOnce>

        <div className="sm:w-1/2 flex  justify-center sm:block ">
          <img
            src={tabInfo.img}
            alt=""
            className={`${
              imgWidth ? "sm:max-w-sm max-w-xs  " : "md:max-w-md  max-w-sm"
            } `}
            />
        </div>
        <div className="px-2 py-6   sm:pr-7 sm:pl-2 space-y-5 text-center sm:text-left">
         

          <h3 className="text-[#4D4D4D] text-3xl sm:text-4xl xl:text-5xl font-semibold max-w-2xl">
            {tabInfo.title}
          </h3>
          <p className="max-w-2xl text-gray-500">{tabInfo.description}</p>
          <button className="btn-primary py-2">Learn More</button>
            
        </div>
          </Fade>
      </div>
    </>
  );
}

export default Tab;
