import CompanyMarquee from "./CompanyMarquee";

export default function Companies() {
  return (
    <section className="relative text-white pt-8 pb-20 lg:pb-36">
      <h2 className="text-lg lg:text-3xl lg:text-center mb-8 px-4 text-pretty">
        Algunos de los amigos que
        <span className="font-bold"> confiaron en nosotros</span>
      </h2>
      <CompanyMarquee />
      <picture>
        <source media="(min-width: 1024px)" srcSet="/assets/tech-bg.webp" />
        <source
          media="(max-width: 1023px)"
          srcSet="/assets/tech-bg-mobile.webp"
        />
        <img
          src="/assets/tech-bg.webp"
          alt="Technologies"
          className="absolute inset-0 h-full w-full -z-10 rotate-180"
        />
      </picture>
    </section>
  );
}
