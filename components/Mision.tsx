import GradientButton from "./GradientButton";

export default function Mision() {
  return (
    <section id="mision">
      <h2 className="text-2xl lg:text-7xl block lg:inline-block text-center lg:text-left leading-6 lg:leading-[70px] lg:mb-8 lg:translate-x-[15%] isolate">
        Innovación y tecnología para un <br />{" "}
        <span className="font-bold">mundo digital en evolución.</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
        <div className="relative">
          <img
            src="/assets/hands.webp"
            alt="Imagen de mano humana y robot"
            className="object-contain relative mt-1 lg:mt-8 -ml-8 lg:-right-14 2xl:-right-24 pointer-events-none"
          />
          <div className="absolute lg:hidden w-full bg-white -bottom-8 z-20 left-0 h-8 rounded-b-[100%]"></div>
        </div>

        <article className="bg-[#1C5870] h-fit text-white text-lg lg:text-xl text-center lg:text-right flex flex-col items-center lg:items-end gap-16 clip-path-mision lg:pl-32 pl-4 pr-4 pt-16 pb-8 lg:py-16 lg:pr-28 lg:mt-20 relative">
          En NeoNexus, creemos que la tecnología es el puente hacia nuevas
          oportunidades. Nuestro equipo de expertos en desarrollo, diseño y
          estrategia digital trabaja para crear soluciones que optimicen
          procesos, potencien negocios y generen impacto
          <button
            className={`bg-[#CF5F36] hidden lg:block hover:bg-gradient-to-r hover:from-[#8AB8E1] hover:to-[#CF5F36] text-white py-2 px-12 rounded-md w-fit cursor-pointer`}
          >
            Más
          </button>
          <img
            src="/assets/waves.webp"
            alt="Imagen de olas digitales"
            className="absolute -top-0 lg:-top-14 2xl:-top-24 left-0 w-full object-cover object-top -z-10 opacity-[0.1]"
          />
        </article>
      </div>
    </section>
  );
}
