import React, { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(undefined);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { isError: tokenError } = useQuery(
    "validateToken",
    apiClient.validateToken,
    {
      retry: false,
      onSuccess: async () => {
        try {
          const userRole = await apiClient.fetchCurrentUserAdmin();

          setIsAdmin(userRole?.role === "admin");
          setIsLoggedIn(true);
        } catch (error) {
          console.error("Error fetching user role:", error);
          setIsAdmin(false);
          setIsLoggedIn(false);
        }
      },
      onError: () => {
        setIsLoggedIn(false);
      },
    }
  );

  const showToast = (toastMessage) => {
    setToast(toastMessage);
  };

  const handleCloseToast = () => {
    setToast(undefined);
  };

  return (
    <AppContext.Provider
      value={{
        showToast,
        isLoggedIn,
        isAdmin,
        setIsLoggedIn,
        setIsAdmin,
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleCloseToast}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
