import React from 'react';
import TrashHaulingLogo from '../../assets/TrashHauling.png';

const Hero = () => {
  return (
    <div className="hero-container container flex flex-col items-center justify-center py-10 px-4 md:px-8 lg:px-16 hero-bg">
      <div className="flex items-center gap-5 py-8 z-10">
        <img src={TrashHaulingLogo} alt="Trash Hauling Logo" className="w-14 sm:w-16 md:w-20" />
        <div className="text">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-blue-500 font-semibold">Round Rock</h3>
          <p className="text-blue-400 leading-tight tracking-[6px] text-sm sm:text-base md:text-lg">Trash Hauling</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 py-10 z-10 ">
        <button className=" bg-blue-400  px-7 py-1 text-white rounded-full ">Exports</button>
        <div className="text-center text-[#4F4F4F] ">
          <h2 className="text-4xl sm:text-5xl font-light">Lorem</h2>
          <h1 className="text-5xl sm:text-6xl font-bold">Lorem lorem</h1>
          <p className="w-full max-w-[430px] mx-auto mt-1 text-xs sm:text-sm md:text-base font-medium leading-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <button className=" bg-blue-500 px-10 py-3 text-white rounded-full ">Help Me</button>
      </div>
    </div>
  );
};

export default Hero;