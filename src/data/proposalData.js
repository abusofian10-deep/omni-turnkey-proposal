// src/data/proposalData.js
// Omni Turnkey — Final Master Bilingual Data Model (AR / EN)

export const GLOBAL_DISCLAIMERS = {
  matrixFraming: {
    ar: "ملاحظة منهجية: نظراً لأن عدداً من خطوط المنتجات الخمسة (مثل زيوت الطبخ والجبنة الموتزاريلا) تُمثل خطوطاً توسعية جديدة لم تدخل حيز التشغيل السابق للمصنع، فإن كافة المواصفات والمواقف العملية المعروضة أدناه هي أمثلة قياسية افتراضية مستمدة من تجارب السوق والقطاع الصناعي المماثلة (External Industry Benchmarks*) لتوضيح آلية عمل منظومة Omni Turnkey في ضبط التكلفة والجودة، وليست رصداً داخلياً للوضع القائم.",
    en: "Methodological Note: Since several of the five product lines (such as cooking oils and mozzarella cheese) represent upcoming expansion lines not previously operated at the facility, all specifications and practical cases below are presented as Hypothetical External Industry Benchmarks* drawn from comparable market operations to illustrate Omni Turnkey’s cost and quality governance methodology—not as internal audit findings."
  },
  illustrativeFooter: {
    ar: "(*) إخلاء مسؤولية وتوضيح بشأن الأمثلة العملية والمواصفات التقديرية: كافة الأرقام، المواصفات الفنية، والسيناريوهات التشغيلية الواردة كأمثلة عملية في هذه الوثيقة هي أمثلة استرشادية وتقريبية (Illustrative Benchmarks) تم إعدادها لتقريب الصورة الذهنية وتوضيح آلية تطبيق الحلول على أرض الواقع فقط، ولا تُمثل مواصفات هندسية أو مخبرية أو مالية نهائية ملزمة؛ حيث يتم استخراج واعتماد البيانات الدقيقة حصرياً بعد إجراء الفحص الميداني والتدقيق الفني الفعلي أثناء سريان التعاقد.",
    en: "(*) Disclaimer Regarding Practical Examples & Indicative Specifications: All figures, technical specifications, and operational scenarios presented as practical examples in this document are Illustrative Benchmarks provided solely to clarify how solutions operate in practice. They do not constitute binding engineering, laboratory, or final financial commitments; exact specifications and validated figures are established exclusively following on-site technical audits during contract execution."
  }
};

export const EXECUTIVE_PREAMBLE = {
  title: {
    ar: "خطة التحول المؤسسي، الحوكمة، وإعادة الهيكلة التشغيلية (90 يوماً)",
    en: "90-Day Institutional Transformation, Governance & Operational Restructuring Plan"
  },
  submittedTo: {
    ar: "مُقدّمة إلى: السيد محمود (سعادة مالك المشروع) والفاضل سامح حسني (قائد التطوير التجاري وسلاسل الإمداد) — منطقة الرسيل الصناعية، سلطنة عُمان.",
    en: "Submitted to: Mr. Mahmoud (Project Owner) and Mr. Sameh Hosny (Commercial Development & Supply Chain Lead) — Al Rusayl Industrial Estate, Sultanate of Oman."
  },
  preparedBy: {
    ar: "إعداد وتنفيذ: منظومة Omni Turnkey للاستشارات الإدارية والحوكمة والتحول الرقمي.",
    en: "Prepared & Executed by: Omni Turnkey Management Consulting, Corporate Governance & Digital Transformation."
  },
  mandate: {
    ar: "تهدف هذه الخطة الاستراتيجية والتنفيذية المتكاملة إلى دعم رؤية السيد محمود وقيادة الفاضل سامح حسني في نقل المصنع من مرحلة التشغيل التقليدي إلى منظومة صناعية وتجارية مؤسسية عالية الكفاءة والانضباط؛ عبر إحكام الرقابة المالية والمخزنية، تفعيل منظومة الـ ERP الرشيقة وسلسلة التبريد بالفريق الحالي أولاً، وبناء هندسة علامات تجارية وهوية مؤسسية تنافسية تمهّد للتوسع الآمن في خطوط الإنتاج الجديدة والانطلاق نحو الأتمتة الشاملة.",
    en: "This integrated strategic and operational roadmap is designed to support Mr. Mahmoud’s vision and Mr. Sameh Hosny’s leadership in transitioning the facility from legacy operations into a disciplined, institutional-grade enterprise—by enforcing financial and inventory controls, activating Lean ERP and cold-chain governance with the current team first, and building a competitive brand architecture ready for new production lines and full-scale automation."
  }
};

export const EXECUTIVE_VISION_10_PAIRS = [
  {
    id: 1,
    problemTitle: { ar: "مركزية التوقيع وغياب مصفوفة الصلاحيات (DoA)", en: "Centralized Sign-Off & Absence of Documented DoA Matrix" },
    problemDesc: { ar: "اعتماد سندات الصرف والمعاملات المالية بشكل مباشر دون سقوف صلاحيات موثقة أو فصل بين مهام الطلب والمراجعة والصرف.", en: "Direct authorization of payment vouchers and financial transactions without documented approval thresholds or Segregation of Duties." },
    solutionTitle: { ar: "تفعيل مصفوفة الصلاحيات المؤسسية (DoA)", en: "Activating Corporate Delegation of Authority (DoA)" },
    solutionDesc: { ar: "توثيق جدول صلاحيات مالية وإدارية واضح يحدد سقوف الاعتماد ويفصل بين الأدوار التنفيذية والرقابية لحماية الكيان التجاري وأصول المصنع.", en: "Establishing a documented financial and administrative authority matrix defining approval thresholds and separating executive and control roles to protect assets." }
  },
  {
    id: 2,
    problemTitle: { ar: "تسعير الأصناف دون نظام تكلفة دقيق (SKU Costing)", en: "Product Pricing Without Accurate SKU Costing" },
    problemDesc: { ar: "تسعير المنتجات بناءً على تقديرات عامة دون احتساب التكلفة الفعلية للوحدة (خامات، تغليف، هالك، ومصاريف تشغيلية)، مما يهدد بتآكل الهوامش.", en: "Pricing SKUs based on rough estimates without calculating true unit costs (raw materials, packaging, scrap, overhead), risking margin erosion." },
    solutionTitle: { ar: "هندسة التكلفة الفعلية وحماية الهوامش (SKU Costing Model)", en: "Engineering Actual SKU Costing & Margin Protection" },
    solutionDesc: { ar: "بناء بطاقة تكلفة معيارية وفعلية لكل صنف وربط قوائم الأسعار بهوامش ربحية محمية قبل الإطلاق التجاري.", en: "Building a standard and actual cost card per SKU and linking commercial price lists to protected margin thresholds prior to launch." }
  },
  {
    id: 3,
    problemTitle: { ar: "إدارة المخزون التقليدية وغياب التتبع (FIFO/FEFO)", en: "Traditional Inventory Handling & Lack of Traceability" },
    problemDesc: { ar: "إدارة مخزون الخامات والمنتجات الجاهزة للنشاط السابق (الحليب البودرة، الشاي، القهوة) يدوياً دون تتبع للتشغيلات أو تواريخ الصلاحية.", en: "Manual handling of raw materials and finished goods for legacy lines (milk powder, tea, coffee) without Batch Tracking or expiry rotation." },
    solutionTitle: { ar: "حوكمة المخزون وسلسلة التبريد والرقابة البيئية", en: "Inventory Traceability & Cold Chain Governance" },
    solutionDesc: { ar: "تطبيق نظام التتبع بالتشغيلة (Batch Tracking) وقواعد الصرف (FIFO/FEFO) وسجلات الحرارة والرطوبة لتأمين خط الموتزاريلا الجديد وحماية المخزون الجاف.", en: "Enforcing Batch Tracking, FIFO/FEFO dispatch rules, and climate logs to safeguard the new mozzarella cheese line and protect dry goods." }
  },
  {
    id: 4,
    problemTitle: { ar: "ضعف الرقابة على دورة المشتريات والاستلام", en: "Weak Controls Over Procurement & Receiving Cycles" },
    problemDesc: { ar: "غياب الربط الإلزامي بين أمر الشراء (PO) ومحضر الاستلام الفعلي (GRN) وفاتورة المورد، مما يعرض الشركة لسداد مبالغ لا تطابق الكميات المستلمة.", en: "Lack of mandatory linkage between Purchase Orders (PO), Goods Received Notes (GRN), and supplier invoices, risking overpayment for short deliveries." },
    solutionTitle: { ar: "تطبيق نظام المطابقة الثلاثية الإلزامي (3-Way Matching)", en: "Enforcing Mandatory Three-Way Matching" },
    solutionDesc: { ar: "حظر اعتماد أي فاتورة مورد أو صرف مستحقات مالية إلكترونياً إلا بعد تطابق أمر الشراء ومحضر الاستلام الفعلي والفاتورة.", en: "Blocking supplier invoice approval or payment disbursement unless PO, physical GRN, and invoice quantities/prices match." }
  },
  {
    id: 5,
    problemTitle: { ar: "قصور استغلال منظومة الـ ERP والعمل خارج النظام", en: "Underutilized ERP & Off-System Spreadsheet Work" },
    problemDesc: { ar: "وجود نظام غير مفعّل بالكامل مع الاعتماد على ملفات Excel منفصلة وسجلات يدوية تؤدي لتضارب البيانات وتأخر الإقفال المالي.", en: "Partially configured ERP accompanied by disconnected spreadsheets and manual logs causing data discrepancies and delayed closings." },
    solutionTitle: { ar: "إعادة هيكلة وتفعيل الـ ERP الرشيق (Lean ERP Activation)", en: "Lean ERP Restructuring & Core Module Activation" },
    solutionDesc: { ar: "تفعيل الوحدات الأساسية الأربعة (المستودعات، المبيعات، المحاسبة، وتخطيط الإنتاج) على قدر الفريق الحالي فقط ومنع العمل خارج النظام.", en: "Activating the four core modules (Inventory, Sales, Accounting, Production Planning) sized strictly for the current team and eliminating off-system work." }
  },
  {
    id: 6,
    problemTitle: { ar: "الشراء برد الفعل وغياب حدود إعادة الطلب", en: "Reactive Purchasing & Absence of Reorder Thresholds" },
    problemDesc: { ar: "غياب التخطيط المسبق للمشتريات وعدم وجود مستويات أمان للمخزون، مما يسبب توقفات مفاجئة أو تكدس أصناف راكدة تجمّد السيولة.", en: "Absence of forward procurement planning and safety stock levels, causing sudden stockouts or slow-moving inventory lockups." },
    solutionTitle: { ar: "تفعيل نقاط إعادة الطلب وتخطيط الإمداد (Reorder Levels)", en: "Automated Reorder Levels & Supply Planning" },
    solutionDesc: { ar: "ضبط الحدود الدنيا والقصوى للمخزون (Min/Max) وربط طلبات الشراء بخطة المبيعات والتشغيل الفعلية.", en: "Configuring Min/Max stock thresholds and linking purchase requisitions directly to actual sales and production schedules." }
  },
  {
    id: 7,
    problemTitle: { ar: "غياب الرقابة المحاسبية على الهالك وفروقات التشغيل", en: "Unmonitored Production Scrap & Yield Variances" },
    problemDesc: { ar: "عدم قياس الفارق بين الخامات ومواد التعبئة المنصرفة من المخازن وبين المنتج التام المسلّم فعلياً، مما يخفي نسب الهدر الحقيقية.", en: "Failure to reconcile raw and packaging materials issued from stores against actual finished output, masking true scrap rates." },
    solutionTitle: { ar: "حوكمة المدخلات والمخرجات ونسب الهالك (Yield Control)", en: "Input-Output Governance & Standard Yield Control" },
    solutionDesc: { ar: "تطبيق معادلات هالك معيارية ومطابقة الكميات المنصرفة بالمستلمة لكل أمر تشغيل وربط الفروقات بالتكلفة الفعلية.", en: "Enforcing standard scrap allowances, reconciling issued vs. finished quantities per batch order, and posting variances to actual cost." }
  },
  {
    id: 8,
    problemTitle: { ar: "العشوائية في منح الائتمان ومتابعة التحصيل (AR)", en: "Unstructured Customer Credit & Receivables Tracking" },
    problemDesc: { ar: "منح تسهيلات بيعية أو خصومات للعملاء دون سقوف ائتمان معتمدة أو نظام صارم لمتابعة أعمار الديون المتأخرة.", en: "Granting credit terms or discounts without approved credit limits or disciplined aging receivables collection tracking." },
    solutionTitle: { ar: "ضبط سياسات البيع والائتمان والتحصيل", en: "Credit Policy Controls & AR Aging Governance" },
    solutionDesc: { ar: "إقرار سياسة ائتمان واضحة وتفعيل سقوف ائتمانية آلية لكل عميل على النظام مع تقارير أعمار ديون أسبوعية.", en: "Establishing a formal credit policy with system-enforced customer credit limits and weekly AR Aging reports." }
  },
  {
    id: 9,
    problemTitle: { ar: "تشتت الهوية المؤسسية وضعف الحضور الرقمي (B2B)", en: "Fragmented Brand Identity & Weak B2B Digital Presence" },
    problemDesc: { ar: "عدم الفصل بين الهوية المؤسسية للمصنع ككيان صناعي وبين العلامات التجارية للمنتجات، وغياب قنوات الترويج الاحترافية لقطاع الأعمال.", en: "Blurring the factory’s corporate industrial identity with product brands, coupled with an absence of professional B2B digital channels." },
    solutionTitle: { ar: "بناء هندسة العلامات التجارية والحضور الرقمي (B2B)", en: "Corporate Brand Architecture & B2B Digital Presence" },
    solutionDesc: { ar: "فصل الهوية المؤسسية عن العلامات الخمس، وتأسيس قنوات التواصل التجارية (Google, YouTube, LinkedIn, Instagram, TikTok) وأدوات البيع الميداني.", en: "Separating corporate identity from the 5 product brands, launching B2B channels (Google, YouTube, LinkedIn, Instagram, TikTok), and equipping field sales kits." }
  },
  {
    id: 10,
    problemTitle: { ar: "غياب التقارير التنفيذية الدورية ومؤشرات الأداء (MIS)", en: "Lack of Periodic Executive MIS & KPI Reporting" },
    problemDesc: { ar: "اعتماد الإدارة العليا على المتابعة الشفهية اليومية لغياب تقارير دورية دقيقة توضح الربحية، السيولة، وأداء المبيعات والمخزون.", en: "Executive reliance on verbal daily updates due to the absence of structured periodic reports on profitability, cash flow, sales, and stock." },
    solutionTitle: { ar: "تأسيس منظومة التقارير التنفيذية الدورية (Executive MIS)", en: "Structured Executive MIS & KPI Reporting Pack" },
    solutionDesc: { ar: "بناء تقارير أداء مالية وتشغيلية منتظمة تمكّن الإدارة من اتخاذ قرارات مبنية على البيانات وتمهّد للأتمتة الشاملة.", en: "Delivering standardized financial and operational MIS reports enabling data-driven decisions and paving the way for full automation." }
  }
];

