import type { Metadata } from "next";
import BlogIndex from "@/components/pages/BlogIndex";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Textele pe care le scriu medicii noștri: cât costă de fapt un implant, de ce sângerează gingiile, cum pregătești copilul pentru prima vizită, ce funcționează la albire.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return <BlogIndex />;
}
