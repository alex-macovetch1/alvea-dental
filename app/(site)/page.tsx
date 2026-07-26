import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import Booking from "@/components/Booking";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Journal from "@/components/Journal";
import Marquee from "@/components/Marquee";
import Prices from "@/components/Prices";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Team from "@/components/Team";

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Steps />
      <BeforeAfter />
      <Team />
      <Reviews />
      <Prices />
      <Journal />
      <Faq />
      <Booking />
    </>
  );
}
