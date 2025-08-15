import { PlanTabs } from "@/components/plan/plan-tabs";
import { notFound } from "next/navigation";
import countries from "world-countries";

interface Plan {
  title: string;
  coverage: string;
  data: string;
  validity: string;
  price: string;
}

export default async function CountryPlansTabs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Find the country by slug
  const { slug } = await params;
  const country = countries.find(
    (c) => c.name.common.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!country) {
    return notFound();
  }

  const countryName = country.name.common;

  // Dynamic plans using the country name
  const unlimitedPlans: Plan[] = [
    {
      title: `${countryName} Unlimited`,
      coverage: countryName,
      data: "Unlimited",
      validity: "1 Day",
      price: "QAR 27.00",
    },
    {
      title: `${countryName} Unlimited`,
      coverage: countryName,
      data: "Unlimited",
      validity: "3 Days",
      price: "QAR 54.00",
    },
    {
      title: `${countryName} Unlimited`,
      coverage: countryName,
      data: "Unlimited",
      validity: "7 Days",
      price: "QAR 83.00",
    },
  ];

  const regularPlans: Plan[] = [
    {
      title: `${countryName} Regular`,
      coverage: countryName,
      data: "5 GB",
      validity: "7 Days",
      price: "QAR 45.00",
    },
    {
      title: `${countryName} Regular`,
      coverage: countryName,
      data: "10 GB",
      validity: "15 Days",
      price: "QAR 85.00",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{countryName}</h1>

      <PlanTabs unlimitedPlans={unlimitedPlans} regularPlans={regularPlans} />

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>All prices include VAT. Plans auto-renew unless cancelled.</p>
      </div>
    </div>
  );
}
