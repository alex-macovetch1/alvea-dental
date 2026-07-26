import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DoctorView from "@/components/pages/DoctorView";
import { TEAM } from "@/lib/content";
import { DOCTOR_PAGES } from "@/lib/team-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = TEAM.find((x) => x.slug === slug);
  const d = DOCTOR_PAGES[slug];
  if (!m || !d) return {};
  return {
    title: m.name,
    description: `${d.title.ro}. ${d.bio[0].ro.slice(0, 150)}…`,
    alternates: { canonical: `/echipa/${slug}` },
    openGraph: { title: `${m.name} · ALVEA`, description: d.title.ro, images: [m.img] },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!DOCTOR_PAGES[slug]) notFound();
  return <DoctorView slug={slug} />;
}
