import { useEffect, useState } from "react";

const KEY = "iswas-loaded";

export function LoadScreen() {
  const [pct, setPct] = useState(0);
  const [gone, setGone] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(KEY) === "1") {
      setHide(true);
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPct(100);
      const t = window.setTimeout(() => {
        sessionStorage.setItem(KEY, "1");
        setGone(true);
      }, 350);
      return () => window.clearTimeout(t);
    }
    const start = performance.now();
    const dur = 2600;
    let frame = 0;
    const tick = (now: number) => {
      const next = Math.min(100, Math.round(((now - start) / dur) * 100));
      setPct(next);
      if (next < 100) frame = requestAnimationFrame(tick);
      else {
        sessionStorage.setItem(KEY, "1");
        window.setTimeout(() => setGone(true), 280);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!gone) return;
    const t = window.setTimeout(() => setHide(true), 480);
    return () => window.clearTimeout(t);
  }, [gone]);

  if (hide) return null;

  return (
    <div className={gone ? "load-screen is-done" : "load-screen"} role="status" aria-label="Loading">
      <div className="load-lockup">
        <p className="mark-rest">it started with a</p>
        <p className="mark-scream">scream</p>
        <div className="load-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
          <div className="load-bar" style={{ width: `${pct}%` }} />
        </div>
        <p className="load-percent uc">{pct}%</p>
      </div>
    </div>
  );
}
