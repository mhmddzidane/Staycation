import React from "react";
import { pic2 } from "../assets/images";

const BookingInformation = () => {
  return (
    <div className="justify-center items-center flex flex-col w-full ">
      <div className="flex py-5 w-full border-b-2 border-[#E5E5E5] px-[150px]  justify-center">
        <a href="/" className="text-2xl ">
          <span className="text-secondPrimary font-medium">Stay</span>cation.
        </a>
      </div>

      <div className="flex justify-center mt-12 items-center">
        <div className="bg-[#E5E5E5] rounded-full w-12 h-12 pt-[13px] text-center border-2 border-gray ">
          <p className="text-[#898989] font-medium">1</p>
        </div>
        <div className=" bg-gray w-[35px] h-[1px] " />
        <div className="bg-[#E5E5E5] rounded-full h-12 w-12 pt-[13px] text-center  ">
          <p className="text-[#898989] font-medium">2</p>
        </div>
        <div className=" bg-gray w-[35px] h-[1px] " />
        <div className="bg-[#E5E5E5] rounded-full h-12 w-12 pt-[13px] text-center  ">
          <p className="text-[#898989] font-medium">3</p>
        </div>
      </div>

      <div className="flex flex-col  text-center">
        <p className="text-primary font-semibold text-4xl mt-12">
          Booking Information
        </p>
        <p className="text-gray font-light text-lg mt-1">
          Please fill up the blank fields below
        </p>
      </div>

      <div className="flex mt-12  justify-evenly pr-44  items-center ">
        <div className="flex flex-col">
          <img
            src={pic2}
            className="relative w-[420px] h-[270px]"
            alt="book pic"
          />
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-primary text-xl">Podo Wae</p>
              <p className="text-gray text-sm">Madiun, Indonesia</p>
            </div>
            <p className="text-gray ml-auto mt-3">
              <span className="text-primary">$480 USD</span> per{" "}
              <span className="text-primary">2 nights</span>
            </p>
          </div>
        </div>

        <div className=" bg-gray h-[350px] mx-[80px]  w-[1px] " />

        <div className="flex flex-col">
          <p className="text-primary">First Name</p>
          <input
            type="text"
            className="bg-[#F5F6F8] px-3 py-2 rounded-md text-primary mt-2"
            placeholder="Please type here ..."
          />
          <p className="text-primary mt-5">Last Name</p>
          <input
            type="text"
            className="bg-[#F5F6F8] px-3 py-2 rounded-md text-primary mt-2"
            placeholder="Please type here ..."
          />
          <p className="text-primary mt-5">Email Address</p>
          <input
            type="text"
            className="bg-[#F5F6F8] px-3 py-2 rounded-md text-primary mt-2"
            placeholder="Please type here ..."
          />
          <p className="text-primary mt-5">Phone Number</p>
          <input
            type="text"
            className="bg-[#F5F6F8] px-3 py-2 rounded-md text-primary mt-2"
            placeholder="Please type here ..."
          />
        </div>
      </div>
      <div className="text-center py-14">
        <button className="bg-[#F5F6F8] text-gray rounded-md w-[300px] py-2 mt-32">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingInformation;
