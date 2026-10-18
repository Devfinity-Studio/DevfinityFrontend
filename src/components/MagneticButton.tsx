"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleMouseMove = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    gsap.to(containerRef.current, {
      x: x * 0.28,
      y: y * 0.28,
      duration: 0.6,
      ease: "power2.out",
    });

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.35,
        opacity: 0.85,
        duration: 0.4,
      });
    }
  });

  const handleMouseLeave = contextSafe(() => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1,
        opacity: 0,
        duration: 0.6,
      });
    }
  });

  const baseStyles =
    "relative inline-flex items-center justify-center font-mono font-medium rounded-full px-6 py-2.5 text-sm transition-all duration-300 select-none z-10";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 border border-white/20 active:scale-95",
    secondary:
      "bg-white/80 text-zinc-900 border border-zinc-200/80 hover:border-zinc-300 shadow-sm hover:shadow active:scale-95",
    outline:
      "bg-transparent text-zinc-700 hover:text-blue-600 border border-zinc-300/80 hover:border-blue-500 active:scale-95",
  };

  const content = (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block cursor-pointer ${className}`}
    >
      {/* Expanding gradient shadow aura */}
      {variant === "primary" && (
        <div
          ref={glowRef}
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-0 pointer-events-none transition-opacity duration-300"
        />
      )}
      <button
        type="button"
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]}`}
      >
        {children}
      </button>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
