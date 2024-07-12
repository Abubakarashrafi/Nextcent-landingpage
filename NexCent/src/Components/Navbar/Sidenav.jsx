import React from "react";

function Sidenav({ showMenu }) {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-[-100%]"
      } fixed z-10 top-0 w-[75%] transition-all duration-300`}>
      <div className="pt-16 bg-white flex flex-col items-center h-screen ">
        <p className="mb-6 hover:border-b-2 border-primary ">Home</p>
        <p className="mb-6 hover:border-b-2 border-primary">Service</p>
        <p className="mb-6 hover:border-b-2 border-primary">Feature</p>
        <p className="mb-6 hover:border-b-2 border-primary">Product</p>
        <p className="mb-6 hover:border-b-2 border-primary">Testimonial</p>
        <div className="flex  gap-5 ">
          <button className="btn-primary">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
