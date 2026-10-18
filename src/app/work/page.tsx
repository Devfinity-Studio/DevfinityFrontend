import type { Metadata } from "next";
import WorkClient from "@/components/WorkClient";

export const metadata: Metadata = {
  title: "Enterprise Production Deployments & Architectural Case Studies",
  description: "Explore Devfinity case studies: enterprise ERP architectures, low-latency relational database systems, and clinical platforms built for mission-critical scale.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Enterprise Production Deployments & Architectural Case Studies | Devfinity Studio",
    description: "Real-world engineering case studies: AsmeePharma, Virat ShivShakti ERP, and Rustechnet platforms.",
    url: "https://devfinity.net/work",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
