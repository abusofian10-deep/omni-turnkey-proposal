/* ══════════════════════════════════════════════════════════════
   OMNI TURNKEY — RUSAYL PORTAL
   app.js — Production Application Controller (7-View Architecture)
   Vanilla JavaScript, Zero Dependencies
══════════════════════════════════════════════════════════════ */

'use strict';

// ── GLOBAL APPLICATION STATE ──────────────────────────────────
let currentLang = 'ar';
let currentTab = 'home';
let activeRoadmapMobilePhase = 'phase-1';
let expandedTracks = {}; // trackId -> boolean
let currentDeliverableModalIdx = 0;

// ── INITIALIZATION ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize default language (Arabic RTL)
  applyLanguage('ar', true);

  // 2. Set initial active tab
  setActiveNavButton('home');

  // 3. Render all views
  renderAll();

  // 4. Attach global escape key listener for all modals
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeDeliverableModal();
      closeFutureModal();
      closeDeptModal();
      closeMobileMenu();
    }
  });
});

// ══════════════════════════════════════════════════════════════
// LANGUAGE CONTROLLER
// ══════════════════════════════════════════════════════════════

function toggleLanguage() {
  const nextLang = currentLang === 'ar' ? 'en' : 'ar';
  applyLanguage(nextLang, false);
}
window.toggleLanguage = toggleLanguage;

function applyLanguage(lang, isInit) {
  currentLang = lang;
  const root = document.documentElement;
  const targetDir = lang === 'ar' ? 'rtl' : 'ltr';

  root.lang = lang;
  root.dir = targetDir;

  // Enforce direction on main sections and modals
  document.querySelectorAll('.view-section, .modal-card').forEach(el => {
    el.setAttribute('dir', targetDir);
  });

  // Update static text elements with [data-i18n]
  translateStaticElements(lang);

  // Update language toggle button text
  const toggleBtnText = document.getElementById('lang-toggle-text');
  if (toggleBtnText && window.portalData?.[lang]) {
    toggleBtnText.textContent = window.portalData[lang].lang_toggle;
  }

  // Re-render all views with the new language
  if (!isInit) {
    renderAll();
  }
}

function translateStaticElements(lang) {
  const data = window.portalData?.[lang];
  if (!data) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key] !== undefined && typeof data[key] === 'string') {
      el.textContent = data[key];
    }
  });
}

// ══════════════════════════════════════════════════════════════
// NAVIGATION CONTROLLER & 7-VIEW STRICT ISOLATION
// ══════════════════════════════════════════════════════════════

const VIEW_MAP = {
  home:         { viewId: 'view-vision',       scrollToTop: true },
  vision:       { viewId: 'view-vision',       scrollToTop: false },
  departments:  { viewId: 'view-departments',  scrollToTop: false },
  lines:        { viewId: 'view-lines',        scrollToTop: false },
  roadmap:      { viewId: 'view-roadmap',      scrollToTop: false },
  deliverables: { viewId: 'view-deliverables', scrollToTop: false },
  workforce:    { viewId: 'view-workforce',    scrollToTop: false },
  outsourcing:  { viewId: 'view-outsourcing',  scrollToTop: false },
  future:       { viewId: 'view-future',       scrollToTop: false }
};

