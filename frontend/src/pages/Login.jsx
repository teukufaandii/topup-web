import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { showToast } = useAppContext(); // Mengambil fungsi showToast dari context
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const mutation = useMutation(apiClient.SignIn, {
    onSuccess: async () => {
      showToast({
        message: "Sign in Successful",
        type: "SUCCESS",
      });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error) => {
      showToast({
        message: error.message,
        type: "ERROR",
      });
    },
  });

  // Fungsi untuk toggle visibilitas password
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Fungsi untuk menangani submit form
  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url(/public/hero.jpg)" }}
    >
      <div className="absolute inset-0 bg-dark bg-opacity-80"></div>{" "}
      {/* Dark overlay */}
      <div className="relative z-1 bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-secondary mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={onSubmit}>
          {" "}
          {/* Menggunakan onSubmit dari react-hook-form */}
          <div className="mb-4">
            <label
              className="block text-secondary font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("email", { required: "This field is required" })}
            />
            {errors.email && (
              <p className="text-primary">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6 position-relative">
            <label
              className="block text-secondary font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className={`absolute end-0 top-1/2 translate-y-[-50%] ${
                  showPassword ? "text-gray-600" : "text-gray-300"
                }`}
                style={{ cursor: "pointer", right: "10px" }}
                onClick={togglePasswordVisibility}
              />
            </div>
            {errors.password && (
              <p className="text-primary">{errors.password.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="text-primary focus:ring-primary h-4 w-4"
              />
              <label htmlFor="remember" className="ml-2 text-secondary">
                Remember me
              </label>
            </div>
            <a href="#" className="text-primary hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-secondary mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-primary hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
