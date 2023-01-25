import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pic2 } from "../assets/images";
import BookStep from "../components/BookStep";

const BookingInformation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [input, setInput] = useState(true);

  useEffect(() => {
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      phone.length > 0
    ) {
      setInput(false);
    } else {
      setInput(true);
    }
  }, [firstName, lastName, email, phone]);

  return (
    <div className="justify-center items-center flex flex-col w-full ">
      <div className="flex py-5 w-full border-b-2 border-[#E5E5E5] px-[150px]  justify-center">
        <a href="/" className="text-2xl ">
          <span className="text-secondPrimary font-medium">Stay</span>cation.
        </a>
      </div>

      <BookStep />

      <div className="flex flex-col  text-center">
        <p className="text-primary font-semibold text-4xl mt-12">
          Booking Information
        </p>
        <p className="text-gray font-light text-lg mt-1">
          Please fill up the blank fields below
        </p>
      </div>

      <div className="flex mt-12  justify-evenly pr-28   items-center ">
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
            className="bg-[#F5F6F8] px-3 py-2 rounded-md text-primary mt-2 w-80"
            placeholder="Please type here ..."
            onChange={(e) => setFirstName(e.target.value)}
          />
          <p className="text-primary mt-5">Last Name</p>
          <input
            type="text"
            className="bg-[#F5F6F8] px-3 py-2 rounded-md text-primary mt-2"
            placeholder="Please type here ..."
            onChange={(e) => setLastName(e.target.value)}
          />
          <p className="text-primary mt-5">Email Address</p>
          <input
            type="text"
            className="bg-[#F5F6F8] px-3 py-2 rounded-md text-primary mt-2"
            placeholder="Please type here ..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-primary mt-5">Phone Number</p>
          <input
            type="text"
            className="bg-[#F5F6F8] px-3 py-2 rounded-md text-primary mt-2"
            placeholder="Please type here ..."
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="text-center py-14 flex flex-col">
        <Link to="/payment">
          <button
            className={`${
              input == false ? "block" : "hidden"
            } bg-secondPrimary text-white w-[300px] py-2 mt-10 rounded-md shadow-md shadow-[#3252DF]`}
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

export default BookingInformation;
