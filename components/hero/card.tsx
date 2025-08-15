import ReactCountryFlag from "react-country-flag";
import { Card } from "../ui/card";
import { ChevronDown } from "lucide-react";
import { Country } from "@/types";
import Link from "next/link";

const CountryCard = ({ name, code }: Country) => {
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  return (
    <Link href={`/plan/listing/country/${slug}`}>
      <Card className="flex justify-between px-4 py-3 rounded-md hover:shadow-lg transition cursor-pointer group">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <ReactCountryFlag
              countryCode={code}
              svg
              style={{
                fontSize: "1.5rem",
                width: "1.5rem",
                height: "1.5rem",
              }}
              className="flex-shrink-0"
            />
            <span className="font-medium truncate">{name}</span>
          </div>
          <ChevronDown
            className="transition-colors flex-shrink-0 ml-2"
            size={18}
          />
        </div>
      </Card>
    </Link>
  );
};

export default CountryCard;
