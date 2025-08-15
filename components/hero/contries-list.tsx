"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import countries from "world-countries";
import Container from "../global/container";
import CountryCard from "./card";
import { Country } from "@/types";

// Define our simplified country type

// Format countries data from world-countries
const formattedCountries: Country[] = countries.map((country) => ({
  name: country.name.common,
  code: country.cca2,
}));

// Define popular countries by their codes
const popularCountryCodes = [
  "TR",
  "SA",
  "AE",
  "GB",
  "US",
  "IT",
  "FR",
  "ES",
  "RU",
  "BH",
  "QA",
];

// Get popular countries
const popularCountries = formattedCountries.filter((country) =>
  popularCountryCodes.includes(country.code)
);

// Get all other countries (excluding popular ones)
const otherCountries = formattedCountries.filter(
  (country) => !popularCountryCodes.includes(country.code)
);

// Get initial countries (popular + first few others)
const initialCountries = [
  ...popularCountries,
  ...otherCountries.slice(0, 40 - popularCountries.length),
];

export default function CountriesList() {
  const [showAll, setShowAll] = useState(false);
  const [displayedCountries, setDisplayedCountries] =
    useState(initialCountries);

  const toggleShowAll = () => {
    if (showAll) {
      setDisplayedCountries(initialCountries);
    } else {
      setDisplayedCountries([...popularCountries, ...otherCountries]);
    }
    setShowAll(!showAll);
  };

  return (
    <Container className="mb-10">
      <>
        {/* Popular countries */}
        <h2 className="text-lg font-semibold mb-4 text-left">
          Popular countries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {popularCountries.map((c) => (
            <CountryCard key={c.code} {...c} />
          ))}
        </div>

        {/* List of countries */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">All countries</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedCountries
            .filter((country) => !popularCountryCodes.includes(country.code))
            .map((c) => (
              <CountryCard key={c.code} {...c} />
            ))}
        </div>

        {/* Show All button at bottom */}
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={toggleShowAll}
            className="rounded-full px-20 bg-primary text-secondaryd"
          >
            {showAll ? "Show Less Countries" : `Show All 200+ Countries`}
          </Button>
        </div>
      </>
    </Container>
  );
}
