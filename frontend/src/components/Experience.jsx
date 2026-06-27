import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCE } from "../data";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" data-testid="experience-section" className="py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-4">
            <div className="overline">03 — Track Record</div>
            <h2 className="serif text-4xl md:text-6xl mt-4 tracking-tight">
              A working <span className="italic">history</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-6 md:col-start-7 text-lg text-ash">
            Selected roles where I shipped product, built design systems, mentored teams or all three at once.
          </p>
        </div>

        <div ref={ref} className="relative pl-8 md:pl-16">
          <div className="absolute left-0 top-0 w-px h-full bg-stone" />
          <motion.div style={{ height: lineHeight }} className="absolute left-0 top-0 w-px bg-ink" />

          <ul className="space-y-16 md:space-y-24">
            {EXPERIENCE.map((e, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                data-testid={`experience-item-${i}`}
                className="grid grid-cols-12 gap-6"
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="serif text-3xl md:text-4xl">{e.year}</div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-xl md:text-2xl">{e.role}</h3>
                    <span className="mono uppercase text-[10px] tracking-[0.22em] text-vermilion">
                      @ {e.company}
                    </span>
                  </div>
                  <p className="mt-3 text-ash text-lg leading-relaxed max-w-2xl">{e.summary}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