export const FIVE_CORE_DEPARTMENTS = [
  {
    id: "dept-1",
    number: "01",
    title: {
      ar: "القسم الأول: الهوية البصرية، هندسة العلامات التجارية، والتسويق الرقمي (B2B)",
      en: "Department 1: Visual Identity, Brand Architecture & B2B Digital Presence"
    },
    summary: {
      ar: "فصل الهوية المؤسسية للمصنع (استيراد وتجهيز وتعبئة محلية) عن العلامات الخمس، وتأسيس قنوات B2B وحوكمة العلامة.",
      en: "Separating corporate factory branding (import & local value-added packaging) from the 5 product brands and launching B2B digital presence."
    },
    pillars: {
      ar: [
        "هندسة العلامات التجارية (Brand Architecture): بناء هوية مؤسسية مستقلة للمصنع ككيان صناعي وتجاري متخصص في استيراد الخامات الأولية وتجهيزها وتعبئتها محلياً (بدلاً من التصنيع للغير)، وفصلها عن الهويات التجارية المستقلة لخطوط المنتجات الخمسة لضمان تموضع سوقي وتسعيري مستقل لكل خط.",
        "منظومة الحضور الرقمي لقطاع الأعمال (B2B Digital Presence): تأسيس وتوثيق الحسابات الرسمية على محرك البحث (Google Business Profile) وقناة (YouTube) لتوثيق القدرات التشغيلية، بالتكامل مع منصات (LinkedIn, Instagram, TikTok) لاستقطاب الموزعين وعملاء قطاع الأعمال، مع تسليم خطة تسويق رقمي وإدارة منصات تواصل اجتماعي مستقلة تباعاً.",
        "الحوكمة المؤسسية (Corporate Governance Framework): تطبيق مصفوفة حوكمة معتمدة تحمي الكيان التجاري وأصول المصنع وتضمن استدامة الأعمال وحقوق كافة الأطراف عبر الفصل الواضح بين الصلاحيات التنفيذية والرقابية."
      ],
      en: [
        "Brand Architecture: Establishing an independent corporate identity for the factory as an industrial entity specialized in raw material import and local value-added processing/packaging (replacing contract manufacturing), separated from the five standalone consumer product brands.",
        "B2B Digital Presence: Setting up and verifying official accounts on Google Business Profile and YouTube alongside LinkedIn, Instagram, and TikTok to attract distributors and B2B buyers, supported by a standalone Digital Marketing & Social Media Plan delivered subsequently.",
        "Corporate Governance Framework: Enforcing an approved governance framework protecting the commercial entity, factory assets, and business continuity through clear Segregation of Duties."
      ]
    },
    deliverables: {
      ar: [
        "دليل الهوية المؤسسية وهندسة العلامات التجارية (Brand Architecture Manual).",
        "دليل الهوية البصرية الكامل وتصاميم عبوات الخطوط الخمسة + الكتالوج التفاعلي وصندوق العينات المادي.",
        "حسابات الحضور الرقمي الموثقة لقطاع الأعمال + خطة التسويق الرقمي المستقلة."
      ],
      en: [
        "Corporate Identity & Brand Architecture Manual.",
        "Complete Visual Identity Guidelines, 5-Line Packaging Artwork, Interactive Catalog & Physical Sample Box.",
        "Verified B2B Digital Presence Channels + Standalone Digital Marketing Plan."
      ]
    },
    practicalExample: {
      ar: "فصل الهوية البصرية والمراسلات الرسمية للمصنع بمنطقة الرسيل الصناعية عن الهوية التجارية لخط الحليب البودرة أو القهوة، وتطوير عبوة الحليب البودرة 900 جرام بخاصية الإغلاق المحكم (الريسيل)، وتوثيق قنوات Google وYouTube وLinkedIn لاستهداف مديري المشتريات بقطاع الضيافة والتجزئة في مسقط وصحار (كمثال استرشادي تقريبي*).",
      en: "Separating the Al Rusayl factory’s corporate identity from the consumer brand identity of the milk powder or coffee line, developing a 900g resealable milk powder pouch, and verifying Google, YouTube, and LinkedIn channels to reach HoReCa and retail buyers in Muscat and Sohar (Illustrative Benchmark*)."
    }
  },
  {
    id: "dept-2",
    number: "02",
    title: {
      ar: "القسم الثاني: الحوكمة، المالية، وإعادة الهيكلة (Governance, Finance & Restructuring)",
      en: "Department 2: Corporate Governance, Finance & Restructuring"
    },
    summary: {
      ar: "تفعيل مصفوفة الصلاحيات (DoA)، هندسة التكلفة الفعلية للأصناف (SKU Costing)، بوابة الاعتماد المزدوجة، والمطابقة الثلاثية.",
      en: "Activating DoA Matrix, Actual SKU Costing, Dual Approval Gate, and mandatory Three-Way Matching."
    },
    pillars: {
      ar: [
        "مصفوفة الصلاحيات المؤسسية (DoA Matrix): توثيق جدول صلاحيات مالية وإدارية يحدد سقوف الاعتماد ويفصل بين مهام الطلب، المراجعة، والصرف (Segregation of Duties).",
        "نموذج التكلفة الفعلية للأصناف وبوابة الاعتماد المزدوجة (SKU Costing & Dual Gate): احتساب التكلفة المعيارية والفعلية لكل صنف وربطها ببوابة إلزامية تشترط المطابقة الفنية (GSO والبطاقة الغذائية) واعتماد التكلفة الفعلية وهامش الربح قبل إصدار أي قائمة أسعار.",
        "نظام المطابقة الثلاثية والسياسات المالية (3-Way Matching & Financial SOPs): حظر اعتماد أي فاتورة مورد أو صرف مستحقات مالية إلكترونياً إلا بعد تطابق أمر الشراء (PO) ومحضر الاستلام الفعلي (GRN) والفاتورة، مع ضبط سياسات الائتمان وأعمار الديون (AR Aging)."
      ],
      en: [
        "Delegation of Authority (DoA) Matrix: Documenting financial and administrative approval thresholds and enforcing Segregation of Duties across requisition, review, and payment.",
        "Actual SKU Costing & Dual Approval Gate: Calculating standard and actual unit costs per SKU linked to a mandatory gate requiring GSO/labeling compliance plus validated cost and margin sign-off prior to issuing price lists.",
        "Mandatory Three-Way Matching & Financial SOPs: Blocking supplier invoice approvals unless PO, physical GRN, and invoice match, alongside structured customer credit limits and weekly AR Aging tracking."
      ]
    },
    deliverables: {
      ar: [
        "مصفوفة الصلاحيات المالية والإدارية المعتمدة (Approved DoA Matrix).",
        "نموذج التكلفة المعيارية والفعلية للأصناف وبوابة الاعتماد المزدوجة.",
        "دليل السياسات المالية ونظام المطابقة الثلاثية وسياسة الائتمان والتحصيل."
      ],
      en: [
        "Approved Financial & Administrative DoA Matrix.",
        "Standard & Actual SKU Costing Engine & Dual Approval Gate SOP.",
        "Financial SOPs Manual, 3-Way Matching Workflow & Credit Control Policy."
      ]
    },
    practicalExample: {
      ar: "عند إصدار أمر توريد عبوات تعبئة بقيمة 3,400 ريال عماني لعدد 5,000 عبوة، وورود استلام فعلي بكمية 4,200 عبوة فقط، يقوم النظام تلقائياً بتعليق الفاتورة وحصر الصرف في قيمة الكمية المستلمة فعلياً (4,200 عبوة) لحين استكمال التوريد أو التسوية (كمثال استرشادي تقريبي*).",
      en: "When a PO is issued for 5,000 packaging units valued at OMR 3,400 and only 4,200 units are physically received, the system holds the invoice and restricts payment to the 4,200 received units pending completion or credit note (Illustrative Benchmark*)."
    }
  },
  {
    id: "dept-3",
    number: "03",
    title: {
      ar: "القسم الثالث: سلاسل الإمداد، المشتريات، المخازن وسلسلة التبريد (Supply Chain & Cold Chain)",
      en: "Department 3: Supply Chain, Procurement, Warehousing & Cold Chain Governance"
    },
    summary: {
      ar: "تطبيق التتبع بالتشغيلة وقواعد FIFO/FEFO، وتأسيس سجلات سلسلة التبريد والرقابة البيئية لتأمين خط الموتزاريلا والمخزون الجاف.",
      en: "Enforcing Batch Tracking, FIFO/FEFO dispatch rules, and Cold Chain & climate logs for mozzarella and dry goods."
    },
    pillars: {
      ar: [
        "منظومة التتبع المخزني والصرف المنهجي (Batch Tracking & FIFO/FEFO): نقل إدارة مخزون النشاط القائم (الحليب البودرة، الشاي، القهوة) والخطوط الجديدة إلى نظام تتبع دقيق بالتشغيلة وتواريخ الصلاحية لمنع الهدر وتقادم المخزون.",
        "سلسلة التبريد والرقابة البيئية (Cold Chain & Climate Controls): تأسيس سجلات رقابة إلزامية لدرجات الحرارة والرطوبة لتأمين إطلاق خط الجبن الموتزاريلا الجديد وحماية المخزون الجاف الحساس.",
        "تخطيط الإمداد وبوابات الجودة (Stage-Gate & Reorder Levels): ربط أوامر الشراء بحدود إعادة الطلب (Min/Max) وبوابة المطابقة الفنية والبطاقة الغذائية قبل التعاقد النهائي على التغليف والخامات."
      ],
      en: [
        "Batch Traceability & Stock Rotation (FIFO/FEFO): Transitioning inventory handling for existing lines (milk powder, tea, coffee) and new lines into batch-tracked, expiry-controlled workflows to eliminate shrinkage and obsolescence.",
        "Cold Chain & Climate Governance: Establishing mandatory temperature and humidity control logs to safeguard the launch of the new mozzarella cheese line and protect moisture-sensitive dry stock.",
        "Supply Planning & Quality Gates: Linking purchase orders to automated Min/Max Reorder Levels and GSO/labeling sign-off gates prior to final packaging commitments."
      ]
    },
    deliverables: {
      ar: [
        "دليل إجراءات الاستلام والتتبع بالتشغيلة وقواعد الصرف (FIFO/FEFO SOPs).",
        "سجلات الرقابة البيئية وسلسلة التبريد المعتمدة (Cold Chain & Climate Logs).",
        "مصفوفة نقاط إعادة الطلب والحدود الدنيا والقصوى للمخزون (Min/Max Matrix)."
      ],
      en: [
        "Warehouse Receiving, Batch Tracking & FIFO/FEFO SOP Manual.",
        "Approved Cold-Chain & Climate Control Monitoring Logs.",
        "SKU Min/Max & Reorder Threshold Matrix."
      ]
    },
    practicalExample: {
      ar: "إلزام النظام بعدم إصدار أمر شراء نهائي لمواد التعبئة والتغليف إلا بعد استلام اعتماد المطابقة الفنية والبطاقة الغذائية (GSO)، وتفعيل سجلات الرقابة البيئية اليومية لمناطق التخزين المبردة والجافة مع المطابع والموردين المعتمدين (كمثال استرشادي تقريبي*).",
      en: "Enforcing system blocks on final packaging POs until GSO technical and labeling sign-off is logged, alongside daily climate control records across chilled and dry storage zones with accredited suppliers (Illustrative Benchmark*)."
    }
  },
  {
    id: "dept-4",
    number: "04",
    title: {
      ar: "القسم الرابع: أرضية الإنتاج والعمليات الصناعية (حوكمة الصندوق الأسود)",
      en: "Department 4: Production Floor & Industrial Operations (Black-Box Governance)"
    },
    summary: {
      ar: "حوكمة المدخلات والمخرجات ونسب الهالك المعيارية لكل أمر تشغيل مع إبقاء الإدارة اليومية لأرضية الإنتاج بيد مدير الإنتاج.",
      en: "Black-Box Input-Output & standard scrap governance per batch order while keeping daily floor management with the Production Manager."
    },
    pillars: {
      ar: [
        "فلسفة حوكمة الصندوق الأسود (Black-Box Input-Output Governance): ترك الإدارة الفنية والتشغيلية اليومية لخطوط الإنتاج لمدير الإنتاج، مع إحكام الرقابة المؤسسية الصارمة على المدخلات والمخرجات (Inputs vs. Outputs).",
        "رقابة أوامر التشغيل والهالك المعياري (Production Orders & Scrap Variance): مطابقة الكميات المنصرفة من المخازن (خامات ومواد تعبئة) مع المنتج التام المسلّم فعلياً لكل أمر تشغيل، ومحاسبة التشغيل على الانحرافات عن نسب الهالك المعيارية المعتمدة.",
        "الالتزام بمعايير الجودة والسلامة الغذائية (Quality & GSO Compliance): تطبيق نقاط فحص الجودة أثناء التشغيل وبعد التعبئة لضمان مطابقة كافة التشغيلات للمواصفات القياسية قبل دخولها مخزن المنتج التام."
      ],
      en: [
        "Black-Box Input-Output Governance: Delegating day-to-day technical floor management to the Production Manager while enforcing strict institutional controls over production Inputs vs. Outputs.",
        "Production Order & Standard Scrap Variance Control: Reconciling raw and packaging materials issued from stores against finished goods received per batch order, holding operations accountable for variances beyond standard scrap thresholds.",
        "In-Process Quality & Food Safety Compliance: Enforcing quality checkpoints during processing and packaging to verify GSO compliance prior to finished-goods warehouse entry."
      ]
    },
    deliverables: {
      ar: [
        "دليل دورة أوامر التشغيل ومطابقة المدخلات بالمخرجات (Production Order SOP).",
        "جدول نسب الهالك الفني المعيارية المعتمدة لكل خط إنتاج (Standard Scrap Matrix).",
        "نماذج فحص الجودة وإجراء حجز والإفراج عن التشغيلات (Batch Hold & Release)."
      ],
      en: [
        "Production Order & Input-Output Reconciliation SOP.",
        "Approved Standard Yield & Scrap Allowance Matrix per Line.",
        "In-Process QA Checklists & Batch Hold/Release Protocol."
      ]
    },
    practicalExample: {
      ar: "مقارنة كمية الخامات ومواد التغليف المنصرفة لأمر تشغيل محدد مع عدد العبوات التامة المسلّمة فعلياً للمخازن، وربط أي انحراف يتجاوز نسبة الهالك المعيارية المعتمدة بتكلفة التشغيل وتقييم الأداء (كمثال استرشادي تقريبي*).",
      en: "Reconciling raw materials and packaging issued to a specific production batch against finished units delivered to stores, posting any variance above standard scrap limits to operational cost and KPI reviews (Illustrative Benchmark*)."
    }
  },
  {
    id: "dept-5",
    number: "05",
    title: {
      ar: "القسم الخامس: البنية التحتية وتقنية المعلومات ومنظومة الـ ERP الرشيقة",
      en: "Department 5: IT Infrastructure, Lean ERP Activation & Centralized Biometrics"
    },
    summary: {
      ar: "تفعيل وحدات الـ ERP الأربعة على قدر الفريق الحالي، وتشغيل منظومة البصمة المركزية للـ 11 موظفاً التشغيليين والفنيين مربوطة بالرواتب.",
      en: "Activating the 4 core ERP modules for the current team and deploying Centralized Biometric Attendance for the 11 operational/technical staff."
    },
    pillars: {
      ar: [
        "إعادة هيكلة وتفعيل منظومة الـ ERP الرشيقة (Lean ERP Activation): تفعيل الوحدات التشغيلية الأساسية الأربعة (المستودعات، المبيعات، المحاسبة، وتخطيط الإنتاج) وتنظيف قاعدة البيانات الرئيسية (Master Data) على قدر فريق العمل الحالي الفعلي فقط ومنع العمل خارج النظام.",
        "منظومة الحضور والانصراف الإلكترونية الموحدة والمركزية (Centralized Biometric System): تشغيل جهاز البصمة الموحد والمركزي وربطه بمنظومة الموارد البشرية والرواتب (HR & Payroll) لتغطية الـ 11 موظفاً التشغيليين والإداريين والفنيين بالمصنع فقط (باستثناء الإدارة التنفيذية العليا).",
        "أمن البيانات وإدارة الصلاحيات (Access Control & Data Integrity): ضبط صلاحيات الدخول على النظام وفق المسميات الوظيفية ومصفوفة الصلاحيات (DoA) لضمان سلامة البيانات وسهولة استخراج التقارير التنفيذية."
      ],
      en: [
        "Lean ERP Restructuring & Core Module Activation: Activating the four core operational modules (Inventory, Sales, Accounting, Production Planning) and cleansing Master Data sized strictly for the current active team, eliminating off-system spreadsheets.",
        "Centralized Biometric Attendance & Payroll Integration: Deploying a Centralized Biometric System integrated with HR & Payroll covering the 11 operational, administrative, and technical employees only (excluding Executive Leadership).",
        "Role-Based Access Control & Data Integrity: Configuring system permissions strictly aligned with job descriptions and the DoA matrix to safeguard data integrity and executive reporting."
      ]
    },
    deliverables: {
      ar: [
        "تفعيل وتكامل الوحدات الأربعة الأساسية في منظومة الـ ERP + قاعدة بيانات منقحة.",
        "منظومة الحضور والانصراف الإلكترونية المركزية مربوطة بالرواتب (Biometric-Payroll Sync).",
        "منظومة التقارير التنفيذية الدورية (Monthly Executive MIS Pack)."
      ],
      en: [
        "Integrated 4 Core ERP Modules + Cleansed Master Data Registry.",
        "Centralized Biometric Attendance System Synced with HR & Payroll.",
        "Standardized Monthly Executive MIS Reporting Pack."
      ]
    },
    practicalExample: {
      ar: "ترحيل ساعات العمل الفعلية والورديات والعمل الإضافي للـ 11 موظفاً التشغيليين والفنيين تلقائياً من جهاز البصمة المركزي إلى مسير الرواتب الشهري وتوزيع تكلفة العمالة المباشرة على مراكز التكلفة دون تدخل يدوي (كمثال استرشادي تقريبي*).",
      en: "Automatically syncing actual shift hours and overtime for the 11 operational and technical staff from the centralized biometric device into monthly payroll and allocating direct labor costs accurately (Illustrative Benchmark*)."
    }
  }
];

