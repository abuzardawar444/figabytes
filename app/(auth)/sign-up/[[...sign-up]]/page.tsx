/**
 * Renders the registration page with a centered Clerk SignUp component.
 */
"use client";
import { CustomSignUpModal } from "@/components/auth/custom-sign-up-modal";
import { useRedirectIfAuthenticated } from "@/hooks/use-redirect-if-auth";

const RegisterPage = () => {
  useRedirectIfAuthenticated();
  return (
    <main className="flex mt-12 w-full items-center justify-center">
      <CustomSignUpModal />
    </main>
  );
};

export default RegisterPage;
