import { mobileLinks } from "@/utils/links";
import Link from "next/link";

function MobileNavLinks({ pathname }: { pathname: string }) {
  return (
    <>
      {mobileLinks.map((link) => {
        const isActive = link.href === pathname;

        return (
          <Link
            href={link.href}
            key={link.label}
            className={`px-2 font-bold hover:text-primary transition-colors flex flex-col items-center ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        );
      })}
    </>
  );
}
export default MobileNavLinks;
