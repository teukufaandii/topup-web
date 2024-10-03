import React from "react";

const Hero = () => {
  return (
    <div
      className="hero h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: "url(/public/hero.jpg)",
      }}
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
          <button className="btn btn-primary hover:bg-primary-focus transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
