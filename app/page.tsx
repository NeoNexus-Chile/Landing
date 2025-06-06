import Header from "@/components/Header";
import Mision from "@/components/Mision";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Technologies from "@/components/Technologies";
import FooterLogoMobile from "@/components/FooterLogoMobile";
import Companies from "@/components/Companies";
import Team from "@/components/Team";
export default function Home() {
  return (
    <div className="flex flex-col gap-4 lg:gap-28 overflow-x-hidden">
      <Header />
      <Mision />
      <Technologies />
      {/* <Team /> */}
      {/* <Companies /> */}
      <Features />
      <Contact />
      <FooterLogoMobile />
      <Footer />
    </div>
  );
}
