import { HomeIcon, LogOut } from "lucide-react";
import { JSX } from "react";
import { FaMale } from "react-icons/fa";

export const links: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
];

export const mobileLinks: { label: string; href: string; icon: JSX.Element }[] = [
  { label: "Home", href: "/", icon: <HomeIcon /> },
  { label: "My Esims", href: "/my-sims", icon: <LogOut /> },
  { label: "Profile", href: "/sign-in", icon: <FaMale /> },
];
