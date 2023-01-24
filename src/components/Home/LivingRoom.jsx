import React from "react";
import { back1, back2, back3, back4 } from "../../assets/images";

const LivingRoom = () => {
  return (
    <div className="mt-[70px]">
      <h1 className="font-medium text-primary text-2xl">
        Hotels with large living room
      </h1>
      <div className="flex mt-5 ">
        <div className="grid grid-cols-4 gap-7 w-full ">
          <div className="relative w-full">
            <img src={back1} alt="backyard" className="w-full" />

            <p className="text-primary font-normal text-xl mt-4">Tabby Town</p>
            <p className="text-[#B0B0B0] text-[15px] font-light">
              Gunung Batu, Indonesia
            </p>
          </div>
          <div className="relative w-full">
            <img src={back2} alt="backyard" className="w-full" />
            <p className="text-primary font-normal text-xl mt-4">Tabby Town</p>
            <p className="text-[#B0B0B0] text-[15px] font-light">
              Gunung Batu, Indonesia
            </p>
          </div>
          <div className="relative w-full">
            <img src={back3} alt="backyard" className="w-full" />
            <p className="text-primary font-normal text-xl mt-4">Tabby Town</p>
            <p className="text-[#B0B0B0] text-[15px] font-light">
              Gunung Batu, Indonesia
            </p>
          </div>
          <div className="relative w-full">
            <img src={back4} alt="backyard" className="w-full" />
            <div className="absolute top-0 right-0 bg-secondary w-3/5 py-2  rounded-bl-xl rounded-tr-lg">
              <p className="text-white font-light text-center">
                <span className="font-medium ">Popular</span> choice
              </p>
            </div>
            <p className="text-primary font-normal text-xl mt-4">Tabby Town</p>
            <p className="text-[#B0B0B0] text-[15px] font-light">
              Gunung Batu, Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivingRoom;
