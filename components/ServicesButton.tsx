"use client";
const SCROLL_OFFSET = 80;
export default function ServicesButton() {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector("#servicios");
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
    <button
      className="bg-[#024D6C] hidden lg:block z-10 hover:bg-gradient-to-r font-bold text-xl hover:from-[#024D6C] hover:to-[#CF5F36] text-white py-2 px-10 rounded-md w-fit cursor-pointer"
      onClick={handleScroll}
    >
      Servicios
    </button>
  );
}
