import Marquee from "react-fast-marquee";

export default function CompanyMarquee() {
  return (
    <Marquee autoFill pauseOnHover>
      <div className="bg-white p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img
          className="object-contain"
          src="/assets/capel.png"
          alt="capel logo"
        />
      </div>
      <div className="bg-white p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img className="object-contain" src="/assets/cmp.png" alt="cmp logo" />
      </div>
      <div className="bg-white p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img
          className="object-contain"
          src="/assets/municipalidad-riohurtado.png"
          alt="riohurtado logo"
        />
      </div>
      <div className="bg-white p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img
          className="object-contain"
          src="/assets/enlace.png"
          alt="enlace logo"
        />
      </div>
      {/* <div className="bg-white p-4 lg:p-12 transition-all duration-300 hover:backdrop-blur-xs flex justify-center items-center clip-path-marquee mx-1 w-48 h-24 lg:w-64 lg:h-32">
        <img className="object-contain" src="/assets/express.svg" alt="Express" />
      </div> */}
    </Marquee>
  );
}
