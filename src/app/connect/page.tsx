import type { Metadata } from "next";
import ConnectClient from "@/components/ConnectClient";
import { defaultOpenGraphImages } from "@/data/openGraphDefaults";

export const metadata: Metadata = {
  title: {
    absolute: "Initialize System Deployment | Devfinity Studio",
  },
  description: "Submit your software infrastructure blueprints to Devfinity's intake terminal. Secure, structured onboarding for high-performance software projects.",
  alternates: {
    canonical: "/connect",
  },
  openGraph: {
    title: "Initialize System Deployment | Devfinity Studio",
    description: "Submit your software infrastructure blueprints to Devfinity's intake terminal.",
    url: "https://devfinity.net/connect",
    type: "website",
    images: defaultOpenGraphImages,
  },
};

export default function ConnectPage() {
  return <ConnectClient />;
}
