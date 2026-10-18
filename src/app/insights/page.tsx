import type { Metadata } from "next";
import InsightsClient from "@/components/InsightsClient";

export const metadata: Metadata = {
  title: "Technical Insights & System Architectures",
  description: "Architectural deep-dives, database index tuning, aerospace telemetry protocols, and enterprise software blueprints by Devfinity founders Devansh & Heena.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Technical Insights & System Architectures | Devfinity Studio",
    description: "Deep-dives into T3 stack enterprise migrations, Drizzle ORM workflows, and aerospace telemetry protocols.",
    url: "https://devfinity.dev/insights",
  },
};

export default function InsightsPage() {
  return <InsightsClient />;
}
