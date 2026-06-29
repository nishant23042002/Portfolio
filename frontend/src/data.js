// Real portfolio content for Nishant Sapkal.
export const PROFILE = {
  name: "Nishant Sapkal",
  firstName: "Nishant",
  lastName: "Sapkal",
  tagline:
    "Frontend developer designing motion-rich, performance-first interfaces.",
  bio: "Detail-oriented frontend developer focused on responsive, accessible, and high-performance web apps. I translate complex Figma designs into clean, semantic, SEO-friendly code with the React + Tailwind + Node ecosystem at my back.",
  location: "Pune, Maharashtra",
  email: "nishantsapkal2304@gmail.com",
  phone: "+91 90 1128 5958",
  // Replace frontend/public/resume.pdf whenever the resume changes.
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/nishant23042002",
    linkedin: "https://www.linkedin.com/in/nishant-sapkal",
  },
};

export const HERO_STATS = [
  { k: "BCS", v: "computer science" },
  { k: "02", v: "full-stack projects" },
  { k: "MERN", v: "stack certified" },
];

export const SKILLS_MARQUEE = [
  "React",
  "JavaScript",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML5",
  "CSS3",
  "Git",
  "Cloudinary",
  "JWT",
  "REST APIs",
];

export const SKILL_GROUPS = [
  {
    name: "Languages",
    items: [
      ["JavaScript (ES6+)", 92],
      ["HTML5", 96],
      ["CSS3", 94],
      ["TypeScript", 60],
    ],
  },
  {
    name: "Frontend",
    items: [
      ["React.js", 90],
      ["Tailwind CSS", 92],
      ["Responsive Design", 90],
      ["Accessibility (a11y)", 78],
    ],
  },
  {
    name: "Backend",
    items: [
      ["Node.js", 78],
      ["Express.js", 78],
      ["MongoDB / Mongoose", 80],
      ["REST APIs", 82],
    ],
  },
  {
    name: "Tooling",
    items: [
      ["Git / GitHub", 90],
      ["Postman", 84],
      ["Cloudinary", 78],
      ["Railway / Render", 76],
    ],
  },
];

export const PROJECTS = [
  {
    id: "the-layer-co",
    title: "The Layer Co",
    subtitle:
      "H&M/Zara-inspired full-stack clothing store with catalog, cart, wishlist, admin and payments",
    year: "2026",
    tags: ["Next.js", "TypeScript", "MongoDB", "Razorpay"],
    cover:
      "https://res.cloudinary.com/thelayerco/image/upload/v1782648668/Screenshot_2026-06-23_230406_mzgrvq.png",
    screenshots: [
      "https://res.cloudinary.com/thelayerco/image/upload/v1782648670/Screenshot_2026-06-23_230524_rkmezt.png",
      "https://res.cloudinary.com/thelayerco/image/upload/v1782648706/Screenshot_2026-06-28_172900_xxd7db.png",
      "https://res.cloudinary.com/thelayerco/image/upload/v1782648670/Screenshot_2026-06-28_173025_gp75sp.png",
      "https://res.cloudinary.com/thelayerco/image/upload/v1782648670/Screenshot_2026-06-28_173054_jmohw1.png",
      "https://res.cloudinary.com/thelayerco/image/upload/v1782681434/Screenshot_2026-06-29_024701_bguv2j.png",
      "https://res.cloudinary.com/thelayerco/image/upload/v1782681549/Screenshot_2026-06-29_024832_nor47a.png",
      "https://res.cloudinary.com/thelayerco/image/upload/v1782681550/Screenshot_2026-06-29_024851_ok9suc.png"
    ],
    role: "Solo full-stack build",
    timeline: "In progress",
    liveUrl: "https://github.com/nishant23042002/The-Layer-Co",
    liveDemo: "https://the-layer-co.vercel.app/",
    story: {
      problem:
        "Build a modern clothing commerce platform that feels editorial like Pinterest while still handling real e-commerce needs: products, variants, cart, wishlist, checkout, admin workflows and media uploads.",
      research:
        "Mapped the experience around fashion discovery, product filtering, size and color variants, stock visibility, saved products, recently viewed items and the operational screens an admin needs to manage a live catalog.",
      design:
        "Built a premium storefront with category-led browsing, product detail pages, hover imagery, variant-driven product presentation and a separate admin area for product and order management.",
      development:
        "Next.js 16 + React 19 + TypeScript with Tailwind, MongoDB/Mongoose, Redux Toolkit, React Query, Cloudinary/Multer uploads, Firebase/Firebase Admin, JWT auth, Redis/ioredis, Razorpay and Radix UI.",
      challenges:
        "The hardest part was keeping commerce data consistent across product variants, stock, cart, wishlist and admin edits while still keeping the customer UI fast and image-rich.",
      solution:
        "Implemented a full commerce foundation with product and category models, color and size variants, pricing, ratings, SEO fields, cart and wishlist state, Cloudinary image workflows, admin product creation and Razorpay-ready payment types.",
      impact:
        "The project shows end-to-end ownership of a large TypeScript commerce codebase, from customer discovery flows to back-office product operations and payment-ready checkout architecture.",
    },
  },
  {
    id: "ai-expense-tracker",
    title: "Expense Tracker",
    subtitle:
      "Finance dashboard for income, expenses, charts and transaction history",
    year: "2025",
    tags: ["React", "Vite", "Redux", "Recharts"],
    cover: "https://res.cloudinary.com/thelayerco/image/upload/v1782681137/Screenshot_2026-06-29_024108_wvznng.png",
    screenshots: [
      "https://res.cloudinary.com/thelayerco/image/upload/v1782681137/Screenshot_2026-06-29_023916_ksimp6.png",
      "https://res.cloudinary.com/thelayerco/image/upload/v1782681137/Screenshot_2026-06-29_023945_pugo2s.png",
      "https://res.cloudinary.com/thelayerco/image/upload/v1782681137/Screenshot_2026-06-29_024001_efztnd.png",
      "https://res.cloudinary.com/thelayerco/image/upload/v1782681137/Screenshot_2026-06-29_024022_ob9d99.png",
    ],
    role: "Frontend build",
    timeline: "2025",
    liveUrl: "https://github.com/nishant23042002/AI-Expense-Tracker",
    liveDemo: "https://ai-expense-tracker-rp4b.onrender.com",
    story: {
      problem:
        "Create a personal finance interface where users can sign up, log in, track income and expenses, review transaction history and understand spending patterns without digging through raw records.",
      research:
        "Broke the app into the flows visible in the repo: authentication, protected dashboard, income management, expense management, transaction history, dashboard stats and receipt upload support.",
      design:
        "Designed a dashboard-style experience with reusable cards, side navigation, modal flows, transaction containers, chart legends/tooltips and separate views for income, expenses and all transactions.",
      development:
        "React 19 + Vite frontend using React Router, Redux Toolkit, Redux Persist, Axios, Recharts, Framer Motion, Tailwind/Vite tooling, toast alerts and API paths for auth, dashboard stats, income, expenses and receipt uploads.",
      challenges:
        "The main challenge was keeping financial state predictable across dashboard summaries, income/expense CRUD, transaction modals and persisted login state while keeping the UI easy to scan.",
      solution:
        "Built protected routes for login/signup/dashboard, dedicated income and expense pages, editable transaction history, financial overview cards, last-30/60-day summaries, receipt upload API integration and responsive charts.",
      impact:
        "The project demonstrates dashboard architecture, authenticated app flows, API integration, reusable financial UI components and data visualization for real-world money tracking.",
    },
  },
];

