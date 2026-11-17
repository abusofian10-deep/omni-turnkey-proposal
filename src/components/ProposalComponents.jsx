// src/components/ProposalComponents.jsx
import React, { useState } from "react";
import {
  FIVE_CORE_DEPARTMENTS,
  FIVE_PRODUCT_LINES_MATRIX,
  ROADMAP_90_DAYS_PHASES,
  DELIVERABLES_16_LIST,
  WORKFORCE_DATA,
  EXTERNAL_OUTSOURCING_PAGE_DATA,
  AUTOMATION_NEXT_PHASE_BLOCK,
  GLOBAL_DISCLAIMERS
} from "../data/proposalData";

export function FiveDepartmentsSection({ lang = "ar" }) {
  const [selectedDeptIndex, setSelectedDeptIndex] = useState(null);
  const isAr = lang === "ar";
  const selectedDept = selectedDeptIndex !== null ? FIVE_CORE_DEPARTMENTS[selectedDeptIndex] : null;

  return (
    <section dir={isAr ? "rtl" : "ltr"} className="w-full max-w-7xl mx-auto px-4 py-6 md:py-10">
      <div className="mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-slate-900">
          {isAr
            ? "الأقسام الخمسة الرئيسية لمنظومة التحول وإعادة الهيكلة"
            : "The Five Core Departments of Institutional Restructuring"}
        </h2>
        <p className="text-slate-600 mt-2 text-xs md:text-base">
          {isAr
            ? "اضغط على أي قسم لفتح نافذة المحاور التفصيلية، المخرجات المسلّمة، والنموذج التطبيقي الملموس."
            : "Click any department card to open its detailed window with pillars, deliverables, and practical application example."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FIVE_CORE_DEPARTMENTS.map((dept, idx) => (
          <div
            key={dept.id}
            onClick={() => setSelectedDeptIndex(idx)}
            className="cursor-pointer group bg-white border border-slate-200 hover:border-emerald-600 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="w-9 h-9 rounded-xl bg-slate-900 text-emerald-400 font-bold text-sm flex items-center justify-center">
                  {dept.number}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  {isAr ? "محور أساسي" : "Core Pillar"}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                {dept.title[lang]}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                {dept.summary[lang]}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>{isAr ? "فتح نافذة القسم والتطبيق الملموس" : "Open Department & Example Window"}</span>
              <span>↗</span>
            </div>
          </div>
        ))}
      </div>

      {selectedDept && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 md:p-4"
          onClick={() => setSelectedDeptIndex(null)}
        >
          <div
            dir={isAr ? "rtl" : "ltr"}
            className="bg-white rounded-3xl w-[95vw] max-w-3xl max-h-[88vh] overflow-y-auto shadow-2xl border border-slate-200 p-5 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-slate-900 text-emerald-400 font-bold text-sm flex items-center justify-center shrink-0">
                  {selectedDept.number}
                </span>
                <h3 className="text-base md:text-xl font-bold text-slate-900">
                  {selectedDept.title[lang]}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDeptIndex(null)}
                className="text-slate-400 hover:text-slate-800 text-xl font-bold px-2"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <h4 className="text-sm font-bold text-slate-900 mb-2.5">
                  {isAr ? "🎯 محاور العمل والتطوير في هذا القسم:" : "🎯 Key Operational & Governance Pillars:"}
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-slate-700">
                  {selectedDept.pillars[lang].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-emerald-600 font-bold mt-0.5">●</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4">
                <h4 className="text-sm font-bold text-amber-950 mb-1.5">
                  {isAr
                    ? "💡 النموذج التطبيقي الملموس (كمثال استرشادي تقريبي*):"
                    : "💡 Practical Application Scenario (Illustrative Benchmark*):"}
                </h4>
                <p className="text-xs md:text-sm text-slate-800 leading-relaxed">
                  {selectedDept.practicalExample[lang]}
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                <h4 className="text-sm font-bold text-emerald-950 mb-2">
                  {isAr ? "📦 المخرجات الملموسة المرتبطة بالقسم:" : "📦 Associated Tangible Deliverables:"}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-emerald-900">
                  {selectedDept.deliverables[lang].map((d, i) => (
                    <li key={i} className="leading-relaxed">{d}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
              <button
                disabled={selectedDeptIndex === 0}
                onClick={() => setSelectedDeptIndex((prev) => Math.max(0, prev - 1))}
                className="px-3 md:px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 disabled:opacity-40 hover:bg-slate-100"
              >
                {isAr ? "→ القسم السابق" : "← Previous"}
              </button>
              <button
                onClick={() => setSelectedDeptIndex(null)}
                className="px-4 md:px-5 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800"
              >
                {isAr ? "إغلاق النافذة" : "Close"}
              </button>
              <button
                disabled={selectedDeptIndex === FIVE_CORE_DEPARTMENTS.length - 1}
                onClick={() => setSelectedDeptIndex((prev) => Math.min(FIVE_CORE_DEPARTMENTS.length - 1, prev + 1))}
                className="px-3 md:px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 disabled:opacity-40 hover:bg-slate-100"
              >
                {isAr ? "القسم التالي ←" : "Next →"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
        {GLOBAL_DISCLAIMERS.illustrativeFooter[lang]}
      </div>
    </section>
  );
}

export function FiveProductLinesSection({ lang = "ar" }) {
  const isAr = lang === "ar";

  return (
    <section dir={isAr ? "rtl" : "ltr"} className="w-full max-w-7xl mx-auto px-4 py-6 md:py-10">
      <div className="mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-slate-900">
          {isAr
            ? "مصفوفة خطوط المنتجات الخمسة (الخطوط القائمة والتوسعية)"
            : "Five Product Lines Matrix (Legacy & Upcoming Expansion Lines)"}
        </h2>
      </div>

      <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-2xl text-xs md:text-sm text-blue-950 leading-relaxed mb-6">
        {GLOBAL_DISCLAIMERS.matrixFraming[lang]}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {FIVE_PRODUCT_LINES_MATRIX.map((line) => (
          <div key={line.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full mb-3">
                {line.statusBadge[lang]}
              </span>
              <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{line.name[lang]}</h3>
              <p className="text-xs md:text-sm text-slate-600 mb-4 leading-relaxed">
                <strong className="text-slate-800">{isAr ? "نطاق التغليف والعبوات: " : "Packaging Scope: "}</strong>
                {line.packagingExample[lang]}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">{line.benchmarkScenario[lang]}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
        {GLOBAL_DISCLAIMERS.illustrativeFooter[lang]}
      </div>
    </section>
  );
}

export function Roadmap90DaysSection({ lang = "ar", onNavigateToDeliverables }) {
  const [activeMobilePhase, setActiveMobilePhase] = useState("phase-1");
  const [expandedTracks, setExpandedTracks] = useState({});
  const isAr = lang === "ar";

  const toggleTrack = (trackId) => {
    setExpandedTracks((prev) => ({ ...prev, [trackId]: !prev[trackId] }));
  };

  return (
    <section dir={isAr ? "rtl" : "ltr"} className="w-full max-w-7xl mx-auto px-4 py-6 md:py-10">
      <div className="mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-slate-900">
          {isAr
            ? "خارطة الطريق التنفيذية (90 يوماً) — التزامن المرحلي التفاعلي"
            : "90-Day Execution Roadmap — Interactive Phased Delivery"}
        </h2>
        <p className="text-slate-600 mt-2 text-xs md:text-base">
          {isAr
            ? "اضغط على أي مسار داخل كل مرحلة لاستعراض المثال التطبيقي الملموس والمخرجات المسلّمة للإدارة."
            : "Click any track inside each stage to reveal the practical illustrative example and tangible management deliverables."}
        </p>
      </div>

      <div className="flex lg:hidden gap-2 mb-6 bg-slate-100 p-1.5 rounded-xl sticky top-2 z-20 shadow-sm">
        {ROADMAP_90_DAYS_PHASES.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setActiveMobilePhase(phase.id)}
            className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
              activeMobilePhase === phase.id ? "bg-emerald-700 text-white shadow" : "text-slate-600 hover:bg-white/60"
            }`}
          >
            {phase.tabLabel[lang]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {ROADMAP_90_DAYS_PHASES.map((phase) => {
          const isVisibleOnMobile = activeMobilePhase === phase.id;
          return (
            <div
              key={phase.id}
              className={`${
                isVisibleOnMobile ? "flex" : "hidden"
              } lg:flex flex-col justify-between bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden`}
            >
              <div>
                <div className="bg-slate-900 text-white p-5">
                  <span className="inline-block text-xs font-semibold bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full mb-2">
                    {phase.subtitle}
                  </span>
                  <h3 className="text-base md:text-lg font-bold leading-snug">{phase.title[lang]}</h3>
                </div>

                <div className="p-4 space-y-3">
                  {phase.tracks.map((track) => {
                    const isOpen = !!expandedTracks[track.id];
                    return (
                      <div key={track.id} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
                        <button
                          type="button"
                          onClick={() => toggleTrack(track.id)}
                          className={`w-full text-start p-4 flex flex-col gap-2 hover:bg-slate-100/80 transition-colors ${
                            isAr ? "border-r-4 border-r-emerald-600" : "border-l-4 border-l-emerald-600"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 w-full">
                            <h4 className="text-sm font-bold text-slate-900">{track.trackName[lang]}</h4>
                            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md shrink-0">
                              {isOpen ? (isAr ? "إغلاق ▲" : "Hide ▲") : (isAr ? "التفاصيل ▼" : "Details ▼")}
                            </span>
                          </div>
                          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{track.summary[lang]}</p>
                        </button>

                        {isOpen && (
                          <div className="p-4 bg-white border-t border-slate-200 space-y-3">
                            <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-3">
                              <span className="block text-xs font-bold text-amber-900 mb-1">
                                {isAr
                                  ? "💡 المثال التطبيقي الملموس (كمثال استرشادي تقريبي*):"
                                  : "💡 Practical Application (Illustrative Benchmark*):"}
                              </span>
                              <p className="text-xs text-slate-700 leading-relaxed">{track.practicalExample[lang]}</p>
                            </div>

                            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-lg p-3">
                              <span className="block text-xs font-bold text-emerald-900 mb-1.5">
                                {isAr ? "📦 المخرجات الملموسة المسلّمة للإدارة:" : "📦 Tangible Management Deliverables:"}
                              </span>
                              <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                                {track.managementDeliverables[lang].map((deliv, i) => (
                                  <li key={i} className="leading-relaxed">
                                    {deliv}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-emerald-50 border-t border-emerald-200 p-4 m-4 rounded-xl">
                <div className="text-xs font-bold text-emerald-900 mb-1">
                  {isAr
                    ? "🔗 نقطة الالتقاء (المخرج التنفيذي الموحد للمرحلة):"
                    : "🔗 Convergence Point (Unified Phase Gate Deliverable):"}
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">{phase.unifiedPhaseGate[lang]}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
        {GLOBAL_DISCLAIMERS.illustrativeFooter[lang]}
      </div>

      {onNavigateToDeliverables && (
        <div className="mt-8 flex justify-end border-t border-slate-200 pt-6">
          <button
            onClick={onNavigateToDeliverables}
            className="bg-slate-900 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
          >
            {isAr
              ? "استعراض قائمة المخرجات التعاقدية الـ 16 الملموسة ←"
              : "Explore the 16 Contractual SOW Deliverables →"}
          </button>
        </div>
      )}
    </section>
  );
}

export function Deliverables16Section({ lang = "ar" }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isAr = lang === "ar";
  const selectedItem = selectedIndex !== null ? DELIVERABLES_16_LIST[selectedIndex] : null;

  return (
    <section dir={isAr ? "rtl" : "ltr"} className="w-full max-w-7xl mx-auto px-4 py-6 md:py-10">
      <div className="mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-slate-900">
          {isAr
            ? "قائمة المخرجات التعاقدية الـ 16 الملموسة (SOW Deliverables)"
            : "The 16 Tangible Contractual Deliverables (Unified SOW)"}
        </h2>
        <p className="text-slate-600 mt-2 text-xs md:text-base">
          {isAr
            ? "اضغط على أي مخرج لفتح نافذة التفاصيل الكاملة، مكونات التسليم، والتطبيق العملي الملموس."
            : "Click any deliverable card to open its detailed handover window and practical application scenario."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {DELIVERABLES_16_LIST.map((item, idx) => (
          <div
            key={item.code}
            onClick={() => setSelectedIndex(idx)}
            className="cursor-pointer group bg-white border border-slate-200 hover:border-emerald-600 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-bold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md border border-slate-200">
                  {item.code}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  {item.phase[lang]}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                {item.title[lang]}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">{item.summary[lang]}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>{isAr ? "استعراض التطبيق الملموس وتفاصيل التسليم" : "Explore Practical Application & Handover"}</span>
              <span>↗</span>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 md:p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            dir={isAr ? "rtl" : "ltr"}
            className="bg-white rounded-3xl w-[95vw] max-w-2xl max-h-[88vh] overflow-y-auto shadow-2xl border border-slate-200 p-5 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold bg-slate-900 text-white px-2.5 py-1 rounded-md">
                    {selectedItem.code}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    {selectedItem.phase[lang]}
                  </span>
                </div>
                <h3 className="text-base md:text-xl font-bold text-slate-900">{selectedItem.title[lang]}</h3>
              </div>
              <button
                onClick={() => setSelectedIndex(null)}
                className="text-slate-400 hover:text-slate-800 text-xl font-bold px-2"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  {isAr ? "📋 مكونات المخرج المسلّمة للإدارة:" : "📋 Tangible Handover Components:"}
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-slate-700">
                  {selectedItem.handoverComponents[lang].map((comp, i) => (
                    <li key={i} className="leading-relaxed">
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4">
                <h4 className="text-sm font-bold text-amber-950 mb-1.5">
                  {isAr
                    ? "💡 التطبيق العملي الملموس (كمثال استرشادي تقريبي*):"
                    : "💡 Practical Application Scenario (Illustrative Benchmark*):"}
                </h4>
                <p className="text-xs md:text-sm text-slate-800 leading-relaxed">{selectedItem.practicalExample[lang]}</p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                <h4 className="text-sm font-bold text-emerald-950 mb-1.5">
                  {isAr ? "✅ معيار الاعتماد والأثر المؤسسي:" : "✅ Acceptance Criteria & Institutional Impact:"}
                </h4>
                <p className="text-xs md:text-sm text-emerald-900 leading-relaxed">
                  {selectedItem.acceptanceCriteria[lang]}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
              <button
                disabled={selectedIndex === 0}
                onClick={() => setSelectedIndex((prev) => Math.max(0, prev - 1))}
                className="px-3 md:px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 disabled:opacity-40 hover:bg-slate-100"
              >
                {isAr ? "→ السابق" : "← Previous"}
              </button>
              <button
                onClick={() => setSelectedIndex(null)}
                className="px-4 md:px-5 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800"
              >
                {isAr ? "إغلاق" : "Close"}
              </button>
              <button
                disabled={selectedIndex === DELIVERABLES_16_LIST.length - 1}
                onClick={() => setSelectedIndex((prev) => Math.min(DELIVERABLES_16_LIST.length - 1, prev + 1))}
                className="px-3 md:px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 disabled:opacity-40 hover:bg-slate-100"
              >
                {isAr ? "التالي ←" : "Next →"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
        {GLOBAL_DISCLAIMERS.illustrativeFooter[lang]}
      </div>
    </section>
  );
}

export function WorkforceSection({ lang = "ar", onNavigateToOutsourcing }) {
  const isAr = lang === "ar";
  const data = WORKFORCE_DATA;

  return (
    <section dir={isAr ? "rtl" : "ltr"} className="w-full max-w-7xl mx-auto px-4 py-6 md:py-10">
      <div className="mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-slate-900">{data.title[lang]}</h2>
        <p className="text-slate-600 mt-2 text-xs md:text-base">{data.subtitle[lang]}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-base md:text-lg font-bold text-slate-900 mb-4">{data.executiveLeadership.heading[lang]}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.executiveLeadership.members.map((m, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <span className="inline-block text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full mb-2">
                {m.role[lang]}
              </span>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{m.name[lang]}</h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{m.scope[lang]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6 mb-6">
        <h3 className="text-base md:text-lg font-bold text-emerald-300 mb-2">{data.operationalTeam.heading[lang]}</h3>
        <p className="text-xs md:text-sm text-slate-200 leading-relaxed">{data.operationalTeam.description[lang]}</p>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-xs md:text-sm text-emerald-950 font-medium leading-relaxed">{data.outsourcingLinkNote[lang]}</p>
        {onNavigateToOutsourcing && (
          <button
            onClick={onNavigateToOutsourcing}
            className="shrink-0 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors"
          >
            {isAr ? "استعراض صفحة أذرع التنفيذ الخارجي ←" : "View External Execution Arms Page →"}
          </button>
        )}
      </div>
    </section>
  );
}

export function ExternalOutsourcingSection({ lang = "ar", onNavigateToFutureVision }) {
  const isAr = lang === "ar";
  const data = EXTERNAL_OUTSOURCING_PAGE_DATA;

  return (
    <section dir={isAr ? "rtl" : "ltr"} className="w-full max-w-7xl mx-auto px-4 py-6 md:py-10">
      <div className="mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-slate-900">{data.title[lang]}</h2>
        <p className="text-slate-600 mt-2 text-xs md:text-base">{data.subtitle[lang]}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.arms.map((arm, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{arm.title[lang]}</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{arm.detail[lang]}</p>
          </div>
        ))}
      </div>

      {onNavigateToFutureVision && (
        <div className="mt-8 flex justify-end border-t border-slate-200 pt-6">
          <button
            onClick={onNavigateToFutureVision}
            className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
          >
            {isAr
              ? "الانتقال إلى الصفحة الختامية: الرؤية المستقبلية والأتمتة ←"
              : "Proceed to Final Page: Future Vision & Automation →"}
          </button>
        </div>
      )}
    </section>
  );
}

export function FutureVisionStandalonePage({ lang = "ar" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = AUTOMATION_NEXT_PHASE_BLOCK;
  const isAr = lang === "ar";

  return (
    <section dir={isAr ? "rtl" : "ltr"} className="w-full max-w-7xl mx-auto px-4 py-6 md:py-10">
      <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-3xl p-6 md:p-10 shadow-lg border border-emerald-700">
        <span className="inline-block text-xs font-bold bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-3 py-1 rounded-full mb-4">
          {data.badge[lang]}
        </span>

        <h2 className="text-xl md:text-3xl font-bold leading-snug mb-6">{data.title[lang]}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/15">
            <h3 className="text-base font-bold text-emerald-200 mb-2">{data.strategicNoteTitle[lang]}</h3>
            <p className="text-xs md:text-sm text-emerald-50 leading-relaxed">{data.strategicNoteBody[lang]}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/15">
            <h3 className="text-base font-bold text-emerald-200 mb-2">{data.whyGovernanceFirstTitle[lang]}</h3>
            <p className="text-xs md:text-sm text-emerald-50 leading-relaxed">{data.whyGovernanceFirstBody[lang]}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 bg-emerald-950/60 border border-emerald-600/40 rounded-2xl p-5">
          <div>
            <h3 className="text-base md:text-lg font-bold text-white">{data.standalonePlanTitle[lang]}</h3>
            <p className="text-xs md:text-sm text-emerald-200 mt-1">
              {isAr
                ? "استعرض المحاور الأربعة لخطة الأتمتة والذكاء الاصطناعي في نافذة مستقلة."
                : "Inspect the four pillars of the standalone Automation & AI Roadmap in a dedicated window."}
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-emerald-950 hover:bg-emerald-100 font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow"
          >
            {isAr ? "فتح نافذة خطة الأتمتة والذكاء الاصطناعي ↗" : "Open Automation & AI Roadmap Window ↗"}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 md:p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            dir={isAr ? "rtl" : "ltr"}
            className="bg-white rounded-3xl w-[95vw] max-w-3xl max-h-[88vh] overflow-y-auto shadow-2xl border border-slate-200 p-5 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4 mb-5">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  {data.badge[lang]}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-2">{data.standalonePlanTitle[lang]}</h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-800 text-xl font-bold px-2"
              >
                ✕
              </button>
            </div>

            <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-6">{data.standalonePlanIntro[lang]}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {data.pillars.map((pillar, idx) => (
                <div key={idx} className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4">
                  <h4 className="text-sm font-bold text-emerald-950 mb-1.5">✓ {pillar.title[lang]}</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">{pillar.detail[lang]}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-end border-t border-slate-200 pt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-2.5 rounded-xl"
              >
                {isAr ? "إغلاق النافذة" : "Close Window"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
