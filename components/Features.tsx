export default function Features() {
  return (
    <section id="servicios" className="grid grid-cols-2 gap-16 h-[400px] mt-28">
      <div className="relative flex justify-center items-center overflow-hidden bg-neutral-950 clip-path-features">
        <h2 className="z-10 text-6xl font-bold text-white">
          Nos <br /> <span className="font-normal">especializamos en:</span>
        </h2>
        <img
          className="absolute inset-0 z-0 opacity-60 pointer-events-none"
          src="/assets/features-bg.webp"
          alt="Fondo de colores"
        />
      </div>
      <div className="flex flex-col justify-center gap-8 text-lg">
        <div className="flex items-center gap-8">
          <div className="w-24 h-12 flex justify-center items-center bg-[#D25B2F] -skew-x-12">
            <img
              className="size-8 object-contain"
              src="/assets/icons/code.png"
              alt="icono de código"
            />
          </div>
          <p>Desarrollo de software y plataformas digitales.</p>
        </div>
        <div className="flex items-center gap-8 -ml-4">
          <div className="w-24 h-12 flex justify-center items-center bg-[#87BCE9] -skew-x-12">
            {" "}
            <img
              className="size-8 object-contain"
              src="/assets/icons/cloud.png"
              alt="icono de código"
            />
          </div>
          <p>Soluciones en la nube y automatización.</p>
        </div>
        <div className="flex items-center gap-8 -ml-8">
          <div className="w-24 h-12 flex justify-center items-center bg-[#004C6C] -skew-x-12">
            {" "}
            <img
              className="size-8 object-contain"
              src="/assets/icons/light.png"
              alt="icono de código"
            />
          </div>
          <p>Inteligencia artificial aplicada a negocios.</p>
        </div>
        <div className="flex items-center gap-8 -ml-12">
          <div className="w-24 h-12 flex justify-center items-center bg-[#0A2B3E] -skew-x-12">
            {" "}
            <img
              className="size-8 object-contain rotate-45 -mt-2"
              src="/assets/icons/paper.png"
              alt="icono de código"
            />
          </div>
          <p>Estrategias de transformación digital.</p>
        </div>
      </div>
    </section>
  );
}
