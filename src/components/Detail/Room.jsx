import React from "react";
import { Link } from "react-router-dom";
import {
  acIcon,
  bathIcon,
  bedIcon,
  diningIcon,
  kulkasIcon,
  livingIcon,
  tvIcon,
  wifiIcon,
} from "../../assets/icon";
import { detail1, detail2, detail3 } from "../../assets/images";
import Backyard from "../Home/Backyard";
import Family from "../Home/Family";

const Room = () => {
  return (
    <div className="relative">
      <h2 className="absolute top-0 left-0 flex ">
        <Link to="/" className="text-gray font-light text-lg">
          HOME
        </Link>
        <div className="mx-5 text-gray">/</div>
        <p className="text-primary text-lg font-medium">House Details</p>
      </h2>
      <div className="flex flex-col text-center mt-12">
        <p className="text-primary font-semibold text-4xl">Village Angga</p>
        <p className="text-gray font-light text-lg mt-1">Bogor, Indonesia</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-12  ">
        <div className="row-span-2 ">
          <img src={detail1} alt="image" className=" h-full w-full " />
        </div>
        <div className="w-full relative ">
          <img src={detail2} alt="image" className=" h-fit w-full " />
        </div>
        <div className="w-full relative">
          <img src={detail3} alt="image" className="  h-fit w-full " />
        </div>
      </div>

      <div className="flex mt-12">
        <div className="flex flex-col">
          <p className="text-primary font-medium text-xl">About the place</p>
          <p className="text-gray mt-5 font-light mr-[53px]">
            Minimal techno is a minimalist subgenre of techno music. It is
            characterized by a stripped-down aesthetic that exploits the use of
            repetition and understated development. Minimal techno is thought to
            have been originally developed in the early 1990s by Detroit-based
            producers Robert Hood and Daniel Bell.
            <br />
            <br />
            Such trends saw the demise of the soul-infused techno that typified
            the original Detroit sound. Robert Hood has noted that he and Daniel
            Bell both realized something was missing from techno in the
            post-rave era.
            <br />
            <br />
            Design is a plan or specification for the construction of an object
            or system or for the implementation of an activity or process, or
            the result of that plan or specification in the form of a prototype,
            product or process. The national agency for design: enabling
            Singapore to use design for economic growth and to make lives
            better.
          </p>
          <div className="flex flex-wrap justify-between max-w-[458px] ">
            <div className="flex flex-col mt-8">
              <img src={bedIcon} alt="bedicon" className="w-6 h-6" />
              <p className="text-gray font-light mt-2">
                <span className=" font-medium text-primary">5</span> bedroom
              </p>
            </div>
            <div className="flex flex-col mt-8">
              <img src={livingIcon} alt="bedicon" className="w-6 h-6" />
              <p className="text-gray font-light mt-2">
                <span className=" font-medium text-primary">1</span> living room
              </p>
            </div>
            <div className="flex flex-col mt-8">
              <img src={bathIcon} alt="bedicon" className="w-6 h-6" />
              <p className="text-gray font-light mt-2">
                <span className=" font-medium text-primary">3</span> bathroom
              </p>
            </div>
            <div className="flex flex-col mt-8">
              <img src={diningIcon} alt="bedicon" className="w-6 h-6" />
              <p className="text-gray font-light mt-2">
                <span className=" font-medium text-primary">1</span> dining room
              </p>
            </div>
            <div className="flex flex-col mt-8">
              <img src={wifiIcon} alt="bedicon" className="w-6 h-6" />
              <p className="text-gray font-light mt-2">
                <span className=" font-medium text-primary">15</span> mbp/s
              </p>
            </div>
            <div className="flex flex-col mt-8">
              <img src={acIcon} alt="bedicon" className="w-6 h-6" />
              <p className="text-gray font-light mt-2">
                <span className=" font-medium text-primary">7</span> unit ready
              </p>
            </div>
            <div className="flex flex-col mt-8">
              <img src={kulkasIcon} alt="bedicon" className="w-6 h-6" />
              <p className="text-gray font-light mt-2">
                <span className=" font-medium text-primary">2</span> refigrator
              </p>
            </div>
            <div className="flex flex-col mt-8">
              <img src={tvIcon} alt="bedicon" className="w-6 h-6" />
              <p className="text-gray font-light mt-2">
                <span className=" font-medium text-primary">4</span> television
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" border-2 border-[#E5E5E5] rounded-lg px-[84px] py-[61px] w-[487px]">
            <p className="text-primary font-medium text-xl">Start Booking</p>
            <p className="text-gray font-light text-4xl">
              <span className="text-[#1ABC9C] font-medium mt-4">$280</span> per
              night
            </p>
            <p className="text-primary mt-5">How long you will stay?</p>
            <div className="flex mt-3 bg-[#F5F6F8]">
              <button className="bg-[#E74C3C] text-white text-2xl w-11 h-11 rounded-md">
                -
              </button>
              <div className=" text-primary py-2 w-fit mx-auto text-center">
                2 nights
              </div>
              <button className="bg-[#1ABC9C] text-white text-2xl w-11 h-11 rounded-md ">
                +
              </button>
            </div>
            <p className="text-primary mt-6">Pick a Date</p>
            <div className="flex mt-3 bg-[#F5F6F8]">sds</div>
            <p className="text-gray font-light mt-4">
              You will pay{" "}
              <span className="text-primary font-medium">$480</span> USD per{" "}
              <span className="text-primary font-medium">2 </span>
              nights
            </p>
            <button className="bg-secondPrimary text-white w-full py-2 mt-10 rounded-md shadow-md shadow-[#3252DF]">
              Continue to Book
            </button>
          </div>
        </div>
      </div>
      <Backyard />
      <Family />
    </div>
  );
};

export default Room;
