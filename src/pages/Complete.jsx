import React from "react";
import { Link } from "react-router-dom";
import { complete } from "../assets/images";
import BookStep from "../components/BookStep";

const Complete = () => {
  return (
    <div className="justify-center items-center flex flex-col w-full text-center ">
      <div className="flex py-5 w-full border-b-2 border-[#E5E5E5] px-[150px]  justify-center">
        <a href="/" className="text-2xl ">
          <span className="text-secondPrimary font-medium">Stay</span>cation.
        </a>
      </div>

      <BookStep step1={true} step2={true} step3={true} />

      <p className="text-primary text-4xl font-semibold mt-12">
        Yay! Completed
      </p>

      <img src={complete} className="relative w-1/4" alt="complete" />

      <p className="text-gray text-lg">
        We will inform you via email later
        <br /> once the transaction has been accepted
      </p>

      <Link to="/">
        <button
          className={` bg-secondPrimary text-white w-[300px] py-2 mt-10 rounded-md shadow-md mb-12 shadow-[#3252DF]`}
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Complete;
