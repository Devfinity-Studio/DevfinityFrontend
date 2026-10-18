import type { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Custom ERP Development & Low-Latency Software Engineering",
  description: "Deep-dive operational software design: from custom, multi-nested ERP systems featuring granular replacement registers to advanced relational database index tuning.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Custom ERP Development & Low-Latency Software Engineering | Devfinity Studio",
    description: "Deep-dive operational software design: custom ERPs, T3 stack enterprise architectures, and PostgreSQL performance tuning.",
    url: "https://devfinity.dev/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
