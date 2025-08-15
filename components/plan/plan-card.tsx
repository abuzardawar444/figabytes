"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, CalendarDays, Globe, Tag } from "lucide-react";

interface PlanCardProps {
  plan: {
    title: string;
    coverage: string;
    data: string;
    validity: string;
    price: string;
  };
  variant?: "primary" | "secondary";
}

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <Card
      className={`bg-primary text-secondary rounded-xl shadow-lg flex flex-col gap-6 h-full`}
    >
      <CardHeader>
        <CardTitle className="text-xl">{plan.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <PlanDetail
          icon={<Globe size={18} />}
          label="Coverage"
          value={plan.coverage}
        />
        <PlanDetail
          icon={<ArrowUpDown size={18} />}
          label="Data"
          value={plan.data}
        />
        <PlanDetail
          icon={<CalendarDays size={18} />}
          label="Validity"
          value={plan.validity}
        />
        <PlanDetail
          icon={<Tag size={18} />}
          label="Price"
          value={plan.price}
          isBold
        />
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full rounded-full bg-secondary text-primary hover:bg-secondary/90 transition-colors`}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}

const PlanDetail = ({
  icon,
  label,
  value,
  isBold = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isBold?: boolean;
}) => (
  <div
    className={`flex justify-between items-center ${isBold ? "font-bold" : ""}`}
  >
    <div className="flex items-center gap-2">
      {icon}
      <span>{label}</span>
    </div>
    <span>{value}</span>
  </div>
);
