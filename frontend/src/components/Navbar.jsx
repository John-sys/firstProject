import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {

  // let [open,setOpen]=useState(false)

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white w-full top-0 left-0 shadow-sm">
      <div className="md:flex py-4 md:px-10 px-5 items-center justify-between mx-auto">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 justify-between">
          <a href="/">
            <h1>J&J</h1>
          </a>
        </div>
        
          
          <div className="md:hidden text-3xl absolute right-8 top-5 cursor-pointer">
            <IoIosMenu size={30} onClick={()=>{setShowMenu(!showMenu)}}/>
          </div>
          {/* Mobile menu view */}
          {
          showMenu && 
          <ul className='md:hidden md:items-center items-center py-4 space-y-5'>
            <li className="md:ml-8 text-lg">
              <a href="/" className="text-gray-800 hover:text-gray duration-200 text-selected-text">Home </a>
            </li>
            <li className="md:ml-8 text-lg">
              <a href="/about" className="text-gray-800 hover:text-gray duration-200">Portfolio</a>
            </li>
            <li className="md:ml-8 text-lg">
              <a href="/projects" className="text-gray-800 hover:text-gray duration-200">Projects</a>
            </li>
           <li className="md:ml-8 text-lg">
              <a href="#hire">
               <button className="px-6 py-2 bg-theme rounded-md hover:bg-gray ">Hire Me</button>
              </a>
           </li>
          </ul>
          }

{/* Desktop menu view */}
          <ul className='hidden md:flex md:items-center items-center'>
            <li className="md:ml-8 text-lg">
              <a href="/" className="text-gray-800 hover:text-gray duration-200 text-selected-text">Home </a>
            </li>
            <li className="md:ml-8 text-lg">
              <a href="/about" className="text-gray-800 hover:text-gray duration-200">Portfolio</a>
            </li>
            <li className="md:ml-8 text-lg">
              <a href="/projects" className="text-gray-800 hover:text-gray duration-200">Projects</a>
            </li>
           <li className="md:ml-8 text-lg">
              <a href="#hire">
               <button className="px-6 py-2 bg-theme rounded-md hover:bg-gray ">Hire Me</button>
              </a>
           </li>
          </ul>


      </div>
    </div>
  );
};

export default Navbar;
