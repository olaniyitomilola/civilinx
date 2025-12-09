// ServicesCarousel.jsx
import React from "react";
import { bosetServices } from "./servicesData";
import ServiceSlide from "./ServicesSlide";
import CarouselControls from "./CarouselControls";
import useCarousel from "../hooks/useCarousel";

export default function ServicesCarousel() {
  const total = bosetServices.length;

  const { activeIndex, goTo, goNext, goPrev } = useCarousel(total, {
    autoplay: true,        // set to false if you do not want autoplay
    delay: 7000,           // 9 seconds per slide
    enableKeyboard: true   // ArrowLeft / ArrowRight
  });

  const getPositionState = (index) => {
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;

    if (index === activeIndex) return "active";
    if (index === prev) return "prev";
    if (index === next) return "next";
    return "hidden";
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      <div className="rounded-[12px] bg-[#05060a] py-10 px-2 md:px-4">
        <div className="relative h-[260px] md:h-[320px] lg:h-[360px] max-w-5xl mx-auto">
          {bosetServices.map((service, index) => (
            <ServiceSlide
              key={service.id}
              service={service}
              state={getPositionState(index)}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <CarouselControls
          activeIndex={activeIndex}
          total={total}
          onPrev={goPrev}
          onNext={goNext}
        />
      </div>
    </section>
  );
}
