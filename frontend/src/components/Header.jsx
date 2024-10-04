import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../contexts/AppContext";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAppContext();
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const noSearchBarRoutes = ["/signup", "/login", "/forgot-password"];
  
  const isResetPasswordRoute = location.pathname.startsWith("/reset-password");
  
  const showSearchBar = !noSearchBarRoutes.includes(location.pathname) && !isResetPasswordRoute;

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: () => {
      setIsLoggedIn(false);
      showToast({
        message: "Logout Successful",
        type: "SUCCESS",
      });
      navigate("/");
    },
    onError: () => {
      showToast({
        message: "Logout Failed",
        type: "ERROR",
      });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <div className="navbar backdrop-blur-sm bg-gray-800/50 shadow-md">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost text-xl text-primary hover:text-black"
        >
          TopupGaje
        </Link>
      </div>
      <div className="flex-none gap-2">
        {showSearchBar && (
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto focus:border-primary focus:ring focus:ring-primary"
            />
          </div>
        )}
        <div className="flex flex-row gap-2">
          {isLoggedIn ? (
            <div
              className="bg-gradient-to-br from-primary to-red-800 text-white border-none btn hover:bg-gradient-to-br hover:from-red-800 hover:to-primary"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </div>
          ) : (
            <>
              <Link to="/login">
                <div className="bg-gradient-to-br from-primary to-red-800 text-white border-none btn hover:bg-gradient-to-br hover:from-red-800 hover:to-primary">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </div>
              </Link>
              <Link to="/signup">
                <div className="bg-gradient-to-br from-primary to-red-800 text-white border-none btn hover:bg-gradient-to-br hover:from-red-800 hover:to-primary">
                  <FontAwesomeIcon icon={faUserPlus} /> Register
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
