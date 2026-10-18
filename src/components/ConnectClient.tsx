"use client";

import { useState, Suspense } from "react";
import { Sparkles, Mail, MapPin, Copy, Check, MessageSquare, Phone } from "lucide-react";
import { StudioContactForm } from "@/components/StudioContactForm";
import { ParticleMeshCanvas } from "@/components/ParticleMeshCanvas";
import { AccordionFAQ } from "@/components/AccordionFAQ";

function ClipboardContact({ label, value, icon: Icon }: { label: string; value: string; icon: React.ComponentType<{ className?: string }> }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Copy ${label}: ${value}`}
      onClick={handleCopy}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCopy();
        }
      }}
      className="p-4 rounded-2xl glass-card flex items-center justify-between cursor-pointer group hover:border-blue-500/40 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      data-cursor="view"
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[11px] font-mono text-zinc-600 uppercase font-semibold block">{label}</span>
          <span className="text-sm font-extrabold text-zinc-900 group-hover:text-blue-600 transition-colors">{value}</span>
        </div>
      </div>
      <div className={`p-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1 transition-colors ${
        copied ? "bg-emerald-50 text-emerald-600" : "bg-black/[0.03] text-zinc-600 group-hover:text-blue-600"
      }`}>
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5" />
            <span>Copied</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Copy</span>
          </>
        )}
      </div>
    </div>
  );
}

export default function ConnectClient() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Header */}
      <section 
        aria-labelledby="connect-heading" 
        className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 text-center overflow-hidden"
      >
        <div className="container mx-auto max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ 04 / INTAKE &amp; COLLABORATION ]</span>
          </div>
          <h1 id="connect-heading" className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 uppercase">
            INITIALIZE <span className="text-gradient-future">PIPELINE</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Submit your software infrastructure blueprints to Devfinity&apos;s intake terminal. Secure, structured onboarding for high-performance software projects.
          </p>
        </div>
      </section>

      {/* Main Interactive Grid: Form & 3D Particle Mesh */}
      <section 
        aria-labelledby="intake-form-heading" 
        className="w-full pb-24 px-4 md:px-8 relative z-10"
      >
        <h2 id="intake-form-heading" className="sr-only">
          Engineering Intake Terminal and Direct Contact Channels
        </h2>
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Studio Dynamic Form (7 cols) */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="h-96 rounded-3xl glass-card animate-pulse" />}>
              <StudioContactForm />
            </Suspense>
          </div>

          {/* Right Column: 3D Particle Mesh & Quick Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 3D Particle Canvas */}
            <div className="h-[400px]">
              <ParticleMeshCanvas />
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <ClipboardContact
                label="Direct Email"
                value="info@devfinity.net"
                icon={Mail}
              />
              <ClipboardContact
                label="Office Location"
                value="Vadodara, Gujarat, IN"
                icon={MapPin}
              />
              <ClipboardContact
                label="Consultation Channel"
                value="Engineering Intake Terminal"
                icon={MessageSquare}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        aria-labelledby="connect-faq-heading" 
        className="w-full py-24 px-4 md:px-8 border-t border-black/[0.06] bg-white/60 backdrop-blur-md relative z-10"
      >
        <div className="container mx-auto max-w-4xl space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
              [ FREQUENTLY ASKED QUESTIONS ]
            </span>
            <h2 id="connect-faq-heading" className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900">
              Clear Answers for Engineering Leaders
            </h2>
            <p className="text-zinc-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Devfinity provides structured software onboarding with enterprise-grade non-disclosure agreements, direct engineering access via GitHub and Slack, and full source code IP ownership. We eliminate agency overhead by pairing client leadership directly with senior technical architects for high-velocity Next.js and relational database execution.
            </p>
          </div>
          <AccordionFAQ />
        </div>
      </section>
    </div>
  );
}
