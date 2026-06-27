// Real portfolio content for Nishant Sapkal.
export const PROFILE = {
  name: "Nishant Sapkal",
  firstName: "Nishant",
  lastName: "Sapkal",
  tagline: "Frontend developer designing motion-rich, performance-first interfaces.",
  bio:
    "Detail-oriented frontend developer focused on responsive, accessible, and high-performance web apps. I translate complex Figma designs into clean, semantic, SEO-friendly code with the React + Tailwind + Node ecosystem at my back.",
  location: "Pune, Maharashtra",
  email: "nishantsapkal2304@gmail.com",
  phone: "+91 90 1128 5958",
  resumeUrl:
    "https://customer-assets.emergentagent.com/job_dev-portfolio-hub-173/artifacts/jof90fem_NishantSapkalResumeFD.pdf",
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
  "React", "JavaScript", "Tailwind", "Node.js", "Express",
  "MongoDB", "HTML5", "CSS3", "Git", "Cloudinary", "JWT", "REST APIs",
];

export const SKILL_GROUPS = [
  {
    name: "Languages",
    items: [["JavaScript (ES6+)", 92], ["HTML5", 96], ["CSS3", 94], ["TypeScript", 60]],
  },
  {
    name: "Frontend",
    items: [["React.js", 90], ["Tailwind CSS", 92], ["Responsive Design", 90], ["Accessibility (a11y)", 78]],
  },
  {
    name: "Backend",
    items: [["Node.js", 78], ["Express.js", 78], ["MongoDB / Mongoose", 80], ["REST APIs", 82]],
  },
  {
    name: "Tooling",
    items: [["Git / GitHub", 90], ["Postman", 84], ["Cloudinary", 78], ["Railway / Render", 76]],
  },
];

export const PROJECTS = [
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    subtitle: "Full-stack video platform — upload, channel, comments, search",
    year: "2025",
    tags: ["React", "Node", "MongoDB", "Cloudinary"],
    cover:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    role: "Solo build · Capstone",
    timeline: "8 weeks",
    liveUrl: "https://github.com/nishant23042002",
    story: {
      problem:
        "Build a YouTube-like platform from scratch: real video uploads, channels, comments, auth and search — without using a hosted streaming service.",
      research:
        "Studied YouTube's IA, mapped MVP features, benchmarked Cloudinary vs S3 for video storage, and chose JWT for stateless auth.",
      design:
        "Designed a calm dark-on-dark layout with a focus on the video, a sticky sidebar, and chip-based filters. Mobile-first breakpoints.",
      development:
        "MERN stack: React + Tailwind on the client, Express + Mongoose on the server, Cloudinary for media, multer pipeline for uploads, JWT cookies for auth.",
      challenges:
        "Large video uploads hit body-parser limits and stalled on slow networks. Switched to chunked direct-to-Cloudinary uploads with signed URLs, then persisted the final URL in MongoDB.",
      solution:
        "Shipped a fully working YouTube clone with channel creation, video upload, comments, likes, secure auth and search across video metadata.",
      impact:
        "Capstone graded as top tier in the cohort. Codebase used as a reference by 30+ peers; repository starred and forked across the program.",
    },
  },
  {
    id: "shoppyglobe",
    title: "ShoppyGlobe",
    subtitle: "Full-stack e-commerce app with cart, auth and live product data",
    year: "2025",
    tags: ["React", "Express", "MongoDB", "JWT"],
    cover:
      "https://images.pexels.com/photos/5872353/pexels-photo-5872353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    role: "Solo build",
    timeline: "5 weeks",
    liveUrl: "https://github.com/nishant23042002",
    story: {
      problem:
        "Design and build a responsive e-commerce experience that handles real products, a cart, and secure user accounts — not a static demo.",
      research:
        "Audited 6 popular shopping flows for friction points around add-to-cart, login walls, and checkout. Targeted a 'shop without an account, pay with one' approach.",
      design:
        "Tailwind-driven layout with a tight product grid, instant cart sheet, sticky checkout summary and clear empty states for cart/search.",
      development:
        "React frontend with context-based cart state, Express REST API, Mongoose models for products & carts, JWT auth with HTTP-only cookies.",
      challenges:
        "Keeping the cart in sync between guest and authenticated states. Built a merge-on-login routine that reconciles the local cart with the server cart on first authenticated request.",
      solution:
        "A responsive storefront where shoppers can browse, search, cart and check out, with persistent server-side carts once they log in.",
      impact:
        "Demonstrated end-to-end ownership of a MERN app, from data model to UI polish — used as the headliner project in interviews and applications.",
    },
  },
];

// Redesign concepts — practice exercises showing UX/perf thinking.
export const REDESIGNS = [
  {
    id: "redesign-1",
    name: "Local Bakery — landing concept",
    before:
      "https://images.unsplash.com/photo-1536311312982-31ed42ebc0f0?auto=format&fit=crop&w=1200&q=60",
    after:
      "https://images.unsplash.com/photo-1602536100338-c7762727ddb7?auto=format&fit=crop&w=1200&q=60",
    metrics: [
      { label: "Lighthouse Performance", from: 62, to: 98 },
      { label: "Bounce Rate (est.)", from: 54, to: 26, suffix: "%" },
      { label: "LCP", from: 3.9, to: 1.3, suffix: "s" },
    ],
  },
  {
    id: "redesign-2",
    name: "Studio Portfolio — refresh concept",
    before:
      "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=1200&q=60",
    after:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=60",
    metrics: [
      { label: "Lighthouse Performance", from: 51, to: 96 },
      { label: "Time on site (est.)", from: 28, to: 110, suffix: "s" },
      { label: "CLS", from: 0.32, to: 0.02 },
    ],
  },
];

export const TRAITS = [
  { title: "Fast Communication", desc: "Same-day replies, async-first, no ghosting.", icon: "MessageSquare" },
  { title: "Pixel Perfect", desc: "Figma to code with millimetric fidelity.", icon: "Crosshair" },
  { title: "SEO First", desc: "Semantic HTML, structured data, Core Web Vitals.", icon: "Search" },
  { title: "Performance Focused", desc: "Aim for sub-second LCP on every build.", icon: "Zap" },
  { title: "Scalable Code", desc: "Modular React components and clean contracts.", icon: "Boxes" },
  { title: "Clean Architecture", desc: "MERN apps your team will love in two years.", icon: "Layers" },
  { title: "AI Ready", desc: "LLM-friendly UIs, copilots and assist features.", icon: "Sparkles" },
  { title: "Business Mindset", desc: "Every UI decision tied to a real metric.", icon: "TrendingUp" },
];
