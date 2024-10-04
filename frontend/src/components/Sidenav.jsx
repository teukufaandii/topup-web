import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaHome,
  FaGamepad,
  FaReceipt,
} from "react-icons/fa";

const Sidenav = () => {
  return (
    <div className="h-full w-20 lg:w-64 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col justify-between p-4 shadow-lg">
      <div className="bg-gray-900 text-white p-3 rounded">
        <h2 className="hidden lg:block text-sm lg:text-xl font-bold mb-8 text-center lg:text-left">
          Menu
        </h2>
        <ul>
          <li className="mb-4">
            <a
              href="#"
              className="hover:text-primary flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2 transition duration-300"
            >
              <FaHome size={18} />
              <span className="hidden lg:inline-block">Beranda</span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="hover:text-primary flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2 transition duration-300"
            >
              <FaGamepad size={18} />
              <span className="hidden lg:inline-block">Semua Game</span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="hover:text-primary flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2 transition duration-300"
            >
              <FaReceipt size={18} />
              <span className="hidden lg:inline-block">Cek Transaksi</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center space-x-4 mb-2">
        <a href="#" className="text-white hover:text-primary">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-white hover:text-primary">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-white hover:text-primary">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default Sidenav;
