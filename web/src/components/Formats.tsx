"use client";

import { useState } from "react";
import { OUTPUTS } from "@/lib/data";
import styles from "./Formats.module.css";

export function Formats() {
  const [cur, setCur] = useState(0);
  const o = OUTPUTS[cur];

  return (
    <section className="sec" id="formats" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="shead rv">
          <span className="lab">Deliverables</span>
          <h2 className="h2">Pick the format. Get it in milliseconds.</h2>
        </div>
        <div className={styles.outs}>
          <div className={styles.olist} role="group" aria-label="Formats">
            {OUTPUTS.map((x, i) => (
              <button type="button" key={x.title} className={`${styles.oi} ${i === cur ? styles.on : ""}`} aria-pressed={i === cur} onClick={() => setCur(i)}>
                <span><b>{x.title}</b><small>{x.sub}</small></span>
                <span className={styles.pill}>{x.pill}</span>
              </button>
            ))}
          </div>
          <div className={`${styles.ocard} sw`} key={cur} aria-live="polite">
            <div className={styles.top}>
              <span className="mono" style={{ fontSize: 12 }}>{o.ep}</span>
              <span className="lab">{o.file}</span>
            </div>
            <pre>{o.pre}</pre>
            <ul>
              {o.li.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
