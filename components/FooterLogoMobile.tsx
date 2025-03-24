"use client";
const SCROLL_OFFSET = 80;

export default function FooterLogoMobile() {
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
    <a
      className="lg:hidden"
      href="#home"
      onClick={(e) => handleScroll(e, "#home")}
    >
      <img
        src="/assets/logo.svg"
        alt="NeoNexus"
        className="w-56 my-8 mx-auto"
      />
    </a>
  );
}
