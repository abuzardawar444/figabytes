"use client";

import { Card } from "@/components/ui/card";
import { ChevronDown, RectangleCircleIcon } from "lucide-react";

type Region = {
  name: string;
  icon: React.ReactElement; // local path to your region SVG/PNG
};

const regions: Region[] = [
  { name: "Africa", icon: <RectangleCircleIcon /> },
  { name: "Asia", icon: <RectangleCircleIcon /> },
  { name: "Caribbean", icon: <RectangleCircleIcon /> },
  { name: "Europe", icon: <RectangleCircleIcon /> },
  { name: "Middle East", icon: <RectangleCircleIcon /> },
  { name: "New Zealand - Australia", icon: <RectangleCircleIcon /> },
  { name: "Scandinavia", icon: <RectangleCircleIcon /> },
  { name: "South America", icon: <RectangleCircleIcon /> },
];

const RegionCard = ({ name, icon }: Region) => (
  <Card className="flex justify-between px-4 py-3 rounded-xl hover:shadow-md transition">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        {icon}
        <span>{name}</span>
      </div>
      <ChevronDown className="text-gray-500" size={18} />
    </div>
  </Card>
);

export default function RegionsList() {
  return (
    <section className="w-full px-6 py-10 bg-gray-50">
      <h2 className="text-lg font-semibold mb-4">Regions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {regions.map((r) => (
          <RegionCard key={r.name} {...r} />
        ))}
      </div>
    </section>
  );
}
