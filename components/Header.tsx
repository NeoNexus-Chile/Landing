import { IoChevronDown } from "react-icons/io5";
import Navbar from "./Navbar";
import ChevScroll from "./ChevScroll";
import ServicesButton from "./ServicesButton";

export default function Header() {
  return (
    <header
      id="home"
      className="grid grid-cols-[3fr_4fr] min-h-screen isolate relative"
    >
      <div className="bg-neutral-950 clip-path-header relative flex flex-col justify-center items-center text-white gap-12 overflow-hidden group">
        <img
          src="/assets/logo-white.svg"
          alt="Logo de NeoNexus"
          className="z-10 -ml-[10%] transition-all duration-300 group-hover:scale-[2] group-hover:translate-y-[50%]"
        />
        <div className="bg-neutral-950/75 z-10 py-12 px-8 w-full clip-path-mision pl-20 2xl:pl-32 -mr-[20%] transition-all duration-300 group-hover:translate-x-full">
          <p className="text-3xl font-bold">El nexo entre ideas</p>
          <p className="text-3xl font-thin opacity-75">
            Y realidades digitales.
          </p>
        </div>
        <ServicesButton />
        <img
          className="absolute inset-0 h-full w-full opacity-60 object-cover pointer-events-none transition-all duration-300 group-hover:scale-[2]"
          src="/assets/header-bg.webp"
          alt="Fondo de colores"
        />
      </div>
      <article className="p-16 text-center flex flex-col justify-center mt-20">
        <h1 className="text-6xl mb-8 leading-10 font-regular">
          Transformamos ideas
          <br />
          <span className="font-extrabold text-4xl">
            a soluciones digitales innovadoras.
          </span>
        </h1>
        <p className="text-xl px-4 max-w-xl mx-auto">
          En NeoNexus, impulsamos el futuro con soluciones digitales avanzadas.
          Desde desarrollo de software hasta estrategias de transformación
          digital, conectamos tecnología y creatividad para llevar tu negocio al
          siguiente nivel.
        </p>

        <div className="flex justify-center items-center gap-4 mb-6 mt-28">
          <div className="bg-[#0B2B3E] w-24 h-2 -skew-x-[33deg]"></div>
          <div className="bg-[#014D6C] w-24 h-2 -skew-x-[33deg]"></div>
          <div className="bg-[#87BCE9] w-24 h-2 -skew-x-[33deg]"></div>
          <div className="bg-[#D25B2F] w-24 h-2 -skew-x-[33deg]"></div>
        </div>
        <p className="text-xl leading-5 font-semibold">
          Explora nuestras soluciones <br /> y lleva tu empresa al futuro
        </p>
        <ChevScroll />
      </article>
    </header>
  );
}
