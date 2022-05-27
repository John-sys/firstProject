import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div className="bg-[#F2F6F9] w-full grid md:grid-cols-1 justify-center">
      <h1 className="flex justify-center mt-[80px] ">Get In Touch</h1>
      <p className="flex justify-center text-2xl ">Contact Me</p>
      <div className="grid md:grid-cols-2 w-full md:justify-center md:my-5">
        {/* description column */}
        <div className="flex flex-col space-y-4 md:mr-[50px]  ">
          <div className="bg-purple rounded-2xl w-[250px] h-[150px] justify-center text-center md:ml-auto mx-10 p-4 text-white space-y-2 ">
            <BiEnvelope size={22} className="mx-[45%]" />
            <h1 className="font-bold">Email</h1>
            <p className="text-gray">support@gmail.com</p>
            <p className="font-bold">Send a message</p>
          </div>

          <div className="bg-purple rounded-2xl w-[250px] h-[150px] justify-center text-center md:ml-auto mx-10 p-4 text-white space-y-2 ">
            <BsMessenger size={22} className="mx-[45%]" />
            <h1 className="font-bold">Messenger</h1>
            <p className="text-gray">jayjay</p>
            <p className="font-bold">Send a message</p>
          </div>

          <div className="bg-purple rounded-2xl w-[250px] h-[150px] justify-center text-center md:ml-auto mx-10 p-4 text-white space-y-2 ">
            <IoLogoWhatsapp size={22} className="mx-[45%]" />
            <h1 className="font-bold">WhatsApp</h1>
            <p className="text-gray">059-226-7408</p>
            <p className="font-bold">Send a message</p>
          </div>
        </div>

        {/* Entry Column */}
        <div className=" flex flex-col space-y-7 mt-5 ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your full name?"
            className="w-[320px] h-[50px] rounded-lg bg-white border-solid border-2 p-2"
          />

          <input
            type="text"
            name=""
            id=""
            placeholder="Your Email?"
            className="w-[320px] h-[50px] rounded-lg bg-white border-solid border-2 p-2"
          />

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className=" w-[320px] h-[100px] bg-white border-solid border-2 p-2 rounded-lg resize-none "
            placeholder="Your Message"
            
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
