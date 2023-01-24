import React from "react";

const Footer = () => {
  return (
    <footer className="text-center lg:text-left  mt-[100px]">
      <div className="flex justify-center items-center lg:justify-between p-6 border-b-2 border-[#E5E5E5] "></div>
      <div className="mx-[150px] py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h1 className="text-2xl">
              <span className="text-secondPrimary font-medium">Stay</span>
              cation.
            </h1>
            <p className="mt-4 text-gray">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div>
            <h6 className=" text-primary font-semibold mb-4 flex justify-center md:justify-start">
              For Beginners
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray">
                New Account
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray">
                Start Booking a Room
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray">
                Use Payments
              </a>
            </p>
          </div>
          <div className="">
            <h6 className=" text-primary font-semibold mb-4 flex justify-center md:justify-start">
              Explore Us
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray">
                Pricing
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray">
                Settings
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray">
                Help
              </a>
            </p>
          </div>
          <div className="">
            <h6 className=" text-primary font-semibold mb-4 flex justify-center md:justify-start">
              Connect Us
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray">
                support@staycation.id
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray">
                021 - 2208 - 1996
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray">
                Staycation, Kemang, Jakarta
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-6 text-gray font-light">
        <span> Copyright 2019 • All rights reserved • Staycation</span>
      </div>
    </footer>
  );
};

export default Footer;
