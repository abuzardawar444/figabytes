"use client";
import { useScroll } from "@/hooks/use-scroll";
import Link from "next/link";
import { Logo } from "./logo";
import { links } from "@/utils/links";
import Auth from "./auth";
import { LanguageSelector } from "./language-selector";
import { CountrySelector } from "./country-selector";
import { useState } from "react";
import Container from "../global/container";
import MobileNavLinks from "./mobile-nav-links";
import { usePathname } from "next/navigation";

type NavbarProps = {
  scroll?: boolean;
  large?: boolean;
};

const Navbar = ({ scroll = false }: NavbarProps) => {
  const scrolled = useScroll(50);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Kuwait Dinars",
    code: "KW",
  });
  const pathname = usePathname();
  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scroll && scrolled
          ? "backdrop-blur-xl border-b-2 border-b-secondary bg-background/30"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="container flex items-center justify-between py-3 lg:py-4">
          <div className="flex items-center gap-4 md:gap-6">
            <Logo />
            <div className="hidden md:flex items-center">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    href={link.href}
                    key={link.label}
                    className={`px-2 font-bold hover:text-primary transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <Auth />
            <LanguageSelector
              selectedLang={selectedLang}
              setSelectedLang={setSelectedLang}
            />
            <CountrySelector
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
            />
          </div>
        </nav>
        <nav className="md:hidden w-full shadow-sm fixed bottom-0 left-0 z-50 border-t">
          <div className="flex justify-around items-center h-16">
            <MobileNavLinks pathname={pathname} />
          </div>
        </nav>
      </Container>
    </header>
  );
};
export default Navbar;
