"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch/coarse pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center cursor coordinates
    const setX = gsap.quickTo(cursor, "x", { duration: 0.18, ease: "power2.out" });
    const setY = gsap.quickTo(cursor, "y", { duration: 0.18, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      setX(e.clientX);
      setY(e.clientY);

      // Check for elements with data-cursor attribute
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (target) {
        const text = target.getAttribute("data-cursor") || "View";
        setCursorText(text);
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform duration-200 ${
        isHovered ? "scale-100" : "scale-75"
      }`}
    >
      {isHovered ? (
        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs font-mono font-bold tracking-wider uppercase shadow-lg shadow-blue-500/30 flex items-center gap-1.5 backdrop-blur-sm animate-in fade-in zoom-in-75 duration-150">
          <span ref={badgeRef}>{cursorText}</span>
        </div>
      ) : (
        <div className="relative flex items-center justify-center">
          <div className="w-3.5 h-3.5 rounded-full bg-blue-600 shadow-md shadow-blue-500/40" />
          <div className="absolute w-7 h-7 rounded-full border border-blue-400/40 animate-ping opacity-75" />
        </div>
      )}
    </div>
  );
}
