import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Devfinity Architectural Case Study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface ProjectData {
  title: string;
  category: string;
  tech: string[];
}

const projectDataMap: Record<string, ProjectData> = {
  "asmee-pharma": {
    title: "AsmeePharma Healthcare Platform",
    category: "HEALTHCARE REGULATORY PLATFORM",
    tech: ["Next.js", "PostgreSQL", "HIPAA Ready", "Sub-40ms Queries"],
  },
  "virat-shivshakti-erp": {
    title: "Virat ShivShakti Enterprise ERP",
    category: "ENTERPRISE RESOURCE PLANNING",
    tech: ["T3 Stack", "Kinde RBAC", "Drizzle ORM", "12 Facilities"],
  },
  "rustechnet": {
    title: "Rustechnet Industrial Dynamics",
    category: "INDUSTRIAL TELEMETRY",
    tech: ["TypeScript", "tRPC", "Sub-15ms Latency", "Type-Safe Core"],
  },
};

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectDataMap[id] || {
    title: id.replace(/-/g, " ").toUpperCase(),
    category: "PRODUCTION CASE STUDY",
    tech: ["Next.js 16", "TypeScript 5", "PostgreSQL", "Full-Stack Core"],
  };

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAFAFA",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          backgroundImage: "radial-gradient(circle at 25px 25px, #E5E7EB 2%, transparent 0%)",
          backgroundSize: "40px 40px",
        }}
      >
        {/* Top Header: Brand */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "#2563EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "26px",
                fontWeight: 900,
              }}
            >
              D
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 900, color: "#18181B", letterSpacing: "-0.04em" }}>
                Devfinity Studio
              </span>
              <span style={{ fontSize: "12px", fontFamily: "monospace", color: "#64748B", textTransform: "uppercase" }}>
                devfinity.dev // architecture
              </span>
            </div>
          </div>
          <span
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              backgroundColor: "#EFF6FF",
              border: "1px solid #BFDBFE",
              color: "#2563EB",
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Center: Dynamic Case Study Details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span style={{ fontSize: "16px", color: "#3B82F6", fontWeight: 800, letterSpacing: "0.1em" }}>
            VERIFIED PRODUCTION DEPLOYMENT
          </span>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: 900,
              color: "#09090B",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            {project.title}
          </h1>
          <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
            {project.tech.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "8px 16px",
                  borderRadius: "10px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E4E4E7",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#27272A",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Provenance Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #E4E4E7",
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "16px", color: "#52525B", fontWeight: 700 }}>
            Architected by Heena &amp; Devansh // Zero Vendor Lock-in
          </span>
          <span style={{ fontSize: "16px", color: "#16A34A", fontWeight: 800 }}>
            ✓ 100% Type-Safe &amp; IP Handover
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
