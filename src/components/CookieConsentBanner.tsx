"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Shield, Check, X, SlidersHorizontal, Lock } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

const STORAGE_KEY = "devfinity_cookie_consent";

function updateGtagConsent(preferences: CookiePreferences) {
  if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("consent", "update", {
      ad_storage: preferences.marketing ? "granted" : "denied",
      ad_user_data: preferences.marketing ? "granted" : "denied",
      ad_personalization: preferences.marketing ? "granted" : "denied",
      analytics_storage: preferences.analytics ? "granted" : "denied",
    });
  }
}

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: CookiePreferences = JSON.parse(stored);
        updateGtagConsent(parsed);
        return;
      }

      // Check Do-Not-Track or Global Privacy Control
      const dnt =
        typeof window !== "undefined" &&
        (navigator.doNotTrack === "1" ||
          // @ts-expect-error GlobalPrivacyControl may exist on navigator
          navigator.globalPrivacyControl === true);

      if (dnt) {
        // Automatically respect DNT by storing non-essential rejection
        const defaultConsent: CookiePreferences = {
          essential: true,
          analytics: false,
          marketing: false,
          timestamp: Date.now(),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultConsent));
        updateGtagConsent(defaultConsent);
        return;
      }

      // Delay display slightly for smooth page entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 800);

      return () => clearTimeout(timer);
    } catch {
      // In private browsing without localStorage access
    }
  }, []);

  const savePreferences = (preferences: CookiePreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      updateGtagConsent(preferences);
    } catch {
      // Graceful fallback
    }
    setIsVisible(false);
    setShowCustomize(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    });
  };

  const handleRejectNonEssential = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    });
  };

  const handleSaveCustom = () => {
    savePreferences({
      essential: true,
      analytics: analyticsConsent,
      marketing: marketingConsent,
      timestamp: Date.now(),
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Sticky Bottom Cookie Consent Banner */}
      <section
        role="region"
        aria-label="Cookie consent banner"
        className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50 max-w-4xl mx-auto rounded-3xl p-6 bg-white/95 backdrop-blur-xl border border-black/[0.08] shadow-2xl shadow-blue-500/10 transition-all animate-in slide-in-from-bottom-6 duration-300"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start space-x-3.5 max-w-xl">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center justify-center shrink-0 mt-0.5">
              <Cookie className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                <span>Cookie Privacy Preferences</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold border border-blue-200">
                  GDPR &amp; ePrivacy Compliant
                </span>
              </div>
              <p className="text-xs md:text-sm text-zinc-600 leading-relaxed font-normal">
                We use strictly essential cookies for site security and session integrity. Optional performance telemetry is disabled by default. Read our{" "}
                <Link
                  href="/cookies"
                  className="text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-700"
                >
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-700"
                >
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>

          {/* Symmetrical Action Buttons (No Dark Patterns) */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0 justify-end">
            <button
              type="button"
              onClick={() => setShowCustomize(true)}
              className="px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-mono text-xs font-semibold transition-all border border-zinc-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Customize</span>
            </button>
            <button
              type="button"
              onClick={handleRejectNonEssential}
              className="px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-mono text-xs font-bold transition-all border border-zinc-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none cursor-pointer"
            >
              Reject Non-Essential
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none cursor-pointer"
            >
              Accept All
            </button>
          </div>
        </div>
      </section>

      {/* Granular Preferences Modal */}
      {showCustomize && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="w-full max-w-lg rounded-3xl p-6 md:p-8 bg-white border border-black/[0.08] shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
              <div className="flex items-center space-x-2.5">
                <Shield className="w-5 h-5 text-blue-600" />
                <h3 id="cookie-modal-title" className="text-lg font-black text-zinc-900 tracking-tight">
                  Granular Cookie Controls
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-400 hover:text-zinc-700 transition-colors"
                aria-label="Close preferences dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed">
              In accordance with international privacy laws, non-essential cookies are not pre-checked. You can choose which cookies to enable:
            </p>

            <div className="space-y-3.5">
              {/* Essential Cookies (Locked) */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                <div className="space-y-0.5 pr-4">
                  <div className="text-xs font-mono font-bold text-zinc-900 flex items-center gap-1.5">
                    <span>Functional &amp; Essential</span>
                    <span className="text-[10px] text-emerald-600 font-semibold">(Always Active)</span>
                  </div>
                  <p className="text-[11px] text-zinc-500">
                    Required for core system navigation, security, and rendering.
                  </p>
                </div>
                <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Lock className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Analytics Cookies (Unchecked by default) */}
              <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-center justify-between hover:border-blue-300 transition-colors">
                <div className="space-y-0.5 pr-4">
                  <label htmlFor="analytics-toggle" className="text-xs font-mono font-bold text-zinc-900 block cursor-pointer">
                    Analytics &amp; Latency Probing
                  </label>
                  <p className="text-[11px] text-zinc-500">
                    Helps us measure anonymous page performance benchmarks.
                  </p>
                </div>
                <input
                  id="analytics-toggle"
                  type="checkbox"
                  checked={analyticsConsent}
                  onChange={(e) => setAnalyticsConsent(e.target.checked)}
                  className="w-5 h-5 rounded-md border-zinc-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
              </div>

              {/* Marketing Cookies (Unchecked by default) */}
              <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-center justify-between hover:border-blue-300 transition-colors">
                <div className="space-y-0.5 pr-4">
                  <label htmlFor="marketing-toggle" className="text-xs font-mono font-bold text-zinc-900 block cursor-pointer">
                    Marketing &amp; Announcements
                  </label>
                  <p className="text-[11px] text-zinc-500">
                    Measures the reach of Devfinity technical case studies.
                  </p>
                </div>
                <input
                  id="marketing-toggle"
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="w-5 h-5 rounded-md border-zinc-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex items-center justify-end space-x-3 border-t border-black/[0.06]">
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="px-4 py-2 rounded-full text-zinc-600 hover:text-zinc-900 font-mono text-xs font-medium hover:bg-zinc-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold transition-all shadow-sm"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
