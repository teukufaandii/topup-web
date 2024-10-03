import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-t from-custom-red/90 to-transparent">
      <div
        className="hero h-[400px] bg-cover bg-center"
      >
        <div className="hero-overlay bg-dark bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-primary">
              Welcome to Topup Gaje
            </h1>
            <p className="mb-5 text-white">
              Tempat topup terbaik dan tercepat, sekali klik beres wokwok
            </p>
            <button className="btn">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
