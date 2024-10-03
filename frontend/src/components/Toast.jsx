import React, { useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const bgClass =
    type === "SUCCESS" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className="fixed top-5 right-5 z-50 p-3"
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: 9999 }}
    >
      <div
        className={`flex items-center justify-between p-4 text-white rounded shadow-md ${bgClass} transition-opacity duration-500 ease-in-out`}
        role="alert"
      >
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 bg-transparent text-white focus:outline-none hover:text-gray-200"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;