export const FIVE_PRODUCT_LINES_MATRIX = [
  {
    id: "line-1",
    statusBadge: { ar: "نشاط قائم — تطوير وحوكمة", en: "Existing Line — Upgrade & Governance" },
    name: { ar: "1. خط الحليب البودرة (Milk Powder)", en: "1. Milk Powder Line" },
    packagingExample: {
      ar: "عبوات مرنة بأحجام متعددة مثل 900 جرام مزودة بخاصية الإغلاق المحكم (الريسيل) وعبوات التموين (كمثال استرشادي تقريبي*).",
      en: "Multi-size flexible pouches such as 900g with resealable zipper plus catering packs (Illustrative Benchmark*)."
    },
    benchmarkScenario: {
      ar: "نموذج تطبيقي استرشادي (*): ضبط تكلفة الاستيراد والتعبئة لكل حجم عبوة، تطبيق التتبع بالتشغيلة وقواعد الصرف (FEFO) في المخازن الجافة، وتحديث الهوية البصرية للعبوة لتعزيز التنافسية في سلاسل التجزئة.",
      en: "Illustrative Benchmark (*): Validating import and packing unit cost per pack size, enforcing batch traceability and FEFO rotation in dry storage, and upgrading pouch visual identity for retail competitiveness."
    }
  },
  {
    id: "line-2",
    statusBadge: { ar: "نشاط قائم — تطوير وحوكمة", en: "Existing Line — Upgrade & Governance" },
    name: { ar: "2. خط الشاي (Tea Line)", en: "2. Tea Line" },
    packagingExample: {
      ar: "عبوات الشاي الخشن والناعم وأكياس الشاي بمواصفات حفظ النكهة والرطوبة (كمثال استرشادي تقريبي*).",
      en: "Loose-leaf and tea-bag packs engineered for aroma and moisture protection (Illustrative Benchmark*)."
    },
    benchmarkScenario: {
      ar: "نموذج تطبيقي استرشادي (*): إحكام الرقابة البيئية على الرطوبة بالمخازن، ربط أوامر التعبئة بنسب الهالك المعيارية، وتجهيز كتالوج المواصفات الفنية لقطاع الضيافة والفنادق (HoReCa) والجملة.",
      en: "Illustrative Benchmark (*): Enforcing warehouse humidity controls, linking packing orders to standard yield thresholds, and equipping technical spec sheets for HoReCa and wholesale accounts."
    }
  },
  {
    id: "line-3",
    statusBadge: { ar: "نشاط قائم — تطوير وحوكمة", en: "Existing Line — Upgrade & Governance" },
    name: { ar: "3. خط القهوة (Coffee Line)", en: "3. Coffee Line" },
    packagingExample: {
      ar: "أكياس القهوة المحمصة والمطحونة بأحجام تجارية وتموينية مثل 500 جرام (كمثال استرشادي تقريبي*).",
      en: "Roasted and ground coffee pouches in retail and HoReCa sizes such as 500g (Illustrative Benchmark*)."
    },
    benchmarkScenario: {
      ar: "نموذج تطبيقي استرشادي (*): الإشراف الفني على تجارب الطباعة الأولية مع المطابع المعتمدة، مطابقة بيانات البطاقة الغذائية (GSO)، وتوجيه محتوى رقمي تعريفي لمديري المشتريات في المقاهي والمطاعم.",
      en: "Illustrative Benchmark (*): Supervising initial print proofs with accredited presses, validating GSO nutritional labeling, and targeting educational B2B content to cafe and restaurant buyers."
    }
  },
  {
    id: "line-4",
    statusBadge: { ar: "خط توسعي جديد — قياس خارجي افتراضي", en: "New Expansion Line — External Benchmark" },
    name: { ar: "4. خط زيوت الطبخ (Cooking Oils Line)", en: "4. Cooking Oils Line" },
    packagingExample: {
      ar: "عبوات زيت الطعام بأحجام التجزئة والتموين مثل 1.8 لتر و5 لتر (كمثال استرشادي تقريبي*).",
      en: "Edible cooking oil containers in retail and catering sizes such as 1.8L and 5L (Illustrative Benchmark*)."
    },
    benchmarkScenario: {
      ar: "نموذج تطبيقي افتراضي — قياس خارجي على القطاع الصناعي (*): لو افترضنا في منشأة تعبئة زيوت مماثلة وجود تباين في نسب الفاقد أثناء التعبئة أو عدم ربط تسعير العبوات بتقلبات أسعار الخامات، يُنفَّذ تدخل Omni Turnkey عبر 4 خطوات: (1) بناء بطاقة تكلفة فعلية لكل حجم عبوة قبل التسعير، (2) تحديد نسبة الهالك الفني المسموح بها ومحاسبة التشغيل على الفروقات، (3) تفعيل بوابة المطابقة الفنية واشتراطات الـ GSO قبل طباعة الملصقات، (4) ربط المشتريات بحدود إعادة الطلب لتجنب تجميد السيولة.",
      en: "Hypothetical External Industry Benchmark (*): Assuming a comparable regional oil-packaging operation faces filling yield variances or unlinked SKU pricing, Omni Turnkey executes 4 steps: (1) building a validated SKU cost card per pack size before pricing, (2) setting standard filling scrap limits and tracking variances, (3) enforcing GSO compliance prior to label printing, (4) linking procurement to automated Reorder Levels."
    }
  },
  {
    id: "line-5",
    statusBadge: { ar: "خط توسعي جديد — قياس خارجي افتراضي", en: "New Expansion Line — External Benchmark" },
    name: { ar: "5. خط الجبن الموتزاريلا (Mozzarella Cheese Line)", en: "5. Mozzarella Cheese Line" },
    packagingExample: {
      ar: "عبوات الجبن الموتزاريلا المبردة والمجمدة المخصصة لقطاع المطاعم والبيتزا والتجزئة (كمثال استرشادي تقريبي*).",
      en: "Chilled and frozen mozzarella packs tailored for HoReCa, pizzerias, and retail (Illustrative Benchmark*)."
    },
    benchmarkScenario: {
      ar: "نموذج تطبيقي افتراضي — قياس خارجي على القطاع الصناعي (*): لو افترضنا إطلاق خط أجبان مبردة جديد في منشأة صناعية مماثلة، يُنفَّذ تدخل Omni Turnkey عبر 4 خطوات استباقية: (1) تأسيس سجلات رقابة إلزامية لسلسلة التبريد (Cold Chain) في التخزين والنقل، (2) تطبيق نظام الصرف الصارم حسب الصلاحية (FEFO) والتتبع بالتشغيلة، (3) ربط أوامر الشراء ونسب الهالك الفعلي بتكلفة الوحدة لحماية هامش الربح، (4) تجهيز عينات معتمدة وبطاقات مواصفات GSO للتعاقد مع قطاع الفنادق والمطاعم.",
      en: "Hypothetical External Industry Benchmark (*): Assuming the launch of a new chilled mozzarella line in a comparable facility, Omni Turnkey executes 4 proactive steps: (1) establishing mandatory Cold Chain temperature logs across storage and transit, (2) enforcing strict FEFO rotation and batch traceability, (3) linking POs and scrap variances to unit cost for margin protection, (4) equipping GSO spec sheets and sample kits for HoReCa contracting."
    }
  }
];

