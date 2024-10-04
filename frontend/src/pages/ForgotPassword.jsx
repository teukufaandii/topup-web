import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const ForgotPassword = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const mutation = useMutation(apiClient.ForgotPassword, {
    onSuccess: () => {
      showToast({
        message: "Password reset link sent to your email.",
        type: "SUCCESS",
      });
      setEmailSent(true);
    },
    onError: (error) => {
      showToast({
        message: error.message,
        type: "ERROR",
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center relative"
         style={{ backgroundImage: "url(/public/hero.jpg)" }}>
      <div className="absolute inset-0 bg-dark bg-opacity-80"></div>
      <div className="relative z-10 bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-secondary mb-6">
          Forgot Your Password?
        </h2>
        {emailSent ? (
          <p className="text-center text-secondary mb-4">
            Check your email for the password reset link.
          </p>
        ) : (
          <form onSubmit={onSubmit}>
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
            <button
              type="submit"
              className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Send Password Reset Link
            </button>
          </form>
        )}
        <p className="text-center text-secondary mt-6">
          Remembered your password?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
