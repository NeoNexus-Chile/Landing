import GradientButton from "./GradientButton";

export default function Mision() {
  return (
    <section id="mision" className="overflow-x-hidden">
      <h2 className="text-7xl leading-[70px] mb-8 translate-x-[15%]">
        Innovación y tecnología para un <br />{" "}
        <span className="font-bold">mundo digital en evolución.</span>
      </h2>
      <div className="grid grid-cols-[2fr_3fr]">
        <img
          src="/assets/hands.webp"
          alt="Imagen de mano humana y robot"
          className="object-contain relative mt-8 -right-14 2xl:-right-24 pointer-events-none"
        />

        <article className="bg-[#1C5870] h-fit text-white text-xl text-right flex flex-col items-end gap-16 clip-path-mision pl-32 py-16 pr-28 mt-20">
          En NeoNexus, creemos que la tecnología es el puente hacia nuevas
          oportunidades. Nuestro equipo de expertos en desarrollo, diseño y
          estrategia digital trabaja para crear soluciones que optimicen
          procesos, potencien negocios y generen impacto
          <button
            className={`bg-[#CF5F36] hover:bg-gradient-to-r hover:from-[#8AB8E1] hover:to-[#CF5F36] text-white py-2 px-12 rounded-md w-fit cursor-pointer`}
          >
            Más
          </button>
        </article>
      </div>
    </section>
  );
}
