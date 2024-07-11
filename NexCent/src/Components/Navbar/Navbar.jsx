import React, {useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Sidenav from "./Sidenav";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const NavTab = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "Service",
      link: "#",
    },
    {
      id: 3,
      name: "Feature",
      link: "#",
    },
    {
      id: 4,
      name: "Product",
      link: "#",
    },
    {
      id: 5,
      name: "Testimonial",
      link: "#",
    },
  ];
  return (
    <>
      <nav>
        <div className=" fixed min-w-full bg-white">

        <div className="flex m-2 justify-between items-center md:px-6 md:py-2 py-1" >
          <div className="flex gap-x-1 items-center"> 
            <img src="logo.png" alt="" className="w-9 h-6"  />
            <p className="text-gray-800 text-2xl   font-bold">Nexcent</p>
          </div>
          <div className=" md:flex gap-8 hidden ">
            {NavTab.map((tab) => (
              <div key={tab.id} >
                    <a className="hover:border-b-2 font-semibold border-primary" href={tab.link}>{tab.name}</a>
              </div>
            ))}
          </div>
          <div className="md:flex hidden md:gap-x-3">
            <button className="btn-primary ">Login</button>
            <button className="btn-primary">Sign Up</button>
          </div>
          {/* Mobile navBar */}
          <div className="flex md:hidden ">
            {showMenu ? (
              <IoMdClose className="cursor-pointer" onClick={toggleMenu} />
            ) : (
              <GiHamburgerMenu
                className="cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        </div>
        <Sidenav showMenu={showMenu}/>
      </nav>
    </>
  );
}

export default Navbar;
