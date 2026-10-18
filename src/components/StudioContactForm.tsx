"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export function StudioContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("Enterprise Platform");
  const [briefing, setBriefing] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !briefing) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          scopes: [scope],
          briefing,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to send inquiry. Please try again.");
      }

      setStatus("success");

      // Multi-angle festive confetti celebration burst!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#0A84FF", "#7000FF", "#D946EF", "#10B981", "#FF5E3A"],
      });
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#0A84FF", "#7000FF", "#D946EF"],
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#FF5E3A", "#10B981", "#0A84FF"],
        });
      }, 250);
    } catch (err: unknown) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "System fault: Unable to initialize pipeline.");
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setBriefing("");
    setStatus("idle");
  };

  return (
    <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/80 shadow-2xl relative overflow-hidden">
      
      {/* Decorative Glow Bulb */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-2xl pointer-events-none" />

      <div className="mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>[ INTAKE TERMINAL ]</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900">
          Let&apos;s build together!
        </h2>
        <p className="text-zinc-600 mt-2 text-sm md:text-base">
          Submit your project blueprints below. We respond within 24 hours with architectural feedback.
        </p>
      </div>

      {status === "success" ? (
        <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-zinc-900">
            Pipeline Successfully Initialized!
          </h3>
          <p className="text-zinc-600 max-w-md text-sm leading-relaxed">
            Thank you, <strong className="text-zinc-900">{name}</strong>. Your briefing has been routed to our technical engineering team.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-zinc-900 text-white font-mono text-xs font-semibold hover:bg-zinc-800 transition-colors"
            >
              Send Another Inquiry →
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Field with Floating Label feel */}
          <div className="relative group">
            <label className="text-xs font-mono font-semibold text-zinc-700 block mb-1.5 uppercase">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Vance"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all shadow-xs"
            />
          </div>

          {/* Email Field */}
          <div className="relative group">
            <label className="text-xs font-mono font-semibold text-zinc-700 block mb-1.5 uppercase">
              Work Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="alex@enterprise.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all shadow-xs"
            />
          </div>

          {/* Scope Selector */}
          <div className="relative group">
            <label className="text-xs font-mono font-semibold text-zinc-700 block mb-1.5 uppercase">
              Operational Scope
            </label>
            <select
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all shadow-xs cursor-pointer"
            >
              <option value="Enterprise Platform">Bespoke Enterprise System (ERP/CRM)</option>
              <option value="Next.js Web App">High-Speed Next.js Web Application</option>
              <option value="API & Database">Database Schema &amp; API Pipeline</option>
              <option value="Complete Overhaul">Legacy System Modernization</option>
            </select>
          </div>

          {/* Briefing Field */}
          <div className="relative group">
            <label className="text-xs font-mono font-semibold text-zinc-700 block mb-1.5 uppercase">
              Core Technical Briefing *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Outline your architectural requirements, data bottlenecks, or estimated timeline..."
              value={briefing}
              onChange={(e) => setBriefing(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all shadow-xs resize-none"
            />
          </div>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-mono text-rose-600">
              {errorMessage}
            </div>
          )}

          {/* Animated 3-State Submit Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-4 rounded-full font-mono font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 active:scale-[0.99] transition-all flex items-center justify-center space-x-2 disabled:opacity-75 cursor-pointer"
            data-cursor="rocket"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Initializing Pipeline...</span>
              </>
            ) : (
              <>
                <span>Send Message 🚀</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
