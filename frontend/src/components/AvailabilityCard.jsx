import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function AvailabilityCard({ floating = false }) {
  const [data, setData] = useState({
    status: "available",
    label: "Available for projects",
    next_slot: "Jan 2026",
    timezone: "GMT+1 (Paris)",
  });

  useEffect(() => {
    let cancelled = false;
    axios
      .get(`${API}/availability`)
      .then((r) => !cancelled && setData((d) => ({ ...d, ...r.data })))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const isAvailable = data.status === "available";

  return (
    <motion.div
      data-testid="availability-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      className={
        floating
          ? "glass px-5 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] inline-flex items-center gap-3"
          : "glass px-5 py-4 inline-flex items-center gap-3 rounded-full"
      }
    >
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isAvailable ? "bg-green-500 animate-ping" : "bg-yellow-500"
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            isAvailable ? "bg-green-600" : "bg-yellow-600"
          }`}
        />
      </span>
      <div className="leading-tight">
        <div data-testid="availability-status" className="mono uppercase text-[10px] tracking-[0.22em] text-ash">
          {isAvailable ? "Open · Booking" : "Limited"}
        </div>
        <div data-testid="availability-label" className="text-sm font-medium">
          {data.label} <span className="text-ash">· {data.next_slot}</span>
        </div>
      </div>
    </motion.div>
  );
}
