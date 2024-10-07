import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-t from-custom-red/90 to-transparent sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="/public/arlecchino.png"
          className="absolute w-32 sm:w-40 md:w-48 lg:w-60 bottom-0 left-[10%] md:left-[15%] lg:left-[28%]"
          alt="Character"
          style={{
            maskImage: "linear-gradient(to right, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 60%, transparent 100%)",
          }}
        />
        <img
          src="/public/hutao.png"
          className="absolute w-32 sm:w-40 md:w-48 lg:w-60 h-fit bottom-0 right-[10%] md:right-[15%] lg:right-[28%]"
          alt="Character"
          style={{
            maskImage: "linear-gradient(to left, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 60%, transparent 100%)",
          }}
        />

        <div className="absolute w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full top-10 md:top-20 left-10 md:left-20"></div>
        <div className="absolute w-4 h-4 md:w-6 md:h-6 bg-white rounded-full bottom-10 right-10 md:right-20"></div>
        <div className="absolute w-4 h-4 md:w-6 md:h-6 bg-white rounded-full bottom-5 left-20 md:left-40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Topup Gaje
        </h1>
        <p className="text-sm sm:text-base md:text-lg mt-2">
          Ingin Dapat Harga Lebih Murah?
        </p>
        <button className="mt-5 bg-red-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg">
          Hubungi: 0822 1169 6095
        </button>

        <div className="flex justify-center space-x-3 sm:space-x-5 mt-6 sm:mt-10">
          <a href="https://www.instagram.com" className="text-white">
            <FontAwesomeIcon icon={faInstagram} className="text-lg sm:text-xl" /> Instagram
          </a>
          <a href="https://discord.gg/pasargamer" className="text-white">
            <FontAwesomeIcon icon={faDiscord} className="text-lg sm:text-xl" /> Discord
          </a>
          <a href="https://www.pasargamer.com" className="text-white">
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg sm:text-xl" /> Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
