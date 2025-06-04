import Marquee from "react-fast-marquee";

export default function TechMarquee() {
  return (
    <Marquee autoFill pauseOnHover>
      <div className="bg-[#004C6C] p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10 flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img src="/assets/react.svg" alt="React" />
      </div>
      <div className="bg-[#004C6C] p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10 flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img src="/assets/vue.svg" alt="Vue" />
      </div>
      <div className="bg-[#004C6C] p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10 flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img src="/assets/next.svg" alt="Next" />
      </div>
      <div className="bg-[#004C6C] p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10 flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img src="/assets/laravel.svg" alt="Laravel" />
      </div>
      <div className="bg-[#004C6C] p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10 flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img src="/assets/express.svg" alt="Express" />
      </div>
      <div className="bg-[#004C6C] p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10 flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img src="/assets/azure.svg" alt="Azure" />
      </div>
      <div className="bg-[#004C6C] p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10 flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img src="/assets/docker.svg" alt="Docker" />
      </div>
      <div className="bg-[#004C6C] p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10 flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img className="max-w-[120px]" src="/assets/dotnet.svg" alt="Dotnet" />
      </div>
      <div className="bg-[#004C6C] p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs hover:bg-neutral-50/10 flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img src="/assets/gcp.svg" alt="GCP" />
      </div>
    </Marquee>
  );
}
