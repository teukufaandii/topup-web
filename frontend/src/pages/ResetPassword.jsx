import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const ResetPassword = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const { token } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const mutation = useMutation(apiClient.ResetPassword, {
    onSuccess: () => {
      showToast({
        message: "Your password has been reset successfully.",
        type: "SUCCESS",
      });
      navigate("/login");
    },
    onError: (error) => {
      showToast({
        message: error.message,
        type: "ERROR",
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate({ token, newPassword: data.newPassword });
  });

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center relative"
         style={{ backgroundImage: "url(/public/hero.jpg)" }}>
      <div className="absolute inset-0 bg-dark bg-opacity-80"></div>
      <div className="relative z-10 bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-secondary mb-6">
          Reset Your Password
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              className="block text-secondary font-semibold mb-2"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter your new password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("newPassword", { required: "This field is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
            />
            {errors.newPassword && (
              <p className="text-primary">{errors.newPassword.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Reset Password
          </button>
        </form>
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

export default ResetPassword;
