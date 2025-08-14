/**
 * LoginPage component renders the Clerk SignIn form centered on the page.
 * Redirects to "/blog" after successful sign-in.
 */
"use client";
import { CustomSignInModal } from "@/components/auth/custom-sign-in-modal";
import { useRedirectIfAuthenticated } from "@/hooks/use-redirect-if-auth";

const LoginPage = () => {
  useRedirectIfAuthenticated();
  return (
    <main className="flex mt-12 w-full items-center justify-center">
      <CustomSignInModal />
    </main>
  );
};

export default LoginPage;
