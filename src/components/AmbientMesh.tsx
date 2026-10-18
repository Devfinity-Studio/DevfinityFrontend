"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function AmbientMesh() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Gentle idle ambient floating
    gsap.to(blob1Ref.current, {
      x: "+=40",
      y: "+=30",
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blob2Ref.current, {
      x: "-=50",
      y: "+=40",
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blob3Ref.current, {
      x: "+=30",
      y: "-=30",
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Subtle parallax tracking on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 30;
      const yPercent = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(containerRef.current, {
        x: xPercent,
        y: yPercent,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Ambient Orb 1 - Electric Blue */}
      <div
        ref={blob1Ref}
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-blue-400/20 via-sky-300/15 to-transparent blur-[120px]"
      />

      {/* Ambient Orb 2 - Orchid Purple */}
      <div
        ref={blob2Ref}
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-purple-400/20 via-fuchsia-300/15 to-transparent blur-[140px]"
      />

      {/* Ambient Orb 3 - Sunset Tangerine */}
      <div
        ref={blob3Ref}
        className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-orange-300/15 via-rose-300/10 to-transparent blur-[130px]"
      />
    </div>
  );
}
