/* ══════════════════════════════════════════════════════════════
   OMNI TURNKEY — RUSAYL PORTAL
   app.js — Production Application Controller
   Vanilla JavaScript, Zero Dependencies
══════════════════════════════════════════════════════════════ */

'use strict';

// ── GLOBAL APPLICATION STATE ──────────────────────────────────
let currentLang = 'ar';
let currentTab = 'home';
let comparisonState = 'omni'; // 'omni' or 'chaotic'
let activeSowFilter = 'all';
let capacityAnimated = false;

// ── INITIALIZATION ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize default language (Arabic RTL)
  applyLanguage('ar', true);

  // 2. Ensure ONLY 'Home' button has active state & gold border on load
  setActiveNavButton('home');

  // 3. Render all dynamic content from data.js
  renderAll();

  // 4. Initialize comparison toggle state
  setComparisonState('omni');

  // 5. Attach global escape key listener for modals
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeExampleModal();
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

function applyLanguage(lang, isInit) {
  currentLang = lang;
  const root = document.documentElement;

  // Set document direction and language code
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update static text elements with [data-i18n]
  translateStaticElements(lang);

  // Update toggle button text
  const toggleBtnText = document.getElementById('lang-toggle-text');
  if (toggleBtnText && window.portalData?.[lang]) {
    toggleBtnText.textContent = window.portalData[lang].lang_toggle;
  }

  // Re-render dynamic components
  if (!isInit) {
    // Preserve open department state
    const openDept = document.querySelector('.dept-card.open');
    const openDeptId = openDept ? openDept.getAttribute('data-dept-id') : null;

    renderAll();

    if (openDeptId) {
      const targetDept = document.querySelector(`.dept-card[data-dept-id="${openDeptId}"]`);
      if (targetDept) targetDept.classList.add('open');
    }

    // Re-apply comparison state for animations
    setComparisonState(comparisonState);

    // Re-trigger capacity bar if workforce view is active
    if (currentTab === 'workforce') {
      capacityAnimated = false;
      setTimeout(animateCapacity, 250);
    }
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

function t(key) {
  return window.portalData?.[currentLang]?.[key] ?? key;
}

// ══════════════════════════════════════════════════════════════
// NAVIGATION & ACTIVE GOLD BORDER LOGIC
// ══════════════════════════════════════════════════════════════

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

  // Map tabs to view containers
  const viewMap = {
    home: { viewId: 'view-1', targetSelector: null, scrollTo: 'top' },
    vision: { viewId: 'view-1', targetSelector: '#view-1', scrollTo: 'section' },
    departments: { viewId: 'view-2', targetSelector: '#view-2', scrollTo: 'section' },
    products: { viewId: 'view-3', targetSelector: '#view-3', scrollTo: 'section' },
    roadmap: { viewId: 'view-4', targetSelector: '#view-4', scrollTo: 'section' },
    deliverables: { viewId: 'view-4', targetSelector: '.sow-section', scrollTo: 'element' },
    workforce: { viewId: 'view-5', targetSelector: '#view-5', scrollTo: 'section' }
  };

  const target = viewMap[tabKey] || viewMap.home;

  // Deactivate all views, activate target view
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  const targetView = document.getElementById(target.viewId);
  if (targetView) targetView.classList.add('active');

  // Handle scrolling
  if (target.scrollTo === 'top' || tabKey === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const headerH = document.getElementById('app-header')?.offsetHeight || 116;
    const targetEl = target.targetSelector ? document.querySelector(target.targetSelector) : document.getElementById(target.viewId);
    if (targetEl) {
      const topPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerH - 12;
      window.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
    }
  }

  // Trigger capacity bar on workforce tab
  if (tabKey === 'workforce' && !capacityAnimated) {
    setTimeout(animateCapacity, 350);
  }
}

// Global click-to-home handler on all logos and Home button
function goHome() {
  closeProductModal();
  closeExampleModal();
  closeMobileMenu();
  switchTab('home');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.goHome = goHome;

function toggleMobileMenu() {
  const nav = document.getElementById('mobile-nav');
  nav?.classList.toggle('open');
}

function closeMobileMenu() {
  const nav = document.getElementById('mobile-nav');
  nav?.classList.remove('open');
}

// ══════════════════════════════════════════════════════════════
// TACTILE BEFORE/AFTER COMPARISON SWITCH & MOTION
// ══════════════════════════════════════════════════════════════

function toggleComparisonSwitch() {
  const nextState = comparisonState === 'omni' ? 'chaotic' : 'omni';
  setComparisonState(nextState);
}

function setComparisonState(state) {
  comparisonState = state;
  const track = document.getElementById('tactile-switch-track');
  const labelChaotic = document.getElementById('label-chaotic');
  const labelOmni = document.getElementById('label-omni');
  const cardChaotic = document.getElementById('card-chaotic');
  const cardOmni = document.getElementById('card-omni');

  if (!track || !cardChaotic || !cardOmni) return;

  if (state === 'chaotic') {
    // Track turns Vibrant Crimson Red (#DC2626) with red glow
    track.classList.remove('state-omni');
    track.classList.add('state-chaotic');

    labelChaotic?.classList.add('active');
    labelOmni?.classList.remove('active');

    // Chaotic card triggers keyframe motion animation (scale & red glow)
    cardChaotic.classList.remove('dimmed');
    cardChaotic.classList.add('active-motion');

    // Omni Turnkey card dims (opacity: 0.55)
    cardOmni.classList.remove('active-motion');
    cardOmni.classList.add('dimmed');
  } else {
    // Track turns Vibrant Emerald Green (#059669) with emerald glow
    track.classList.remove('state-chaotic');
    track.classList.add('state-omni');

    labelOmni?.classList.add('active');
    labelChaotic?.classList.remove('active');

    // Omni Turnkey card triggers keyframe motion animation (scale & emerald glow)
    cardOmni.classList.remove('dimmed');
    cardOmni.classList.add('active-motion');

    // Chaotic card dims (opacity: 0.55)
    cardChaotic.classList.remove('active-motion');
    cardChaotic.classList.add('dimmed');
  }
}

// ══════════════════════════════════════════════════════════════
// DYNAMIC SECTIONS RENDERER
// ══════════════════════════════════════════════════════════════

function renderAll() {
  renderComparisonLists();
  renderDepartments();
  renderProducts();
  renderRoadmapMatrix();
  renderSowDeliverables();
  renderWorkforce();
}

// ── View 1: Comparison Lists ─────────────────────────────────
function renderComparisonLists() {
  const chaoticList = document.getElementById('chaotic-list');
  const omniList = document.getElementById('omni-list');
  const data = window.portalData?.comparisonData;
  if (!chaoticList || !omniList || !data) return;

  const isAr = currentLang === 'ar';

  chaoticList.innerHTML = data.chaotic.map(item => `
    <div class="comparison-item">
      <span class="comp-item-icon">${item.icon}</span>
      <div class="comp-item-content">
        <h4>${escHtml(isAr ? item.title_ar : item.title_en)}</h4>
        <p>${escHtml(isAr ? item.desc_ar : item.desc_en)}</p>
      </div>
    </div>
  `).join('');

  omniList.innerHTML = data.omni.map(item => `
    <div class="comparison-item">
      <span class="comp-item-icon">${item.icon}</span>
      <div class="comp-item-content">
        <h4>${escHtml(isAr ? item.title_ar : item.title_en)}</h4>
        <p>${escHtml(isAr ? item.desc_ar : item.desc_en)}</p>
      </div>
    </div>
  `).join('');
}

// ── View 2: 5 Departments ────────────────────────────────────
function renderDepartments() {
  const stack = document.getElementById('departments-stack');
  const depts = window.portalData?.departmentsData;
  if (!stack || !depts) return;

  const isAr = currentLang === 'ar';

  stack.innerHTML = depts.map(dept => `
    <div class="dept-card" data-dept-id="${dept.id}" id="dept-card-${dept.id}">
      <div class="dept-card-header" onclick="toggleDept(${dept.id})">
        <div class="dept-header-left">
          <span class="dept-icon">${dept.icon}</span>
          <span class="dept-code-tag">${dept.code}</span>
          <h3 class="dept-title">${escHtml(isAr ? dept.title_ar : dept.title_en)}</h3>
        </div>
        <svg class="dept-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>
      <div class="dept-card-body">
        <div class="dept-scope-box">
          ${escHtml(isAr ? dept.scope_ar : dept.scope_en)}
        </div>
        <div class="dept-checklist-title">📋 ${isAr ? 'قائمة التحقق الميدانية والإجراءات التشغيلية' : 'Field Operational Checklist & SOPs'}:</div>
        <ul class="checklist-items">
          ${(isAr ? dept.checklist_ar : dept.checklist_en).map(chk => `
            <li class="checklist-item">
              <span class="check-icon">✓</span>
              <span>${escHtml(chk)}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function toggleDept(deptId) {
  const card = document.getElementById('dept-card-' + deptId);
  card?.classList.toggle('open');
}

// ── View 3: 5 Product Lines ──────────────────────────────────
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

// ── View 4: TRUE HORIZONTAL 5-TRACK CONCURRENT ROADMAP MATRIX ─
function renderRoadmapMatrix() {
  const container = document.getElementById('matrix-rows-container');
  const matrix = window.portalData?.roadmapMatrix;
  if (!container || !matrix) return;

  const isAr = currentLang === 'ar';

  container.innerHTML = matrix.map((track, trackIdx) => {
    const trackName = isAr ? track.trackName_ar : track.trackName_en;
    return `
      <div class="matrix-track-row">
        <div class="track-row-title">
          <span>🚀</span>
          <span>${escHtml(trackName)}</span>
        </div>
        <div class="track-cells-grid">
          <!-- Stage 1 -->
          ${renderMatrixCell(track.stages[0], trackIdx, 0, isAr)}

          <!-- Arrow 1 -> 2 -->
          <div class="cell-arrow-col">
            <span class="roadmap-arrow-dynamic"></span>
          </div>

          <!-- Stage 2 -->
          ${renderMatrixCell(track.stages[1], trackIdx, 1, isAr)}

          <!-- Arrow 2 -> 3 -->
          <div class="cell-arrow-col">
            <span class="roadmap-arrow-dynamic"></span>
          </div>

          <!-- Stage 3 -->
          ${renderMatrixCell(track.stages[2], trackIdx, 2, isAr)}
        </div>
      </div>
    `;
  }).join('');
}

function renderMatrixCell(stage, trackIdx, stageIdx, isAr) {
  if (!stage) return '';
  const days = isAr ? stage.days_ar : stage.days_en;
  const title = isAr ? stage.title_ar : stage.title_en;
  const milestones = isAr ? stage.milestones_ar : stage.milestones_en;
  const btnLabel = isAr ? '🔍 مثال تطبيقي ملموس' : '🔍 Concrete Factory Example';

  return `
    <div class="matrix-cell">
      <div>
        <span class="cell-days-badge">${escHtml(days)}</span>
        <h4 class="cell-title">${escHtml(title)}</h4>
        <ul class="cell-milestones">
          ${milestones.map(m => `
            <li class="cell-milestone-item">
              <span class="cell-milestone-dot">•</span>
              <span>${escHtml(m)}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <button class="btn-cell-example" onclick="openRoadmapModal(${trackIdx}, ${stageIdx})">
        ${escHtml(btnLabel)}
      </button>
    </div>
  `;
}

// ── View 4: 16 SOW Deliverables ──────────────────────────────
function renderSowDeliverables() {
  const grid = document.getElementById('sow-grid');
  const items = window.portalData?.sowDeliverables;
  if (!grid || !items) return;

  const isAr = currentLang === 'ar';
  const filtered = activeSowFilter === 'all'
    ? items
    : items.filter(d => d.dept === activeSowFilter);

  grid.innerHTML = filtered.map(item => {
    const originalIdx = items.indexOf(item);
    return `
      <div class="sow-card">
        <div>
          <div class="sow-card-header">
            <span class="sow-code-badge">${escHtml(item.code)}</span>
            <span class="sow-phase-badge">${escHtml(isAr ? item.phase_ar : item.phase_en)}</span>
          </div>
          <h4 class="sow-title">${escHtml(isAr ? item.title_ar : item.title_en)}</h4>
          <p class="sow-scope-preview">${escHtml(isAr ? item.scope_ar : item.scope_en)}</p>
        </div>
        <button class="btn-cell-example" onclick="openSowModal(${originalIdx})">
          ${isAr ? '🔍 مثال تطبيقي ملموس' : '🔍 Concrete Factory Example'}
        </button>
      </div>
    `;
  }).join('');
}

function filterSow(filterKey) {
  activeSowFilter = filterKey;
  document.querySelectorAll('.sow-filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-filter') === filterKey);
  });
  renderSowDeliverables();
}

// ── View 5: Lean Workforce (13 Staff + Outsourcing) ───────────
function renderWorkforce() {
  const staffGrid = document.getElementById('staff-grid');
  const outsourcedList = document.getElementById('outsourced-list');
  const wf = window.portalData?.workforceData;
  if (!staffGrid || !outsourcedList || !wf) return;

  const isAr = currentLang === 'ar';

  // Sub-Block A: 13 Core Team Cards
  staffGrid.innerHTML = wf.currentStaff.map(st => `
    <div class="core-team-card">
      <div class="team-card-icon-box">${st.icon}</div>
      <div class="team-card-info">
        <h4 class="team-card-title">${escHtml(isAr ? st.title_ar : st.title_en)}</h4>
        <span class="team-card-category">${escHtml(isAr ? st.category_ar : st.category_en)}</span>
      </div>
    </div>
  `).join('');

  // Sub-Block C: 4 Outsourced Execution Arms
  outsourcedList.innerHTML = wf.outsourced.map(os => `
    <div class="outsource-card">
      <div class="outsource-icon-box">${os.icon}</div>
      <div class="outsource-info">
        <h4 class="outsource-title">${escHtml(isAr ? os.title_ar : os.title_en)}</h4>
        <span class="outsource-category">${escHtml(isAr ? os.category_ar : os.category_en)}</span>
      </div>
    </div>
  `).join('');
}

function animateCapacity() {
  const fill = document.getElementById('scale-progress-fill');
  if (fill) fill.style.width = '80%';
  capacityAnimated = true;
}

// ══════════════════════════════════════════════════════════════
// MODAL CONTROLLERS (PRODUCT & CONCRETE EXAMPLE)
// ══════════════════════════════════════════════════════════════

// ── Modal 1: Product Modal ───────────────────────────────────
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

function closeProductModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn') && !e.target.classList.contains('btn-modal-close')) return;
  const overlay = document.getElementById('product-modal-overlay');
  overlay?.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Modal 2: Concrete Factory Example Modal ───────────────────
function openRoadmapModal(trackIdx, stageIdx) {
  const track = window.portalData?.roadmapMatrix?.[trackIdx];
  const stage = track?.stages?.[stageIdx];
  if (!track || !stage) return;

  const isAr = currentLang === 'ar';
  const trackName = isAr ? track.trackName_ar : track.trackName_en;
  const stageDays = isAr ? stage.days_ar : stage.days_en;

  showExampleModal({
    code: `Track ${track.trackId} — Stage ${stage.stageNum}`,
    stage: stageDays,
    title: `${trackName} (${stageDays})`,
    scope: isAr ? stage.scope_ar : stage.scope_en,
    subtitle: isAr ? stage.title_ar : stage.title_en,
    body: isAr ? stage.example_ar : stage.example_en,
    output: isAr ? stage.output_ar : stage.output_en
  });
}

function openSowModal(sowIdx) {
  const item = window.portalData?.sowDeliverables?.[sowIdx];
  if (!item) return;

  const isAr = currentLang === 'ar';
  showExampleModal({
    code: item.code,
    stage: isAr ? item.phase_ar : item.phase_en,
    title: isAr ? item.title_ar : item.title_en,
    scope: isAr ? item.scope_ar : item.scope_en,
    subtitle: `${item.code} — ${isAr ? item.title_ar : item.title_en}`,
    body: isAr ? item.example_ar : item.example_en,
    output: isAr ? item.output_ar : item.output_en
  });
}

function showExampleModal(data) {
  const overlay = document.getElementById('example-modal-overlay');
  if (!overlay) return;

  document.getElementById('modal-example-code').textContent = data.code;
  document.getElementById('modal-example-stage').textContent = data.stage;
  document.getElementById('modal-example-title').textContent = data.title;
  document.getElementById('modal-example-scope').textContent = data.scope;
  document.getElementById('modal-example-subtitle').textContent = data.subtitle;
  document.getElementById('modal-example-body').textContent = data.body;
  document.getElementById('modal-example-output').textContent = data.output;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeExampleModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn') && !e.target.classList.contains('btn-modal-close')) return;
  const overlay = document.getElementById('example-modal-overlay');
  overlay?.classList.remove('open');
  document.body.style.overflow = '';
}

// ══════════════════════════════════════════════════════════════
// BULLETPROOF DIRECT WHATSAPP CONNECTION (+968 92940008)
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
