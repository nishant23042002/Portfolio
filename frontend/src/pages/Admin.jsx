import { useEffect, useState } from "react";
import axios from "axios";
import { Lock, RefreshCcw, Mail, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const ADMIN_PASSWORD = "admin123"; // simple gate. Change to suit.
const STORAGE_KEY = "kael_admin_ok";

export default function Admin() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(STORAGE_KEY) === "1");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/contact`);
      setMessages(data);
    } catch (e) {
      setError("Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authed) fetchMessages();
  }, [authed]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (pwd === ADMIN_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setAuthed(true);
      setError("");
    } else {
      setError("Wrong password");
    }
  };

  const signOut = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setAuthed(false);
    setPwd("");
  };

  if (!authed) {
    return (
      <div data-testid="admin-gate" className="min-h-screen flex items-center justify-center bg-bone px-6">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md bg-bone border border-ink p-10"
          data-testid="admin-login-form"
        >
          <Lock size={24} className="text-vermilion" />
          <h1 className="serif text-4xl mt-6 leading-tight">Admin · Inbox</h1>
          <p className="text-ash mt-2 text-sm">Enter the password to view contact submissions.</p>

          <label className="block mt-8 mono uppercase text-[10px] tracking-[0.22em] text-ash">Password</label>
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            data-testid="admin-password-input"
            autoFocus
            className="block w-full bg-transparent border-0 border-b border-ink focus:border-vermilion outline-none pt-3 pb-3 text-lg"
          />
          {error && <p data-testid="admin-error" className="text-vermilion text-sm mt-3">{error}</p>}

          <button
            type="submit"
            data-testid="admin-login-submit"
            className="mt-8 w-full bg-ink text-bone py-3 mono uppercase text-xs tracking-[0.22em] hover:bg-vermilion transition-colors"
          >
            Unlock
          </button>

          <Link
            to="/"
            data-testid="admin-back-home"
            className="mt-6 inline-flex items-center gap-2 mono uppercase text-[10px] tracking-[0.22em] text-ash hover:text-ink"
          >
            <ArrowLeft size={12} /> Back to portfolio
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div data-testid="admin-page" className="min-h-screen bg-bone">
      <header className="border-b border-stone">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <div>
            <div className="mono uppercase text-[10px] tracking-[0.22em] text-vermilion">Admin</div>
            <h1 className="serif text-3xl md:text-4xl mt-1">Inbox</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchMessages}
              data-testid="admin-refresh"
              className="inline-flex items-center gap-2 border border-ink px-4 py-2 mono uppercase text-[10px] tracking-[0.22em] hover:bg-ink hover:text-bone transition-colors"
            >
              <RefreshCcw size={12} /> Refresh
            </button>
            <button
              onClick={signOut}
              data-testid="admin-signout"
              className="inline-flex items-center gap-2 border border-ink px-4 py-2 mono uppercase text-[10px] tracking-[0.22em] hover:bg-vermilion hover:text-bone hover:border-vermilion transition-colors"
            >
              Sign out
            </button>
            <Link
              to="/"
              data-testid="admin-home"
              className="inline-flex items-center gap-2 mono uppercase text-[10px] tracking-[0.22em] text-ash hover:text-ink"
            >
              <ArrowLeft size={12} /> Portfolio
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-10">
        <div className="flex items-baseline justify-between mb-6">
          <p className="text-ash">
            <span data-testid="admin-message-count" className="text-ink font-medium">
              {messages.length}
            </span>{" "}
            {messages.length === 1 ? "message" : "messages"} total
          </p>
          {loading && <span className="mono text-[10px] uppercase tracking-[0.22em] text-vermilion">Loading…</span>}
        </div>

        {messages.length === 0 && !loading ? (
          <div data-testid="admin-empty" className="border border-stone p-16 text-center">
            <Mail size={28} className="mx-auto text-ash" />
            <p className="mt-4 text-ash">No messages yet.</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {messages.map((m) => (
              <li
                key={m.id}
                data-testid={`admin-message-${m.id}`}
                className="border border-stone p-6 hover:border-ink transition-colors"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <h3 className="serif text-2xl leading-tight">
                      {m.subject || "(no subject)"}
                    </h3>
                    <p className="mono uppercase text-[10px] tracking-[0.22em] text-ash mt-1">
                      {m.name} ·{" "}
                      <a
                        href={`mailto:${m.email}`}
                        className="text-vermilion link-line"
                        data-testid={`admin-message-email-${m.id}`}
                      >
                        {m.email}
                      </a>
                      {m.budget && <> · {m.budget}</>}
                    </p>
                  </div>
                  <time className="mono text-[10px] uppercase tracking-[0.22em] text-ash">
                    {new Date(m.created_at).toLocaleString()}
                  </time>
                </div>
                <p className="mt-4 text-base leading-relaxed whitespace-pre-wrap">{m.message}</p>
                <div className="mt-4">
                  <a
                    href={`mailto:${m.email}?subject=Re: ${encodeURIComponent(m.subject || "Your message")}`}
                    className="inline-flex items-center gap-2 mono uppercase text-[10px] tracking-[0.22em] hover:text-vermilion"
                    data-testid={`admin-reply-${m.id}`}
                  >
                    Reply <ExternalLink size={12} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
