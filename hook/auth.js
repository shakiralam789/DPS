// hooks/useAuth.js
"use client";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "nextjs-toploader/app";
import { useDispatch } from "react-redux";
import { setUser } from "@/src/store/slices/authSlice";
import useForm from "./_customUseForm";

export default function useAuthFunc() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const { get } = useForm();

  const csrf = get("/sanctum/csrf-cookie");

  const login = async (data, callbackUrl = "/dashboard") => {
    await csrf();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        ...data,
      });

      if (result?.error) {
        setError(result.error);
        setIsLoading(false);
        return { success: false, error: result.error };
      }

      if (result.user?.token) {
        localStorage.setItem("token", result.user.token);
        dispatch(setUser(result.user));
      }

      router.push(callbackUrl);
      return { success: true };
    } catch (error) {
      const errorMessage = "An unexpected error occurred. Please try again.";
      setError(errorMessage);
      setIsLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  const logout = async (callbackUrl = "/login") => {
    await csrf();
    setIsLoading(true);
    setError("");

    try {
      localStorage.removeItem("token");
      dispatch(setUser(null));
      await signOut({ redirect: false });
      router.push(callbackUrl);
      return { success: true };
    } catch (error) {
      const errorMessage = "Logout failed. Please try again.";
      setError(errorMessage);
      setIsLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  return {
    login,
    register,
    logout,
    isLoading,
    error,
    setError,
  };
}
