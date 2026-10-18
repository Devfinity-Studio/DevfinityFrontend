import type { Metadata } from "next";
import ConnectClient from "@/components/ConnectClient";

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
  },
};

export default function ConnectPage() {
  return <ConnectClient />;
}
