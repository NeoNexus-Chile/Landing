"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const team = [
  {
    name: "Felipe Ortiz",
    role: "CTO y Co-Founder",
    image: "/assets/man.webp",
  },
  {
    name: "Augusto Allende",
    role: "Co-Founder y Relaciones",
    image: "/assets/man.webp",
  },
  {
    name: "Hugo Aracena",
    role: "Especialista en Frontend",
    image: "/assets/man.webp",
  },
  {
    name: "Mauricio Díaz",
    role: "Director Creativo",
    image: "/assets/man.webp",
  },
  {
    name: "Carolina Vega",
    role: "UX/UI Designer",
    image: "/assets/man.webp",
  },
  {
    name: "Roberto Méndez",
    role: "Backend Developer",
    image: "/assets/man.webp",
  },
  {
    name: "Andrea Torres",
    role: "Project Manager",
    image: "/assets/man.webp",
  },
  {
    name: "Daniel Rojas",
    role: "Marketing Digital",
    image: "/assets/man.webp",
  },
];

export default function Team() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 4 },
    },
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="max-w-6xl w-full mx-auto relative">
      <h2 className="text-2xl lg:text-3xl mb-2 text-center md:text-start lg:mb-8 ml-8 md:ml-16">
        Equipo
      </h2>

      <div className="overflow-hidden pt-4" ref={emblaRef}>
        <div className="flex">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] px-3"
            >
              <div className="flex flex-col gap-2 group transition-all duration-300 hover:-translate-y-2">
                <div className="bg-neutral-400 [clip-path:polygon(15%_0,100%_0%,85%_100%,0%_100%)] h-[360px] w-full">
                  <img
                    alt={member.name}
                    src={member.image}
                    className="object-cover w-full h-full object-top grayscale-[0.9] group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="bg-[#0b2b3c] transition-all duration-300 group-hover:bg-[#004c6c] [clip-path:polygon(4%_0,90%_0%,87%_100%,1%_100%)] py-4 px-8 -translate-x-[13px] w-full text-white flex flex-col">
                  <h3 className="text-xl">{member.name}</h3>
                  <p className="text-sm font-bold">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute -left-2 top-1/2 -translate-y-1/2 bg-[#0b2b3c] text-white p-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-[#004c6c]"
      >
        <IoChevronBack />
      </button>
      <button
        onClick={scrollNext}
        className="absolute -right-2 top-1/2 -translate-y-1/2 bg-[#0b2b3c] text-white p-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-[#004c6c]"
      >
        <IoChevronForward />
      </button>
    </section>
  );
}
