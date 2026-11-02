"use client";

import { useState } from "react";
import { COMPACT_TOKENS, MODELS, RAW_TOKENS, VOLUMES } from "@/lib/data";
import styles from "./Calculator.module.css";

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

export function Calculator() {
  const [price, setPrice] = useState(2);
  const [vol, setVol] = useState(2500);

  const month = vol * 30;
  const oldCost = (month * RAW_TOKENS * price) / 1e6;
  const newCost = (month * COMPACT_TOKENS * price) / 1e6;

  return (
    <section className="sec" id="calculator">
      <div className="wrap">
        <div className="shead rv">
          <span className="lab">LLM cost calculator</span>
          <h2 className="h2">See what raw HTML is costing you.</h2>
          <p className="lede">Based on 28,000 tokens per raw page vs 680 with TOON_COMPACT, 30 days a month.</p>
        </div>
        <div className={styles.calc}>
          <div className={styles.ctl}>
            <div>
              <span className={styles.clab} id="calc-model">Model</span>
              <div className={styles.chips} role="group" aria-labelledby="calc-model">
                {MODELS.map(([label, p]) => (
                  <button type="button" key={label} className={p === price ? styles.on : undefined} aria-pressed={p === price} onClick={() => setPrice(p)}>{label}</button>
                ))}
              </div>
            </div>
            <div>
              <span className={styles.clab} id="calc-vol">Requests per day</span>
              <div className={styles.chips} role="group" aria-labelledby="calc-vol">
                {VOLUMES.map(([label, v]) => (
                  <button type="button" key={label} className={v === vol ? styles.on : undefined} aria-pressed={v === vol} onClick={() => setVol(v)}>{label}</button>
                ))}
              </div>
            </div>
            <p className="lab" style={{ textTransform: "none", letterSpacing: 0, fontSize: 12 }}>Model prices as listed by DataAPI.</p>
          </div>
          <div className={styles.res} aria-live="polite">
            <div className={`${styles.rc} ${styles.old}`}>
              <span className="lab">Raw DOM scraping</span>
              <b className={styles.big}>{money(oldCost)}</b>
              <span style={{ color: "var(--ink2)" }}>per month</span>
              <div className={styles.kv}><span>Per page</span><span className="mono">28,000 tokens</span></div>
              <div className={styles.kv}><span>Latency</span><span className="mono">8,500 ms</span></div>
            </div>
            <div className={`${styles.rc} ${styles.new}`}>
              <span className="lab" style={{ color: "#00744A" }}>AutoEx™ TOON_COMPACT</span>
              <b className={styles.big}>{money(newCost)}</b>
              <span style={{ color: "var(--ink2)" }}>per month</span>
              <div className={styles.kv}><span>Per page</span><span className="mono">680 tokens</span></div>
              <div className={styles.kv}><span>Latency</span><span className="mono">18 ms</span></div>
            </div>
            <div className={styles.save}>
              <span>Saved every month</span>
              <b>{money(oldCost - newCost)}</b>
              <span className="mono" style={{ fontSize: 12, color: "#A2A59C" }}>41× cost compression</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
