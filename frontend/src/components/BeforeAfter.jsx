import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { REDESIGNS } from "../data";

export default function BeforeAfter() {
  return (
    <section id="redesigns" data-testid="redesigns-section" className="py-24 md:py-40 bg-parchment">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-6">
            <div className="overline">04 — Before / After</div>
            <h2 className="serif text-4xl md:text-6xl mt-4 tracking-tight">
              Redesigns that <span className="italic">moved the needle</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-5 md:col-start-8 text-ash text-lg">
            Drag the slider to compare. Below each comparison, the metrics that actually changed.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {REDESIGNS.map((r, i) => (
            <RedesignBlock key={r.id} item={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RedesignBlock({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      data-testid={`redesign-block-${item.id}`}
      className="grid grid-cols-12 gap-8 md:gap-12 items-center"
    >
      <div className={`col-span-12 lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <CompareSlider before={item.before} after={item.after} testid={`compare-slider-${item.id}`} />
      </div>

      <div className={`col-span-12 lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <h3 className="serif text-3xl md:text-4xl">{item.name}</h3>
        <ul className="mt-8 divide-y divide-stone border-y border-stone">
          {item.metrics.map((m) => (
            <li key={m.label} className="py-5 flex items-baseline justify-between gap-2 sm:gap-4">
              <span className="text-lg min-w-0">{m.label}</span>
              <span className="mono text-base sm:text-xl md:text-2xl shrink-0 whitespace-nowrap">
                <span className="text-ash line-through mr-1 sm:mr-3">
                  {m.from}
                  {m.suffix || ""}
                </span>
                <span className="text-vermilion">→</span>{" "}
                <span className="text-ink">
                  {m.to}
                  {m.suffix || ""}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function CompareSlider({ before, after, testid }) {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = (clientX) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = Math.max(0, Math.min(clientX - r.left, r.width));
    setPos((x / r.width) * 100);
  };

  return (
    <div
      ref={containerRef}
      data-testid={testid}
      className="relative w-full aspect-[16/10] overflow-hidden border border-ink select-none cursor-ew-resize touch-none"
      onMouseDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => {
        dragging.current = true;
        update(e.touches[0].clientX);
      }}
      onTouchMove={(e) => dragging.current && update(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      <img src={after} alt="after" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt="before"
          className="absolute inset-0 h-full object-cover grayscale"
          style={{ width: containerRef.current?.clientWidth || "100%" }}
        />
      </div>

      <div className="absolute top-4 left-4 mono uppercase text-[10px] tracking-[0.22em] bg-bone px-2 py-1">
        Before
      </div>
      <div className="absolute top-4 right-4 mono uppercase text-[10px] tracking-[0.22em] bg-ink text-bone px-2 py-1">
        After
      </div>

      <div
        className="absolute top-0 bottom-0 w-px bg-bone"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 w-12 h-12 rounded-full bg-bone border border-ink flex items-center justify-center shadow-lg">
          <span className="text-ink text-lg">⇆</span>
        </div>
      </div>
    </div>
  );
}
