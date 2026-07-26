import type { Metadata } from "next";
import AboutView from "@/components/pages/AboutView";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "ALVEA din 2012, pe strada Alexandru cel Bun: unsprezece oameni, patru cabinete, laborator propriu. Regula de la început — prețul se scrie înainte.",
  alternates: { canonical: "/despre" },
};

export default function Page() {
  return <AboutView />;
}