export const ROADMAP_90_DAYS_PHASES = [
  {
    id: "phase-1",
    tabLabel: { ar: "الأيام 1 – 30", en: "Days 1 – 30" },
    title: { ar: "المرحلة الأولى (الأيام 1 – 30): التأسيس، ضبط النزيف، وبناء الأساس الرقمي", en: "Stage A (Days 1 – 30): Stabilization, Leak Prevention & Digital Foundation" },
    subtitle: "Stabilization & Quick Wins",
    tracks: [
      {
        id: "p1-t1",
        trackName: { ar: "1. الحوكمة والمالية وإعادة الهيكلة", en: "1. Governance, Finance & Restructuring" },
        summary: { ar: "اعتماد مصفوفة الصلاحيات (DoA)، تدشين نموذج التكلفة الفعلية للأصناف (SKU Costing)، وتفعيل نظام المطابقة الثلاثية الإلزامي (PO / GRN / Invoice).", en: "Approving the DoA matrix, launching the Actual SKU Costing model, and enforcing mandatory Three-Way Matching (PO / GRN / Invoice)." },
        practicalExample: { ar: "عند إصدار أمر توريد عبوات تعبئة بقيمة 3,400 ريال عماني لعدد 5,000 عبوة، وورود استلام فعلي بكمية 4,200 عبوة فقط، يقوم النظام تلقائياً بتعليق الفاتورة وحصر الصرف في قيمة الكمية المستلمة فعلياً (4,200 عبوة) لحين استكمال التوريد أو التسوية (كمثال استرشادي تقريبي*).", en: "When a PO is issued for 5,000 packaging units valued at OMR 3,400 and only 4,200 units are physically received, the system holds the invoice and restricts payment to the 4,200 received units pending completion or credit note (Illustrative Benchmark*)." },
        managementDeliverables: {
          ar: ["وثيقة مصفوفة الصلاحيات المالية والإدارية المعتمدة (Approved DoA Matrix).", "نموذج بطاقات التكلفة الفعلية للأصناف (Validated SKU Costing Model).", "محضر تفعيل ضوابط المطابقة الثلاثية على النظام (3-Way Matching Sign-Off)."],
          en: ["Approved Financial & Administrative Delegation of Authority (DoA) Matrix.", "Validated Actual SKU Costing Model & Margin Cards.", "System Three-Way Matching Control Activation Sign-Off."]
        }
      },
      {
        id: "p1-t2",
        trackName: { ar: "2. التحول الرقمي وتقنية المعلومات (ERP & IT)", en: "2. Digital Transformation & IT Infrastructure" },
        summary: { ar: "إعادة هيكلة وتفعيل الوحدات الأساسية الأربعة في منظومة الـ ERP (المستودعات، المبيعات، المحاسبة، وتخطيط الإنتاج) على قدر الفريق الحالي فقط، وتنظيف قاعدة البيانات.", en: "Restructuring and activating the four core ERP modules (Inventory, Sales, Accounting, Production Planning) sized strictly for the current team, plus Master Data cleansing." },
        practicalExample: { ar: "توحيد أكواد الأصناف والموردين والعملاء ومنع إصدار أي فاتورة مبيعات أو إذن صرف مخزني خارج منظومة الـ ERP لضمان تطابق الأرصدة الدفترية والفعلية لحظياً (كمثال استرشادي تقريبي*).", en: "Standardizing item, vendor, and customer codes and prohibiting off-system sales invoices or stock issues so book and physical balances match in real time (Illustrative Benchmark*)." },
        managementDeliverables: {
          ar: ["قاعدة بيانات رئيسية موحدة ومنقحة (Cleansed Master Data Registry).", "هيكل صلاحيات المستخدمين المفعّل على وحدات الـ ERP الأربعة."],
          en: ["Standardized & Cleansed Master Data Registry.", "Configured Role-Based Access Matrix across the 4 Core ERP Modules."]
        }
      },
      {
        id: "p1-t3",
        trackName: { ar: "3. المخازن وسلسلة التبريد", en: "3. Warehousing & Cold Chain Governance" },
        summary: { ar: "تفعيل نظام التتبع بالتشغيلة (Batch Tracking) وقواعد الصرف (FIFO/FEFO)، وتأسيس سجلات الرقابة البيئية لتأمين خط الموتزاريلا الجديد وحماية المخزون الجاف.", en: "Implementing Batch Tracking and FIFO/FEFO dispatch rules, and establishing climate logs to secure the new mozzarella line and protect dry goods." },
        practicalExample: { ar: "إلزام أمين المخزن بتسجيل رقم التشغيلة وتاريخ الصلاحية لكل شحنة واردة، وتفعيل سجلات قياس الحرارة والرطوبة الدورية لمناطق التخزين المبردة والجافة (كمثال استرشادي تقريبي*).", en: "Requiring storekeepers to log batch numbers and expiry dates on every receipt alongside periodic temperature and humidity logs for chilled and dry zones (Illustrative Benchmark*)." },
        managementDeliverables: {
          ar: ["دليل إجراءات الاستلام والتتبع المخزني (FIFO/FEFO & Batch SOPs).", "سجلات الرقابة البيئية وسلسلة التبريد المعتمدة (Cold Chain & Climate Logs)."],
          en: ["Warehouse Receiving, Batch Tracking & FIFO/FEFO SOP Manual.", "Approved Cold-Chain & Climate Control Monitoring Logs."]
        }
      },
      {
        id: "p1-t4",
        trackName: { ar: "4. هيكلة الهوية البصرية والتسويق الرقمي (B2B)", en: "4. Visual Identity Architecture & B2B Digital Presence" },
        summary: { ar: "بناء الهوية المؤسسية للمصنع والهويات التجارية للخطوط الخمسة (الشعارات، دليل الهوية، والعبوات)، وتأسيس قنوات B2B مع الإشارة لتسليم خطة تسويق رقمي مستقلة تباعاً.", en: "Building corporate factory identity and 5 brand identities (logos, Brand Guidelines, packaging), and launching B2B channels with a standalone Digital Marketing Plan following." },
        practicalExample: { ar: "فصل الهوية المؤسسية للمصنع عن العلامة التجارية لخط الحليب البودرة، وتطوير عبوة 900 جرام بخاصية الإغلاق المحكم (الريسيل)، وتوثيق حسابات Google وYouTube وLinkedIn (كمثال استرشادي تقريبي*).", en: "Separating corporate factory branding from the milk powder consumer brand, developing a 900g resealable pouch, and verifying Google Business, YouTube, and LinkedIn accounts (Illustrative Benchmark*)." },
        managementDeliverables: {
          ar: ["دليل الهوية المؤسسية وهندسة العلامات التجارية (Brand Architecture Manual).", "دليل الهوية البصرية الكامل وتصاميم عبوات الخطوط الخمسة.", "حسابات الحضور الرقمي الموثقة لقطاع الأعمال (Google, YouTube, LinkedIn, IG, TikTok)."],
          en: ["Corporate Identity & Brand Architecture Manual.", "Complete Visual Identity Guidelines & 5-Line Packaging Artwork.", "Verified B2B Digital Presence Channels (Google, YouTube, LinkedIn, IG, TikTok)."]
        }
      }
    ],
    unifiedPhaseGate: {
      ar: "إغلاق الفجوات التشغيلية الحرجة، تفعيل 'بوابة الاعتماد المزدوجة' كشرط إلزامي قبل أي تسعير أو تعاقد جديد، واعتماد الهوية المؤسسية والتجارية.",
      en: "Closing critical operational leaks, enforcing the 'Dual Approval Gate' prior to any pricing or contracting, and approving corporate and brand identities."
    }
  },
  {
    id: "phase-2",
    tabLabel: { ar: "الأيام 31 – 60", en: "Days 31 – 60" },
    title: { ar: "المرحلة الثانية (الأيام 31 – 60): البناء المؤسسي، الضبط التشغيلي، وأدوات البيع", en: "Stage B (Days 31 – 60): Core Architecture, Operational Controls & Sales Enablement" },
    subtitle: "Core Architecture & Build",
    tracks: [
      {
        id: "p2-t1",
        trackName: { ar: "1. الحوكمة والمالية وإعادة الهيكلة", en: "1. Governance, Finance & Restructuring" },
        summary: { ar: "تطبيق الرقابة المحاسبية على نسب الهالك الفعلي مقابل المعياري وتحديث بطاقات التكلفة الحقيقية للأصناف وتفعيل سياسات الائتمان.", en: "Enforcing accounting variance controls on actual vs. standard scrap, updating true SKU cost cards, and activating customer credit policies." },
        practicalExample: { ar: "ربط أوامر الشراء ونسب الهالك الفعلي بتكلفة وحدة الجبن الموتزاريلا لخفض التكلفة الفعلية وحماية هامش الربح قبل اعتماد قوائم الأسعار التجارية (كمثال استرشادي تقريبي*).", en: "Linking purchase orders and actual scrap variances to mozzarella unit costing to lower actual unit cost and protect margins prior to price list sign-off (Illustrative Benchmark*)." },
        managementDeliverables: {
          ar: ["دليل السياسات والإجراءات المالية والمحاسبية (Financial SOPs Manual).", "سياسة الائتمان والتحصيل وتقرير أعمار الديون الأسبوعي (Credit & AR Aging Policy)."],
          en: ["Financial & Accounting Standard Operating Procedures (SOPs) Manual.", "Customer Credit Policy & Weekly AR Aging Report Template."]
        }
      },
      {
        id: "p2-t2",
        trackName: { ar: "2. التحول الرقمي وتقنية المعلومات (ERP & IT)", en: "2. Digital Transformation & IT Infrastructure" },
        summary: { ar: "تشغيل منظومة الحضور والانصراف الإلكترونية الموحدة والمركزية وربطها بملف الرواتب (HR & Payroll) لتغطية الـ 11 موظفاً التشغيليين والفنيين دون الإدارة التنفيذية.", en: "Deploying the Centralized Biometric Attendance System integrated with HR & Payroll covering the 11 operational/technical employees (excluding Executive Leadership)." },
        practicalExample: { ar: "ترحيل ساعات العمل الفعلية والورديات والعمل الإضافي للكوادر الإدارية والتشغيلية والفنية تلقائياً إلى مسير الرواتب الشهري دون تدخل يدوي (كمثال استرشادي تقريبي*).", en: "Automatically syncing actual shift hours and overtime for the 11 operational and technical staff into monthly payroll without manual entry (Illustrative Benchmark*)." },
        managementDeliverables: {
          ar: ["منظومة حضور وانصراف إلكترونية مركزية مربوطة بالرواتب (Biometric-Payroll Sync).", "دليل توزيع تكلفة العمالة المباشرة على مراكز التكلفة."],
          en: ["Centralized Biometric Attendance System Integrated with HR & Payroll.", "Direct Labor Cost Center Allocation Guide."]
        }
      },
      {
        id: "p2-t3",
        trackName: { ar: "3. المخازن وسلسلة التبريد", en: "3. Warehousing & Cold Chain Governance" },
        summary: { ar: "ربط أوامر الشراء والتوريد ببوابة الجودة والمواصفات الفنية (GSO)، وتفعيل نقاط إعادة الطلب (Reorder Levels) وتقارير الجرد الدوري على النظام.", en: "Linking purchase orders to the Quality & GSO Compliance Gate, and activating system-driven Reorder Levels and cycle count reports." },
        practicalExample: { ar: "إصدار تنبيه آلي لإدارة المشتريات فور وصول رصيد أحد خامات التعبئة إلى الحد الأدنى المعتمد لتجنب الشراء العاجل مرتفع التكلفة أو توقف الخطوط (كمثال استرشادي تقريبي*).", en: "Triggering an automated procurement alert once a packaging material hits its minimum safety threshold to avoid rush premiums or line stoppages (Illustrative Benchmark*)." },
        managementDeliverables: {
          ar: ["جدول الحدود الدنيا والقصوى للمخزون ونقاط إعادة الطلب (Min/Max Reorder Matrix).", "نظام تقارير الجرد الدوري وتسوية الفروقات المخزنية."],
          en: ["Approved Inventory Min/Max & Reorder Point Matrix.", "Cycle Count & Inventory Variance Reconciliation Protocol."]
        }
      },
      {
        id: "p2-t4",
        trackName: { ar: "4. الهوية البصرية والتسويق الرقمي (B2B)", en: "4. Visual Identity & B2B Digital Marketing" },
        summary: { ar: "الإشراف الفني على تجارب الطباعة مع المطابع المعتمدة، وإطلاق الكتالوج الرقمي التفاعلي وبطاقات المواصفات الخمس وصندوق العينات المادي.", en: "Technical sign-off on print proofs with accredited presses, and launching the interactive catalog, 5 GSO spec sheets, and Physical Master Sample Box." },
        practicalExample: { ar: "مراجعة واعتماد عينة الطباعة لأكياس القهوة سعة 500 جرام مع المطبعة المعتمدة، وتجهيز صندوق العينات المادي لاجتماعات المبيعات مع مشتري الفنادق والهايبر ماركت (كمثال استرشادي تقريبي*).", en: "Reviewing and approving print proofs for 500g coffee pouches with an accredited press, and equipping the physical sample box for hotel and retail buyer meetings (Illustrative Benchmark*)." },
        managementDeliverables: {
          ar: ["الكتالوج الرقمي التفاعلي + 5 بطاقات مواصفات فنية وتغذوية مطابقة للـ GSO.", "النموذج الأولي المادي المنفذ لصندوق العينات الفاخرة (Physical Master Prototype)."],
          en: ["Interactive Digital Catalog + 5 GSO Technical & Nutritional Spec Sheets.", "Executed Physical Master Prototype of the Luxury Sample Box."]
        }
      }
    ],
    unifiedPhaseGate: {
      ar: "جاهزية ملفات المواصفات الفنية المعتمدة (GSO)، إطلاق حقيبة البيع الميداني وصندوق العينات، وانتظام الدورة المستندية والرقابية على الـ ERP.",
      en: "Readiness of GSO-compliant technical spec sheets, launch of the B2B Sales Kit and Physical Sample Box, and full enforcement of ERP documentary controls."
    }
  },
  {
    id: "phase-3",
    tabLabel: { ar: "الأيام 61 – 90", en: "Days 61 – 90" },
    title: { ar: "المرحلة الثالثة (الأيام 61 – 90): التكامل، التوسع التجاري، والتسليم المؤسسي", en: "Stage C (Days 61 – 90): Integration, Commercial Rollout & Turnkey Handover" },
    subtitle: "Integration, Go-Live & Turnkey Handover",
    tracks: [
      {
        id: "p3-t1",
        trackName: { ar: "1. الحوكمة والمالية وإعادة الهيكلة", en: "1. Governance, Finance & Restructuring" },
        summary: { ar: "تسليم دليل الحوكمة الشامل وتنفيذ دورة تدقيق داخلي للتحقق من الالتزام بمصفوفة الصلاحيات (DoA) وضوابط التسعير والمخزون.", en: "Delivering the comprehensive Governance Manual and conducting an internal compliance audit verifying adherence to DoA, pricing, and stock controls." },
        practicalExample: { ar: "مراجعة عينة شاملة من أوامر الشراء وتسويات الجرد وقوائم الأسعار للتأكد من خلوها من أي تجاوز لصلاحيات الاعتماد قبل التسليم النهائي للمشروع (كمثال استرشادي تقريبي*).", en: "Auditing a representative sample of POs, inventory adjustments, and price lists to verify zero authority overrides prior to final handover (Illustrative Benchmark*)." },
        managementDeliverables: {
          ar: ["دليل الحوكمة المؤسسية الشامل (Corporate Governance & Compliance Manual).", "تقرير التدقيق الداخلي والجاهزية المؤسسية (Internal Compliance Audit Report)."],
          en: ["Comprehensive Corporate Governance & Compliance Manual.", "Internal Compliance & Operational Readiness Audit Report."]
        }
      },
      {
        id: "p3-t2",
        trackName: { ar: "2. التحول الرقمي وتقنية المعلومات (ERP & IT)", en: "2. Digital Transformation & IT Infrastructure" },
        summary: { ar: "التكامل الكامل بين وحدات الـ ERP الأربعة، تفعيل منظومة التقارير التنفيذية الدورية (MIS)، وتوثيق صلاحيات المستخدمين النهائية.", en: "Full integration across the four ERP modules, activation of the periodic Executive MIS reporting pack, and final user access documentation." },
        practicalExample: { ar: "إصدار حزمة تقارير أداء شهرية آلية من النظام تعرض هوامش الربحية لكل خط منتج ومعدلات دوران المخزون وأعمار الديون للإدارة العليا (كمثال استرشادي تقريبي*).", en: "Generating a standardized monthly MIS pack directly from the ERP detailing profitability per product line, stock turnover, and AR aging (Illustrative Benchmark*)." },
        managementDeliverables: {
          ar: ["منظومة التقارير التنفيذية الدورية (Executive MIS Reporting Pack).", "وثيقة تسليم وإدارة صلاحيات النظام (ERP Administration & Handover Guide)."],
          en: ["Standardized Executive MIS & KPI Reporting Pack.", "ERP System Administration & User Access Handover Guide."]
        }
      },
      {
        id: "p3-t3",
        trackName: { ar: "3. المخازن وسلسلة التبريد", en: "3. Warehousing & Cold Chain Governance" },
        summary: { ar: "اعتماد التشغيل القياسي الكامل لسجلات التبريد والتتبع والتسويات المخزنية، وضمان استقرار تدفق الخامات والمنتجات الجاهزة.", en: "Full operational sign-off on cold-chain logs, batch traceability, and stock reconciliations, ensuring uninterrupted material and finished goods flow." },
        practicalExample: { ar: "إجراء مطابقة ختامية بين الرصيد الدفتري على الـ ERP والجرد الفعلي بالمخازن للتحقق من انضباط الدورة المخزنية وسلامة سجلات التبريد (كمثال استرشادي تقريبي*).", en: "Conducting a final reconciliation between ERP book balances and physical warehouse counts to validate inventory discipline and cold-chain logs (Illustrative Benchmark*)." },
        managementDeliverables: {
          ar: ["محضر اعتماد الجاهزية التشغيلية للمخازن وسلسلة التبريد.", "بطاقات مؤشرات أداء سلاسل الإمداد والمخزون (Supply Chain KPIs)."],
          en: ["Warehouse & Cold-Chain Operational Readiness Sign-Off.", "Supply Chain & Inventory Performance KPI Scorecards."]
        }
      },
      {
        id: "p3-t4",
        trackName: { ar: "4. الهوية البصرية والتسويق الرقمي (B2B)", en: "4. Visual Identity & B2B Commercial Expansion" },
        summary: { ar: "استكمال ملفات الإطلاق التجاري لكافة الخطوط الخمسة، ودعم الانتشار عبر قنوات التجزئة والجملة والضيافة (HoReCa) في مسقط وصحار وبقية السلطنة.", en: "Completing commercial launch kits for all five lines and supporting expansion across retail, wholesale, and HoReCa channels in Muscat, Sohar, and across Oman." },
        practicalExample: { ar: "تجهيز ملفات الإطلاق التجاري لعبوات زيت الطعام سعة 1.8 لتر و5 لتر وتزويد فريق المبيعات بقوائم الأسعار المحمية والعينات المعتمدة لإبرام عقود توريد دورية مستقرة (كمثال استرشادي تقريبي*).", en: "Finalizing commercial launch kits for 1.8L and 5L cooking oil containers and equipping sales with margin-protected price lists and approved samples to secure recurring supply contracts (Illustrative Benchmark*)." },
        managementDeliverables: {
          ar: ["حقيبة الإطلاق التجاري المتكاملة للخطوط الخمسة (Commercial Go-To-Market Kit).", "خطة عمل التسويق الرقمي المستقلة للمرحلة التالية (Standalone Digital Marketing Roadmap)."],
          en: ["Integrated 5-Line Commercial Go-To-Market Launch Kit.", "Standalone Digital Marketing & Social Media Execution Roadmap."]
        }
      }
    ],
    unifiedPhaseGate: {
      ar: "التسليم النهائي المتكامل للمشروع (Turnkey Handover)، جاهزية المصنع للتشغيل المؤسسي المستقل، والتمهيد لخطة الأتمتة الشاملة في المرحلة المقبلة.",
      en: "Complete Turnkey Handover, full readiness of the factory for independent institutional operation, and transition into the Next-Phase Automation Roadmap."
    }
  }
];

