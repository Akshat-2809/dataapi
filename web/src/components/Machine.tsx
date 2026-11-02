"use client";

import { useEffect, useState } from "react";
import { FORMATS, RAW_NOISE, SAMPLES, type Format } from "@/lib/data";
import styles from "./Machine.module.css";

// The wall loops by sliding up half its height, so it holds the same slices twice.
const WALL = Array.from({ length: 28 }, () => RAW_NOISE).flat();

/** The hero demo: a raw HTML wall, the Recognize button, and AutoEx output. Runs once on its own after 1.6s. */
export function Machine() {
  const [sample, setSample] = useState(0);
  const [fmt, setFmt] = useState<Format>("toon");
  // How many times Recognize has run. 0 means not yet.
  const [runs, setRuns] = useState(0);
  const [count, setCount] = useState(0);

  const ran = runs > 0;
  const sm = SAMPLES[sample];
  const f = FORMATS.find((x) => x.id === fmt)!;
  const [head, body] = sm.out[fmt];

  useEffect(() => {
    const t = setTimeout(() => setRuns((r) => r || 1), 1600);
    return () => clearTimeout(t);
  }, []);

  // Counts the output tokens up from zero on each run or format change.
  useEffect(() => {
    if (!ran) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = reduced ? 1 : Math.min(1, (now - start) / 600);
      setCount(Math.round(f.tokens * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ran, runs, f.tokens]);

  return (
    <div className={styles.machine} id="engine">
      <div className={styles.mbar}>
        <div className={styles.url}>
          <span style={{ color: "#62D6A0" }}>GET</span>
          <span>{sm.url}</span>
        </div>
        <div className={styles.samples} role="group" aria-label="Samples">
          {SAMPLES.map((x, i) => (
            <button type="button" key={x.label} className={i === sample ? styles.on : undefined} aria-pressed={i === sample} onClick={() => setSample(i)}>
              {x.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.panes}>
        <div className={styles.pane}>
          <div className={styles.ph}><span className="lab" style={{ color: "#A2A59C" }}>Raw HTML · what most agents ingest</span></div>
          <div className={styles.tok}><b style={{ color: "#FF7A55" }}>28,000</b><span>tokens / page</span></div>
          <div className={styles.raw} aria-hidden="true">
            <div className={styles.scroll}>
              {WALL.map((part, i) => (part.k ? <span className={styles.k} key={i}>{part.t}</span> : part.t))}
            </div>
          </div>
        </div>

        <div className={styles.mid}>
          <button type="button" className={styles.go} onClick={() => setRuns((r) => r + 1)}>
            Recognize<small>⚡ run</small>
          </button>
          <span className={styles.ms}>{ran ? "18 ms" : "ready"}</span>
        </div>

        <div className={styles.pane}>
          <div className={styles.ph}>
            <span className="lab" style={{ color: "#A2A59C" }}>AutoEx™ output</span>
            <div className={styles.fmt} role="group" aria-label="Format">
              {FORMATS.map((x) => (
                <button type="button" key={x.id} className={x.id === fmt ? styles.on : undefined} aria-pressed={x.id === fmt} onClick={() => setFmt(x.id)}>
                  {x.label}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.tok}>
            <b style={{ color: "#62D6A0" }}>{ran ? count.toLocaleString("en-US") : "—"}</b>
            <span>{ran ? f.note : "press Recognize"}</span>
          </div>
          <div className={`${styles.out} sw`} key={`${runs}-${sample}-${fmt}`} aria-live="polite">
            {ran ? <><span className={styles.hd}>{head}</span>{body}</> : "Output appears here."}
          </div>
        </div>
      </div>

      <div className={styles.mfoot}>
        <span>Tier 1 fast socket · direct TLS</span>
        <span>Concept demo · figures from DataAPI&apos;s published benchmarks</span>
      </div>
    </div>
  );
}
