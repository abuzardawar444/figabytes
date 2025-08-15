"use client";

import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import CountriesList from "@/components/hero/contries-list";
import RegionsList from "@/components/hero/regions-list";

export default function HeroSearch() {
  return (
    <section className="w-full flex flex-col items-center text-center mt-12 px-4">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold">
        Save up to 10x with eSIMS from USim.
      </h1>
      <p className="text-primary/80">
        Get data packs at affordable rates in 200+ countries & regions
      </p>

      {/* Search bar */}
      <div className="relative w-full max-w-xl mt-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2" />
        <Input
          type="search"
          placeholder="Where are you heading?"
          className="pl-10 h-12 text-base"
        />
      </div>

      {/* Tabs with content */}
      <Tabs defaultValue="local" className="mt-6 w-full">
        <TabsList className="grid w-64 mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="local">Local</TabsTrigger>
          <TabsTrigger value="regional">Regional</TabsTrigger>
        </TabsList>

        <TabsContent value="local">
          <CountriesList />
        </TabsContent>

        <TabsContent value="regional">
          <RegionsList />
        </TabsContent>
      </Tabs>
    </section>
  );
}
