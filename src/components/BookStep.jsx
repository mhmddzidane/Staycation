import React from "react";
import { check } from "../assets/icon";

const BookStep = ({ step1, step2, step3 }) => {
  console.log(step1);
  return (
    <div className="flex justify-center mt-12 items-center">
      {step1 ? (
        <div className="bg-[#1ABC9C] rounded-full w-12 h-12 justify-center items-center flex">
          <img src={check} alt="check" className="relative" />
        </div>
      ) : (
        <div className="bg-[#E5E5E5] rounded-full w-12 h-12 pt-[13px] text-center border-2 border-gray ">
          <p className="text-[#898989] font-medium">1</p>
        </div>
      )}

      <div className=" bg-gray w-[35px] h-[1px] " />

      {step2 ? (
        <div className="bg-[#1ABC9C] rounded-full w-12 h-12 justify-center items-center flex">
          <img src={check} alt="check" className="relative" />
        </div>
      ) : (
        <div className="bg-[#E5E5E5] rounded-full w-12 h-12 pt-[13px] text-center border-2 border-gray ">
          <p className="text-[#898989] font-medium">2</p>
        </div>
      )}

      <div className=" bg-gray w-[35px] h-[1px] " />

      {step3 ? (
        <div className="bg-[#1ABC9C] rounded-full w-12 h-12 justify-center items-center flex">
          <img src={check} alt="check" className="relative" />
        </div>
      ) : (
        <div className="bg-[#E5E5E5] rounded-full w-12 h-12 pt-[13px] text-center border-2 border-gray ">
          <p className="text-[#898989] font-medium">3</p>
        </div>
      )}
    </div>
  );
};

export default BookStep;
