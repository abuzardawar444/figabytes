"use client"; // <- IMPORTANT

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Loader } from "lucide-react";

const Auth = () => {
  const { isLoaded } = useUser();

  // Avoid rendering until Clerk has loaded on the client
  if (!isLoaded) {
    return <Loader className="size-6 animate-spin" />; // or a loading skeleton
  }

  return (
    <div className="md:flex hidden items-center gap-3">
      <SignedIn>
        <Link href="/dashboard" className="flex items-center gap-2">
          {/* <Image
            src={user?.imageUrl || ""}
            alt={user?.fullName || "profile"}
            width={40}
            height={40}
          /> */}
        </Link>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in" className="text-xl">
          Log In / Register
        </Link>
      </SignedOut>
    </div>
  );
};

export default Auth;
