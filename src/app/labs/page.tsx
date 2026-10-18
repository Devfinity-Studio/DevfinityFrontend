import type { Metadata } from "next";
import LabsClient from "@/components/LabsClient";

export const metadata: Metadata = {
  title: {
    absolute: "Devfinity Labs — Open Source & Hardware | Devfinity",
  },
  description: "Experimental engineering playground: open-source developer utilities, ESP32 IoT telemetry bridges, and digital architectural concept illustrations.",
  alternates: {
    canonical: "/labs",
  },
  openGraph: {
    title: "Devfinity Labs — Open Source & Hardware | Devfinity",
    description: "Hardware IoT bridges, open-source packages, and digital concept illustrations by Devfinity.",
    url: "https://devfinity.net/labs",
  },
};

export default function LabsPage() {
  return <LabsClient />;
}
