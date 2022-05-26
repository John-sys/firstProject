import React from "react";
// import Navbar from '../components/Navbar'
import { FaTelegramPlane } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { GrTwitter, GrFacebookOption, GrInstagram } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import NewImage from "../assets/newImage.jpg";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const Homepage = () => {
  return (
    <div className="h-screen w-full ">
      {/* Intro text */}
      <div className="bg-[#F2F6F9]">
        <div className="text-center text-3xl pt-7 font-lora  ">
          <p>Hello, I'm</p>
          <h1>John Gbaya-kokoya</h1>
          <p>Frontend Web Developer</p>
          <p>Based in Ghana</p>
        </div>

        <div className="grid md:grid-cols-2 m-auto w-full mt-8">
          <div className="flex flex-col justify-center md:items-start md:h-screen md:px-[25%] py-8 ">
            <p className="text-6xl pl-3 md:w-[400px]">
              We have the
              <br />
              Best design <br />
              Experience
            </p>
            <h1 className="pt-4 px-2">
              ------ Hi I'm a frontend web developer ----- <br />
              creating bold, simplistic and attractive websites
            </h1>

            {/* Custom Buttons */}
            <div className="pt-4 mx-6 md:mx-2 flex flex-row ">
              <button className="py-3 px-4 bg-purple rounded-xl flex flex-row hover:bg-gray  ">
                <p className="text-white pr-2 ">Lets Talk</p>
                <FaTelegramPlane size={20} className="text-white" />
              </button>

              {/* <button className="py-3 px-4 md:ml-4 ml-4 bg-transparent rounded-xl flex flex-row hover:text-gray border-2 delay-75 ">
                <p className="pr-2 ">Portfolio</p>
                <BsArrowUpRight size={20} />
              </button> */}
            </div>

            {/* social media icons */}
            <div className="flex flex-row mt-5 mx-6 pl-8 space-x-9 md:pl-3  ">
              <div className="border-2 rounded-md border-blue p-2 hover:text-blue hover:border-black hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out">
                <GrTwitter size={22} />
              </div>
              <div className="border-2 rounded-md border-facebook p-2 hover:text-facebook hover:border-black hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out">
                <GrFacebookOption size={22} />
              </div>
              <div className="border-2 rounded-md border-red p-2 hover:text-red hover:border-black hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out">
                <GrInstagram size={22} />
              </div>
              <div className="border-2 rounded-md border-[#6e5494] p-2 hover:text-[#6e5494] hover:border-black hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out">
                <GoMarkGithub size={22}/>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full p-4 ">
            <img
              src={NewImage}
              alt="/"
              className=" md:w-[60%] md:h-[90%] rounded-lg transition md:-skew-x-3"
            />
          </div>
        </div>
      </div>

      {/* Experiences Section */}
      <Experience/>


      {/* Services Section */}
      <div className="grid md:grid-cols-2 w-full bg-theme mr-5">
        {/* Services intro */}
        <div
          className="flex flex-col justify-center md:items-start w-full md:px-[25%] md:py-8 py-12"
          id="services"
        >
          <p className="md:text-6xl md:w-[350px] text-4xl md:p-5 mr-[50px] px-8 font-medium">
            Services I <br />
            Offer
          </p>
          <h1 className="max-w-full md:my-2 md:pt-0 p-5 mr-[50px]">
            --- We help ambitious businesses like your's generate more profits
            by building online awareness, driving web traffic, connecting with
            customers and growing overall sales.
          </h1>
        </div>

        {/* Services listed */}
        <div className="grid md:grid-cols-1 md:m-4 ">
          <div className="md:my-5 md:mx-[60px] grid md:grid-cols-1 p-0 m-0 divide-y">
            {/* 1st */}
            <div className="mx-7 p-4 ">
              <p>01/</p>
              <p className="text-4xl mt-4">
                UI/UX
                <br />
                Design
              </p>

              <div className="flex flex-row justify-between ">
                <p className="mt-12">Explore</p>
                <div className="bg-purple w-[45px] h-[45px] rounded-[50%] flex justify-center items-center mt-9">
                  <BsArrowUpRight size={20} className="text-white" />
                </div>
              </div>
            </div>

            {/* 2nd */}
            <div className="mx-7 p-4 border-x-0 border-t-2">
              <p>02/</p>
              <p className="text-4xl mt-4">
                Mobile App
                <br />
                Development
              </p>

              <div className="flex flex-row justify-between ">
                <p className="mt-12">Explore</p>
                <div className="bg-purple w-[45px] h-[45px] rounded-[50%] flex justify-center items-center mt-9 ">
                  <BsArrowUpRight size={20} className="text-white" />
                </div>
              </div>
            </div>

            {/* 3rd */}
            <div className="mx-7 p-4 border-x-0 border-t-2">
              <p>03/</p>
              <p className="text-4xl mt-4">
                Website Development &
                <br />
                Hosting
              </p>

              <div className="flex flex-row justify-between ">
                <p className="mt-12">Explore</p>
                <div className="bg-purple w-[45px] h-[45px] rounded-[50%] flex justify-center items-center mt-9">
                  <BsArrowUpRight size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Portfolio section */}
      <Portfolio />

      {/* Contact Me Section */}
      <Contact/>
    </div>
  );
};

export default Homepage;
