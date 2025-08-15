"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, CalendarDays, Globe, Tag } from "lucide-react";

interface Plan {
  title: string;
  coverage: string;
  data: string;
  validity: string;
  price: string;
}

export default function CountryPlansTabs({ country }: { country: string }) {
  // Dynamic plans using the `country` prop
  const unlimitedPlans: Plan[] = [
    {
      title: `${country} Unlimited`,
      coverage: country,
      data: "Unlimited",
      validity: "1 Day",
      price: "QAR 27.00",
    },
    {
      title: `${country} Unlimited`,
      coverage: country,
      data: "Unlimited",
      validity: "3 Days",
      price: "QAR 54.00",
    },
    {
      title: `${country} Unlimited`,
      coverage: country,
      data: "Unlimited",
      validity: "7 Days",
      price: "QAR 83.00",
    },
  ];

  const regularPlans: Plan[] = [
    {
      title: `${country} Regular`,
      coverage: country,
      data: "5 GB",
      validity: "7 Days",
      price: "QAR 45.00",
    },
    {
      title: `${country} Regular`,
      coverage: country,
      data: "10 GB",
      validity: "15 Days",
      price: "QAR 85.00",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Plans for {country}
      </h1>

      <Tabs defaultValue="unlimited" className="w-full">
        <TabsList className="grid w-64 mx-auto grid-cols-2 mb-6">
          <TabsTrigger value="unlimited">Unlimited Plan</TabsTrigger>
          <TabsTrigger value="regular">Regular Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="unlimited">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {unlimitedPlans.map((plan, i) => (
              <Card
                key={i}
                className="bg-primary text-secondary rounded-xl shadow-lg flex flex-col gap-10"
              >
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 flex flex-col gap-4">
                  <div className="flex justify-between">
                    <div className="flex">
                      <Globe />
                      <span>Coverage</span>
                    </div>
                    <span>{plan.coverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <ArrowUpDown />
                      <span>Data</span>
                    </div>
                    <span>{plan.data}</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <CalendarDays />
                      <span>Validity</span>
                    </div>
                    <span>{plan.validity}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <div className="flex">
                      <Tag />
                      <span>Price</span>
                    </div>
                    <span>{plan.price}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full bg-secondary text-primary">
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="regular">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regularPlans.map((plan, i) => (
              <Card
                key={i}
                className=" rounded-xl shadow-lg bg-primary text-secondary flex flex-col gap-10"
              >
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 flex flex-col gap-4">
                  <div className="flex justify-between">
                    <span>🌐 Coverage</span>
                    <span>{plan.coverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>⬆️ Data</span>
                    <span>{plan.data}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🗓 Validity</span>
                    <span>{plan.validity}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>💰 Price</span>
                    <span>{plan.price}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white text-black hover:bg-gray-200">
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
