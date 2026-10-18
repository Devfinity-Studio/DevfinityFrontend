import type { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";
import { defaultOpenGraphImages } from "@/data/openGraphDefaults";

export const metadata: Metadata = {
  title: {
    absolute: "Custom ERP & Software Engineering | Devfinity Studio",
  },
  description: "Custom enterprise ERP development, type-safe full-stack software engineering, and high-performance relational database design engineered by Devfinity.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Custom ERP & Software Engineering | Devfinity Studio",
    description: "Deep-dive operational software design: custom ERPs, T3 stack enterprise architectures, and PostgreSQL performance tuning.",
    url: "https://devfinity.net/services",
    type: "website",
    images: defaultOpenGraphImages,
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
