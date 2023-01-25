import React from "react";
import { Link } from "react-router-dom";
import { bca, mandiri } from "../assets/icon";
import BookStep from "../components/BookStep";

const Payment = () => {
  return (
    <div className="justify-center items-center flex flex-col w-full ">
      <div className="flex py-5 w-full border-b-2 border-[#E5E5E5] px-[150px]  justify-center">
        <a href="/" className="text-2xl ">
          <span className="text-secondPrimary font-medium">Stay</span>cation.
        </a>
      </div>

      <BookStep step1={true} />

      <div className="flex flex-col  text-center">
        <p className="text-primary font-semibold text-4xl mt-12">Payment</p>
        <p className="text-gray font-light text-lg mt-1">
          Kindly follow the instructions below
        </p>
      </div>

      <div className="flex mt-12  justify-evenly pl-16 items-center ">
        <div className="flex flex-col">
          <p className="text-primary">Transfer Pembayaran:</p>
          <p className="mt-5 text-primary">Tax: 10%</p>
          <p className="mt-[10px] text-primary">Sub total: $480 USD</p>
          <p className="mt-[10px] text-primary">Total: $580 USD</p>
          <div className="flex mt-6">
            <img src={bca} alt="bca" className="w-20 h-7" />
            <div className="flex flex-col text-primary">
              <p>Bank Central Asia</p>
              <p>2208 1996</p>
              <p>BuildWith Angga</p>
            </div>
          </div>
          <div className="flex mt-6">
            <img src={mandiri} alt="bca" className="w-20 h-7" />
            <div className="flex flex-col text-primary">
              <p>Bank Mandiri</p>
              <p>2208 1996</p>
              <p>BuildWith Angga</p>
            </div>
          </div>
        </div>

        <div className=" bg-gray h-[350px] mx-[80px]  w-[1px] " />

        <div className="flex flex-col">
          <p className="text-primary">Upload Bukti Transfer</p>
          <input
            type="file"
            className="bg-[#F5F6F8] px-3 py-2 rounded-md text-primary mt-2 w-80"
          />
          <p className="text-primary mt-5">Asal Bank</p>
          <input
            type="text"
            className="bg-[#F5F6F8] px-3 py-2 rounded-md text-primary mt-2"
            placeholder="Please type here ..."
          />
          <p className="text-primary mt-5">Nama Pengirim</p>
          <input
            type="text"
            className="bg-[#F5F6F8] px-3 py-2 rounded-md text-primary mt-2"
            placeholder="Please type here ..."
          />
        </div>
      </div>
      <div className="text-center py-14 flex flex-col">
        <Link to="/complete">
          <button
            className={` bg-secondPrimary text-white w-[300px] py-2 mt-10 rounded-md shadow-md shadow-[#3252DF]`}
          >
            Continue to Book
          </button>
        </Link>

        <button className="bg-[#F5F6F8] text-gray rounded-md w-[300px] py-2 mt-7">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Payment;
