import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

// A live-updating clock — a small nod to the always-on, timestamp-driven
// world of data pipelines, and a clear signal the page is "live."
export default function LiveClock({ className = "" }: { className?: string }) {
  const [time, setTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatter.format(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`tabular-nums ${className}`}>
      {time} IST
    </span>
  );
}
