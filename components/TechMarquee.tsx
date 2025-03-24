import Marquee from "react-fast-marquee";

export default function TechMarquee() {
  return (
    <Marquee autoFill pauseOnHover>
      <img
        className="bg-[#004C6C] mx-4 w-48 h-24 lg:w-64 lg:h-32 flex justify-center items-center p-4 lg:p-8 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10"
        src="/assets/react.svg"
        alt="React"
      />
      <img
        className="bg-[#004C6C] mx-4 w-48 h-24 lg:w-64 lg:h-32 flex justify-center items-center p-4 lg:p-8 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10"
        src="/assets/vue.svg"
        alt="Vue"
      />
      <img
        className="bg-[#004C6C] mx-4 w-48 h-24 lg:w-64 lg:h-32 flex justify-center items-center p-4 lg:p-8 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10"
        src="/assets/next.svg"
        alt="Next"
      />
      <img
        className="bg-[#004C6C] mx-4 w-48 h-24 lg:w-64 lg:h-32 flex justify-center items-center p-4 lg:p-8 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10"
        src="/assets/laravel.svg"
        alt="Laravel"
      />
      <img
        className="bg-[#004C6C] mx-4 w-48 h-24 lg:w-64 lg:h-32 flex justify-center items-center p-4 lg:p-8 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10"
        src="/assets/express.svg"
        alt="Express"
      />
    </Marquee>
  );
}
