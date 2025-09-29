"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const images = [
  "/images/hero/meal-1.jpg",
  "/images/hero/meal-2.jpg",
  "/images/hero/meal-3.jpg",
];

const EmblaCarousel = () => {
  const options = {};

  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <div className="embla border-4 border-[#03081F] p-4 mx-[100px]" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, index) => (
          <div key={index} className="embla__slide px-4">
            <Image
              src={image}
              alt="meals"
              width={1350}
              height={1350}
              className="h-[500px] w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
