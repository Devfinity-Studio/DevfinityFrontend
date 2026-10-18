import type { Metadata } from "next";
import WorkClient from "@/components/WorkClient";

export const metadata: Metadata = {
  title: "Enterprise Production Deployments & Architectural Case Studies",
  description: "Real-world engineering case studies proving system stability across custom industrial ERP architectures, complex relational schemas, and lightweight UI platforms.",
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
