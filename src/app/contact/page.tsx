import type { Metadata } from "next";
import ConnectClient from "@/components/ConnectClient";
import { defaultOpenGraphImages } from "@/data/openGraphDefaults";

export const metadata: Metadata = {
  title: {
    absolute: "Contact & System Intake Terminal | Devfinity Studio",
  },
  description: "Connect with Devfinity. Submit your software infrastructure blueprints to our engineering team for high-performance web platforms and bespoke systems.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & System Intake Terminal | Devfinity Studio",
    description: "Submit your software infrastructure blueprints to Devfinity's engineering team.",
    url: "https://devfinity.net/contact",
    type: "website",
    images: defaultOpenGraphImages,
  },
};

export default function ContactPage() {
  return <ConnectClient />;
}
