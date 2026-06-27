import { useEffect, useRef, useState } from "react";

/**
 * MagneticButton — wraps any clickable element and applies a soft magnetic pull
 * toward the cursor on hover. Pure CSS transform, no Framer dep required here.
 */
export default function MagneticButton({
  children,
  className = "",
  as: Tag = "button",
  strength = 22,
  testid,
  ...rest
}) {
  const ref = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      setTranslate({ x: (x / r.width) * strength, y: (y / r.height) * strength });
    };
    const onLeave = () => setTranslate({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <Tag
      ref={ref}
      data-testid={testid}
      className={
        "inline-flex items-center justify-center gap-2 px-7 py-4 mono uppercase text-xs tracking-[0.2em] " +
        "border border-ink/30 text-ink bg-transparent rounded-full transition-colors duration-300 " +
        "hover:bg-ink hover:text-bone focus:outline-none focus:ring-2 focus:ring-vermilion " +
        className
      }
      style={{
        transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
        transition: "transform 220ms cubic-bezier(0.22,1,0.36,1), background-color 280ms, color 280ms",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
