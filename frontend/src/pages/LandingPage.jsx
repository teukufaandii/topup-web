import React from "react";
import Hero from "../components/Hero";

const LandingPage = () => {
  const products = [
    {
      id: 1,
      name: "Gaming Mouse",
      image: "/public/hero.jpg",
      price: "Rp 300.000",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      image: "/public/hero.jpg",
      price: "Rp 1.200.000",
    },
    {
      id: 4,
      name: "Gaming Headset",
      image: "/public/hero.jpg",
      price: "Rp 800.000",
    },
    {
      id: 5,
      name: "Gaming Headset",
      image: "/public/hero.jpg",
      price: "Rp 800.000",
    },
    {
      id: 6,
      name: "Gaming Headset",
      image: "/public/hero.jpg",
      price: "Rp 800.000",
    },
    {
      id: 7,
      name: "Gaming Headset",
      image: "/public/hero.jpg",
      price: "Rp 800.000",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <section className=" container mx-auto px-3">
        <h2 className="text-3xl font-bold text-start text-primary my-5">
          Most Popular Search
        </h2>

        <div className="carousel w-full h-full grid grid-cols-4 gap-2">
          {products.map((product) => (
            <div
              id={`item${product.id}`}
              className="carousel-item w-full"
              key={product.id}
            >
              <div className="flex flex-row rounded-lg items-center justify-center w-[400px] h-[100px] bg-primary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 rounded-[15%] p-2 h-full object-cover"
                />
                <div className="text-center h-full flex flex-col justify-center w-full">
                  <h3 className="text-md font-semibold text-white">
                    {product.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      <section className=" container mx-auto px-3">
        <h2 className="text-3xl font-bold text-start text-primary my-5">
          Best Selling Products
        </h2>

        <div className="carousel w-full h-full mb-8 rounded-lg grid grid-cols-6 gap-3">
          {products.map((product) => (
            <div
              id={`item${product.id}`}
              className="carousel-item w-full"
              key={product.id}
            >
              <div className="flex flex-col items-center justify-center w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg shadow-lg w-80 h-80 object-cover"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-md font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="text-primary text-md font-bold">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
