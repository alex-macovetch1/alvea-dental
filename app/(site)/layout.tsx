import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import StickyCall from "@/components/StickyCall";

/** Everything a visitor sees shares this frame. The clinic's own screen
 *  (/admin) sits outside the group on purpose — it has no nav and no footer. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <StickyCall />
      <Reveal />
    </>
  );
}
