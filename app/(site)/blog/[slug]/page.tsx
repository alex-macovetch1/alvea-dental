import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostView from "@/components/pages/PostView";
import { POSTS } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title.ro,
    description: p.excerpt.ro,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: p.title.ro,
      description: p.excerpt.ro,
      publishedTime: p.date,
      images: [p.cover],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!POSTS.some((p) => p.slug === slug)) notFound();
  return <PostView slug={slug} />;
}
