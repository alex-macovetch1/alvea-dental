import type { Metadata } from "next";
import BookView from "@/components/pages/BookView";

export const metadata: Metadata = {
  title: "Programare online",
  description:
    "Alege serviciul, medicul, ziua și ora. Vezi orele libere reale din agenda clinicii, iar programarea se confirmă pe loc.",
  alternates: { canonical: "/programare" },
};

export default function Page() {
  return <BookView />;
}
