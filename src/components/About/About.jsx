import React from "react";
import about from "../../assets/about-1.png";

const About = () => {
  return (
    <div className="about-container relative about-bg flex flex-col items-center  mt-10   md:px-8 lg:px-16">
     
 
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between  ">
        {/* Right Section */}
       
        <div className="right flex-1 z-10 text-white    h-[40rem] p-10 ">
          <h1 className="text-4xl font-bold   mb-4">About Us</h1>
          <p className="  mb-6 leading-5 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <img
            src={about}
            alt="about"
            className="w-64 md:w-80 rounded-md shadow-lg  "
          />
        </div>
 
        {/* Left Section */}
        <div className="left relative flex-1 z-10  text-white h-[40rem]  p-20">
          <h1 className="text-4xl font-bold   mb-4 text-right">Where</h1>
          <p className="   leading-5 text-right   ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

      </div>
           
      <button className=" absolute bottom-2 md:bottom-14 bg-yellow-500 px-10 text-center py-3 z-20 text-white rounded-full ">Help Me</button>

    </div>
  );
};

export default About;
