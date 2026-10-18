import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { defaultOpenGraphImages } from "@/data/openGraphDefaults";

export const metadata: Metadata = {
  title: {
    absolute: "Devfinity Studio | Custom Web & Enterprise Architectures",
  },
  description: "Bespoke full-stack web engineering for enterprise infrastructure. We engineer low-latency, type-safe Next.js platforms and custom database architectures.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Devfinity Studio | Custom Web & Enterprise Architectures",
    description: "Bespoke full-stack web application engineering for complex corporate infrastructures.",
    url: "https://devfinity.net",
    type: "website",
    images: defaultOpenGraphImages,
  },
};

export default function Home() {
  return <HomeClient />;
}
