import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceView from "@/components/pages/ServiceView";
import { SERVICES } from "@/lib/content";
import { SERVICE_PAGES } from "@/lib/services-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  const p = SERVICE_PAGES[slug];
  if (!s || !p) return {};
  return {
    title: s.title.ro,
    description: p.lead.ro,
    alternates: { canonical: `/servicii/${slug}` },
    openGraph: { title: `${s.title.ro} · ALVEA`, description: p.lead.ro, images: [p.cover] },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!SERVICE_PAGES[slug]) notFound();
  return <ServiceView slug={slug} />;
}
