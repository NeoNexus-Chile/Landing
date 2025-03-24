"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  const swiperRef = useRef<SwiperType | undefined>(undefined);

  return (
    <div className="px-2 lg:px-16 relative group">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-white transition-all cursor-pointer hover:scale-105 duration-300 active:scale-90"
      >
        <IoChevronBack className="text-7xl" />
      </button>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={32}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full"
      >
        {[
          { src: "/assets/react.svg", alt: "React logo" },
          { src: "/assets/express.svg", alt: "Express logo" },
          { src: "/assets/vue.svg", alt: "Vue logo" },
          { src: "/assets/netcore.svg", alt: "NetCore logo" },
          { src: "/assets/next.svg", alt: "Next logo" },
          { src: "/assets/laravel.svg", alt: "Laravel logo" },
          { src: "/assets/tailwind.svg", alt: "Tailwind logo" },
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#004C6C] w-64 h-32 flex justify-center items-center p-8 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10">
              <img className="object-contain" src={image.src} alt={image.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-white transition-all cursor-pointer hover:scale-105 duration-300 active:scale-90"
      >
        <IoChevronForward className="text-7xl" />
      </button>
    </div>
  );
}
