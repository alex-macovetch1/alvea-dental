import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import Booking from "@/components/Booking";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Prices from "@/components/Prices";
import Reveal from "@/components/Reveal";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Team from "@/components/Team";
import StickyCall from "@/components/StickyCall";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Steps />
        <BeforeAfter />
        <Team />
        <Reviews />
        <Prices />
        <Faq />
        <Booking />
      </main>
      <Footer />
      <StickyCall />
      <Reveal />
    </>
  );
}
