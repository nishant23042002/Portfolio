import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { TRAITS } from "../data";

export default function WhyMe() {
  return (
    <section id="why" data-testid="why-section" className="py-24 md:py-40 bg-bone">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-7">
            <div className="overline">05 — Why work with me</div>
            <h2 className="serif text-[clamp(2.25rem,10vw,3rem)] md:text-6xl mt-4 tracking-tight leading-[1.05]">
              Not just skills.<br />
              A <span className="italic">working philosophy</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-ink" data-testid="why-grid">
          {TRAITS.map((t, i) => {
            const Icon = Icons[t.icon] || Icons.Star;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={
                  "group p-6 md:p-8 relative bg-bone hover:bg-ink hover:text-bone transition-colors duration-500 " +
                  // Internal borders only (no double border with parent)
                  ((i + 1) % 2 !== 0 ? "sm:border-r sm:border-stone " : "") +
                  ((i + 1) % 4 !== 0 ? "md:border-r md:border-stone " : "md:border-r-0 ") +
                  (i < TRAITS.length - 2 ? "border-b border-stone " : "") +
                  (i < TRAITS.length - 4 ? "md:border-b md:border-stone " : "md:border-b-0 ")
                }
                data-testid={`why-card-${i}`}
              >
                <span className="mono uppercase text-[10px] tracking-[0.22em] text-ash group-hover:text-vermilion">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon size={28} className="mt-6 mb-6 group-hover:text-vermilion transition-colors" />
                <h3 className="serif text-xl md:text-2xl leading-tight break-words">{t.title}</h3>
                <p className="text-sm mt-3 opacity-70">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
