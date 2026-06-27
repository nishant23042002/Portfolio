import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Send, Check, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "../data";
import MagneticButton from "./MagneticButton";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const BUDGETS = ["< Rs.5000", "Rs.5000 - Rs.15000", "Rs.15000 - Rs.40000", "Rs.40000+", "Not sure yet"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", budget: "" });
  const [state, setState] = useState("idle"); // idle | loading | success | error

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please complete the required fields.");
      return;
    }
    setState("loading");
    try {
      await axios.post(`${API}/contact`, {
        name: form.name,
        email: form.email,
        subject: form.subject || undefined,
        message: form.message,
        budget: form.budget || undefined,
      });
      setState("success");
      toast.success("Message sent. I'll reply within 24h.");
      setForm({ name: "", email: "", subject: "", message: "", budget: "" });
    } catch (err) {
      setState("error");
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Couldn't send. Please try again.");
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="bg-ink text-bone py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 md:gap-12">
        <div className="col-span-12 lg:col-span-5">
          <div className="mono uppercase text-[11px] tracking-[0.22em] text-vermilion">07 — Contact</div>
          <h2 className="serif text-5xl md:text-7xl leading-[0.95] tracking-tight mt-6">
            Let{`'`}s build<br />
            something <em className="italic">good</em>
            <span className="text-vermilion">.</span>
          </h2>

          <p className="mt-8 text-lg text-bone/70 max-w-md">
            Send a brief about your project, your timeline and the budget range. I reply within 24 hours.
          </p>

          <div className="mt-12 space-y-6">
            <Row k="Email" v={PROFILE.email} testid="contact-email" />
            <Row k="Phone" v={PROFILE.phone} testid="contact-phone" />
            <Row k="Based in" v={PROFILE.location} testid="contact-location" />
            <Row k="Working hours" v="Mon–Sat · 09:00–20:00 IST" testid="contact-hours" />
          </div>
        </div>

        <form
          onSubmit={submit}
          data-testid="contact-form"
          className="col-span-12 lg:col-span-7 grid grid-cols-12 gap-x-8 gap-y-10"
        >
          <Field
            label="Your name"
            id="name"
            value={form.name}
            onChange={set("name")}
            required
            testid="contact-input-name"
            className="col-span-12 md:col-span-6"
          />
          <Field
            label="Email"
            id="email"
            type="email"
            value={form.email}
            onChange={set("email")}
            required
            testid="contact-input-email"
            className="col-span-12 md:col-span-6"
          />
          <Field
            label="Subject"
            id="subject"
            value={form.subject}
            onChange={set("subject")}
            testid="contact-input-subject"
            className="col-span-12"
          />
          <div className="col-span-12">
            <span className="mono uppercase text-[10px] tracking-[0.22em] text-bone/60 block mb-3">
              Budget
            </span>
            <div className="flex flex-wrap gap-2">
              {BUDGETS.map((b) => (
                <button
                  type="button"
                  key={b}
                  data-testid={`contact-budget-${b.replace(/[^a-z0-9]/gi, "")}`}
                  onClick={() => setForm((f) => ({ ...f, budget: b }))}
                  className={
                    "px-4 py-2 rounded-full border mono capitalize text-[12px] tracking-[0.22em] transition-colors " +
                    (form.budget === b
                      ? "bg-vermilion border-vermilion text-bone"
                      : "border-bone/30 hover:border-bone")
                  }
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <Field
            label="Project brief"
            id="message"
            as="textarea"
            rows={5}
            value={form.message}
            onChange={set("message")}
            required
            testid="contact-input-message"
            className="col-span-12"
          />

          <div className="col-span-12 flex flex-wrap items-center justify-between gap-6">
            <p className="text-bone/50 text-sm max-w-sm">
              By submitting you agree your message will be stored so I can reply. Nothing else.
            </p>
            <MagneticButton
              type="submit"
              testid="contact-submit"
              className="text-bone bg-vermilion border-vermilion hover:text-bone disabled:opacity-50"
              strength={18}
              disabled={state === "loading"}
            >
              {state === "loading" && "Sending…"}
              {state === "idle" && (
                <>
                  Send message <Send size={14} />
                </>
              )}
              {state === "success" && (
                <>
                  Sent <Check size={14} />
                </>
              )}
              {state === "error" && (
                <>
                  Retry <AlertCircle size={14} />
                </>
              )}
            </MagneticButton>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="max-w-[1440px] mx-auto px-6 md:px-12 mt-24 md:mt-40 pt-10 border-t border-bone/20 flex flex-wrap items-center justify-between gap-6 text-bone/60">
        <div className="mono uppercase text-[10px] tracking-[0.22em]">
          © {new Date().getFullYear()} {PROFILE.name} · Designed & built in {PROFILE.location}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-6 mono uppercase text-[10px] tracking-[0.22em]"
        >
          <a href={PROFILE.social.github} className="link-line" target="_blank" rel="noreferrer" data-testid="footer-github">GitHub</a>
          <a href={PROFILE.social.linkedin} className="link-line" target="_blank" rel="noreferrer" data-testid="footer-linkedin">LinkedIn</a>
          <a href={`mailto:${PROFILE.email}`} className="link-line" data-testid="footer-email">Email</a>
          <a href={PROFILE.resumeUrl} className="link-line" target="_blank" rel="noreferrer" data-testid="footer-resume">Resume</a>
        </motion.div>
      </footer>
    </section>
  );
}

function Field({ label, id, as, className = "", testid, ...props }) {
  const [focused, setFocused] = useState(false);
  const Tag = as || "input";
  const hasValue = (props.value || "").length > 0;
  const lifted = focused || hasValue;
  return (
    <div className={`relative ${className}`}>
      <label
        htmlFor={id}
        className={
          "absolute left-0 transition-all duration-300 mono uppercase tracking-[0.22em] pointer-events-none " +
          (lifted
            ? "top-0 text-[10px] text-vermilion"
            : "top-7 text-xs text-bone/60")
        }
      >
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        data-testid={testid}
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="block w-full bg-transparent border-0 border-b border-bone/30 focus:border-vermilion outline-none pt-8 pb-3 text-lg text-bone resize-none transition-colors"
      />
    </div>
  );
}

function Row({ k, v, testid }) {
  return (
    <div data-testid={testid} className="flex items-baseline gap-8 border-b border-bone/15 pb-4">
      <span className="mono uppercase text-[10px] tracking-[0.22em] text-bone/50 w-32 shrink-0">{k}</span>
      <span className="text-lg break-all">{v}</span>
    </div>
  );
}
