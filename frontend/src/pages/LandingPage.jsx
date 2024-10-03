import React from "react";

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
      image: "/public/keyboard.jpg",
      price: "Rp 1.200.000",
    },
    {
      id: 3,
      name: "Gaming Headset",
      image: "/public/headset.jpg",
      price: "Rp 800.000",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      <section className="my-16">
        <h2 className="text-3xl font-bold text-center text-secondary mb-8">
          Best Selling Products
        </h2>

        <div className="carousel w-full">
          {products.map((product) => (
            <div id={`item${product.id}`} className="carousel-item w-full" key={product.id}>
              <div className="flex flex-col items-center">
                <img src={product.image} alt={product.name} className="rounded-lg shadow-lg w-80 h-80 object-cover" />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-dark">{product.name}</h3>
                  <p className="text-primary text-lg font-bold">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full py-4 gap-2">
          {products.map((product) => (
            <a href={`#item${product.id}`} key={product.id} className="btn btn-xs btn-primary"></a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
