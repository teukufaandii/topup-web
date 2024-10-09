import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

const LandingPage = () => {
  const [games, setGames] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/games/fetch-games`);
        if (!response.ok) {
          throw new Error("Error fetching games");
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/user/fetchproducts`);
        if (!response.ok) {
          throw new Error("Error fetching products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />

      <section className="container mx-auto px-3">
        <h2 className="text-3xl font-bold text-start text-primary my-5">
          Most Popular Search
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div id={`item${product.id}`} className="w-full" key={product.id}>
              <div className="flex flex-row rounded-lg items-center justify-start bg-primary p-4 h-20 sm:h-28 cursor-pointer hover:bg-primary relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 rounded-[15%] p-2 h-20 object-cover sm:w-24 sm:h-24"
                />
                <div className="ml-4 text-start flex flex-col justify-center">
                  <h3 className="text-sm sm:text-lg font-semibold text-white">
                    {product.name.slice(0, 21) + "..."}
                  </h3>
                  <h3 className="text-sm text-white">Rp. {product.price}</h3>
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

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {games.map((product) => (
            <div
              id={`item${product.id}`}
              className="w-full cursor-pointer"
              key={product.id}
            >
              <div className="relative group overflow-hidden rounded-lg">
                {" "}
                <Link
                  to={`/beli/${generateSlug(product.name)}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg shadow-lg w-full h-60 md:h-72 lg:h-80 object-cover transition duration-300 group-hover:blur-xl"
                  />
                  <img
                    src="/public/logo.png"
                    className="absolute bottom-7 text-center w-20 h-20 left-1/2 translate-x-[-50%] sm:w-24 sm:h-24 p-4 opacity-0 duration-300 group-hover:opacity-100"
                  />
                  <h3 className="text-lg absolute bottom-5 text-center w-full p-4 font-semibold text-white opacity-0 duration-300 group-hover:opacity-100">
                    {product.name}
                  </h3>
                </Link>
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
