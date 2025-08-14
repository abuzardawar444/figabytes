// components/CountrySelector.tsx
"use client";

import { ReactCountryFlag } from "react-country-flag";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const gulfCountries = [
  { name: "UAE Dirhams", code: "AE" },
  { name: "Saudi Riyals", code: "SA" },
  { name: "Kuwait Dinars", code: "KW" },
  { name: "Qatar Riyals", code: "QA" },
  { name: "Omani Riyals", code: "OM" },
  { name: "Bahraini Dinars", code: "BH" },
];

export function CountrySelector({
  selectedCountry,
  setSelectedCountry,
}: {
  selectedCountry: { name: string; code: string };
  setSelectedCountry: (country: { name: string; code: string }) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-2">
          <ReactCountryFlag
            countryCode={selectedCountry.code}
            svg
            style={{ width: "1.5em", height: "1.5em" }}
          />
          <span>{selectedCountry.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {gulfCountries.map((country) => (
          <DropdownMenuItem
            key={country.code}
            onClick={() => setSelectedCountry(country)}
            className="flex items-center space-x-2"
          >
            <ReactCountryFlag
              countryCode={country.code}
              svg
              style={{ width: "1.5em", height: "1.5em" }}
            />
            <span>{country.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
