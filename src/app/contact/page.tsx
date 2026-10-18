import type { Metadata } from "next";
import ConnectClient from "@/components/ConnectClient";

export const metadata: Metadata = {
  title: "Contact & Intake Terminal — System Deployment",
  description: "Connect with Devfinity. Submit your software infrastructure blueprints to our engineering team for high-performance web platforms and bespoke systems.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Intake Terminal | Initialize System Deployment | Devfinity Studio",
    description: "Submit your software infrastructure blueprints to Devfinity's engineering team.",
    url: "https://devfinity.net/contact",
  },
};

export default function ContactPage() {
  return <ConnectClient />;
}
