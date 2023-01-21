import React from "react";
import { cityIcon, travelIcon, treasureIcon } from "../../assets/icon";
import { hero } from "../../assets/images";

const Header = () => {
  return (
    <div className="flex mt-16">
      <div className="flex flex-col">
        <h1 className="text-primary font-bold text-[42px]">
          Forget Busy Work,
          <br />
          Start Next Vacation
        </h1>
        <p className="font-light text-[#B0B0B0] max-w-sm mt-5 leading-7">
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </p>
        <button className="bg-secondPrimary text-white w-52 py-2 mt-10 rounded-md shadow-md shadow-[#3252DF]">
          Show Me Now
        </button>
        <div className="flex mt-20 justify-between">
          <div className="flex flex-col">
            <img
              src={travelIcon}
              alt="travel icon"
              className="relative w-8 h-8"
            />
            <p className="font-light text-[#B0B0B0] mt-2">
              <span className="text-primary font-medium">80,409</span> travelers
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src={treasureIcon}
              alt="travel icon"
              className="relative w-8 h-8"
            />
            <p className="font-light text-[#B0B0B0] mt-2">
              <span className="text-primary font-medium">862</span> treasure
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src={cityIcon}
              alt="travel icon"
              className="relative w-8 h-8"
            />
            <p className="font-light text-[#B0B0B0] mt-2">
              <span className="text-primary font-medium">1,472</span> cities
            </p>
          </div>
        </div>
      </div>
      <img
        src={hero}
        alt="hero image"
        className="relative w-[500px] h-[400px] ml-auto"
      />
    </div>
  );
};

export default Header;
