import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const isResetPasswordRoute = location.pathname.startsWith("/reset-password");

  const noFooterRoutes = ["/signup", "/login", "/forgot-password"];

  const showFooter = !noFooterRoutes.includes(location.pathname) && !isResetPasswordRoute;

  const showSidenav = !isResetPasswordRoute && !noFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 font-poppins">
      <div className="fixed top-0 left-0 w-full z-10">
        <Header />
      </div>

      <div className="flex flex-grow pt-16">
        {showSidenav && (
          <aside className="hidden sm:block fixed top-16 left-0 sm:w-20 lg:w-64 h-full bg-gray-200 z-1">
            <Sidenav />
          </aside>
        )}

        <div
          className={`w-full ${showSidenav ? "sm:ml-20 lg:ml-64" : ""} flex flex-col justify-between`}
        >
          <div className="flex-grow">
            <main>{children}</main>
          </div>
          {showFooter && (
            <Footer className="mt-4" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
