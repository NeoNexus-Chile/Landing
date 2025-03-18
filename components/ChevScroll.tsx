"use client";
import { IoChevronDown } from "react-icons/io5";
const SCROLL_OFFSET = 80;

export default function ChevScroll() {
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
      href="#mision"
      className="inline-block mx-auto mt-8"
      onClick={(e) => handleScroll(e, "#mision")}
    >
      <IoChevronDown className="text-8xl transition-all duration-300 hover:text-[#D25B2F] cursor-pointer text-[#DBE3F6]" />
    </a>
  );
}
