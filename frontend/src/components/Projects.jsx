import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";
import { PROJECTS } from "../data";

const STORY_STEPS = [
  { key: "problem", label: "Problem" },
  { key: "research", label: "Research" },
  { key: "design", label: "Design" },
  { key: "development", label: "Development" },
  { key: "challenges", label: "Challenges" },
  { key: "solution", label: "Solution" },
  { key: "impact", label: "Impact" },
];

export default function Projects() {
  const [activeId, setActiveId] = useState(null);
  const active = PROJECTS.find((p) => p.id === activeId);

  // lock scroll while modal open
  useEffect(() => {
    const scrollY = window.scrollY;
    if (activeId) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const top = document.body.style.top;
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (top) {
        window.scrollTo(0, Math.abs(parseInt(top, 10)));
      }
    }
    return () => {
      const top = document.body.style.top;
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (top) {
        window.scrollTo(0, Math.abs(parseInt(top, 10)));
      }
    };
  }, [activeId]);

  return (
    <section id="work" data-testid="projects-section" className="py-24 md:py-40 bg-bone">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <div className="overline">03 — Selected Work</div>
            <h2 className="serif text-4xl md:text-6xl mt-4 tracking-tight">
              Story <span className="italic">mode</span>.
            </h2>
          </div>
          <p className="max-w-md text-ash">
            Click any project to read the full case study — problem, research, design, build, challenges,
            impact and live link.
          </p>
        </div>

        <LayoutGroup>
          <ul className="grid grid-cols-12 gap-6 md:gap-8">
            {PROJECTS.map((p, i) => (
              <li
                key={p.id}
                className={
                  "col-span-12 md:col-span-6 " +
                  (i % 3 === 0 ? "lg:col-span-8" : "lg:col-span-4")
                }
              >
                <motion.button
                  layoutId={`card-${p.id}`}
                  onClick={() => setActiveId(p.id)}
                  data-testid={`project-card-${p.id}`}
                  className="group relative block w-full text-left focus:outline-none"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    layoutId={`media-${p.id}`}
                    className="relative overflow-hidden bg-parchment aspect-[4/3]"
                  >
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="w-full h-full object-fill transition-transform duration-1000 group-hover:scale-101"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors" />
                    <div className="absolute top-4 left-4 mono uppercase text-[10px] tracking-[0.22em] bg-bone/90 px-2 py-1">
                      {p.year}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-ink text-bone p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={16} />
                    </div>
                  </motion.div>

                  <motion.div layoutId={`meta-${p.id}`} className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="serif text-2xl md:text-3xl leading-snug">{p.title}</h3>
                      <p className="text-ash mt-1">{p.subtitle}</p>
                    </div>
                    <div className="hidden md:flex flex-wrap gap-2 justify-end shrink-0 max-w-[40%]">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="mono uppercase text-[10px] tracking-[0.18em] border border-stone px-2 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Story-mode overlay */}
          <AnimatePresence>
            {active && (
              <motion.div
                key="story-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                data-testid="project-story-overlay"
                className="fixed inset-0 z-[60] bg-bone overflow-y-auto"
              >
                {/* Close + header */}
                <div className="sticky top-0 z-10 glass border-b border-stone">
                  <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-4">
                    <span className="overline truncate">
                      {active.year} · {active.title}
                    </span>
                    <div className="flex shrink-0 items-center gap-4">
                      <a
                        href={active.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        data-testid={`project-live-top-${active.id}`}
                        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-ink text-bone rounded-full hover:bg-vermilion transition-colors mono uppercase text-[10px] tracking-[0.18em]"
                      >
                        Live Demo <ExternalLink size={13} />
                      </a>
                      <button
                        onClick={() => setActiveId(null)}
                        data-testid="project-story-close"
                        className="inline-flex items-center gap-2 mono uppercase text-xs tracking-[0.22em] hover:text-vermilion"
                        aria-label="close project"
                      >
                        Close <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-32">
                  <ProjectSlideshow project={active} />

                  <motion.div
                    layoutId={`meta-${active.id}`}
                    className="grid grid-cols-12 gap-6 mt-10"
                  >
                    <h1 className="col-span-12 md:col-span-8 serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
                      {active.title}
                      <span className="text-vermilion">.</span>
                    </h1>
                    <div className="col-span-12 md:col-span-4 space-y-4">
                      <Meta k="Role" v={active.role} />
                      <Meta k="Timeline" v={active.timeline} />
                      <a
                        href={active.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        data-testid={`project-live-${active.id}`}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-bone rounded-full hover:bg-vermilion transition-colors mono uppercase text-xs tracking-[0.18em]"
                      >
                        Live Demo <ExternalLink size={14} />
                      </a>
                      <Meta k="Stack" v={active.tags.join(" · ")} />
                    </div>
                  </motion.div>

                  <p className="mt-10 text-xl md:text-2xl text-ash max-w-3xl leading-relaxed">{active.subtitle}</p>

                  {/* Step-by-step story */}
                  <div className="mt-20 space-y-16 md:space-y-24">
                    {STORY_STEPS.map((step, i) => (
                      <motion.div
                        key={step.key}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + i * 0.05, duration: 0.6 }}
                        className="grid grid-cols-12 gap-6 md:gap-12 border-t border-stone pt-10"
                        data-testid={`story-step-${step.key}`}
                      >
                        <div className="col-span-12 md:col-span-3">
                          <div className="mono uppercase text-[10px] tracking-[0.22em] text-vermilion">
                            Step {String(i + 1).padStart(2, "0")}
                          </div>
                          <h3 className="serif text-3xl md:text-4xl mt-3">{step.label}</h3>
                        </div>
                        <p className="col-span-12 md:col-span-9 text-lg md:text-xl leading-relaxed">
                          {active.story[step.key]}
                        </p>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="border-t border-stone pt-10 flex flex-wrap items-center justify-between gap-6"
                    >
                      <div>
                        <div className="mono uppercase text-[10px] tracking-[0.22em] text-vermilion">
                          Step 08
                        </div>
                        <h3 className="serif text-3xl md:text-4xl mt-3">Source Code</h3>
                      </div>
                      <a
                        href={active.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-testid={`project-source-${active.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-bone rounded-full hover:bg-vermilion transition-colors mono uppercase text-xs tracking-[0.22em]"
                      >
                        View repository <ExternalLink size={14} />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
}

function Meta({ k, v }) {
  return (
    <div>
      <div className="mono uppercase text-[10px] tracking-[0.22em] text-ash">{k}</div>
      <div className="mt-1">{v}</div>
    </div>
  );
}

function ProjectSlideshow({ project }) {
  const [index, setIndex] = useState(0);
  const slides = project.screenshots?.length ? project.screenshots : [project.cover];
  const current = slides[index % slides.length];

  useEffect(() => {
    setIndex(0);
  }, [project.id]);

  useEffect(() => {
    if (slides.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [slides.length, project.id]);

  return (
    <motion.div layoutId={`media-${project.id}`} className="relative w-full aspect-video md:aspect-[16/7] xl:aspect-[16/6] max-h-[72vh] overflow-hidden mt-6 bg-parchment">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={current}
          src={current}
          alt={`${project.title} screenshot ${index + 1}`}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </AnimatePresence>

      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((src, i) => (
            <span
              key={src}
              className={
                "h-1.5 rounded-full transition-all " +
                (i === index % slides.length ? "w-8 bg-bone" : "w-1.5 bg-bone/50")
              }
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
