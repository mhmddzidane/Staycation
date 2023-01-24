import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex py-5  border-b-2 border-[#E5E5E5] px-[150px]">
        <a href="/" className="text-2xl">
          <span className="text-secondPrimary font-medium">Stay</span>cation.
        </a>
        <div className="ml-auto ">
          <a
            href="/"
            className="text-primary font-normal text-base mr-7 hover:text-secondPrimary"
          >
            Home
          </a>
          <a
            href="/"
            className="text-primary font-normal text-base mr-7 hover:text-secondPrimary"
          >
            Browse by
          </a>
          <a
            href="/"
            className="text-primary font-normal text-base mr-7 hover:text-secondPrimary"
          >
            Stories
          </a>
          <a
            href="/"
            className="text-primary font-normal text-base hover:text-secondPrimary"
          >
            Agents
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
