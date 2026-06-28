import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Wand2, MousePointer2 } from "lucide-react";
import MagneticButton from "./MagneticButton";

/**
 * Design Playground — bento grid of UI experiments.
 * Cards: 3D tilt, magnetic button, glassmorphism, liquid blob, hover card, micro-interaction.
 */
export default function Playground() {
  return (
    <section id="playground" data-testid="playground-section" className="py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-6">
            <div className="overline">05 — Design Playground</div>
            <h2 className="serif text-[clamp(2.25rem,10vw,3rem)] md:text-6xl mt-4 tracking-tight leading-[1.05]">
              Tiny <span className="italic">experiments</span>, big delight.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-5 md:col-start-8 text-ash text-lg break-words">
            A live sandbox of interactions I obsess over: 3D tilt, magnetic pulls, glass, liquid, and the
            micro-feedback that makes interfaces feel alive.
          </p>
        </div>

        <div className="grid grid-cols-12 auto-rows-[180px] gap-4 md:gap-6" data-testid="playground-grid">
          <TiltCard />
          <MagneticCard />
          <GlassCard />
          <LiquidCard />
          <HoverWordCard />
          <ClickPulseCard />
        </div>
      </div>
    </section>
  );
}

/* 3D tilt */
function TiltCard() {
  const ref = useRef(null);
  const [t, setT] = useState({ rx: 0, ry: 0 });
  const handle = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ rx: -py * 14, ry: px * 18 });
  };
  return (
    <div
      ref={ref}
      data-testid="playground-tilt"
      onMouseMove={handle}
      onMouseLeave={() => setT({ rx: 0, ry: 0 })}
      className="col-span-12 md:col-span-6 lg:col-span-5 row-span-2 relative tilt-card bg-ink text-bone p-8 overflow-hidden"
      style={{ perspective: 1000 }}
    >
      <div
        style={{
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
          transition: "transform 120ms ease-out",
        }}
        className="h-full flex flex-col justify-between"
      >
        <div className="flex items-center justify-between">
          <span className="overline text-bone/60">3D Tilt</span>
          <Sparkles size={18} />
        </div>
        <div>
          <h3 className="serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            Move your cursor.<br />
            <em className="italic text-vermilion">Feel the depth.</em>
          </h3>
          <p className="mono text-[11px] tracking-[0.18em] uppercase text-bone/60 mt-6">
            perspective(1000) · rotateX/Y · 120ms
          </p>
        </div>
      </div>
      <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-vermilion/30 blur-3xl" />
    </div>
  );
}

/* Magnetic button card */
function MagneticCard() {
  return (
    <div
      data-testid="playground-magnetic"
      className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1 border border-ink p-8 flex items-center justify-between bg-bone"
    >
      <div>
        <span className="overline">Magnetic</span>
        <h3 className="serif text-2xl mt-2">Pull me closer</h3>
      </div>
      <MagneticButton testid="playground-magnetic-btn" strength={28} className="px-5">
        Hover
      </MagneticButton>
    </div>
  );
}

/* Glassmorphism */
function GlassCard() {
  return (
    <div
      data-testid="playground-glass"
      className="col-span-12 md:col-span-6 lg:col-span-3 row-span-1 relative overflow-hidden bg-gradient-to-br from-vermilion via-pink-500 to-klein p-6 text-bone"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
      <div className="relative glass rounded-2xl p-4 text-ink">
        <span className="overline">Glassmorphism</span>
        <h3 className="serif text-xl mt-2 leading-tight">Frosted. Layered. Calm.</h3>
        <div className="mt-3 flex items-center gap-2">
          <Heart size={14} className="text-vermilion" />
          <span className="text-xs">backdrop-filter</span>
        </div>
      </div>
    </div>
  );
}

/* Liquid blob */
function LiquidCard() {
  return (
    <div
      data-testid="playground-liquid"
      className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1 relative overflow-hidden border border-ink p-8 flex items-center justify-between bg-bone"
    >
      <div className="relative z-10">
        <span className="overline">Liquid</span>
        <h3 className="serif text-2xl mt-2">Soft & alive</h3>
      </div>
      <div className="liquid-blob w-32 h-32 md:w-40 md:h-40 opacity-90" />
    </div>
  );
}

/* Hover-word swap */
function HoverWordCard() {
  const words = ["motion", "type", "delight", "depth", "color"];
  const [i, setI] = useState(0);
  return (
    <div
      data-testid="playground-hover-words"
      onMouseEnter={() => setI((v) => (v + 1) % words.length)}
      className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1 border border-ink p-8 bg-parchment cursor-pointer group"
    >
      <span className="overline">Micro-interaction</span>
      <h3 className="serif text-2xl md:text-3xl mt-2">
        Designed for{" "}
        <span className="relative inline-block overflow-hidden align-bottom">
          <motion.span
            key={words[i]}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="italic text-vermilion inline-block"
          >
            {words[i]}.
          </motion.span>
        </span>
      </h3>
      <div className="mt-4 mono text-[10px] uppercase tracking-[0.22em] text-ash flex items-center gap-2">
        <MousePointer2 size={12} /> hover to cycle
      </div>
    </div>
  );
}

/* Click pulse / wand */
function ClickPulseCard() {
  const [pulses, setPulses] = useState([]);
  const onClick = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const id = Math.random();
    setPulses((p) => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setPulses((p) => p.filter((x) => x.id !== id)), 800);
  };
  return (
    <div
      data-testid="playground-pulse"
      onClick={onClick}
      className="col-span-12 md:col-span-6 lg:col-span-5 row-span-1 relative overflow-hidden bg-ink text-bone p-8 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <span className="overline text-bone/60">Click anywhere</span>
        <Wand2 size={18} />
      </div>
      <h3 className="serif text-2xl md:text-3xl mt-4">Tap to feel the ripple.</h3>
      {pulses.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.x,
            top: p.y,
            width: 12,
            height: 12,
            transform: "translate(-50%, -50%)",
            background: "rgba(255,69,0,0.5)",
            animation: "ping 0.8s cubic-bezier(0,0,0.2,1) forwards",
          }}
        />
      ))}
    </div>
  );
}
