import type { Metadata } from "next";
import ResultsView from "@/components/pages/ResultsView";

export const metadata: Metadata = {
  title: "Rezultate",
  description:
    "Șase cazuri cu ce a fost, ce am făcut, cât a durat și cât a costat. Trage de linie ca să vezi diferența înainte și după.",
  alternates: { canonical: "/rezultate" },
};

export default function Page() {
  return <ResultsView />;
}
