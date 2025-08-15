"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function CarouselSpacing() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const images = [
    "https://media-usim-live.s3.eu-west-1.amazonaws.com/Img_1752403973831_md1k2w1ztwjzr8negcn.png",
    "https://media-usim-live.s3.eu-west-1.amazonaws.com/Img_1752480476740_md2tmm2shgvao2wk6ok.png",
  ];

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] my-20">
      <Carousel
        className="w-full h-full"
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[plugin.current]}
      >
        <CarouselContent className="h-full">
          {images.map((src, index) => (
            <CarouselItem key={index} className="basis-full h-full">
              <Card className="overflow-hidden rounded-none h-full">
                <CardContent className="relative p-0 h-full">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="object-cover"
                    priority={index === 0}
                    width={500}
                    height={500}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
