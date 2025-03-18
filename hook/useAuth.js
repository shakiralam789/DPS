"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";
  const user = session?.user;

  return {
    isAuthenticated,
    isLoading,
    user,
    signIn,
    signOut,
  };
};
