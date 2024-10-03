import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Sidenav = () => {
  return (
    <div className="h-full w-64 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col justify-between p-4 shadow-lg">
      <div className="bg-gray-900 text-white p-3 rounded">
        <h2 className="text-xl font-bold mb-8">Menu</h2>
        <ul>
          <li className="mb-4">
            <a
              href="#"
              className=" hover:text-primary flex items-center space-x-2 transition duration-300"
            >
              <span>Beranda</span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className=" hover:text-primary flex items-center space-x-2 transition duration-300"
            >
              <span>Semua Game</span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className=" hover:text-primary flex items-center space-x-2 transition duration-300"
            >
              <span>Cek Transaksi</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center space-x-4 mb-2">
        <a href="#" className="text-gray-700 hover:text-primary">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-gray-700 hover:text-primary">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-gray-700 hover:text-primary">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default Sidenav;
