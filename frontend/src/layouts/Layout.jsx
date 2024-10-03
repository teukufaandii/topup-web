import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidenav from "../components/Sidenav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full z-10">
        <Header />
      </div>
      <div className="flex flex-grow pt-16">
        <aside className="fixed top-16 left-0 w-64 h-full bg-gray-200 z-1">
          <Sidenav />
        </aside>
        <div className="ml-64 w-full flex flex-col justify-between">
          <div className="flex-grow">
            <main>{children}</main>
          </div>
          <Footer className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
