import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.product.createMany({
    data: [
      { name: "E-Book", price: 1000 },
      { name: "Online Course", price: 3000 },
      { name: "Consultation Call", price: 5000 },
    ],
  });
  console.log("Seeded products");
}

main().catch(console.error);
