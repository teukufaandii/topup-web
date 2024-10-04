import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const mutation = useMutation(apiClient.signUp, {
    onSuccess: async () => {
      showToast({
        message: "Sign up Successful",
        type: "SUCCESS",
      });
      sessionStorage.setItem(
        "signupMessage",
        "Daftar akun berhasil, mohon login kembali dengan akun yang terdaftar."
      );
      await queryClient.invalidateQueries("validateToken");
      navigate("/login");
    },
    onError: (error) => {
      showToast({
        message: error.message,
        type: "ERROR",
      });
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  const password = watch("password");

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url(/public/hero.jpg)" }}
    >
      <div className="absolute inset-0 bg-dark bg-opacity-80"></div>
      <div className="relative z-1 bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-secondary mb-6">
          Create Your Account
        </h2>

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              className="block text-secondary font-semibold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("fullName", { required: "This field is required" })}
            />
            {errors.fullName && (
              <p className="text-primary">{errors.fullName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-secondary font-semibold mb-2"
              htmlFor="phoneNumber"
            >
              Nomor Whatsapp
            </label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("phoneNumber", { required: "This field is required" })}
            />
            {errors.phoneNumber && (
              <p className="text-primary">{errors.phoneNumber.message}</p>
            )}
          </div>

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

          <div className="mb-6 position-relative">
            <label
              className="block text-secondary font-semibold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register("confirmPassword", {
                  required: "This field is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                className={`absolute end-0 top-1/2 translate-y-[-50%] ${
                  showConfirmPassword ? "text-gray-600" : "text-gray-300"
                }`}
                style={{ cursor: "pointer", right: "10px" }}
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-primary">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-secondary mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
