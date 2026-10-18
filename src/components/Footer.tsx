"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Heart, Sparkles } from "lucide-react";

export function Footer() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
      glow: "hover:bg-zinc-900 hover:text-white hover:shadow-zinc-800/30",
    },
    {
      name: "Twitter / X",
      href: "https://twitter.com",
      icon: Twitter,
      glow: "hover:bg-[#1DA1F2] hover:text-white hover:shadow-sky-500/30",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
      glow: "hover:bg-[#0A66C2] hover:text-white hover:shadow-blue-600/30",
    },
  ];

  return (
    <footer className="w-full border-t border-black/[0.06] bg-white/70 backdrop-blur-md py-12 transition-colors">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Attribution */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-lg tracking-tight text-zinc-900">Devfinity</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold border border-blue-200/60">
              Studio
            </span>
          </div>
          <p className="text-sm text-zinc-500 flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> by{" "}
            <span className="font-semibold text-zinc-800">Heena &amp; Devansh</span>
          </p>
        </div>

        {/* Central Quote / Tagline */}
        <div className="hidden lg:flex items-center text-xs font-mono text-zinc-600 tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 mr-2 text-purple-600" />
          Systems Over Templates // Digital Future
        </div>

        {/* Spring Physics Social Links */}
        <div className="flex items-center space-x-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center text-zinc-600 bg-white border border-zinc-200/80 shadow-sm transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95 ${social.glow}`}
                data-cursor="view"
                aria-label={social.name}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}