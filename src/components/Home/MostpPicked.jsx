import React from "react";
import { pic1, pic2, pic3, pic4, pic5 } from "../../assets/images";

const MostpPicked = () => {
  return (
    <div className="mt-[70px]">
      <h1 className="font-medium text-primary text-2xl">Most Picked</h1>
      <div class="grid grid-cols-3 mt-5 gap-3 grid-rows-2">
        <div class="relative w-full row-span-2 rounded-md  ">
          <img src={pic1} alt="image" className=" w-full h-fit " />
          <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black  opacity-50 rounded-lg" />
          <div className="absolute top-0 right-0 bg-secondary  py-2 px-9 rounded-bl-lg rounded-tr-lg">
            <p className="text-white font-light">
              <span className="font-medium ">$50</span> per night
            </p>
          </div>
          <div className="absolute bottom-0 text-white ml-6 mb-6">
            <p className="text-xl font-normal">Blue Origin Fams</p>
            <p className="text-base font-light">Jakarta, Indonesia</p>
          </div>
        </div>
        <div class="w-full relative ">
          <div className="relative">
            <img src={pic2} alt="image" className="w-full h-fit" />
            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black  opacity-50 rounded-lg" />
          </div>
          <div className="absolute top-0 right-0 bg-secondary  py-2 px-9 rounded-bl-lg rounded-tr-lg">
            <p className="text-white font-light">
              <span className="font-medium ">$50</span> per night
            </p>
          </div>
          <div className="absolute bottom-0 text-white ml-6 mb-6">
            <p className="text-xl font-normal">Blue Origin Fams</p>
            <p className="text-base font-light">Jakarta, Indonesia</p>
          </div>
        </div>
        <div class="w-full relative">
          <div className="relative">
            <img src={pic3} alt="image" className="w-full h-fit" />
            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black  opacity-50 rounded-lg" />
          </div>
          <div className="absolute top-0 right-0 bg-secondary  py-2 px-9 rounded-bl-lg rounded-tr-lg">
            <p className="text-white font-light">
              <span className="font-medium ">$50</span> per night
            </p>
          </div>
          <div className="absolute bottom-0 text-white ml-6 mb-6">
            <p className="text-xl font-normal">Blue Origin Fams</p>
            <p className="text-base font-light">Jakarta, Indonesia</p>
          </div>
        </div>
        <div class="w-full relative">
          <div className="relative">
            <img src={pic4} alt="image" className="w-full h-fit" />
            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black  opacity-50 rounded-lg" />
          </div>
          <div className="absolute top-0 right-0 bg-secondary  py-2 px-9 rounded-bl-lg rounded-tr-lg">
            <p className="text-white font-light">
              <span className="font-medium ">$50</span> per night
            </p>
          </div>
          <div className="absolute bottom-0 text-white ml-6 mb-6">
            <p className="text-xl font-normal">Blue Origin Fams</p>
            <p className="text-base font-light">Jakarta, Indonesia</p>
          </div>
        </div>
        <div class="w-full relative">
          <div className="relative">
            <img src={pic5} alt="image" className="w-full h-fit" />
            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black  opacity-50 rounded-lg" />
          </div>
          <div className="absolute top-0 right-0 bg-secondary  py-2 px-9 rounded-bl-lg rounded-tr-lg">
            <p className="text-white font-light">
              <span className="font-medium ">$50</span> per night
            </p>
          </div>
          <div className="absolute bottom-0 text-white ml-6 mb-6">
            <p className="text-xl font-normal">Blue Origin Fams</p>
            <p className="text-base font-light">Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostpPicked;
