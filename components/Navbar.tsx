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
    setMenuOpen(false);
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
        className={`hidden lg:flex gap-4 font-medium 2xl:gap-16 items-center fixed z-30 transition-all duration-300
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
        <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
          <img className="w-20" src="/assets/logo.svg" alt="Logo de NeoNexus" />
        </a>

        <div
          className={`fixed top-0 left-0 z-10 overflow-hidden ${
            menuOpen ? "h-screen w-screen block" : "w-0 h-0 hidden"
          }`}
        >
          <div
            onClick={() => setMenuOpen(false)}
            className={`fixed w-screen h-screen bg-white/70 backdrop-blur-md shadow-lg z-10 top-0 left-0 transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          ></div>
          <div
            className={`h-screen w-[70%] min-w-[70%] transition-all duration-300 bg-white fixed top-0 right-0 z-20 shadow ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <IoCloseSharp
              className="text-4xl text-white absolute top-2 right-2 z-20"
              onClick={() => setMenuOpen(false)}
            />

            <span className="absolute bottom-6 left-1/2 text-sm -translate-x-1/2 text-[#024d6c]">
              &copy; 2025 NeoNexus
            </span>

            <div className="flex justify-center items-center py-12 px-8 relative bg-neutral-900">
              <a
                className="inline-block -ml-4 z-30"
                href="#home"
                onClick={(e) => handleScroll(e, "#home")}
              >
                <img
                  className="w-40"
                  src="/assets/logo-white.svg"
                  alt="Logo de NeoNexus"
                />
              </a>
              <img
                className="absolute inset-0 h-full w-full opacity-60 object-cover pointer-events-none"
                src="/assets/header-bg.webp"
                alt="Fondo de colores"
              />
            </div>
            <ul className="flex flex-col gap-8 text-xl text-[#024d6c] text-center py-8 px-8">
              <li>
                <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#mision" onClick={(e) => handleScroll(e, "#mision")}>
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => handleScroll(e, "#servicios")}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => handleScroll(e, "#contacto")}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
