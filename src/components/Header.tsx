"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/contact" || href === "/connect") {
      return pathname === "/contact" || pathname === "/connect";
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.06] bg-white/75 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
      <div className="container flex h-20 items-center justify-between px-4 mx-auto md:px-8">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2.5 group select-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="h-5 w-5 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors">
              Devfinity
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-600 font-semibold -mt-1">
              Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with animated hover underline */}
        <nav className="hidden md:flex items-center space-x-1 p-1.5 rounded-full bg-black/[0.03] border border-black/[0.05]">
          {navigation.map((item) => {
            const isActive = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-200 rounded-full group ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-blue-600" />
                )}
                <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 shadow-sm transition-opacity duration-200 -z-10" />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <MagneticButton href="/contact" variant="primary">
            Let&apos;s Build 🚀
          </MagneticButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-zinc-700 hover:bg-black/[0.05] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-black/[0.06] bg-white/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1.5 px-6 py-4">
            {navigation.map((item) => {
              const isActive = isLinkActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-4 py-2.5 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-zinc-600 hover:bg-black/[0.03] hover:text-zinc-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center font-mono font-medium rounded-full px-6 py-3 text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-blue-500/25"
              >
                Let&apos;s Build 🚀
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}