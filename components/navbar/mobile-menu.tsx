import { Menu } from "lucide-react";
import { LanguageSelector } from "./language-selector";
import { CountrySelector } from "./country-selector";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

function MobileMenu({
  selectedLang,
  setSelectedLang,
  selectedCountry,
  setSelectedCountry,
}: {
  selectedLang: string;
  setSelectedLang: (lang: string) => void;
  selectedCountry: { name: string; code: string };
  setSelectedCountry: (country: { name: string; code: string }) => void;
}) {
  return (
    <Sheet>
      <SheetTrigger className="flex flex-col items-center text-xs p-2">
        <Menu className="h-5 w-5" />
        <span>Menu</span>
      </SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-lg">
        <div className="flex flex-col space-y-4 pt-4">
          <LanguageSelector
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
          />
          <CountrySelector
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
export default MobileMenu;
