import { ImageResponse } from "next/og";
import { insightsArticles } from "@/data/insightsData";

export const runtime = "edge";
export const alt = "Devfinity Technical Insight";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug) || {
    title: slug.replace(/-/g, " ").toUpperCase(),
    category: "TECHNICAL INSIGHT",
    readTime: "5 min read",
    tags: ["Architecture", "Engineering", "TypeScript"],
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
                devfinity.dev // insights
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
            {article.category.toUpperCase()}
          </span>
        </div>

        {/* Center: Dynamic Article Details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span style={{ fontSize: "16px", color: "#64748B", fontWeight: 800, letterSpacing: "0.1em" }}>
            TECHNICAL ARCHITECTURE DEEP DIVE • {article.readTime}
          </span>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: 900,
              color: "#09090B",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            {article.title}
          </h1>
          <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
            {article.tags.map((tag) => (
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
            Architected by Devansh &amp; Heena // Systems Over Templates
          </span>
          <span style={{ fontSize: "16px", color: "#16A34A", fontWeight: 800 }}>
            ✓ Devfinity Production Verified
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