// Redesign concepts — practice exercises showing UX/perf thinking.
// export const REDESIGNS = [
//   {
//     id: "redesign-1",
//     name: "Local Bakery — landing concept",
//     before:
//       "https://images.unsplash.com/photo-1536311312982-31ed42ebc0f0?auto=format&fit=crop&w=1200&q=60",
//     after:
//       "https://images.unsplash.com/photo-1602536100338-c7762727ddb7?auto=format&fit=crop&w=1200&q=60",
//     metrics: [
//       { label: "Lighthouse Performance", from: 62, to: 98 },
//       { label: "Bounce Rate (est.)", from: 54, to: 26, suffix: "%" },
//       { label: "LCP", from: 3.9, to: 1.3, suffix: "s" },
//     ],
//   },
//   {
//     id: "redesign-2",
//     name: "Studio Portfolio — refresh concept",
//     before:
//       "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=1200&q=60",
//     after:
//       "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=60",
//     metrics: [
//       { label: "Lighthouse Performance", from: 51, to: 96 },
//       { label: "Time on site (est.)", from: 28, to: 110, suffix: "s" },
//       { label: "CLS", from: 0.32, to: 0.02 },
//     ],
//   },
// ];

export const TRAITS = [
  {
    title: "Fast Communication",
    desc: "Same-day replies, async-first, no ghosting.",
    icon: "MessageSquare",
  },
  {
    title: "Pixel Perfect",
    desc: "Figma to code with millimetric fidelity.",
    icon: "Crosshair",
  },
  {
    title: "SEO First",
    desc: "Semantic HTML, structured data, Core Web Vitals.",
    icon: "Search",
  },
  {
    title: "Performance Focused",
    desc: "Aim for sub-second LCP on every build.",
    icon: "Zap",
  },
  {
    title: "Scalable Code",
    desc: "Modular React components and clean contracts.",
    icon: "Boxes",
  },
  {
    title: "Clean Architecture",
    desc: "MERN apps your team will love in two years.",
    icon: "Layers",
  },
  {
    title: "AI Ready",
    desc: "LLM-friendly UIs, copilots and assist features.",
    icon: "Sparkles",
  },
  {
    title: "Business Mindset",
    desc: "Every UI decision tied to a real metric.",
    icon: "TrendingUp",
  },
];
