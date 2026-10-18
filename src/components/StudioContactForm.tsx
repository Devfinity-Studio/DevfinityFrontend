"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, Loader2, Sparkles, X, AlertCircle } from "lucide-react";

export function StudioContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("Enterprise Platform");
  const [message, setMessage] = useState("");
  const [hasConsent, setHasConsent] = useState(false);

  const [isSending, setIsSending] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // 1. Prevent default page reload
    e.preventDefault();
    setValidationError(null);

    // 2. Client-side validation: ensure email and message fields aren't empty
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedEmail) {
      setValidationError("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setValidationError("Please enter a valid email address (e.g. name@company.com).");
      return;
    }

    if (!trimmedMessage) {
      setValidationError("Please enter your message or project briefing.");
      return;
    }

    // Consent validation
    if (!hasConsent) {
      setValidationError("Please consent to the processing of your details to proceed.");
      return;
    }

    // 3. Simulated loading state
    setIsSending(true);

    try {
      // Dispatch API request asynchronously
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || "Devfinity Partner",
          email: trimmedEmail,
          scopes: [scope],
          briefing: trimmedMessage,
        }),
      }).catch((err) => {
        console.warn("Dispatched contact intake notice:", err);
      });

      // Wait 1.5 seconds simulated loading state
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 4. Clear form inputs
      setName("");
      setEmail("");
      setMessage("");
      setScope("Enterprise Platform");
      setHasConsent(false);

      // 5. Festive celebratory confetti
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0A84FF", "#7000FF", "#00D2FF", "#10B981"],
      });

      // 6. Sleek success Toast notification
      setToastMessage("Message sent to Devfinity!");
      setShowToast(true);

      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
      toastTimeoutRef.current = setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } catch (err) {
      console.error("Submission unexpected error:", err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
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
            Submit your project blueprints below. Directly attributed to the Devfinity engineering team.
          </p>
        </div>

        {/* Inline Success Notice if Toast is active */}
        {showToast && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-900 flex items-center justify-between text-xs font-mono animate-in fade-in duration-300">
            <div className="flex items-center space-x-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-bold block">Message sent to Devfinity!</span>
                <span className="text-emerald-700 text-[11px]">Our architecture team will review your specifications within 24 hours.</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowToast(false)}
              className="text-emerald-700 hover:text-emerald-950 p-1"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Controlled Form */}
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name Field */}
          <div className="relative group">
            <label htmlFor="contact-name" className="text-xs font-mono font-semibold text-zinc-700 block mb-1.5 uppercase">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="e.g. Alex Vance"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (validationError) setValidationError(null);
              }}
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all shadow-xs"
            />
          </div>

          {/* Email Field */}
          <div className="relative group">
            <label htmlFor="contact-email" className="text-xs font-mono font-semibold text-zinc-700 block mb-1.5 uppercase">
              Work Email Address *
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="alex@enterprise.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (validationError) setValidationError(null);
              }}
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all shadow-xs"
            />
          </div>

          {/* Scope Selector */}
          <div className="relative group">
            <label htmlFor="contact-scope" className="text-xs font-mono font-semibold text-zinc-700 block mb-1.5 uppercase">
              Operational Scope
            </label>
            <select
              id="contact-scope"
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all shadow-xs cursor-pointer"
            >
              <option value="Enterprise Platform">Bespoke Enterprise System (T3 Stack / ERP)</option>
              <option value="Next.js Web App">High-Speed Next.js Web Platform (Healthcare / SaaS)</option>
              <option value="API & Database">Database Schema &amp; tRPC Pipeline (Industrial)</option>
              <option value="Complete Overhaul">Legacy Architecture Modernization</option>
            </select>
          </div>

          {/* Message / Briefing Field */}
          <div className="relative group">
            <label htmlFor="contact-message" className="text-xs font-mono font-semibold text-zinc-700 block mb-1.5 uppercase">
              Message / Project Briefing *
            </label>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="Outline your architectural requirements, data bottlenecks, or estimated timeline..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (validationError) setValidationError(null);
              }}
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all shadow-xs resize-none"
            />
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="flex items-start space-x-3 pt-1">
            <input
              id="contact-consent"
              type="checkbox"
              checked={hasConsent}
              onChange={(e) => {
                setHasConsent(e.target.checked);
                if (validationError) setValidationError(null);
              }}
              className="mt-1 h-4 w-4 rounded-md border-zinc-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer shrink-0"
            />
            <label htmlFor="contact-consent" className="text-xs text-zinc-600 leading-relaxed cursor-pointer select-none">
              I consent to the collection and processing of my details to handle this inquiry in accordance with Devfinity&apos;s{" "}
              <Link href="/privacy" target="_blank" className="text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-700">
                Privacy Policy
              </Link>.
            </label>
          </div>

          {/* Validation Feedback */}
          {validationError && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-mono text-rose-700 flex items-center space-x-2 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Animated Submit Button with Simulated Loading State */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-4 rounded-full font-mono font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 active:scale-[0.99] transition-all flex items-center justify-center space-x-2 disabled:opacity-80 cursor-pointer disabled:cursor-not-allowed"
            data-cursor="rocket"
          >
            {isSending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Sleek Floating Toast Notification */}
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full mx-auto p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/10 flex items-center justify-between space-x-3 transition-all animate-in slide-in-from-bottom-5 fade-in duration-300"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold text-zinc-900 uppercase">Intake Received</h4>
              <p className="text-xs font-semibold text-emerald-700">{toastMessage}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowToast(false)}
            className="w-7 h-7 rounded-lg hover:bg-black/[0.05] text-zinc-400 hover:text-zinc-700 flex items-center justify-center transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}
