import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "cohere-ai",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://devfinity.dev/sitemap.xml",
    host: "https://devfinity.dev",
  };
}
