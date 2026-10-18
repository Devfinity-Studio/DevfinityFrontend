"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export interface UtmData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
}

export function useUtmCapture(): UtmData {
  const searchParams = useSearchParams();
  const [utmData, setUtmData] = useState<UtmData>({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  useEffect(() => {
    if (!searchParams) return;

    const source = searchParams.get("utm_source") || "";
    const medium = searchParams.get("utm_medium") || "";
    const campaign = searchParams.get("utm_campaign") || "";
    const term = searchParams.get("utm_term") || "";
    const content = searchParams.get("utm_content") || "";

    if (source || medium || campaign || term || content) {
      const data: UtmData = {
        utm_source: source,
        utm_medium: medium,
        utm_campaign: campaign,
        utm_term: term,
        utm_content: content,
      };
      setUtmData(data);
      try {
        sessionStorage.setItem("devfinity_utm_attribution", JSON.stringify(data));
      } catch {
        // Safe fallback in restricted environments
      }
    } else {
      // Check if previously captured in the current session
      try {
        const cached = sessionStorage.getItem("devfinity_utm_attribution");
        if (cached) {
          setUtmData(JSON.parse(cached));
        }
      } catch {
        // Safe fallback
      }
    }
  }, [searchParams]);

  return utmData;
}
