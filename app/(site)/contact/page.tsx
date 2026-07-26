import type { Metadata } from "next";
import ContactView from "@/components/pages/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "str. Alexandru cel Bun 87, Chișinău. Parcare gratuită în curte, troleibuz 1, 4 și 22. Urgențe non-stop la +373 69 43 90 12.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactView />;
}
