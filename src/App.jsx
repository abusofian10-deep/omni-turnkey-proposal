// src/App.jsx
import React, { useState } from "react";
import { EXECUTIVE_PREAMBLE, EXECUTIVE_VISION_10_PAIRS } from "./data/proposalData";
import {
  FiveDepartmentsSection,
  FiveProductLinesSection,
  Roadmap90DaysSection,
  Deliverables16Section,
  WorkforceSection,
  ExternalOutsourcingSection,
  FutureVisionStandalonePage
} from "./components/ProposalComponents";

const NAV_ITEMS = [
  { id: "vision", label: { ar: "1. الرؤية التنفيذية", en: "1. Executive Vision" } },
  { id: "departments", label: { ar: "2. الأقسام الخمسة", en: "2. 5 Core Departments" } },
  { id: "lines", label: { ar: "3. خطوط المنتجات الـ 5", en: "3. 5 Product Lines" } },
  { id: "roadmap", label: { ar: "4. خريطة الـ 90 يوماً", en: "4. 90-Day Roadmap" } },
  { id: "deliverables", label: { ar: "5. المخرجات الـ 16", en: "5. 16 Deliverables" } },
  { id: "workforce", label: { ar: "6. القوى العاملة", en: "6. Workforce" } },
  { id: "outsourcing", label: { ar: "7. أذرع التنفيذ الخارجي", en: "7. External Arms" } },
  { id: "future", label: { ar: "8. الرؤية المستقبلية 🚀", en: "8. Future Vision 🚀" } }
];

function ExecutiveVisionSection({ lang }) {
  const isAr = lang === "ar";
  return (
    <section dir={isAr ? "rtl" : "ltr"} className="w-full max-w-7xl mx-auto px-4 py-6 md:py-10">
      <div className="bg-slate-900 text-white rounded-2xl md:rounded-3xl p-5 md:p-8 mb-8 shadow-md border border-slate-800">
        <span className="inline-block text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full mb-3">
          Omni Turnkey — Executive Mandate
        </span>
        <h1 className="text-xl md:text-3xl font-bold leading-snug mb-4">{EXECUTIVE_PREAMBLE.title[lang]}</h1>
        <div className="space-y-1.5 text-xs md:text-sm text-emerald-200 font-medium mb-4 border-b border-slate-700/80 pb-4">
          <p>{EXECUTIVE_PREAMBLE.submittedTo[lang]}</p>
          <p className="text-slate-300">{EXECUTIVE_PREAMBLE.preparedBy[lang]}</p>
        </div>
        <p className="text-xs md:text-base text-slate-200 leading-relaxed">{EXECUTIVE_PREAMBLE.mandate[lang]}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg md:text-2xl font-bold text-slate-900">
          {isAr
            ? "التشخيص التنفيذي: 10 تحديات تشغيلية ومالية مقابل 10 حلول مؤسسية من Omni Turnkey"
            : "Executive Diagnosis: 10 Operational Gaps vs. 10 Omni Turnkey Institutional Solutions"}
        </h2>
      </div>

      <div className="space-y-4">
        {EXECUTIVE_VISION_10_PAIRS.map((pair) => (
          <div
            key={pair.id}
            className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white"
          >
            <div className="p-4 md:p-5 bg-rose-50/40 border-b md:border-b-0 md:border-e border-slate-200">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-800 text-xs font-bold flex items-center justify-center shrink-0">
                  {pair.id}
                </span>
                <h3 className="text-sm md:text-base font-bold text-slate-900">{pair.problemTitle[lang]}</h3>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{pair.problemDesc[lang]}</p>
            </div>

            <div className="p-4 md:p-5 bg-emerald-50/40">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Omni Turnkey
                </span>
                <h3 className="text-sm md:text-base font-bold text-emerald-950">{pair.solutionTitle[lang]}</h3>
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">{pair.solutionDesc[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [lang, setLang] = useState("ar");
  const [activeTab, setActiveTab] = useState("vision");
  const isAr = lang === "ar";

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div dir={isAr ? "rtl" : "ltr"} className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden flex flex-col">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-emerald-400 font-black flex items-center justify-center text-sm">
              OT
            </div>
            <div>
              <div className="text-sm md:text-base font-bold text-slate-900 leading-none">Omni Turnkey</div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {isAr ? "منطقة الرسيل الصناعية — سلطنة عُمان" : "Al Rusayl Industrial Estate — Oman"}
              </div>
            </div>
          </div>

          <button
            onClick={() => setLang((prev) => (prev === "ar" ? "en" : "ar"))}
            className="min-h-[40px] px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-emerald-800 text-white text-xs font-bold transition-colors shrink-0"
          >
            {isAr ? "English (LTR)" : "العربية (RTL)"}
          </button>
        </div>

        <nav className="max-w-7xl mx-auto px-4 pb-2.5 flex items-center gap-2 overflow-x-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            const isFuture = item.id === "future";
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`min-h-[42px] px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? isFuture
                      ? "bg-emerald-800 text-white shadow-sm"
                      : "bg-slate-900 text-white shadow-sm"
                    : isFuture
                    ? "bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200/70"
                }`}
              >
                {item.label[lang]}
              </button>
            );
          })}
        </nav>
      </header>

      <main className="flex-1">
        {activeTab === "vision" && <ExecutiveVisionSection lang={lang} />}
        {activeTab === "departments" && <FiveDepartmentsSection lang={lang} />}
        {activeTab === "lines" && <FiveProductLinesSection lang={lang} />}
        {activeTab === "roadmap" && (
          <Roadmap90DaysSection lang={lang} onNavigateToDeliverables={() => handleTabChange("deliverables")} />
        )}
        {activeTab === "deliverables" && <Deliverables16Section lang={lang} />}
        {activeTab === "workforce" && (
          <WorkforceSection lang={lang} onNavigateToOutsourcing={() => handleTabChange("outsourcing")} />
        )}
        {activeTab === "outsourcing" && (
          <ExternalOutsourcingSection lang={lang} onNavigateToFutureVision={() => handleTabChange("future")} />
        )}
        {activeTab === "future" && <FutureVisionStandalonePage lang={lang} />}
      </main>

      <footer className="bg-white border-t border-slate-200 py-5 px-4 text-center text-xs text-slate-500">
        {isAr
          ? "© 2026 منظومة Omni Turnkey للاستشارات الإدارية والحوكمة والتحول الرقمي — جميع الحقوق محفوظة."
          : "© 2026 Omni Turnkey Management Consulting, Governance & Digital Transformation. All Rights Reserved."}
      </footer>
    </div>
  );
}
