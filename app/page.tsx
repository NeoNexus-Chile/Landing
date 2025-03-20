import Image from "next/image";
import Header from "@/components/Header";
import Mision from "@/components/Mision";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col gap-28">
      <Header />
      <Mision />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
