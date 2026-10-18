import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Devfinity Studio | Custom Web Development & Enterprise Architectures";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
                width: "52px",
                height: "52px",
                borderRadius: "16px",
                backgroundColor: "#2563EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "28px",
                fontWeight: 900,
                boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)",
              }}
            >
              D
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "30px", fontWeight: 900, color: "#18181B", letterSpacing: "-0.04em" }}>
                Devfinity Studio
              </span>
              <span style={{ fontSize: "13px", fontFamily: "monospace", color: "#64748B", textTransform: "uppercase" }}>
                devfinity.net // enterprise engineering
              </span>
            </div>
          </div>
          <span
            style={{
              padding: "8px 22px",
              borderRadius: "9999px",
              backgroundColor: "#EFF6FF",
              border: "1px solid #BFDBFE",
              color: "#2563EB",
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            ENTERPRISE ARCHITECTURE STUDIO
          </span>
        </div>

        {/* Center: Hero Value Proposition */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <span style={{ fontSize: "16px", color: "#2563EB", fontWeight: 800, letterSpacing: "0.12em" }}>
            HIGH-PERFORMANCE FULL-STACK SOFTWARE
          </span>
          <h1
            style={{
              fontSize: "58px",
              fontWeight: 900,
              color: "#09090B",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: "1000px",
            }}
          >
            Custom Web Development &amp; Type-Safe Enterprise Architectures
          </h1>
          <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
            {["Next.js App Router", "T3 Stack", "PostgreSQL", "Drizzle ORM", "Three.js WebGL", "Kinde Auth"].map(
              (tag) => (
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
              )
            )}
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
            Architected by Heena &amp; Devansh // Vadodara, Gujarat, IN
          </span>
          <span style={{ fontSize: "16px", color: "#16A34A", fontWeight: 800 }}>
            ✓ Sub-50ms Latency &amp; Zero AI Code Attribution
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
