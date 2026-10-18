import type { Metadata } from "next";
import ConnectClient from "@/components/ConnectClient";

export const metadata: Metadata = {
  title: "Contact Devfinity | Initialize System Deployment",
  description: "Connect with Devfinity. Submit your software infrastructure blueprints to our engineering team for high-performance web platforms and bespoke systems.",
};

export default function ContactPage() {
  return <ConnectClient />;
}
