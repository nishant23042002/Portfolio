import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROFILE } from "../data";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" data-testid="about-section" ref={ref} className="relative py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <div className="overline mb-6">01 — About</div>
          <motion.div style={{ y }} className="relative">
            <img
              src="https://images.pexels.com/photos/6372888/pexels-photo-6372888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700"
              alt="workspace"
              className="w-full h-[460px] object-cover grayscale contrast-110"
              data-testid="about-portrait"
            />
            <div className="absolute -bottom-5 -right-5 bg-vermilion text-bone px-4 py-2 mono uppercase text-[10px] tracking-[0.22em]">
              {PROFILE.location}
            </div>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-7 lg:col-span-7 md:col-start-6 lg:col-start-6">
          <h2 className="serif text-4xl md:text-6xl leading-[1.05] tracking-tight" data-testid="about-heading">
            I build the web like it{`'`}s a <em className="italic">living document</em>
            <span className="text-vermilion">.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed">
            <p>
              I{`'`}m a detail-oriented frontend developer focused on responsive, accessible and
              high-performance web apps. I translate complex Figma designs into clean, semantic,
              SEO-friendly code with the React + Tailwind + Node ecosystem at my back.
            </p>
            <p className="text-ash">
              I love the moment when a prototype starts to feel inevitable — the cursor finds the button,
              the animation lands, and a user smiles without knowing why.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-stone pt-8">
            <Meta k="Based in" v={PROFILE.location} />
            <Meta k="Stack" v="React · Node · Mongo" />
            <Meta k="Loves" v="Motion & a11y" />
            <Meta k="Open to" v="Remote, Worldwide" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Meta({ k, v }) {
  return (
    <div>
      <dt className="overline">{k}</dt>
      <dd className="mt-2 text-base">{v}</dd>
    </div>
  );
}
