"use client";
import { useEffect, useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

const SCROLL_OFFSET = 80;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > SCROLL_OFFSET);

    const handleScroll = () => {
      const isScrolled = window.scrollY > SCROLL_OFFSET;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`hidden lg:flex gap-4 font-medium 2xl:gap-16 items-center fixed z-30 transition-all duration-300 rounded-lg
        ${
          scrolled
            ? "bg-white/70 backdrop-blur-md top-0 shadow-lg right-0 w-screen px-4 py-2 justify-center"
            : "top-4 right-16 p-4"
        }`}
      >
        <a
          className="transition-all duration-300 border-b-2 border-transparent hover:border-[#0A2C3E] hover:text-[#0A2C3E] pr-6 pb-[2px]"
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
        >
          Home
        </a>
        <a
          className="transition-all duration-300 border-b-2 border-transparent hover:border-[#0A2C3E] hover:text-[#0A2C3E] pr-6 pb-[2px]"
          href="#mision"
          onClick={(e) => handleScroll(e, "#mision")}
        >
          Nosotros
        </a>
        <a
          className="transition-all duration-300 border-b-2 border-transparent hover:border-[#0A2C3E] hover:text-[#0A2C3E] pr-6 pb-[2px]"
          href="#servicios"
          onClick={(e) => handleScroll(e, "#servicios")}
        >
          Servicios
        </a>
        <a
          className="transition-all duration-300 border-b-2 border-transparent hover:border-[#0A2C3E] hover:text-[#0A2C3E] pr-6 pb-[2px]"
          href="#contacto"
          onClick={(e) => handleScroll(e, "#contacto")}
        >
          Contacto
        </a>
        <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
          <img
            className={`transition-all duration-300 hover:brightness-150 hover:scale-90 ${
              scrolled ? "w-32" : "ml-8"
            }`}
            src="/assets/logo.svg"
            alt="Logo de NeoNexus"
          />
        </a>
      </nav>
      <nav
        className={`flex justify-between lg:hidden px-4 py-2 sticky w-screen bg-white left-0 top-0 z-30 ${
          scrolled ? "bg-white/70 backdrop-blur-md shadow-lg" : ""
        }`}
      >
        <button
          className="text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <IoCloseSharp className="text-4xl" />
          ) : (
            <IoMenuSharp className="text-4xl" />
          )}
        </button>
        <img className="w-20" src="/assets/logo.svg" alt="Logo de NeoNexus" />
      </nav>
    </>
  );
}
