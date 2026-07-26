import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";
import { SERVICES, TEAM } from "@/lib/content";

const BASE = "https://alvea-taupe.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/servicii",
    "/echipa",
    "/preturi",
    "/rezultate",
    "/blog",
    "/despre",
    "/contact",
    "/programare",
  ].map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  return [
    ...pages,
    ...SERVICES.map((s) => ({ url: `${BASE}/servicii/${s.slug}`, priority: 0.7 })),
    ...TEAM.map((m) => ({ url: `${BASE}/echipa/${m.slug}`, priority: 0.6 })),
    ...POSTS.map((p) => ({ url: `${BASE}/blog/${p.slug}`, priority: 0.6 })),
  ];
}
