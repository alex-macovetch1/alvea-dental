import type { Metadata } from "next";
import TeamIndex from "@/components/pages/TeamIndex";

export const metadata: Metadata = {
  title: "Echipa",
  description:
    "Patru medici și un igienist principal. Cine te vede prima dată te duce până la capăt — și îți poți alege singur medicul când te programezi.",
  alternates: { canonical: "/echipa" },
};

export default function Page() {
  return <TeamIndex />;
}
