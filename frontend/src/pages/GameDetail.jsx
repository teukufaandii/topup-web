import React from "react";
import { FaHeadset, FaShieldAlt, FaLock, FaShippingFast } from "react-icons/fa";

const GameDetail = () => {
  return (
    <div>
      <div className="relative bg-custom-red sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/public/genshin.jpg"
          className="w-full h-full object-cover"
          alt="Character"
        />
      </div>

      <div className="flex flex-row justify-start items-center gap-3">
        <div className="relative bottom-[100px] w-[200px] h-[200px] ml-10 mb-10">
          <img
            src="/public/genshin.jpg"
            className="w-full h-full object-cover border-2 border-red-500 rounded-3xl"
            alt="Character"
          />
        </div>

        <div className="relative bottom-[100px] w-full mb-10">
          <div className="flex flex-col gap-4">
            <div className="">
              <h1 className="text-3xl font-bold ">Genshin Impact</h1>
              <p>Crystal</p>
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-2 items-center bg-gradient-to-br from-custom-red to-red-800 p-4 rounded-full shadow-md h-[30px]">
                <FaHeadset className="text-xl text-white" />
                <p className="text-center text-[10px] text-white">
                  Layanan Pelanggan 24/7
                </p>
              </div>

              <div className="flex flex-row gap-2 items-center bg-gradient-to-br from-custom-red to-red-800 p-4 rounded-full shadow-md h-[30px]">
                <FaShieldAlt className="text-xl text-white" />
                <p className="text-center text-[10px] text-white">
                  Jaminan Layanan
                </p>
              </div>

              <div className="flex flex-row gap-2 items-center bg-gradient-to-br from-custom-red to-red-800 p-4 rounded-full shadow-md h-[30px]">
                <FaLock className="text-xl text-white" />
                <p className="text-center text-[10px] text-white">
                  Pembayaran yang Aman
                </p>
              </div>

              <div className="flex flex-row gap-2 items-center bg-gradient-to-br from-custom-red to-red-800 p-4 rounded-full shadow-md h-[30px]">
                <FaShippingFast className="text-xl text-white" />
                <p className="text-center text-[10px] text-white">
                  Pengiriman Instant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
