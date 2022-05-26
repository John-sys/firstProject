import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

const Experience = () => {
  return (
    <div className="bg-[#F2F6F9] w-full grid md:grid-cols-1 justify-center ">
      <h1 className="flex justify-center mt-[30px] ">What Skills I have?</h1>
      <p className="flex justify-center text-2xl ">My Experience</p>
      <div className="flex md:flex-row w-full md:justify-center flex-col md:p-5 mb-[70px] ">
        {/* Frontend Skills */}
        <div className=" bg-purple p-5 justify-center md:w-[400px] rounded-2xl text-white mx-5 my-3 ">
          <p className=" justify-center flex text-black font-bold ">
            Frontend Development
          </p>
          <ul className=" columns-2 space-y-4 my-2 p-3  ">
            <li className=" p-3 r flex ">
            <div className="flex flex-col">
                <div className="flex flex-row font-medium ">
                  <HiBadgeCheck size={16} className="my-1 mr-2 text-gold " />
                  HTML
                </div>
                <p className="ml-6 text-[13px]">Experienced</p>
              </div>
            </li>

            <li className=" p-3 flex ">
              <div className="flex flex-col">
                <div className="flex flex-row font-medium ">
                  <HiBadgeCheck size={16} className="my-1 mr-2 text-gold " />
                  Javascript
                </div>
                <p className="ml-6 text-[13px]">Experienced</p>
              </div>
            </li>

            <li className=" p-3 flex ">
            <div className="flex flex-col">
                <div className="flex flex-row font-medium ">
                  <HiBadgeCheck size={16} className="my-1 mr-2 text-gold " />
                  Tailwind
                </div>
                <p className="ml-6 text-[13px]">Experienced</p>
              </div>            </li>

            <li className=" p-3 flex ">
            <div className="flex flex-col">
                <div className="flex flex-row font-medium ">
                  <HiBadgeCheck size={16} className="my-1 mr-2 text-gold " />
                  CSS
                </div>
                <p className="ml-6 text-[13px]">Experienced</p>
              </div>
            </li>

            <li className=" p-3 flex ">
            <div className="flex flex-col">
                <div className="flex flex-row font-medium ">
                  <HiBadgeCheck size={16} className="my-1 mr-2 text-gold " />
                  Bootstrap
                </div>
                <p className="ml-6 text-[13px]">Experienced</p>
              </div>
            </li>

            <li className=" p-3 flex ">
            <div className="flex flex-col">
                <div className="flex flex-row font-medium ">
                  <HiBadgeCheck size={16} className="my-1 mr-2 text-gold " />
                  React
                </div>
                <p className="ml-6 text-[13px]">Experienced</p>
              </div>
            </li>

          </ul>
        </div>


        {/* Backend Skills */}
        <div className="bg-purple p-5 justify-center md:w-[400px] rounded-2xl text-white mx-5 my-3 ">
          <p className=" justify-center flex text-black font-bold ">
            Backend Development
          </p>
          <ul className=" columns-2 space-y-4 my-2 p-3  ">
            <li className=" p-3 r flex ">
            <div className="flex flex-col">
                <div className="flex flex-row font-medium ">
                  <HiBadgeCheck size={16} className="my-1 mr-2 text-gold " />
                  Python
                </div>
                <p className="ml-6 text-[13px]">Experienced</p>
              </div>
            </li>
            <li className=" p-3 flex ">
            <div className="flex flex-col">
                <div className="flex flex-row font-medium ">
                  <HiBadgeCheck size={16} className="my-1 mr-2 text-gold " />
                  Node Js
                </div>
                <p className="ml-6 text-[13px]">Intermediate</p>
              </div>
            </li>
            <li className=" p-3 flex ">
            <div className="flex flex-col">
                <div className="flex flex-row font-medium ">
                  <HiBadgeCheck size={16} className="my-1 mr-2 text-gold " />
                  PHP
                </div>
                <p className="ml-6 text-[13px]">Intermediate</p>
              </div>
            </li>
            <li className=" p-3 flex ">
            <div className="flex flex-col">
                <div className="flex flex-row font-medium ">
                  <HiBadgeCheck size={16} className="my-1 mr-2 text-gold " />
                  MySQL
                </div>
                <p className="ml-6 text-[13px]">Experienced</p>
              </div>
            </li>
            <li className=" p-3 flex ">
            <div className="flex flex-col">
                <div className="flex flex-row font-medium ">
                  <HiBadgeCheck size={16} className="my-1 mr-2 text-gold " />
                  MongoDB
                </div>
                <p className="ml-6 text-[13px]">Intermediate</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
