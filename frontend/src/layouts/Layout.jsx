import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <main className="flex-grow container mx-auto mb-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
