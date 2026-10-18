import type { Metadata } from "next";
import WorkClient from "@/components/WorkClient";
import { defaultOpenGraphImages } from "@/data/openGraphDefaults";

export const metadata: Metadata = {
  title: {
    absolute: "Enterprise Case Studies & Deployments | Devfinity Studio",
  },
  description: "Explore Devfinity case studies: enterprise ERP architectures, low-latency relational database systems, and clinical platforms built for mission-critical scale.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Enterprise Case Studies & Deployments | Devfinity Studio",
    description: "Real-world engineering case studies: AsmeePharma, Virat ShivShakti ERP, and Rustechnet platforms.",
    url: "https://devfinity.net/work",
    type: "website",
    images: defaultOpenGraphImages,
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
