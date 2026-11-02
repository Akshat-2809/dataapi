"use client";

import { useState } from "react";
import { CODES } from "@/lib/data";
import styles from "./Mcp.module.css";

export function CodeTabs() {
  const [cur, setCur] = useState(0);

  return (
    <div className={styles.codecard}>
      <div className={styles.tabs} role="group" aria-label="Code examples">
        {CODES.map(([label], i) => (
          <button type="button" key={label} className={i === cur ? styles.on : undefined} aria-pressed={i === cur} onClick={() => setCur(i)}>{label}</button>
        ))}
      </div>
      <pre className="sw" key={cur} tabIndex={0}>{CODES[cur][1]}</pre>
    </div>
  );
}
