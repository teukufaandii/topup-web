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
    <div className="min-h-screen bg-gray-900">
      <Hero />

      <section className="container mx-auto px-3">
        <h2 className="text-3xl font-bold text-start text-primary my-5">
          Most Popular Search
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              id={`item${product.id}`}
              className="w-full"
              key={product.id}
            >
              <div className="flex flex-row rounded-lg items-center justify-start bg-primary p-4 h-20 sm:h-28 cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 rounded-[15%] p-2 h-20 object-cover sm:w-24 sm:h-24"
                />
                <div className="ml-4 text-center flex flex-col justify-center">
                  <h3 className="text-md font-semibold text-white">
                    {product.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-3 my-8">
        <h2 className="text-3xl font-bold text-start text-primary my-5">
          Featured Games
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <div
              id={`item${product.id}`}
              className="w-full cursor-pointer"
              key={product.id}
            >
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg shadow-lg w-full h-80 object-cover transition duration-300"
                />
                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-80 transition duration-300 rounded-lg flex items-center justify-center">
                  <h3 className="text-lg font-semibold text-white">
                    {product.name}
                  </h3>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-primary text-md font-bold">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
