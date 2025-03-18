"use client";
const SCROLL_OFFSET = 80;

export default function Footer() {
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
    <footer className="bg-[#014D6C] p-4">
      <nav className="max-w-7xl px-8 mx-auto flex justify-between items-center text-lg">
        <div className="flex flex-col gap-4">
          <ul className="flex gap-16 text-white">
            <li>
              <a
                href="#home"
                className="hover:text-[#87BCE9] transition-colors"
                onClick={(e) => handleScroll(e, "#home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#mision"
                className="hover:text-[#87BCE9] transition-colors"
                onClick={(e) => handleScroll(e, "#mision")}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="hover:text-[#87BCE9] transition-colors"
                onClick={(e) => handleScroll(e, "#servicios")}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-[#87BCE9] transition-colors"
                onClick={(e) => handleScroll(e, "#contacto")}
              >
                Contacto
              </a>
            </li>
          </ul>
          <div className="flex gap-4 text-white text-sm">
            <p>@2023 Zerra. All rights reserved</p>
            <a href="/">Terminos y condiciones</a>
            <a href="/">Política de privacidad</a>
          </div>
        </div>
        <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
          <img
            className="transition-all duration-300 hover:opacity-90 hover:scale-90"
            src="/assets/logo-white.svg"
            alt="Logo de NeoNexus"
          />
        </a>
      </nav>
    </footer>
  );
}
