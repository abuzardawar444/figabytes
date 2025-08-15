"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PlanCard } from "./plan-card";
interface Plan {
  title: string;
  coverage: string;
  data: string;
  validity: string;
  price: string;
}

interface PlanTabsProps {
  unlimitedPlans: Plan[];
  regularPlans: Plan[];
}

export function PlanTabs({ unlimitedPlans, regularPlans }: PlanTabsProps) {
  return (
    <Tabs defaultValue="unlimited" className="w-full">
      <TabsList className="grid w-64 mx-auto grid-cols-2 mb-8">
        <TabsTrigger value="unlimited">Unlimited</TabsTrigger>
        <TabsTrigger value="regular">Regular</TabsTrigger>
      </TabsList>

      <TabsContent value="unlimited" className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {unlimitedPlans.map((plan, i) => (
            <PlanCard key={i} plan={plan} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="regular">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPlans.map((plan, i) => (
            <PlanCard key={i} plan={plan} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
