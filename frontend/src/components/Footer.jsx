import React from "react";

const Footer = () => {
  return (
    <footer className="bg-footerColor  text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Topup Gaje</h3>
            <p className="text-gray-300">
              Topup tercepat dan terpercaya untuk segala jenis kebutuhan digital
              Anda.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Contact Us</h3>
            <p className="text-gray-300">Email: support@topupgaje.com</p>
            <p className="text-gray-300">Phone: +62 812-3456-7890</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            &copy; 2024 Topup Gaje. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
