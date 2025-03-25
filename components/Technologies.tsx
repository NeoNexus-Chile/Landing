import Carousel from "./Carousel";
import TechMarquee from "./TechMarquee";

export default function Technologies() {
  return (
    <>
      <section className="relative text-white pb-12 lg:pb-0 px-4 pt-16 lg:pt-36 mt-16 lg:mt-0">
        <h2 className="text-lg lg:text-3xl lg:text-center mb-8">
          Nuestro compromiso es contigo:
          <span className="font-bold">
            innovación, eficiencia y resultados medibles.
          </span>
        </h2>
        <TechMarquee />
        <picture>
          <source media="(min-width: 1024px)" srcSet="/assets/tech-bg.webp" />
          <source
            media="(max-width: 1023px)"
            srcSet="/assets/tech-bg-mobile.webp"
          />
          <img
            src="/assets/tech-bg.webp"
            alt="Technologies"
            className="absolute inset-0 h-full w-full -z-10"
          />
        </picture>
        <div className="hidden lg:block translate-y-[33%]">
          <h3 className="text-3xl text-center mb-8">
            Confiaron en <span className="font-bold">nosotros</span>
          </h3>
          <div className="grid grid-cols-4 items-center justify-center gap-8 px-32">
            <div className="relative flex justify-center items-center p-12 bg-white h-[180px] transition-all duration-300 before:w-full before:h-full before:bg-[#0A2C3E] before:-z-20 before:transition-all before:duration-300 before:absolute before:top-6 before:-right-6">
              <img
                className="object-contain w-full h-full"
                src="/assets/capel.png"
                alt="Logo Capel"
              />
            </div>
            <div className="relative flex justify-center items-center p-12 bg-white h-[180px] transition-all duration-300 before:w-full before:h-full before:bg-[#0A2C3E] before:-z-20 before:transition-all before:duration-300 before:absolute before:top-6 before:-right-3">
              <img
                className="object-contain w-full h-full"
                src="/assets/cmp.png"
                alt="Logo CMP"
              />
            </div>
            <div className="relative flex justify-center items-center p-12 bg-white h-[180px] transition-all duration-300 before:w-full before:h-full before:bg-[#0A2C3E] before:-z-20 before:transition-all before:duration-300 before:absolute before:top-6 before:-left-3">
              <img
                className="object-contain w-full h-full"
                src="/assets/municipalidad-riohurtado.png"
                alt="Logo Riohurtado"
              />
            </div>
            <div className="relative flex justify-center items-center p-12 bg-white h-[180px] transition-all duration-300 before:w-full before:h-full before:bg-[#0A2C3E] before:-z-20 before:transition-all before:duration-300 before:absolute before:top-6 before:-left-6">
              <img
                className="object-contain w-full h-full"
                src="/assets/enlace.png"
                alt="Logo Enlace inmobiliario"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden px-4 relative pb-6">
        <div className="absolute lg:hidden w-full bg-white -bottom-8 z-20 left-0 h-8 rounded-b-[100%]"></div>
        <h3 className="text-xl lg:text-3xl text-center mb-4">
          Confiaron en <span className="font-bold">nosotros</span>
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative flex justify-center items-center py-4 px-8 bg-white transition-all duration-300 border border-[#0b2b3f]">
            <img
              className="object-contain aspect-video"
              src="/assets/capel.png"
              alt="Logo Capel"
            />
          </div>
          <div className="relative flex justify-center items-center py-4 px-8 bg-white transition-all duration-300 border border-[#0b2b3f]">
            <img
              className="object-contain aspect-video"
              src="/assets/cmp.png"
              alt="Logo CMP"
            />
          </div>
          <div className="relative flex justify-center items-center py-4 px-8 bg-white transition-all duration-300 border border-[#0b2b3f]">
            <img
              className="object-contain aspect-video"
              src="/assets/municipalidad-riohurtado.png"
              alt="Logo Riohurtado"
            />
          </div>
          <div className="relative flex justify-center items-center py-4 px-8 bg-white transition-all duration-300 border border-[#0b2b3f]">
            <img
              className="object-contain aspect-video"
              src="/assets/enlace.png"
              alt="Logo Enlace inmobiliario"
            />
          </div>
        </div>
      </section>
    </>
  );
}
