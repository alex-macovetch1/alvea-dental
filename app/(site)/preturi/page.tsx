import type { Metadata } from "next";
import PricesView from "@/components/pages/PricesView";

export const metadata: Metadata = {
  title: "Prețuri",
  description:
    "Lista completă de prețuri ALVEA, fără asteriscuri: consultație gratuită, igienizare 690 lei, obturații de la 890 lei, implant + coroană 14 400 lei. Plata în 3 rate fără dobândă.",
  alternates: { canonical: "/preturi" },
};

export default function Page() {
  return <PricesView />;
}
