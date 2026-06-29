import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { PROFILE, HERO_STATS } from "../data";
import AvailabilityCard from "./AvailabilityCard";
import MagneticButton from "./MagneticButton";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const item = {
  hidden: { y: 80, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" data-testid="hero-section" className="relative min-h-[100svh] pt-32 md:pt-40 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 md:mb-20">
          <div className="overline" data-testid="hero-overline">
            <span className="text-vermilion text-md" aria-hidden="true">•</span> Portfolio - 2026 Edition
          </div>
          <AvailabilityCard />
        </div>

        <motion.h1
          variants={stagger}
          initial="hidden"
          animate="show"
          className="serif leading-[0.88] tracking-tighter text-[14vw] md:text-[10vw] lg:text-[8.2vw] font-black"
          data-testid="hero-headline"
        >
          <motion.span variants={item} className="block">
            {PROFILE.firstName}
            <span className="text-vermilion">.</span>
          </motion.span>
          <motion.span variants={item} className="block italic font-normal">
            {PROFILE.lastName}
          </motion.span>
          <motion.span
            variants={item}
            className="block font-sans text-xl md:text-2xl lg:text-3xl font-normal not-italic mt-10 max-w-3xl text-ash leading-[1.3] tracking-normal"
          >
            Frontend developer designing
            <span className="text-ink"> motion-rich, performance-first </span>
            interfaces.
          </motion.span>
        </motion.h1>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <MagneticButton testid="hero-cta-projects" as="a" href="#work">
              See selected work <span aria-hidden="true">-&gt;</span>
            </MagneticButton>
            <MagneticButton
              testid="hero-cta-contact"
              as="a"
              href="#contact"
              className="bg-ink text-bone border-ink/50 hover:bg-vermilion hover:border-vermilion"
            >
              Start a project
            </MagneticButton>
            <MagneticButton
              testid="hero-cta-resume"
              as="a"
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              strength={16}
            >
              Resume <Download size={14} />
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-xl">
            {HERO_STATS.map((s) => (
              <Stat key={s.k} k={s.k} v={s.v} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <ArrowDown size={18} className="animate-bounce" />
          <span className="overline">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ k, v }) {
  return (
    <div>
      <div className="serif text-4xl md:text-5xl leading-none">{k}</div>
      <div className="mono uppercase text-[10px] tracking-[0.22em] text-ash mt-2">{v}</div>
    </div>
  );
}
