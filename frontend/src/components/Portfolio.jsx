import React from "react";
import { BiCheck } from "react-icons/bi";

const Portfolio = () => {
  return (
    <div className="grid md:grid-cols-1 w-full justify-center bg-[#F2F6F9] md:h-screen" id="pricing">
      <div className="flex md:flex-row w-full md:justify-center flex-col md:p-5 md:h-screen">
        {/* 1st pricing Basic*/}
        <div className=" rounded-xl w-[350px] p-8 bg-white md:my-9 hover:translate-y-1 hover:scale-110 duration-300 transition ease-in-out hover:bg-theme ">
          <p className="text-xl font-medium md:mt-2">Basic</p>
          <p className="text-lightgray md:my-4 ">
            <span className="text-4xl font-black text-black">$500</span>/month
          </p>
          <h1 className="text-lightgray md:my-7 ">
            The perfect way to get started and get used to our tools
          </h1>
          <hr />
          <ul className="md:space-y-6 md:mt-8">
            <li className="text-lightgray flex flex-row">
              <BiCheck className="text-black mr-2" size={19} /> All features in
              standard
            </li>
            <li className="text-lightgray flex flex-row">
              <BiCheck className="text-black mr-2" size={19} /> Over 600
              components
            </li>
            <li className="text-lightgray flex flex-row">
              <BiCheck className="text-black mr-2" size={19} /> Build tools and
              examples
            </li>
          </ul>
          <div className="flex items-center justify-center mt-5 ">
            <button className="bg-purple p-3 mt-5 md:w-[300px] rounded-md text-white font-bold ">
              Get Started
            </button>
          </div>
        </div>

        {/* 2nd Pricing Medium*/}
        <div className=" rounded-xl w-[350px] p-8 md:my-9  md:ml-4 bg-white hover:translate-y-1 hover:scale-110 duration-300 transition ease-in-out hover:bg-theme">
          <p className="text-xl font-medium md:mt-2">Medium</p>
          <p className="text-lightgray md:my-4 ">
            <span className="text-4xl font-black text-black">$1000</span>/month
          </p>
          <h1 className="text-lightgray md:my-7 ">
            The perfect way to get started and get used to our tools
          </h1>
          <hr />
          <ul className="md:space-y-6 md:mt-8">
            <li className="text-lightgray flex flex-row">
              <BiCheck className="text-black mr-2" size={19} /> All features in
              standard
            </li>
            <li className="text-lightgray flex flex-row">
              <BiCheck className="text-black mr-2" size={19} /> Over 600
              components
            </li>
            <li className="text-lightgray flex flex-row">
              <BiCheck className="text-black mr-2" size={19} /> Build tools and
              examples
            </li>
          </ul>
          <div className="flex items-center justify-center mt-5 ">
            <button className="bg-purple p-3 mt-5 md:w-[300px] rounded-md text-white font-bold ">
              Get Started
            </button>
          </div>
        </div>

        {/* 3rd Pricing Professional*/}
        <div className=" rounded-xl w-[350px] p-8 md:my-9  md:ml-4 bg-white hover:translate-y-1 hover:scale-110 duration-300 transition ease-in-out hover:bg-theme">
        <p className="text-xl font-medium md:mt-2">Professional</p>
          <p className="text-lightgray md:my-4 ">
            <span className="text-4xl font-black text-black">$1500</span>/month
          </p>
          <h1 className="text-lightgray md:my-7 ">
            The perfect way to get started and get used to our tools
          </h1>
          <hr />
          <ul className="md:space-y-6 md:mt-8">
            <li className="text-lightgray flex flex-row">
              <BiCheck className="text-black mr-2" size={19} /> All features in
              standard
            </li>
            <li className="text-lightgray flex flex-row">
              <BiCheck className="text-black mr-2" size={19} /> Over 600
              components
            </li>
            <li className="text-lightgray flex flex-row">
              <BiCheck className="text-black mr-2" size={19} /> Build tools and
              examples
            </li>
          </ul>
          <div className="flex items-center justify-center mt-5 ">
            <button className="bg-purple p-3 mt-5 md:w-[300px] rounded-md text-white font-bold ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
