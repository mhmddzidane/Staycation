import React from "react";
import { family, star } from "../../assets/images";

const Family = () => {
  return (
    <div className="flex mt-[100px] lg:justify-center">
      <img
        src={family}
        alt="keluarga"
        className="relative w-[400px] h-[540px]"
      />
      <div className="flex flex-col ml-[60px] align-middle m-auto justify-self-center">
        <h1 className="font-medium text-primary text-2xl">Happy Family</h1>
        <div className="flex">
          <img src={star} alt="star" className="relative w-6 h-6 mt-10 " />
          <img src={star} alt="star" className="relative w-6 h-6 mt-10 " />
          <img src={star} alt="star" className="relative w-6 h-6 mt-10 " />
          <img src={star} alt="star" className="relative w-6 h-6 mt-10 " />
          <img src={star} alt="star" className="relative w-6 h-6 mt-10 " />
        </div>
        <p className="text-primary font-normal text-[32px]">
          What a great trip with my family and
          <br />I should try again next time soon ...
        </p>
        <p className="text-[#B0B0B0] font-light text-lg">
          Angga, Product Designer
        </p>
        <button className="bg-secondPrimary text-white w-52 py-2 mt-10 rounded-md shadow-md shadow-[#3252DF]">
          Read their story
        </button>
      </div>
    </div>
  );
};

export default Family;
