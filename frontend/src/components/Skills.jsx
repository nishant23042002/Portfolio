import { motion } from "framer-motion";
import { SKILL_GROUPS, SKILLS_MARQUEE } from "../data";

export default function Skills() {
  return (
    <section id="skills" data-testid="skills-section" className="relative w-full py-24 md:py-40 bg-parchment">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="overline">02 — Toolkit</div>
            <h2 className="serif text-4xl md:text-6xl mt-4 tracking-tight">
              The instruments<span className="italic"> I play</span>.
            </h2>
          </div>
          <div className="hidden md:block text-right max-w-xs text-ash">
            Tools matter less than taste, but here are the ones I reach for most.
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-stone py-8" data-testid="skills-marquee">
        <div className="marquee-track animate-marquee">
          {[...SKILLS_MARQUEE, ...SKILLS_MARQUEE, ...SKILLS_MARQUEE].map((s, i) => (
            <span key={i} className="serif italic text-5xl md:text-7xl mx-10 text-ink">
              {s}
              <span className="text-vermilion mx-8">✺</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: gi * 0.08 }}
            data-testid={`skill-group-${gi}`}
          >
            <div className="flex items-baseline justify-between border-b border-ink pb-3 mb-5">
              <h3 className="mono uppercase text-xs tracking-[0.22em]">{group.name}</h3>
              <span className="serif italic text-ash">0{gi + 1}</span>
            </div>
            <ul className="divide-y divide-stone">
              {group.items.map(([name, level]) => (
                <li key={name} className="py-3 flex items-center gap-4">
                  <span className="flex-1 text-lg">{name}</span>
                  <span className="mono text-[10px] tracking-[0.22em] text-ash w-10 text-right">{level}</span>
                  <div className="w-32 md:w-48 h-[2px] bg-stone relative overflow-hidden">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-y-0 left-0 bg-ink"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
