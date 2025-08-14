// components/NavLinks.tsx
"use client";

import { links } from "@/utils/links";
import Link from "next/link";

export function NavLinks() {
  return (
    <div className="flex items-center space-x-6">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="hover:text-primary">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
