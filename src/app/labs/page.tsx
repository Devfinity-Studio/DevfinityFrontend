import type { Metadata } from "next";
import LabsClient from "@/components/LabsClient";

export const metadata: Metadata = {
  title: "Labs — Open Source & Hardware Experiments",
  description: "Experimental engineering playground: open-source developer utilities, ESP32 IoT telemetry bridges, and digital architectural concept illustrations.",
  alternates: {
    canonical: "/labs",
  },
  openGraph: {
    title: "Devfinity Labs | Open Source & Hardware Experiments",
    description: "Hardware IoT bridges, open-source packages, and digital concept illustrations by Devfinity.",
    url: "https://devfinity.net/labs",
  },
};

export default function LabsPage() {
  return <LabsClient />;
}