export const DELIVERABLES_16_LIST = [
  {
    code: "OT-BRD-01",
    phase: { ar: "الأيام 1 – 30", en: "Days 1 – 30" },
    title: { ar: "دليل الهوية المؤسسية وهندسة العلامات التجارية", en: "Corporate Identity & Brand Architecture Manual" },
    summary: { ar: "فصل الهوية المؤسسية للمصنع ككيان متخصص في استيراد الخامات وتجهيزها وتعبئتها محلياً عن الهويات التجارية للخطوط الخمسة.", en: "Separating the factory’s corporate industrial identity (import & value-added local packaging) from the five consumer product brands." },
    handoverComponents: {
      ar: ["وثيقة هندسة العلامات التجارية المعتمدة (Brand Architecture Blueprint).", "ملف الهوية المؤسسية للمصنع (الشعار، الألوان، الخطوط، والمراسلات الرسمية).", "قواعد الفصل التجاري والتسعيري بين المصنع والعلامات التجارية الخمس."],
      en: ["Approved Brand Architecture Blueprint.", "Factory Corporate Identity Kit (Logo, Color Palette, Typography, Official Stationery).", "Commercial & Pricing Separation Guidelines across the 5 Product Brands."]
    },
    practicalExample: { ar: "فصل الهوية البصرية والمراسلات الرسمية للمصنع بمنطقة الرسيل عن الهوية التجارية المستقلة لخط القهوة أو الحليب البودرة الموجهة للمستهلكين والموزعين (كمثال استرشادي تقريبي*).", en: "Separating the Al Rusayl factory’s corporate visual identity and official correspondence from the standalone consumer brand identity of the coffee or milk powder line (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "اعتماد الإدارة التنفيذية لدليل الهوية المؤسسية وبدء استخدامه في كافة المراسلات الرسمية والتعاقدات التجارية.", en: "Executive sign-off on the Corporate Identity Manual and formal adoption across all official correspondence and commercial contracts." }
  },
  {
    code: "OT-BRD-02",
    phase: { ar: "الأيام 1 – 30", en: "Days 1 – 30" },
    title: { ar: "دليل الهوية البصرية المتكاملة وتطوير عبوات الخطوط الخمسة", en: "Integrated Visual Identity Guidelines & 5-Line Packaging" },
    summary: { ar: "إعداد دليل الهوية البصرية الكامل وتصميم عبوات الخطوط الخمسة والإشراف الفني على تجارب الطباعة مع المطابع المعتمدة.", en: "Developing complete Brand Guidelines, designing packaging for all five product lines, and supervising print proofs with accredited presses." },
    handoverComponents: {
      ar: ["دليل الهوية البصرية الكامل (Brand Guidelines) للعلامات التجارية الخمس.", "ملفات التصميم الطباعي الجاهزة للإنتاج (Print-Ready Artwork) لكافة العبوات.", "محاضر اعتماد تجارب الطباعة الأولية (Press Check Sign-Offs) مع المطابع المعتمدة."],
      en: ["Complete Brand Guidelines Manual for the 5 Commercial Brands.", "Print-Ready Artwork Files across all 5 Product Lines.", "Approved Initial Print Proof & Press Check Reports with Accredited Presses."]
    },
    practicalExample: { ar: "تطوير عبوة الحليب البودرة وزن 900 جرام المزودة بخاصية الإغلاق المحكم (الريسيل) أو عبوات زيت الطعام سعة 1.8 و5 لتر ومراجعة عينات الطباعة مع المطابع المعتمدة (كمثال استرشادي تقريبي*).", en: "Developing a 900g milk powder pouch with a resealable feature or 1.8L and 5L cooking oil containers and reviewing print proofs with accredited presses (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "مطابقة التصاميم والبطاقة الغذائية لاشتراطات الـ GSO واعتماد عينات الطباعة الأولية قبل التشغيل الكمي.", en: "Full alignment of artwork and nutritional panels with GSO standards and formal approval of print proofs prior to mass production." }
  },
  {
    code: "OT-BRD-03",
    phase: { ar: "الأيام 1 – 30", en: "Days 1 – 30" },
    title: { ar: "منظومة الحضور الرقمي لقطاع الأعمال (B2B Digital Presence)", en: "B2B Digital Presence & Social Channels Setup" },
    summary: { ar: "تأسيس وتوثيق حسابات Google Business Profile وYouTube بجانب LinkedIn وInstagram وTikTok، مع تسليم خطة تسويق رقمي مستقلة تباعاً.", en: "Establishing and verifying Google Business Profile and YouTube alongside LinkedIn, Instagram, and TikTok, followed by a standalone Digital Marketing Plan." },
    handoverComponents: {
      ar: ["ملف الأعمال الرسمي الموثق على محرك البحث (Google Business Profile).", "القناة الرسمية على (YouTube) وحسابات الأعمال على (LinkedIn, Instagram, TikTok).", "وثيقة خطة التسويق الرقمي وإدارة منصات التواصل المستقلة للمرحلة التالية."],
      en: ["Verified Official Google Business Profile.", "Official YouTube Channel & B2B Accounts (LinkedIn, Instagram, TikTok).", "Standalone Digital Marketing & Social Media Strategy Document."]
    },
    practicalExample: { ar: "نشر محتوى مرئي قصير وتثقيفي يستعرض معايير التعبئة والجودة داخل المصنع بمنطقة الرسيل الصناعية، وتوجيهه لمديري المشتريات في قطاع الضيافة والمقاهي والتجزئة في مسقط وصحار لتوليد طلبات توريد وعروض أسعار مباشرة (كمثال استرشادي تقريبي*).", en: "Publishing short educational video content showcasing packaging and quality standards at the Al Rusayl facility, targeted at HoReCa and retail buyers in Muscat and Sohar to generate direct B2B inquiries (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "تسليم بيانات الوصول الكاملة للحسابات الموثقة لإدارة المصنع واعتماد خارطة طريق التسويق الرقمي المستقلة.", en: "Full handover of verified account credentials to factory management and sign-off on the standalone Digital Marketing Roadmap." }
  },
  {
    code: "OT-BRD-04",
    phase: { ar: "الأيام 31 – 60", en: "Days 31 – 60" },
    title: { ar: "حقيبة أدوات البيع الميداني وصندوق العينات الفاخرة", en: "B2B Field Sales Kit & Physical Master Sample Box" },
    summary: { ar: "تسليم الكتالوج الرقمي التفاعلي + 5 بطاقات مواصفات GSO + التصميم وتسليم النموذج الأولي المادي المنفذ لصندوق العينات الفاخرة.", en: "Delivering the Interactive Digital Catalog + 5 GSO Spec Sheets + structural design and executed Physical Master Prototype of the Luxury Sample Box." },
    handoverComponents: {
      ar: ["كتالوج رقمي تفاعلي (Interactive Digital Catalog) يضم كافة الخطوط الخمسة.", "5 بطاقات مواصفات فنية وتغذوية مطابقة لاشتراطات الـ GSO.", "التصميم الهيكلي والجرافيكي + تسليم النموذج الأولي المادي المنفذ لصندوق العينات الفاخرة (Physical Master Prototype) مجهزاً بعبوات العرض (على أن تتحمل الشركة تكاليف الإنتاج الكمي للكميات التجارية الإضافية)."],
      en: ["Interactive Digital Catalog covering all 5 product lines.", "5 GSO-Compliant Technical & Nutritional Spec Sheets.", "Structural & Graphic Design + Executed Physical Master Prototype of the Luxury Sample Box equipped with display packs (with commercial mass-production costs borne by the company)."]
    },
    practicalExample: { ar: "تقديم صندوق العينات المادي المتكامل خلال اجتماعات التفاوض مع مديري المشتريات في سلاسل الفنادق والهايبر ماركت مرفقاً ببطاقة المواصفات الفنية والكتالوج التفاعلي لتعزيز فرص الاعتماد التجاري (كمثال استرشادي تقريبي*).", en: "Presenting the physical sample box during negotiation meetings with hotel chain and hypermarket buyers alongside technical spec sheets and the interactive catalog to accelerate commercial listing (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "استلام الإدارة للنموذج المادي المنفذ لصندوق العينات والملفات الرقمية والطباعية المعتمدة وجاهزيتها للاستخدام الميداني.", en: "Physical handover of the executed Master Sample Box Prototype alongside approved digital and print sales collateral." }
  },
  {
    code: "OT-GOV-01",
    phase: { ar: "الأيام 1 – 30", en: "Days 1 – 30" },
    title: { ar: "مصفوفة الصلاحيات المالية والإدارية والهيكل التنظيمي (DoA)", en: "Corporate Delegation of Authority (DoA) Matrix & Org Chart" },
    summary: { ar: "توثيق مصفوفة الصلاحيات وسقوف الاعتماد والفصل بين المهام التنفيذية والرقابية لحماية الكيان التجاري وأصول المصنع.", en: "Documenting the Delegation of Authority matrix, approval thresholds, and Segregation of Duties to protect the commercial entity and assets." },
    handoverComponents: {
      ar: ["مصفوفة الصلاحيات المالية والإدارية المعتمدة (Approved DoA Matrix).", "الهيكل التنظيمي المحدث وبطاقات الوصف الوظيفي والمسؤوليات.", "جدول الفصل بين المهام المتعارضة (Segregation of Duties Matrix)."],
      en: ["Approved Financial & Administrative DoA Matrix.", "Updated Organizational Chart & Role Accountability Cards.", "Segregation of Duties (SoD) Control Matrix."]
    },
    practicalExample: { ar: "تحديد مسارات اعتماد طلبات الشراء وسندات الصرف وفق سقوف مالية واضحة تفصل بين صاحب الطلب، المراجع المالي، والاعتماد النهائي دون تداخل في الصلاحيات (كمثال استرشادي تقريبي*).", en: "Defining purchase requisition and payment voucher workflows with clear financial thresholds separating the requester, financial reviewer, and final approver (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "توقيع الإدارة العليا على مصفوفة الصلاحيات وتعميمها كمرجع إلزامي لكافة المعاملات المالية والإدارية.", en: "Executive leadership sign-off on the DoA Matrix and formal enforcement across all financial and administrative workflows." }
  },
  {
    code: "OT-GOV-02",
    phase: { ar: "الأيام 61 – 90", en: "Days 61 – 90" },
    title: { ar: "دليل الحوكمة المؤسسية الشامل وتقرير التدقيق الداخلي", en: "Comprehensive Corporate Governance Manual & Compliance Audit" },
    summary: { ar: "تسليم دليل الحوكمة والسياسات القياسية وتنفيذ دورة تدقيق داخلي للتحقق من التزام الإدارات بضوابط الصلاحيات والتسعير.", en: "Delivering the Governance Manual and conducting an internal compliance audit verifying adherence to DoA and pricing controls." },
    handoverComponents: {
      ar: ["دليل الحوكمة المؤسسية الشامل (Corporate Governance Manual).", "تقرير التدقيق الداخلي والجاهزية المؤسسية قبل التسليم (Compliance Audit Report)."],
      en: ["Comprehensive Corporate Governance Manual.", "Pre-Handover Internal Compliance & Readiness Audit Report."]
    },
    practicalExample: { ar: "فحص عينة شاملة من أوامر الشراء وتسويات الجرد وقوائم الأسعار للتأكد من مطابقتها لمصفوفة الصلاحيات وغياب أي تجاوزات إدارية (كمثال استرشادي تقريبي*).", en: "Auditing a representative sample of POs, stock adjustments, and price lists to confirm full compliance with DoA thresholds (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "اعتماد تقرير الجاهزية المؤسسية وخلو العينات المراجعة من أي ثغرات رقابية حرجة.", en: "Formal sign-off on the Readiness Audit Report with zero unresolved critical control gaps." }
  },
  {
    code: "OT-FIN-01",
    phase: { ar: "الأيام 1 – 30", en: "Days 1 – 30" },
    title: { ar: "نموذج التكلفة الفعلية للأصناف وبوابة الاعتماد المزدوجة", en: "Actual SKU Costing Model & Dual Approval Gate" },
    summary: { ar: "بناء نموذج محاسبي لاحتساب التكلفة المعيارية والفعلية لكل صنف وربطه ببوابة الاعتماد المزدوجة قبل إصدار قوائم الأسعار.", en: "Building an accounting model for standard and actual SKU unit costs linked to the Dual Approval Gate prior to price list issuance." },
    handoverComponents: {
      ar: ["نموذج احتساب التكلفة المعيارية والفعلية للأصناف (SKU Costing Engine).", "بطاقات التكلفة المعتمدة لكافة الأصناف (Validated SKU Cost Cards).", "إجراء بوابة الاعتماد المزدوجة (المطابقة الفنية GSO + اعتماد التكلفة والهامش)."],
      en: ["Standard & Actual SKU Costing Model.", "Validated SKU Cost & Margin Cards.", "Dual Approval Gate SOP (GSO Technical Sign-Off + Cost & Margin Sign-Off)."]
    },
    practicalExample: { ar: "ربط أوامر الشراء ونسب الهالك الفعلي بتكلفة وحدة الجبن الموتزاريلا لخفض التكلفة الفعلية وحماية هامش الربح قبل التعاقد مع كبار العملاء والموزعين (كمثال استرشادي تقريبي*).", en: "Linking purchase orders and actual scrap variances to mozzarella cheese unit costing to lower actual unit cost and protect margins prior to contracting key accounts (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "حظر إصدار أي قائمة أسعار تجارية دون وجود بطاقة تكلفة معتمدة ومطابقة لاشتراطات الجودة والـ GSO.", en: "Zero commercial price lists issued without a validated SKU cost card and GSO compliance sign-off." }
  },
  {
    code: "OT-FIN-02",
    phase: { ar: "الأيام 31 – 60", en: "Days 31 – 60" },
    title: { ar: "دليل السياسات المالية ونظام المطابقة الثلاثية (3-Way Matching)", en: "Financial SOPs Manual & Mandatory 3-Way Matching" },
    summary: { ar: "إصدار دليل السياسات المالية وتطبيق نظام المطابقة الثلاثية الإلزامي (PO / GRN / Invoice) قبل اعتماد أي مدفوعات.", en: "Issuing the Financial SOPs Manual and enforcing mandatory Three-Way Matching (PO / GRN / Invoice) prior to payment authorization." },
    handoverComponents: {
      ar: ["دليل السياسات والإجراءات المالية والمحاسبية الشامل (Financial SOPs).", "آلية المطابقة الثلاثية المفعّلة على النظام (3-Way Matching Workflow)."],
      en: ["Comprehensive Financial & Accounting SOPs Manual.", "System-Enforced Three-Way Matching Workflow."]
    },
    practicalExample: { ar: "عند إصدار أمر توريد عبوات تعبئة بقيمة 3,400 ريال عماني لعدد 5,000 عبوة، وورود استلام فعلي بكمية 4,200 عبوة فقط، يقوم النظام بتعليق الفاتورة وحصر الصرف في قيمة الكمية المستلمة فعلياً لحين الاستكمال أو التسوية (كمثال استرشادي تقريبي*).", en: "When a PO is issued for 5,000 packaging units valued at OMR 3,400 and only 4,200 units are physically received, the system holds the invoice and restricts payment to the 4,200 received units pending completion or credit note (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "التحقق من عدم تمرير أي سند صرف مالي للموردين دون اكتمال أطراف المطابقة الثلاثية على النظام.", en: "Verification that zero supplier payments are processed without completed Three-Way Matching records in the system." }
  },
  {
    code: "OT-FIN-03",
    phase: { ar: "الأيام 31 – 60", en: "Days 31 – 60" },
    title: { ar: "سياسة الائتمان والتحصيل وتقارير أعمار الديون (AR Aging)", en: "Customer Credit Policy & AR Aging Governance" },
    summary: { ar: "تنظيم منح التسهيلات البيعية للعملاء عبر سقوف ائتمانية معتمدة ومتابعة أسبوعية لأعمار الديون لحماية التدفقات النقدية.", en: "Regulating customer credit facilities via approved credit limits and weekly AR Aging monitoring to safeguard cash flow." },
    handoverComponents: {
      ar: ["سياسة الائتمان والتحصيل المعتمدة (Credit & Collection Policy).", "بطاقات السقوف الائتمانية للعملاء وتقرير أعمار الديون الأسبوعي (AR Aging)."],
      en: ["Approved Customer Credit & Collection Policy.", "Customer Credit Limit Cards & Weekly AR Aging Report."]
    },
    practicalExample: { ar: "تفعيل إيقاف آلي لأوامر البيع الآجلة لأي عميل يتجاوز سقفه الائتماني أو فترة السداد المعتمدة لحين تسوية المستحقات المتأخرة (كمثال استرشادي تقريبي*).", en: "Activating automated credit holds on new credit orders for any customer exceeding their approved credit limit or payment term until overdue balances are settled (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "ربط كافة حسابات العملاء الآجلين بسقوف ائتمانية معتمدة على منظومة الـ ERP.", en: "All credit customer accounts configured with approved credit limits inside the ERP." }
  },
  {
    code: "OT-SCM-01",
    phase: { ar: "الأيام 1 – 30", en: "Days 1 – 30" },
    title: { ar: "منظومة التتبع المخزني وسلسلة التبريد (Batch & Cold Chain)", en: "Batch Traceability & Cold Chain Governance System" },
    summary: { ar: "تطبيق التتبع بالتشغيلة وقواعد FIFO/FEFO وتأسيس سجلات الرقابة البيئية لتأمين خط الموتزاريلا الجديد وحماية المخزون الجاف.", en: "Implementing Batch Tracking, FIFO/FEFO dispatch rules, and climate logs to secure the new mozzarella line and protect dry goods." },
    handoverComponents: {
      ar: ["دليل إجراءات المخازن والتتبع بالتشغيلة (Batch Tracking & FEFO SOPs).", "سجلات الرقابة البيئية لدرجات الحرارة والرطوبة (Cold Chain & Dry Storage Logs)."],
      en: ["Warehouse Operations, Batch Tracking & FEFO SOP Manual.", "Cold-Chain & Climate Control Monitoring Logs."]
    },
    practicalExample: { ar: "تفعيل بوابة اعتماد تربط استلام شهادة الفحص المخبري والمواصفات الفنية قبل إصدار أوامر الشراء النهائية لمواد التغليف لمنع الهدر وتقادم المخزون (كمثال استرشادي تقريبي*).", en: "Enforcing an approval gate linking lab certification and technical specifications prior to issuing final packaging POs to prevent waste and obsolescence (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "انتظام التسجيل اليومي للتشغيلات ودرجات الحرارة وتطابق الجرد الفعلي مع أرصدة النظام.", en: "Consistent daily batch and temperature logging alongside full reconciliation between physical stock and ERP balances." }
  },
  {
    code: "OT-SCM-02",
    phase: { ar: "الأيام 31 – 60", en: "Days 31 – 60" },
    title: { ar: "مصفوفة نقاط إعادة الطلب وتخطيط المشتريات (Min/Max Reorder)", en: "Inventory Min/Max Reorder Matrix & Supply Planning" },
    summary: { ar: "تحديد مستويات الأمان والحدود الدنيا والقصوى للمخزون لمنع التوقفات المفاجئة أو تجميد السيولة في أصناف راكدة.", en: "Establishing safety stock and Min/Max thresholds to prevent stockouts or working-capital lockups in slow-moving items." },
    handoverComponents: {
      ar: ["جدول الحدود الدنيا والقصوى ونقاط إعادة الطلب لكافة الأصناف (Min/Max Matrix).", "آلية تخطيط المشتريات المرتبطة بخطة المبيعات والتشغيل."],
      en: ["Approved SKU Min/Max & Reorder Point Matrix.", "Sales- & Production-Linked Procurement Planning Protocol."]
    },
    practicalExample: { ar: "إصدار تنبيه آلي لإدارة المشتريات فور وصول رصيد أحد خامات التعبئة إلى الحد الأدنى المعتمد لتجنب الشراء العاجل مرتفع التكلفة (كمثال استرشادي تقريبي*).", en: "Triggering an automated procurement alert when a packaging material reaches its minimum threshold to prevent costly rush orders (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "إدخال وتفعيل نقاط إعادة الطلب لكافة الخامات ومواد التعبئة على منظومة الـ ERP.", en: "All raw and packaging SKUs configured with active Reorder Levels in the ERP." }
  },
  {
    code: "OT-OPS-01",
    phase: { ar: "الأيام 31 – 60", en: "Days 31 – 60" },
    title: { ar: "إطار حوكمة المدخلات والمخرجات ونسب الهالك (Black-Box Control)", en: "Input-Output Governance & Standard Yield Control" },
    summary: { ar: "ضبط العلاقة الرقابية بين المخازن والإنتاج عبر أوامر التشغيل ومعدلات الهالك المعيارية مع ترك التشغيل اليومي لمدير الإنتاج.", en: "Enforcing input-output controls between stores and production via batch orders and standard yield thresholds while keeping floor management with the Production Manager." },
    handoverComponents: {
      ar: ["دليل دورة أوامر التشغيل ومطابقة المدخلات بالمخرجات (Production Order SOP).", "جدول نسب الهالك الفني المعيارية المعتمدة لكل خط إنتاج (Standard Scrap Matrix)."],
      en: ["Production Order & Input-Output Reconciliation SOP.", "Approved Standard Yield & Scrap Allowance Matrix per Line."]
    },
    practicalExample: { ar: "مطابقة كميات الخامات ومواد التغليف المنصرفة لأمر تشغيل محدد مع عدد العبوات التامة المسلّمة للمخازن وتحديد أي انحراف يتجاوز النسبة المعيارية (كمثال استرشادي تقريبي*).", en: "Reconciling raw materials and packaging issued to a batch order against finished units delivered to stores and flagging variances beyond standard scrap rates (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "إغلاق كافة أوامر التشغيل دورياً على النظام ومطابقة فروقات الهالك محاسبياً.", en: "Periodic batch order closures in the ERP with accounting reconciliation of yield variances." }
  },
  {
    code: "OT-OPS-02",
    phase: { ar: "الأيام 61 – 90", en: "Days 61 – 90" },
    title: { ar: "نقاط فحص الجودة والسلامة الغذائية أثناء التشغيل (In-Process QA)", en: "In-Process Quality & Food Safety Checkpoints" },
    summary: { ar: "تفعيل نقاط رقابة الجودة أثناء التجهيز والتعبئة لضمان مطابقة كافة التشغيلات لاشتراطات الـ GSO قبل دخولها مخزن المنتج التام.", en: "Activating in-process quality checkpoints during processing and packing to verify GSO compliance prior to finished-goods storage." },
    handoverComponents: {
      ar: ["نماذج الفحص الدوري للجودة والوزن والإغلاق أثناء التشغيل (QA Checklists).", "إجراء حجز والإفراج عن التشغيلات (Batch Hold & Release Protocol)."],
      en: ["In-Process Weight, Seal & Quality Inspection Checklists.", "Finished-Goods Batch Hold & Release Protocol."]
    },
    practicalExample: { ar: "عدم السماح بتحويل أي تشغيلة منتج تام إلى رصيد المبيعات القابل للصرف إلا بعد توقيع الفحص الفني على مطابقة الوزن وجودة الإغلاق والبيانات (كمثال استرشادي تقريبي*).", en: "Restricting finished batches from moving into sellable stock until QA signs off on net weight, seal integrity, and labeling accuracy (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "تطبيق سجل الإفراج عن التشغيلات بنسبة 100% على كافة خطوط الإنتاج.", en: "100% enforcement of Batch Release sign-offs across all active production lines." }
  },
  {
    code: "OT-IT-01",
    phase: { ar: "الأيام 1 – 30", en: "Days 1 – 30" },
    title: { ar: "إعادة هيكلة وتفعيل منظومة الـ ERP الرشيقة (Lean ERP Activation)", en: "Lean ERP Restructuring & Core Module Activation" },
    summary: { ar: "تفعيل الوحدات التشغيلية الأربعة (المستودعات، المبيعات، المحاسبة، وتخطيط الإنتاج) وتنظيف قاعدة البيانات على قدر الفريق الحالي فقط.", en: "Activating the four core modules (Inventory, Sales, Accounting, Production Planning) and cleansing Master Data for the current team only." },
    handoverComponents: {
      ar: ["تفعيل وتكامل الوحدات الأربعة الأساسية في منظومة الـ ERP.", "قاعدة البيانات الرئيسية الموحدة والمنقحة (Cleansed Master Data).", "مصفوفة صلاحيات المستخدمين ودليل التشغيل المختصر للفريق الحالي."],
      en: ["Configured & Integrated 4 Core ERP Modules.", "Standardized & Cleansed Master Data Registry.", "User Access Permission Matrix & Quick-Start Operational Guide."]
    },
    practicalExample: { ar: "ربط حركات الاستلام والصرف المخزني بالقيود المحاسبية وفواتير المبيعات لحظياً ضمن صلاحيات محددة لكل موظف في الفريق الحالي (كمثال استرشادي تقريبي*).", en: "Integrating warehouse receipts and dispatches in real time with accounting entries and sales invoices under role-based permissions for the current team (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "تشغيل الدورة المستندية الكاملة داخل الـ ERP وإيقاف السجلات اليدوية الموازية.", en: "Full end-to-end documentary execution inside the ERP and retirement of parallel manual logs." }
  },
  {
    code: "OT-IT-02",
    phase: { ar: "الأيام 31 – 60", en: "Days 31 – 60" },
    title: { ar: "منظومة الحضور والانصراف الإلكترونية الموحدة والمركزية", en: "Centralized Biometric Attendance & Payroll Integration" },
    summary: { ar: "تشغيل جهاز البصمة الموحد والمركزي وربطه بالرواتب لتغطية الـ 11 موظفاً التشغيليين والفنيين بالمصنع (باستثناء الإدارة التنفيذية العليا).", en: "Deploying a Centralized Biometric Attendance System integrated with Payroll covering the 11 operational and technical staff (excluding Executive Leadership)." },
    handoverComponents: {
      ar: ["جهاز البصمة الموحد والمركزي مبرمجاً بجداول الورديات المعتمدة.", "الربط الآلي بين سجلات الحضور ومنظومة الرواتب (HR & Payroll Sync)."],
      en: ["Centralized Biometric Device Configured with Approved Shift Schedules.", "Automated Sync between Attendance Logs and HR & Payroll."]
    },
    practicalExample: { ar: "ترحيل ساعات العمل الفعلية والورديات والعمل الإضافي للـ 11 موظفاً التشغيليين والفنيين تلقائياً إلى مسير الرواتب الشهري وتوزيع تكلفة العمالة المباشرة بدقة (كمثال استرشادي تقريبي*).", en: "Automatically syncing actual shift hours and overtime for the 11 operational and technical staff into monthly payroll and accurately allocating direct labor costs (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "إصدار أول مسير رواتب شهري معتمد آلياً من بيانات البصمة المركزية دون احتساب يدوي.", en: "Generation of the first monthly payroll run directly from centralized biometric logs without manual recalculation." }
  },
  {
    code: "OT-IT-03",
    phase: { ar: "الأيام 61 – 90", en: "Days 61 – 90" },
    title: { ar: "منظومة التقارير التنفيذية الدورية ومؤشرات الأداء (Executive MIS)", en: "Executive MIS & Performance KPI Reporting Pack" },
    summary: { ar: "بناء حزمة تقارير إدارية ومالية دورية مستخرجة مباشرة من النظام لمتابعة الربحية والسيولة ودوران المخزون والتمهيد للأتمتة.", en: "Building a periodic executive financial and operational reporting pack drawn directly from the ERP to track margins, cash flow, and stock turnover." },
    handoverComponents: {
      ar: ["حزمة التقارير التنفيذية الدورية (Monthly Executive MIS Pack).", "بطاقات مؤشرات الأداء الرئيسية لكافة الإدارات (Departmental KPI Scorecards)."],
      en: ["Standardized Monthly Executive MIS Reporting Pack.", "Departmental Performance KPI Scorecards."]
    },
    practicalExample: { ar: "استخراج تقرير أداء شهري موحد يعرض هامش الربح الفعلي لكل خط منتج، نسب الهالك، وموقف التحصيل دون الحاجة لتجميع بيانات يدوية من الأقسام (كمثال استرشادي تقريبي*).", en: "Generating a unified monthly performance report displaying actual profit margins per line, scrap ratios, and collection status without manual spreadsheet consolidation (Illustrative Benchmark*)." },
    acceptanceCriteria: { ar: "اعتماد الإدارة العليا لنماذج التقارير الدورية وانتظام صدورها من النظام في مواعيدها المحددة.", en: "Executive approval of the MIS report templates and on-schedule generation from the ERP." }
  }
];

export const WORKFORCE_DATA = {
  title: { ar: "هيكل القوى العاملة الحالي والرشاقة التشغيلية (Lean Workforce Structure)", en: "Current Workforce Structure & Lean Operational Setup" },
  subtitle: { ar: "تطبيق مبدأ التأسيس الرشيق: إحكام الحوكمة والأتمتة بالفريق الحالي أولاً دون تحميل المصنع أعباء إدارية ثابتة غير مبررة.", en: "Enforcing Lean Setup: establishing governance and automation with the existing team first without burdening the facility with premature fixed overhead." },
  executiveLeadership: {
    heading: { ar: "أولاً: الإدارة التنفيذية والقيادة العليا (Executive Leadership)", en: "1. Executive Leadership & Project Governance" },
    members: [
      {
        role: { ar: "مالك المشروع (Project Owner)", en: "Project Owner" },
        name: { ar: "السيد محمود", en: "Mr. Mahmoud" },
        scope: { ar: "الإشراف الاستراتيجي العام، اعتماد الموازنات الاستثمارية، وإقرار مصفوفة الصلاحيات العليا.", en: "Overall strategic oversight, capital budget approval, and top-tier authority sign-off." }
      },
      {
        role: { ar: "المدير العام (General Manager)", en: "General Manager" },
        name: { ar: "القيادة التنفيذية العامة للمصنع", en: "Factory General Management" },
        scope: { ar: "إدارة العمليات اليومية، التنسيق بين الإدارات، ومتابعة تحقيق مستهدفات الإنتاج والتشغيل.", en: "Day-to-day operational management, cross-departmental coordination, and production KPI execution." }
      },
      {
        role: { ar: "قائد التطوير التجاري وسلاسل الإمداد (Commercial Development & Supply Chain Lead)", en: "Commercial Development & Supply Chain Lead" },
        name: { ar: "الفاضل سامح حسني", en: "Mr. Sameh Hosny" },
        scope: { ar: "قيادة منظومة المشتريات، سلاسل الإمداد، التطوير التجاري، وفتح قنوات التوزيع والمبيعات.", en: "Leading procurement, supply chain operations, commercial development, and B2B sales channel expansion." }
      }
    ]
  },
  operationalTeam: {
    heading: { ar: "ثانياً: القوى العاملة التشغيلية والإدارية (11 موظفاً)", en: "2. Operational & Administrative Workforce (11 Employees)" },
    description: { ar: "يتكون الفريق التشغيلي والإداري الحالي للمصنع من 11 موظفاً موزعين على وظائف الإنتاج، المستودعات، المحاسبة، والخدمات المساندة. وتُطبَّق عليهم منظومة الحضور والانصراف الإلكترونية المركزية (Centralized Biometric System) لربط ساعات العمل الفعلية بمسير الرواتب وتكلفة التشغيل، مع إعادة توزيع مهامهم وفق مصفوفة الصلاحيات والـ ERP الرشيق.", en: "The current operational and administrative workforce comprises 11 employees across production, warehousing, accounting, and support functions. They are covered by the Centralized Biometric Attendance System linked to payroll and cost centers, with roles realigned under the DoA matrix and Lean ERP." }
  },
  outsourcingLinkNote: {
    ar: "ثالثاً: التعهيد الخارجي (External Outsourcing): يتم استكمال التخصصات الفنية والتقنية والتطويرية عبر أذرع التنفيذ الخارجي (المفصّلة في الصفحة المستقلة التالية) لضمان أعلى جودة تنفيذية بتكلفة متغيرة منضبطة.",
    en: "3. External Outsourcing: Specialized technical, digital, and creative capabilities are executed via dedicated External Execution Arms (detailed in the next standalone page) to ensure top-tier quality under controlled variable costs."
  }
};

export const EXTERNAL_OUTSOURCING_PAGE_DATA = {
  title: { ar: "أذرع التنفيذ الخارجي والتعهيد التخصصي (External Execution Arms & Outsourcing)", en: "External Execution Arms & Specialized Outsourcing" },
  subtitle: { ar: "منظومة تنفيذية متكاملة تُدار تحت إشراف Omni Turnkey لتغطية التخصصات النوعية دون تحميل هيكل المصنع رواتب ثابتة إضافية.", en: "An integrated execution ecosystem managed under Omni Turnkey to deliver specialized capabilities without adding permanent payroll overhead." },
  arms: [
    {
      title: { ar: "ذراع الهوية البصرية وتطوير العبوات (Branding & Packaging Studio)", en: "Branding & Packaging Design Arm" },
      detail: { ar: "تصميم الهوية المؤسسية، العلامات التجارية الخمس، عبوات المنتجات، والإشراف الفني على المطابع المعتمدة وتنفيذ نموذج صندوق العينات الفاخرة.", en: "Executing corporate identity, the 5 consumer brands, product packaging, accredited press checks, and the Physical Master Sample Box prototype." }
    },
    {
      title: { ar: "ذراع التسويق الرقمي وإنتاج المحتوى (B2B Digital & Content Arm)", en: "B2B Digital Marketing & Content Production Arm" },
      detail: { ar: "تأسيس وتوثيق المنصات الرقمية (Google, YouTube, LinkedIn, Instagram, TikTok)، إنتاج المحتوى المرئي الصناعي، وإعداد خطة التسويق الرقمي المستقلة.", en: "Setting up and verifying digital channels (Google, YouTube, LinkedIn, Instagram, TikTok), industrial video production, and executing the standalone Digital Marketing Plan." }
    },
    {
      title: { ar: "ذراع هندسة الأنظمة والـ ERP (ERP & IT Infrastructure Arm)", en: "ERP Configuration & IT Infrastructure Arm" },
      detail: { ar: "إعادة هيكلة وحدات الـ ERP الأربعة، تنظيف البيانات الرئيسية، وربط منظومة البصمة المركزية بالرواتب وفق أعلى معايير أمن المعلومات.", en: "Restructuring the 4 core ERP modules, cleansing Master Data, and integrating the Centralized Biometric System with HR & Payroll." }
    },
    {
      title: { ar: "ذراع المطابقة الفنية وسلامة الغذاء (GSO & Quality Advisory Arm)", en: "GSO Regulatory & Food Safety Advisory Arm" },
      detail: { ar: "مراجعة البطاقات الغذائية، مطابقة المواصفات القياسية الخليجية (GSO)، وتدقيق اشتراطات سلسلة التبريد لخط الجبن الموتزاريلا والخطوط الجديدة.", en: "Validating nutritional labels, ensuring Gulf Standardization Organization (GSO) compliance, and auditing cold-chain protocols for mozzarella and new lines." }
    }
  ]
};

export const AUTOMATION_NEXT_PHASE_BLOCK = {
  badge: { ar: "المرحلة المستقبلية المعتمدة — Next-Phase Vision", en: "Approved Future Roadmap — Next-Phase Vision" },
  title: { ar: "🚀 الرؤية المستقبلية: التأسيس الذكي للانطلاق نحو «الأتمتة الشاملة والذكاء الاصطناعي»", en: "🚀 Future Vision: Smart Foundation Toward Comprehensive Automation & AI" },
  strategicNoteTitle: { ar: "ملاحظة استراتيجية هامة لإدارة المصنع:", en: "Key Strategic Note for Factory Leadership:" },
  strategicNoteBody: { ar: "إن كافة المحاور والأنظمة والحوكمة المؤسسية التي سيتم بناؤها وتفعيلها خلال هذه المرحلة التأسيسية (الـ 90 يوماً) — بدءاً من تنظيف قواعد البيانات (Master Data)، وتفعيل منظومة الـ ERP الرشيقة، وتوثيق مصفوفة الصلاحيات (DoA) والسياسات التشغيلية (SOPs)، وصولاً إلى ضبط التتبع المخزني وسلسلة التبريد — لا تُمثل مجرد تنظيم إداري مرحلي، بل هي البنية التحتية الرقمية الإلزامية (Digital Foundation) التي تسبق أي تحول نحو الأتمتة المتقدمة.", en: "All pillars, systems, and corporate governance frameworks built and activated during this 90-day foundational phase—from Master Data cleansing, Lean ERP activation, DoA and SOP documentation, to inventory traceability and cold-chain controls—represent far more than interim organization; they form the mandatory Digital Foundation required prior to any advanced automation transformation." },
  whyGovernanceFirstTitle: { ar: "لماذا نبدأ بالحوكمة وضبط البيانات قبل الأتمتة؟", en: "Why Governance & Clean Data Come Before Automation" },
  whyGovernanceFirstBody: { ar: "في علم إدارة العمليات والتحول الرقمي، فإن أتمتة إجراءات غير منضبطة تؤدي فقط إلى تسريع الأخطاء؛ لذا تضمن منهجية Omni Turnkey بناء أساس تشغيلي ومالي صلب ومنضبط أولاً، ليصبح المصنع جاهزاً بنسبة 100% لاستيعاب حلول الأتمتة الذكية دون أي تعثر تشغيلي أو هدر استثماري.", en: "In operations management and digital transformation, automating unstructured processes only accelerates errors. Omni Turnkey’s methodology ensures a disciplined operational and financial baseline first, making the factory 100% ready to adopt intelligent automation without operational friction or wasted capital." },
  standalonePlanTitle: { ar: "المرحلة المقبلة — خطة عمل مستقلة للأتمتة والذكاء الاصطناعي (Standalone Automation & AI Plan):", en: "Next Phase — Standalone Automation & AI Execution Roadmap:" },
  standalonePlanIntro: { ar: "فور استقرار التشغيل المؤسسي واكتمال مخرجات هذه المرحلة، ستتولى Omni Turnkey إعداد وتنفيذ خطة عمل مستقلة ومتكاملة للأتمتة (Automation & AI Execution Roadmap) مصممة خصيصاً وفق حجم عمليات المصنع وتوسعاته، وتشمل:", en: "Upon operational stabilization and completion of this phase’s deliverables, Omni Turnkey will design and execute a dedicated, standalone Automation & AI Execution Roadmap tailored to the factory’s scale and expansion, encompassing:" },
  pillars: [
    {
      title: { ar: "لوحات القيادة التنفيذية اللحظية (Automated Executive BI Dashboards)", en: "Automated Executive BI Dashboards" },
      detail: { ar: "تقارير آلية فورية للإدارة العليا تعرض هوامش الربحية، التدفقات النقدية، ونسب الهالك دون الحاجة لإعداد تقارير يدوية.", en: "Real-time automated dashboards for senior leadership tracking profit margins, cash flows, and scrap variances without manual reporting." }
    },
    {
      title: { ar: "أتمتة سلسلة التبريد والمخزون (Smart Cold-Chain & Inventory Alerts)", en: "Smart Cold-Chain & Inventory Alerts" },
      detail: { ar: "تنبيهات آلية فورية عند أي انحراف في درجات حرارة التبريد، وإشعارات استباقية لنقاط إعادة الطلب (Reorder Points) وتواريخ الصلاحية (FEFO).", en: "Instant automated alerts for any cold-chain temperature deviation, alongside proactive notifications for Reorder Points and FEFO expiry thresholds." }
    },
    {
      title: { ar: "أتمتة مسارات الاعتماد والرقابة المالية (Automated Workflow & DoA Routing)", en: "Automated Workflow & DoA Approval Routing" },
      detail: { ar: "تفعيل دورة الاعتمادات الرقمية عن بُعد وتنبيهات المطابقة الثلاثية الفورية لتسريع القرارات وحماية الأصول.", en: "Remote digital approval workflows and instant Three-Way Matching exception alerts to accelerate decisions and safeguard assets." }
    },
    {
      title: { ar: "أدوات الذكاء الاصطناعي للمبيعات والتخطيط (AI-Assisted Demand & Sales Automation)", en: "AI-Assisted Demand & B2B Sales Automation" },
      detail: { ar: "أتمتة متابعة عملاء قطاع الأعمال (B2B Pipeline) والتنبؤ بالطلب وجدولة المشتريات بناءً على البيانات الفعلية.", en: "Automating B2B pipeline follow-ups, demand forecasting, and procurement scheduling driven by actual historical consumption data." }
    }
  ]
};
