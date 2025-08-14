// hooks/useRedirectIfAuthenticated.ts
"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRedirectIfAuthenticated = (redirectUrl = "/") => {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && userId) {
      router.push(redirectUrl);
    }
  }, [isLoaded, userId, redirectUrl, router]);

  return { isLoaded, userId };
};
