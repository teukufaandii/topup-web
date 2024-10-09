import React, { useEffect, useState } from "react";
import { FaHeadset, FaShieldAlt, FaLock, FaShippingFast } from "react-icons/fa";
import { useParams } from "react-router-dom"; // Untuk mengambil parameter URL
import "./css/Beli.css";

const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

const GameDetail = () => {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/games/${slug}`);
        if (!response.ok) {
          throw new Error("Error fetching game details");
        }
        const data = await response.json();
        setGame(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!game) {
    return <p>Game not found</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative bg-custom-red sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/public/genshin.jpg"
          className="w-full h-full object-cover"
          alt={game.name}
        />
      </div>

      <div className="flex flex-row justify-start items-center gap-3 bg-gray-700">
        <div className="relative bottom-[100px] w-[200px] h-[200px] ml-10 mb-10">
          <img
            src="/public/genshin.jpg"
            className="w-full h-full object-cover border-2 border-red-500 rounded-3xl"
            alt={game.name}
          />
        </div>

        <div className="relative bottom-[100px] w-full mb-10">
          <div className="flex flex-col gap-4">
            <div className="mb-2 p-4 bg-gradient-to-br from-custom-red to-red-800 rounded-3xl w-fit">
              <h1 className="text-3xl font-bold text-white">{game.name}</h1>
              <p className=" text-white">Genesis Crystal & Blessings</p>
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

      <div className="flex md:flex-row flex-col gap-3 px-3">
        <div className="flex flex-col gap-2 flex-1 relative">
          <div className="relative top-0">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <div className="inline-flex">
                  <button className="px-4 bg-gradient-to-bl from-custom-red to-red-800 rounded-lg shadow-md text-white text-sm h-auto py-2.5 hover:opacity-80 justify-center items-center gap-2 flex select-none no-underline">
                    <span className="font-medium line-clamp-1">Produk</span>
                  </button>
                </div>
                <div className="inline-flex">
                  <button className="px-4 bg-gradient-to-bl from-gray-700 to-gray-800 dark:bg-[#21222e] rounded-lg shadow-md text-white text-sm h-auto py-2.5 hover:opacity-80 justify-center items-center gap-2 flex select-none no-underline">
                    <span className="font-medium line-clamp-1">
                      Ulasan Produk
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="flex flex-col gap-3 rounded-lg min-h-[200px]">
                  <div className="flex flex-row items-center gap-1 rounded-md bg-gradient-to-bl from-[#C80000] to-[#970000] text-white">
                    <div className="items-center justify-start flex bg-[#C80000] p-3 h-12 w-16 clip-path-number">
                      <span className="font-bold text-xl italic">1</span>
                    </div>
                    <span className="text-base px-1 font-medium line-clamp-1">Pilih Nominal</span>
                  </div>
                </div>
              </div>
              <div className="md:flex hidden"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 basis-5/12"></div>
      </div>
    </div>
  );
};

export default GameDetail;
