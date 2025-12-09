// ServiceSlide.jsx
import React from "react";
import { Map, LayoutDashboard, Film } from "lucide-react";

const iconMap = {
  capture: Map,
  intelligence: LayoutDashboard,
  media: Film
};

export default function ServiceSlide({ service, state, onClick }) {
  const Icon = iconMap[service.iconKey] || Map;

  let stateClasses = "";

  if (state === "active") {
    stateClasses = "-translate-x-1/2 scale-100 opacity-100 z-30";
  } else if (state === "prev") {
    stateClasses = "-translate-x-[135%] scale-90 opacity-35 z-20";
  } else if (state === "next") {
    stateClasses = "translate-x-[35%] scale-90 opacity-35 z-20";
  } else {
    stateClasses =
      "-translate-x-1/2 scale-75 opacity-0 pointer-events-none z-10";
  }

  return (
    <article
      className={`absolute top-0 bottom-0 left-1/2 transform w-[92%] md:w-[80%] lg:w-[72%] rounded-[28px] overflow-hidden shadow-2xl transition-all duration-500 ease-out cursor-pointer ${stateClasses}`}
      onClick={onClick}
    >
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${service.image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-black/10" />

      <div className="relative h-full flex items-center justify-center text-center">
        <div className="px-6 md:px-10 py-6 md:py-8 max-w-2xl text-white space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-1 text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em]">
            <span>{service.title}</span>
          </div>


        
            <p className="mt-1 text-[11px] md:text-xs lg:text-sm text-neutral-200">
              {service.subtitle}
            </p>
       

          <p className="text-[11px] md:text-xs lg:text-sm text-neutral-100/90">
            {service.description}
          </p>

          {state === "active" && (
            <button className="mt-2 inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white">
              Explore {service.title}
              <Icon className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
