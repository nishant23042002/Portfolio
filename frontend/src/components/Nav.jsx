import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#redesigns", label: "Redesigns" },
  { href: "#playground", label: "Playground" },
  { href: "#why", label: "Why Me" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "glass rounded-full mx-4 md:mx-auto px-6 py-3" : ""
        }`}
      >
        <a href="#top" data-testid="nav-logo" className="serif italic text-2xl md:text-4xl tracking-tight">
          N<span className="text-vermilion">·</span>S
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="mono uppercase text-sm tracking-[0.22em] link-line"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-testid="nav-cta"
          className="hidden lg:inline-flex mono uppercase text-xs tracking-[0.22em] border border-gray px-4 py-2 rounded-full hover:bg-ink hover:text-bone transition-colors"
        >
          Hire me →
        </a>

        <button
          onClick={() => setOpen(true)}
          aria-label="open menu"
          data-testid="nav-menu-open"
          className="lg:hidden p-2"
        >
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="nav-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink text-bone z-50 flex flex-col p-8"
          >
            <div className="flex justify-between items-center">
              <span className="serif italic text-3xl">N·S</span>
              <button
                onClick={() => setOpen(false)}
                data-testid="nav-menu-close"
                aria-label="close menu"
                className="p-2"
              >
                <X size={26} />
              </button>
            </div>
            <ul className="flex flex-col gap-6 mt-16">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * i } }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="serif text-5xl"
                    data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