function setActiveNavButton(tabKey) {
  // Update desktop nav buttons
  document.querySelectorAll('.desktop-nav .nav-btn').forEach(btn => {
    const btnTab = btn.getAttribute('data-tab');
    if (btnTab === tabKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update mobile nav buttons
  document.querySelectorAll('.mobile-nav .mobile-nav-btn').forEach(btn => {
    const btnTab = btn.getAttribute('data-tab');
    if (btnTab === tabKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function switchTab(tabKey) {
  currentTab = tabKey;
  setActiveNavButton(tabKey);
  closeMobileMenu();

  const config = VIEW_MAP[tabKey] || VIEW_MAP.vision;

  // Strict View Isolation: Deactivate all view sections, activate only target view
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.remove('active');
    sec.style.display = 'none';
  });

  const targetView = document.getElementById(config.viewId);
  if (targetView) {
    targetView.classList.add('active');
    targetView.style.display = 'block';
  }

  // Smooth Scroll
  if (config.scrollToTop || tabKey === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const headerH = document.getElementById('app-header')?.offsetHeight || 116;
    if (targetView) {
      const topPos = targetView.getBoundingClientRect().top + window.pageYOffset - headerH - 12;
      window.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
    }
  }
}
window.switchTab = switchTab;

function goHome() {
  closeProductModal();
  closeDeliverableModal();
  closeFutureModal();
  closeDeptModal();
  closeMobileMenu();
  switchTab('home');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.goHome = goHome;

function toggleMobileMenu() {
  const nav = document.getElementById('mobile-nav');
  nav?.classList.toggle('open');
}
window.toggleMobileMenu = toggleMobileMenu;

function closeMobileMenu() {
  const nav = document.getElementById('mobile-nav');
  nav?.classList.remove('open');
}
window.closeMobileMenu = closeMobileMenu;

// ══════════════════════════════════════════════════════════════
// MASTER RENDER ALL CONTROLLER
// ══════════════════════════════════════════════════════════════

function renderAll() {
  renderVisionSection();
  renderDepartmentsSection();
  renderProductMatrixFramingDisclaimer();
  renderProducts();
  renderRoadmapStages();
  renderDeliverables16();
  renderWorkforceSection();
  renderOutsourcingSection();
  renderFutureVisionSection();
}

// ─────────────────────────────────────────────────────────────
// 1. VIEW: EXECUTIVE VISION (Preamble + 10 Problem/Solution Pairs)
// ─────────────────────────────────────────────────────────────
function renderVisionSection() {
  const preambleContainer = document.getElementById('exec-preamble-box');
  const pairsContainer = document.getElementById('vision-pairs-grid');
  const preamble = window.EXECUTIVE_PREAMBLE || window.proposalData?.EXECUTIVE_PREAMBLE;
  const pairs = window.EXECUTIVE_VISION_10_PAIRS || window.proposalData?.EXECUTIVE_VISION_10_PAIRS;

  const isAr = currentLang === 'ar';

  // Render Preamble
  if (preambleContainer && preamble) {
    preambleContainer.innerHTML = `
      <div class="preamble-inner-card">
        <div class="preamble-header-bar">
          <span class="preamble-badge">${isAr ? 'الديباجة التنفيذية المعتمدة' : 'Official Executive Preamble'}</span>
          <h3 class="preamble-title">${escHtml(preamble.title[currentLang])}</h3>
        </div>
        <div class="preamble-meta-grid">
          <div class="preamble-meta-item">
            <span class="meta-label">👤 ${isAr ? 'مُقدّمة إلى:' : 'Submitted to:'}</span>
            <p class="meta-val">${escHtml(preamble.submittedTo[currentLang])}</p>
          </div>
          <div class="preamble-meta-item">
            <span class="meta-label">🏢 ${isAr ? 'إعداد وتنفيذ:' : 'Prepared by:'}</span>
            <p class="meta-val">${escHtml(preamble.preparedBy[currentLang])}</p>
          </div>
        </div>
        <div class="preamble-mandate-box">
          <span class="mandate-icon">🎯</span>
          <p class="mandate-text">${escHtml(preamble.mandate[currentLang])}</p>
        </div>
      </div>
    `;
  }

  // Render 10 Pairs
  if (pairsContainer && pairs) {
    pairsContainer.innerHTML = pairs.map(pair => `
      <div class="vision-pair-card">
        <div class="vision-pair-problem">
          <div class="pair-card-header bar-problem">
            <span class="pair-badge red">🚨 ${isAr ? 'التحدي الواقعي' : 'Operational Challenge'} 0${pair.id}</span>
          </div>
          <h4 class="pair-heading">${escHtml(pair.problemTitle[currentLang])}</h4>
          <p class="pair-desc">${escHtml(pair.problemDesc[currentLang])}</p>
        </div>
        <div class="vision-pair-solution">
          <div class="pair-card-header bar-solution">
            <span class="pair-badge green">🛡️ ${isAr ? 'حل Omni Turnkey التنفيذي' : 'Omni Turnkey Solution'} 0${pair.id}</span>
          </div>
          <h4 class="pair-heading">${escHtml(pair.solutionTitle[currentLang])}</h4>
          <p class="pair-desc">${escHtml(pair.solutionDesc[currentLang])}</p>
        </div>
      </div>
    `).join('');
  }
}

// ─────────────────────────────────────────────────────────────
// 2. VIEW: 5 CORE DEPARTMENTS
// ─────────────────────────────────────────────────────────────
let currentDeptIndex = 0;

function renderDepartmentsSection() {
  const grid = document.getElementById('departments-grid');
  const disclaimer = document.getElementById('departments-disclaimer');
  const depts = window.FIVE_CORE_DEPARTMENTS || (typeof FIVE_CORE_DEPARTMENTS !== 'undefined' ? FIVE_CORE_DEPARTMENTS : []);
  const disc = window.GLOBAL_DISCLAIMERS || (typeof GLOBAL_DISCLAIMERS !== 'undefined' ? GLOBAL_DISCLAIMERS : null);
  const isAr = currentLang === 'ar';

  if (disclaimer && disc && disc.illustrativeFooter) {
    disclaimer.innerHTML = `
      <div class="matrix-framing-badge">
        <span class="framing-icon">⚠️</span>
        <span class="framing-title">${isAr ? 'تنويه منهجي واستيضاح استرشادي' : 'Methodological & Benchmark Note'}</span>
      </div>
      <p class="matrix-framing-text">${disc.illustrativeFooter[currentLang] || disc.illustrativeFooter.ar}</p>
    `;
  }

  if (!grid || !depts || !depts.length) return;

  grid.innerHTML = depts.map((dept, idx) => {
    const title = dept.title[currentLang] || dept.title.ar;
    const summary = dept.summary[currentLang] || dept.summary.ar;
    const badgeText = isAr ? 'محور أساسي' : 'Core Pillar';
    const actionText = isAr ? 'فتح نافذة القسم والتطبيق الملموس' : 'Open Department & Example Window';

    return `
      <div class="dept-card" onclick="openDeptModal(${idx})">
        <div class="dept-card-top">
          <div class="dept-card-header">
            <span class="dept-card-num">${dept.number}</span>
            <span class="dept-card-pill">${badgeText}</span>
          </div>
          <h3 class="dept-card-title">${title}</h3>
          <p class="dept-card-summary">${summary}</p>
        </div>
        <div class="dept-card-footer">
          <span class="dept-action-text">${actionText}</span>
          <span class="dept-action-arrow">↗</span>
        </div>
      </div>
    `;
  }).join('');
}

// ─────────────────────────────────────────────────────────────
// 3. VIEW: 5 PRODUCT LINES MATRIX
// ─────────────────────────────────────────────────────────────
function renderProductMatrixFramingDisclaimer() {
  const box = document.getElementById('matrix-framing-disclaimer');
  if (!box) return;
  const isAr = currentLang === 'ar';
  const text = window.GLOBAL_DISCLAIMERS?.matrixFraming?.[currentLang] || '';
  box.innerHTML = `
    <div class="disclaimer-inner">
      <span class="disclaimer-badge">${isAr ? 'إطار توضيحي استرشادي' : 'Illustrative Framework'}</span>
      <p class="disclaimer-text">${escHtml(text)}</p>
    </div>
  `;
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const prods = window.portalData?.productLinesData;
  if (!grid || !prods) return;

  const isAr = currentLang === 'ar';

  grid.innerHTML = prods.map(prod => `
    <div class="product-card">
      <div>
        <div class="product-card-top">
          <span class="product-icon">${prod.icon}</span>
          <div>
            <h3 class="product-name">${escHtml(isAr ? prod.name_ar : prod.name_en)}</h3>
            <span class="product-weights-tag">⚖️ ${escHtml(prod.weights)}</span>
          </div>
        </div>

        <div class="product-briefs">
          <div class="product-brief-row">
            <span class="brief-label">🔬 ${isAr ? 'الجودة:' : 'QC:'}</span>
            <span class="brief-val">${escHtml(truncateText(isAr ? prod.quality_ar : prod.quality_en, 85))}</span>
          </div>
          <div class="product-brief-row">
            <span class="brief-label">📦 ${isAr ? 'التخزين:' : 'Storage:'}</span>
            <span class="brief-val">${escHtml(truncateText(isAr ? prod.storage_ar : prod.storage_en, 80))}</span>
          </div>
          <div class="product-brief-row">
            <span class="brief-label">💰 ${isAr ? 'الكلفة:' : 'Costing:'}</span>
            <span class="brief-val">${escHtml(truncateText(isAr ? prod.costing_ar : prod.costing_en, 85))}</span>
          </div>
        </div>
      </div>

      <button class="btn-product-details" onclick="openProductModal(${prod.id})">
        ${isAr ? 'عرض المواصفات والمثال العملي ←' : 'View Specs & Practical Example →'}
      </button>
    </div>
  `).join('');
}

// ─────────────────────────────────────────────────────────────
// 3. VIEW: 90-DAY TIME-BASED ROADMAP (Expandable Tracks)
// ─────────────────────────────────────────────────────────────
function setActiveRoadmapMobilePhase(phaseId) {
  activeRoadmapMobilePhase = phaseId;
  renderRoadmapStages();
}
window.setActiveRoadmapMobilePhase = setActiveRoadmapMobilePhase;

function toggleTrack(trackId) {
  expandedTracks[trackId] = !expandedTracks[trackId];
  renderRoadmapStages();
}
window.toggleTrack = toggleTrack;

function renderRoadmapStages() {
  const tabsContainer = document.getElementById('roadmap-phase-tabs');
  const gridContainer = document.getElementById('roadmap-phases-grid');
  const disclaimerBox = document.getElementById('roadmap-disclaimer-box');
  const btnGoto = document.getElementById('btn-goto-deliverables');
  const phases = window.ROADMAP_90_DAYS_PHASES || window.proposalData?.ROADMAP_90_DAYS_PHASES;
  if (!gridContainer || !phases) return;

  const isAr = currentLang === 'ar';

  // Render Mobile Phase Tabs
  if (tabsContainer) {
    tabsContainer.innerHTML = phases.map(phase => {
      const isActive = phase.id === activeRoadmapMobilePhase;
      const label = phase.tabLabel[currentLang];
      return `
        <button class="roadmap-phase-tab-btn ${isActive ? 'active' : ''}" onclick="setActiveRoadmapMobilePhase('${phase.id}')">
          ${escHtml(label)}
        </button>
      `;
    }).join('');
  }

  // Render 3 Phases (Desktop: 3 parallel columns, Mobile: visible based on activeRoadmapMobilePhase)
  gridContainer.innerHTML = phases.map((phase, idx) => {
    const isMobileActive = phase.id === activeRoadmapMobilePhase;
    const tabLabel = phase.tabLabel[currentLang];
    const title = phase.title[currentLang];
    const gateText = phase.unifiedPhaseGate[currentLang];

    const tracksHtml = phase.tracks.map(tr => {
      const trackName = tr.trackName[currentLang];
      const summary = tr.summary[currentLang];
      const isExpanded = !!expandedTracks[tr.id];
      const example = tr.practicalExample ? tr.practicalExample[currentLang] : '';
      const deliverables = tr.managementDeliverables ? tr.managementDeliverables[currentLang] : [];

      return `
        <div class="roadmap-track-item ${isExpanded ? 'is-expanded' : ''}">
          <button class="track-header-btn" onclick="toggleTrack('${tr.id}')" aria-expanded="${isExpanded}">
            <div class="track-header-title-box">
              <span class="track-dot"></span>
              <strong>${escHtml(trackName)}</strong>
            </div>
            <span class="track-expand-pill">${isExpanded ? (isAr ? 'إغلاق ▲' : 'Collapse ▲') : (isAr ? 'التفاصيل ▼' : 'Details ▼')}</span>
          </button>
          <p class="roadmap-track-summary">${escHtml(summary)}</p>

          ${isExpanded ? `
            <div class="track-expanded-content">
              ${example ? `
                <div class="track-example-box">
                  <div class="example-box-header">
                    <span class="example-icon">💡</span>
                    <span class="example-tag">${isAr ? 'مثال تطبيقي (كمثال استرشادي تقريبي*)' : 'Practical Example (Illustrative Benchmark*)'}</span>
                  </div>
                  <p class="example-box-text">${escHtml(example)}</p>
                </div>
              ` : ''}

              ${deliverables && deliverables.length > 0 ? `
                <div class="track-deliverables-box">
                  <div class="deliverables-box-header">
                    <span class="deliv-icon">📦</span>
                    <span class="deliv-tag">${isAr ? 'المخرجات المسلّمة للإدارة:' : 'Handover Deliverables to Leadership:'}</span>
                  </div>
                  <ul class="deliverables-list">
                    ${deliverables.map(d => `<li><span class="deliv-check">✓</span><span>${escHtml(d)}</span></li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    return `
      <div class="roadmap-phase-card ${isMobileActive ? 'mobile-active' : ''}" data-phase="${phase.id}">
        <div class="roadmap-phase-header">
          <span class="roadmap-phase-pill">${escHtml(tabLabel)}</span>
          <span class="roadmap-phase-num">0${idx + 1}</span>
        </div>
        <h3 class="roadmap-phase-title">${escHtml(title)}</h3>
        <div class="roadmap-tracks-list">
          ${tracksHtml}
        </div>
        <div class="roadmap-convergence-box">
          <div class="convergence-header">
            <span class="convergence-icon">🎯</span>
            <span class="convergence-label">${isAr ? 'بوابة التلاقي والانطلاق الموحدة' : 'Unified Phase Gate & Convergence'}</span>
          </div>
          <p class="convergence-text">${escHtml(gateText)}</p>
        </div>
      </div>
    `;
  }).join('');

  // Render illustrative footer disclaimer
  if (disclaimerBox) {
    const discText = window.GLOBAL_DISCLAIMERS?.illustrativeFooter?.[currentLang] || '';
    disclaimerBox.innerHTML = `
      <p class="illustrative-disclaimer-text">${escHtml(discText)}</p>
    `;
  }

  // Fast Navigation Button Text
  if (btnGoto) {
    btnGoto.innerHTML = `
      <span>${isAr ? 'استعراض قائمة المخرجات التعاقدية الـ 16 الملموسة ←' : 'Explore the 16 Contractual SOW Deliverables →'}</span>
    `;
  }
}

// ─────────────────────────────────────────────────────────────
// 4. VIEW: 16 CONTRACTUAL SOW DELIVERABLES (Clickable Cards)
// ─────────────────────────────────────────────────────────────
function renderDeliverables16() {
  const grid = document.getElementById('deliverables-grid');
  const disclaimerBox = document.getElementById('deliverables-disclaimer-box');
  const items = window.DELIVERABLES_16_LIST || window.proposalData?.DELIVERABLES_16_LIST;
  if (!grid || !items) return;

  const isAr = currentLang === 'ar';

  grid.innerHTML = items.map((item, idx) => {
    const code = item.code;
    const phase = item.phase[currentLang];
    const title = item.title[currentLang];
    const summary = item.summary[currentLang];

    return `
      <div class="deliverable-card" onclick="openDeliverableModal(${idx})" title="${isAr ? 'انقر لعرض تفاصيل المخرج' : 'Click to view deliverable details'}">
        <div class="deliverable-card-header">
          <span class="deliverable-code-badge">${escHtml(code)}</span>
          <span class="deliverable-phase-badge">${escHtml(phase)}</span>
        </div>
        <h3 class="deliverable-title">${escHtml(title)}</h3>
        <p class="deliverable-scope">${escHtml(summary)}</p>
        <div class="deliverable-card-action">
          <span class="action-link">${isAr ? 'عرض المواصفات والمخرجات المسلّمة ↗' : 'View Specifications & Handover ↗'}</span>
        </div>
      </div>
    `;
  }).join('');

  if (disclaimerBox) {
    const discText = window.GLOBAL_DISCLAIMERS?.illustrativeFooter?.[currentLang] || '';
    disclaimerBox.innerHTML = `
      <p class="illustrative-disclaimer-text">${escHtml(discText)}</p>
    `;
  }
}

// ─────────────────────────────────────────────────────────────
// 5. VIEW: WORKFORCE (Leadership + 11 Staff + Outsourcing Note)
// ─────────────────────────────────────────────────────────────
function renderWorkforceSection() {
  const container = document.getElementById('workforce-content');
  const data = window.WORKFORCE_DATA || window.proposalData?.WORKFORCE_DATA;
  if (!container || !data) return;

  const isAr = currentLang === 'ar';
  const leadership = data.executiveLeadership;
  const operational = data.operationalTeam;
  const outsourcingNote = data.outsourcingLinkNote[currentLang];

  const leadershipHtml = leadership.members.map(m => `
    <div class="leadership-card">
      <div class="leader-icon-box">${m.icon}</div>
      <div class="leader-info">
        <span class="leader-role">${escHtml(m.role[currentLang])}</span>
        <h4 class="leader-name">${escHtml(m.name[currentLang])}</h4>
        <p class="leader-scope">${escHtml(m.scope[currentLang])}</p>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="workforce-wrapper">
      <!-- Section 1: Executive Leadership -->
      <div class="workforce-block">
        <div class="block-header">
          <h3 class="block-title">${escHtml(leadership.heading[currentLang])}</h3>
          <div class="gold-fading-divider"></div>
        </div>
        <div class="leadership-grid">
          ${leadershipHtml}
        </div>
      </div>

      <!-- Section 2: Operational Team (11 Staff) -->
      <div class="workforce-block operational-block">
        <div class="block-header">
          <h3 class="block-title">${escHtml(operational.heading[currentLang])}</h3>
          <div class="gold-fading-divider"></div>
        </div>
        <div class="operational-team-card">
          <div class="operational-badge-row">
            <span class="op-badge">11 ${isAr ? 'كادراً تشغيلياً وفنياً' : 'Operational & Technical Staff'}</span>
            <span class="op-badge-sub">Biometric ERP Sync</span>
          </div>
          <p class="operational-desc">${escHtml(operational.description[currentLang])}</p>
        </div>
      </div>

      <!-- Section 3: Outsourcing Callout Banner -->
      <div class="outsourcing-callout-card">
        <div class="callout-content">
          <div class="callout-icon">🤝</div>
          <p class="callout-text">${escHtml(outsourcingNote)}</p>
        </div>
        <button class="btn-goto-outsourcing" onclick="switchTab('outsourcing')">
          ${isAr ? 'استعراض أذرع التنفيذ الخارجي الـ 4 ←' : 'Explore the 4 External Execution Arms →'}
        </button>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// 6. VIEW: EXTERNAL OUTSOURCING PAGE (4 Execution Arms)
// ─────────────────────────────────────────────────────────────
function renderOutsourcingSection() {
  const container = document.getElementById('outsourcing-content');
  const data = window.EXTERNAL_OUTSOURCING_PAGE_DATA || window.proposalData?.EXTERNAL_OUTSOURCING_PAGE_DATA;
  if (!container || !data) return;

  const isAr = currentLang === 'ar';
  const arms = data.arms;

  const armsHtml = arms.map((arm, idx) => `
    <div class="arm-card">
      <div class="arm-header">
        <span class="arm-icon">${arm.icon}</span>
        <span class="arm-num">0${idx + 1}</span>
      </div>
      <h3 class="arm-title">${escHtml(arm.title[currentLang])}</h3>
      <p class="arm-detail">${escHtml(arm.detail[currentLang])}</p>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="outsourcing-wrapper">
      <div class="outsourcing-grid">
        ${armsHtml}
      </div>

      <div class="outsourcing-footer-nav">
        <button class="btn-goto-future" onclick="switchTab('future')">
          ${isAr ? 'الانتقال إلى الرؤية المستقبلية (الأتمتة والذكاء الاصطناعي) 🚀 ←' : 'Proceed to Future Vision (Automation & AI) 🚀 →'}
        </button>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// 7. VIEW: FUTURE VISION 🚀 (Automation & AI Standalone Page)
// ─────────────────────────────────────────────────────────────
function renderFutureVisionSection() {
  const container = document.getElementById('future-content');
  const data = window.AUTOMATION_NEXT_PHASE_BLOCK || window.proposalData?.AUTOMATION_NEXT_PHASE_BLOCK;
  if (!container || !data) return;

  const isAr = currentLang === 'ar';

  container.innerHTML = `
    <div class="future-vision-card">
      <div class="future-header">
        <span class="future-badge">${escHtml(data.badge[currentLang])}</span>
        <h2 class="future-main-title">${escHtml(data.title[currentLang])}</h2>
      </div>

      <div class="future-notes-grid">
        <div class="future-note-box">
          <div class="note-box-icon">📌</div>
          <h4 class="note-box-title">${escHtml(data.strategicNoteTitle[currentLang])}</h4>
          <p class="note-box-text">${escHtml(data.strategicNoteBody[currentLang])}</p>
        </div>
        <div class="future-note-box">
          <div class="note-box-icon">⚙️</div>
          <h4 class="note-box-title">${escHtml(data.whyGovernanceFirstTitle[currentLang])}</h4>
          <p class="note-box-text">${escHtml(data.whyGovernanceFirstBody[currentLang])}</p>
        </div>
      </div>

      <div class="future-cta-box">
        <div class="cta-text-side">
          <h3 class="cta-plan-title">${escHtml(data.standalonePlanTitle[currentLang])}</h3>
          <p class="cta-plan-intro">${escHtml(data.standalonePlanIntro[currentLang])}</p>
        </div>
        <button class="btn-open-future-modal" onclick="openFutureModal()">
          <span>${isAr ? 'فتح نافذة خطة الأتمتة والذكاء الاصطناعي ↗' : 'Open Automation & AI Plan Modal ↗'}</span>
        </button>
      </div>
    </div>
  `;
}

// ══════════════════════════════════════════════════════════════
// MODALS LOGIC
// ══════════════════════════════════════════════════════════════

// ── Modal 1: Product Specs Modal ──────────────────────────────
function openProductModal(productId) {
  const prod = window.portalData?.productLinesData?.find(p => p.id === productId);
  if (!prod) return;

  const isAr = currentLang === 'ar';
  const overlay = document.getElementById('product-modal-overlay');
  if (!overlay) return;

  document.getElementById('modal-product-icon').textContent = prod.icon;
  document.getElementById('modal-product-name').textContent = isAr ? prod.name_ar : prod.name_en;
  document.getElementById('modal-product-weights').textContent = '⚖️ ' + prod.weights;

  document.getElementById('modal-title-quality').textContent = isAr ? 'مواصفات الجودة ومطابقة GSO:' : 'Quality & GSO Standards:';
  document.getElementById('modal-product-quality').textContent = isAr ? prod.quality_ar : prod.quality_en;

  document.getElementById('modal-title-storage').textContent = isAr ? 'شروط التخزين وسلسلة التبريد:' : 'Storage & Cold-Chain Rules:';
  document.getElementById('modal-product-storage').textContent = isAr ? prod.storage_ar : prod.storage_en;

  document.getElementById('modal-title-costing').textContent = isAr ? 'مكونات تكلفة الـ SKU وهامش الربح:' : 'SKU Costing & Gross Margins:';
  document.getElementById('modal-product-costing').textContent = isAr ? prod.costing_ar : prod.costing_en;

  document.getElementById('modal-product-ex-title').textContent = isAr ? prod.example_title_ar : prod.example_title_en;
  document.getElementById('modal-product-ex-body').textContent = isAr ? prod.example_body_ar : prod.example_body_en;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
window.openProductModal = openProductModal;

function closeProductModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn') && !e.target.classList.contains('btn-modal-close')) return;
  const overlay = document.getElementById('product-modal-overlay');
  overlay?.classList.remove('open');
  document.body.style.overflow = '';
}
window.closeProductModal = closeProductModal;

// ── Modal 2: Deliverable Details Modal (with Prev / Next) ──────
function openDeliverableModal(idx) {
  const items = window.DELIVERABLES_16_LIST || window.proposalData?.DELIVERABLES_16_LIST;
  if (!items || idx < 0 || idx >= items.length) return;

  currentDeliverableModalIdx = idx;
  const item = items[idx];
  const isAr = currentLang === 'ar';
  const overlay = document.getElementById('deliverable-modal-overlay');
  if (!overlay) return;

  // Set Labels
  document.getElementById('deliv-modal-summary-label').textContent = isAr ? 'نطاق المخرج التنفيذي' : 'Executive Deliverable Scope';
  document.getElementById('deliv-modal-handover-label').textContent = isAr ? 'المخرجات الملموسة المسلّمة للإدارة' : 'Tangible Handover Deliverables';
  document.getElementById('deliv-modal-example-label').textContent = isAr ? 'مثال تطبيقي ملموس (كمثال استرشادي تقريبي*)' : 'Concrete Practical Example (Illustrative Benchmark*)';
  document.getElementById('deliv-modal-criteria-label').textContent = isAr ? 'معيار القبول والاعتماد النهائي' : 'Acceptance & Sign-Off Criteria';

  // Set Values
  document.getElementById('deliv-modal-code').textContent = item.code;
  document.getElementById('deliv-modal-phase').textContent = item.phase[currentLang];
  document.getElementById('deliv-modal-title').textContent = item.title[currentLang];
  document.getElementById('deliv-modal-summary').textContent = item.summary[currentLang];

  const handoverList = document.getElementById('deliv-modal-handover');
  if (handoverList) {
    const listItems = item.handoverComponents ? item.handoverComponents[currentLang] : [];
    handoverList.innerHTML = listItems.map(h => `<li><span class="deliv-bullet">📦</span><span>${escHtml(h)}</span></li>`).join('');
  }

  document.getElementById('deliv-modal-example').textContent = item.practicalExample[currentLang];
  document.getElementById('deliv-modal-criteria').textContent = item.acceptanceCriteria[currentLang];

  // Update Prev / Next Buttons State
  const prevBtn = document.getElementById('deliv-btn-prev');
  const nextBtn = document.getElementById('deliv-btn-next');
  if (prevBtn) prevBtn.disabled = (idx === 0);
  if (nextBtn) nextBtn.disabled = (idx === items.length - 1);

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
window.openDeliverableModal = openDeliverableModal;

function navigateDeliverableModal(direction) {
  const nextIdx = currentDeliverableModalIdx + direction;
  openDeliverableModal(nextIdx);
}
window.navigateDeliverableModal = navigateDeliverableModal;

function closeDeliverableModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn') && !e.target.classList.contains('btn-modal-close')) return;
  const overlay = document.getElementById('deliverable-modal-overlay');
  overlay?.classList.remove('open');
  document.body.style.overflow = '';
}
window.closeDeliverableModal = closeDeliverableModal;

// ── Modal 3: Future Vision Popup Modal (4 AI Pillars) ─────────
function openFutureModal() {
  const data = window.AUTOMATION_NEXT_PHASE_BLOCK || window.proposalData?.AUTOMATION_NEXT_PHASE_BLOCK;
  if (!data) return;

  const overlay = document.getElementById('future-modal-overlay');
  if (!overlay) return;

  document.getElementById('future-modal-badge').textContent = data.badge[currentLang];
  document.getElementById('future-modal-plan-title').textContent = data.standalonePlanTitle[currentLang];
  document.getElementById('future-modal-plan-intro').textContent = data.standalonePlanIntro[currentLang];

  const pillarsContainer = document.getElementById('future-modal-pillars');
  if (pillarsContainer) {
    pillarsContainer.innerHTML = data.pillars.map((pil, idx) => `
      <div class="future-pillar-card">
        <div class="pillar-num">0${idx + 1}</div>
        <h4 class="pillar-title">${escHtml(pil.title[currentLang])}</h4>
        <p class="pillar-desc">${escHtml(pil.detail[currentLang])}</p>
      </div>
    `).join('');
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
window.openFutureModal = openFutureModal;

function closeFutureModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn') && !e.target.classList.contains('btn-modal-close')) return;
  const overlay = document.getElementById('future-modal-overlay');
  overlay?.classList.remove('open');
  document.body.style.overflow = '';
}
window.closeFutureModal = closeFutureModal;

// ── Modal 4: Department Detail Popup Modal (5 Core Departments) ──
function openDeptModal(idx) {
  const depts = window.FIVE_CORE_DEPARTMENTS || (typeof FIVE_CORE_DEPARTMENTS !== 'undefined' ? FIVE_CORE_DEPARTMENTS : []);
  if (!depts || idx < 0 || idx >= depts.length) return;

  currentDeptIndex = idx;
  const dept = depts[idx];
  const isAr = currentLang === 'ar';

  const overlay = document.getElementById('dept-modal-overlay');
  const badge = document.getElementById('dept-modal-badge');
  const title = document.getElementById('dept-modal-title');
  const body = document.getElementById('dept-modal-body');
  const btnPrev = document.getElementById('dept-btn-prev');
  const btnNext = document.getElementById('dept-btn-next');
  const prevLabel = document.getElementById('dept-prev-label');
  const nextLabel = document.getElementById('dept-next-label');

  if (badge) badge.textContent = dept.number;
  if (title) title.textContent = dept.title[currentLang] || dept.title.ar;

  if (body) {
    const pillars = (dept.pillars && dept.pillars[currentLang]) || dept.pillars.ar || [];
    const deliverables = (dept.deliverables && dept.deliverables[currentLang]) || dept.deliverables.ar || [];
    const practicalExample = (dept.practicalExample && dept.practicalExample[currentLang]) || dept.practicalExample.ar || '';

    body.innerHTML = `
      <div class="dept-modal-block">
        <h4 class="dept-modal-block-title">
          <span>🎯</span> ${isAr ? 'محاور العمل والتطوير في هذا القسم:' : 'Key Operational & Governance Pillars:'}
        </h4>
        <ul class="dept-modal-list">
          ${pillars.map(p => `<li><span class="bullet">●</span> <span>${p}</span></li>`).join('')}
        </ul>
      </div>

      <div class="dept-modal-block example-block">
        <h4 class="dept-modal-block-title example-title">
          <span>💡</span> ${isAr ? 'النموذج التطبيقي الملموس (كمثال استرشادي تقريبي*):' : 'Practical Application Scenario (Illustrative Benchmark*):'}
        </h4>
        <p class="dept-modal-example-text">${practicalExample}</p>
      </div>

      <div class="dept-modal-block deliv-block">
        <h4 class="dept-modal-block-title deliv-title">
          <span>📦</span> ${isAr ? 'المخرجات الملموسة المرتبطة بالقسم:' : 'Associated Tangible Deliverables:'}
        </h4>
        <ul class="dept-modal-list deliv-list">
          ${deliverables.map(d => `<li><span class="bullet">✔</span> <span>${d}</span></li>`).join('')}
        </ul>
      </div>
    `;
  }

  // Update navigation buttons
  if (prevLabel) prevLabel.textContent = isAr ? 'القسم السابق' : 'Previous';
  if (nextLabel) nextLabel.textContent = isAr ? 'القسم التالي' : 'Next';

  if (btnPrev) {
    btnPrev.disabled = idx === 0;
    btnPrev.style.opacity = idx === 0 ? '0.4' : '1';
    btnPrev.style.cursor = idx === 0 ? 'not-allowed' : 'pointer';
  }
  if (btnNext) {
    btnNext.disabled = idx === depts.length - 1;
    btnNext.style.opacity = idx === depts.length - 1 ? '0.4' : '1';
    btnNext.style.cursor = idx === depts.length - 1 ? 'not-allowed' : 'pointer';
  }

  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
window.openDeptModal = openDeptModal;

function closeDeptModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn') && !e.target.classList.contains('btn-modal-close')) return;
  const overlay = document.getElementById('dept-modal-overlay');
  overlay?.classList.remove('open');
  document.body.style.overflow = '';
}
window.closeDeptModal = closeDeptModal;

function navigateDeptModal(dir) {
  const depts = window.FIVE_CORE_DEPARTMENTS || (typeof FIVE_CORE_DEPARTMENTS !== 'undefined' ? FIVE_CORE_DEPARTMENTS : []);
  if (!depts) return;
  const newIdx = currentDeptIndex + dir;
  if (newIdx >= 0 && newIdx < depts.length) {
    openDeptModal(newIdx);
  }
}
window.navigateDeptModal = navigateDeptModal;

// ══════════════════════════════════════════════════════════════
// WHATSAPP & CLIPBOARD INTEGRATION (+968 92940008)
// ══════════════════════════════════════════════════════════════

function openWhatsApp() {
  const phone = '96892940008';
  const displayPhone = '+968 92940008';
  const url = `https://api.whatsapp.com/send?phone=${phone}`;

  // 1. Direct window.open with secure flags
  window.open(url, '_blank', 'noopener,noreferrer');

  // 2. Automatically copy formatted phone number to clipboard
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(displayPhone).catch(() => {});
  }

  // 3. Show confirmation toast notification
  const toastMsg = currentLang === 'ar'
    ? `تم فتح واتساب ونسخ الرقم ${displayPhone} للحافظة بنجاح`
    : `Opening WhatsApp & copied ${displayPhone} to clipboard`;

  showToast(toastMsg);
}
window.openWhatsApp = openWhatsApp;

function showToast(msg) {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = msg;
  toast.classList.add('show');

  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// ── UTILITY HELPERS ──────────────────────────────────────────
function escHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function truncateText(str, maxLen) {
  if (!str) return '';
  return str.length > maxLen ? str.substring(0, maxLen) + '...' : str;
}
