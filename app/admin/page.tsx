import type { Metadata } from "next";
import AdminScreen from "./AdminScreen";

export const metadata: Metadata = {
  title: "Agenda clinicii",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminScreen />;
}
