import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { BiEnvelope } from "react-icons/bi";

const Navbar = () => {
  // let [open,setOpen]=useState(false)

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-brown w-full top-0 left-0 shadow-lg">
      <div className="md:flex py-4 md:px-10 px-5 items-center justify-between mx-auto">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 justify-between md:ml-[70px] ">
          <a href="/">
            <h1>J&J</h1>
          </a>
        </div>

        <div className="md:hidden text-3xl absolute right-8 top-4 cursor-pointer">
          <IoIosMenu
            size={30}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </div>
        {/* Mobile menu view */}
        {showMenu && (
          <ul className="md:hidden md:items-center items-center py-4 space-y-5">
            <li className="md:ml-8 text-lg">
              <a
                href="/"
                className="text-gray-800 hover:text-gray duration-200 text-selected-text"
              >
                Home{" "}
              </a>
            </li>
            <li className="md:ml-8 text-lg">
              <a
                href="/about"
                className="text-gray-800 hover:text-gray duration-200"
              >
                Portfolio
              </a>
            </li>
            <li className="md:ml-8 text-lg">
              <a
                href="/projects"
                className="text-gray-800 hover:text-gray duration-200"
              >
                Services
              </a>
            </li>
            <li className="md:ml-8 text-lg">
              <a
                href="/projects"
                className="text-gray-800 hover:text-gray duration-200"
              >
                Pricing
              </a>
            </li>
            <li className="md:ml-8 text-lg">
              <a href="#hire">
                <button className="px-6 py-2 bg-theme rounded-md hover:bg-gray ">
                  Hire Me
                </button>
              </a>
            </li>
          </ul>
        )}

        {/* Desktop menu view */}
        <ul className="hidden md:flex md:items-center items-center ">
          <li className="md:ml-8 text-lg">
            <a
              href="/"
              className="text-gray-800 hover:text-gray duration-200 text-selected-text"
            >
              Home
            </a>
          </li>
          <li className="md:ml-8 text-lg">
            <a
              href="/about"
              className="text-gray-800 hover:text-gray duration-200"
            >
              Portfolio
            </a>
          </li>
          <li className="md:ml-8 text-lg">
            <a
              href="#services"
              className="text-gray-800 hover:text-gray duration-200"
            >
              Services
            </a>
          </li>
          <li className="md:ml-8 text-lg flex flex-row">
            <a
              href="#pricing"
              className="text-gray-800 hover:text-gray duration-200"
            >
              Pricing
            </a>
            <div className="bg-purple w-[9px] h-[9px] rounded-[50%] animate-pulse "></div>
          </li>
          <li className="md:ml-8 text-lg">
            <a href="#hire">
              <button className="px-4 py-2 bg-theme rounded-md hover:bg-gray flex flex-row">
                Hire Me
                <BiEnvelope size={22} className="ml-2 mt-[3px]" />
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
