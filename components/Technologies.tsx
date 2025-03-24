import Carousel from "./Carousel";

export default function Technologies() {
  return (
    <>
      <section className="relative text-white pb-12 lg:pb-0 px-4 pt-36">
        <h2 className="text-xl lg:text-3xl lg:text-center mb-8">
          Nuestro compromiso es contigo:{" "}
          <span className="font-bold">
            innovación, eficiencia y resultados medibles.
          </span>
        </h2>
        <Carousel />
        <img
          src="/assets/tech-bg.webp"
          alt="Technologies"
          className="absolute inset-0 h-full w-full -z-10"
        />
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
                src="/assets/riohurtado.png"
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

      <section className="lg:hidden px-4">
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
              src="/assets/riohurtado.png"
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
