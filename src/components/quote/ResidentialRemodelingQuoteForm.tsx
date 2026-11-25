"use client";

import { QuoteForm, type LegacyQuestion } from "@/components/quote/QuoteForm";
import { SITE } from "@/lib/site";

const WEBHOOK_URL = `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=${SITE.domain}`;

const TRADE_TYPES = [
  "General remodeling contractor",
  "Kitchen and bath remodeler",
  "Whole-home remodeler",
  "Home addition contractor",
  "Other",
];

// Pre-port field names with no canonical twin: still posted under their own names (optional).
const LEGACY: LegacyQuestion[] = [
  { name: "yearsInBusiness", label: "Years in business", type: "number" },
];

// Pre-port names that mirror a canonical answer the shared form already asks: derived, never asked twice.
const deriveLegacy = (d: Record<string, string>): Record<string, string> => ({
  name: `${d.firstName ?? ""} ${d.lastName ?? ""}`.trim(),
  streetAddress: d.address ?? "",
  serviceType: d.coverageTypes ?? "",
  priorCarrierName: d.currentCarrier ?? "",
  priorPolicyExpiration: d.currentPolicyExpiration ?? "",
  message: d.notes ?? "",
});

export function ResidentialRemodelingQuoteForm() {
  return (
    <div className="rounded-3xl bg-white border border-adobe shadow-card p-7 md:p-9">
      <QuoteForm
        formName="quote"
        tradeName="Residential Remodeling"
        endpoint={WEBHOOK_URL}
        format="json"
        netlifyFallback="/__forms.html"
        extraFields={{ form_name: "quote", source: SITE.domain }}
        options={{ yn: true, feinRequired: false }}
        tradeTypeOptions={TRADE_TYPES}
        defaults={{ coverageTypes: "General Liability" }}
        legacyQuestions={LEGACY}
        deriveLegacy={deriveLegacy}
        classes={{
          input: "w-full px-4 py-3 rounded-xl border border-adobe bg-cream/50 text-espresso placeholder-mocha/60 focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all text-sm",
          label: "block text-sm font-heading font-semibold text-espresso mb-1.5",
          legend: "block text-sm font-heading font-semibold text-espresso mb-1.5",
          heading: "font-heading font-extrabold text-espresso text-lg pt-4",
          option: "flex items-center gap-2 text-sm text-espresso",
          detail: "mt-2 grid md:grid-cols-2 gap-3 pl-4 border-l-2 border-adobe",
          error: "text-sm text-red-600",
          button: "w-full flex items-center justify-center gap-2 px-8 py-4 bg-clay-gradient text-white font-heading font-bold rounded-full shadow-warm hover:shadow-warm-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed",
        }}
      />
    </div>
  );
}
