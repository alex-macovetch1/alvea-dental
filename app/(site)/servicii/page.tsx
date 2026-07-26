import type { Metadata } from "next";
import ServicesIndex from "@/components/pages/ServicesIndex";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Cele opt lucruri pe care le facem: consultație gratuită, igienizare, carii, implanturi, ortodonție invizibilă, fațete și albire, stomatologie pediatrică, urgențe 24/7. Prețuri publicate.",
  alternates: { canonical: "/servicii" },
};

export default function Page() {
  return <ServicesIndex />;
}
