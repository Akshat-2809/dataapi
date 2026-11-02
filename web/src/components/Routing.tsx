import styles from "./Routing.module.css";

export function Routing() {
  return (
    <section className={`sec ${styles.route}`} id="routing">
      <div className="wrap">
        <div className="shead rv">
          <span className="lab">Dual-tier routing</span>
          <h2 className="h2" style={{ color: "#FFFFFF" }}>Fast socket first. Browser only when it must.</h2>
          <p className="lede">Lightweight TLS sockets handle the page first. If client-side JavaScript hydration is needed, isolated Chromium workers take over automatically. Zero config.</p>
        </div>
        <ol className={`${styles.pipe} rv`}>
          <li className={styles.st}><span className={styles.t}>HTTP / MCP</span><b>Target URL</b><p>Or raw HTML you already have.</p><span className={styles.flowdot} aria-hidden="true" /></li>
          <li className={styles.st}><span className={styles.t}>2 ms</span><b>Ingress</b><p>Sniffer decides: static or SPA.</p><span className={styles.flowdot} aria-hidden="true" /></li>
          <li className={`${styles.st} ${styles.split}`}>
            <div className={`${styles.tier} ${styles.a}`}>
              <span className="lab" style={{ color: "#62D6A0" }}>Tier 1 · fast socket</span>
              <span className={styles.pct}>92%</span>
              <span className="mono" style={{ fontSize: 12, color: "#A2A59C" }}>⚡ 18 ms · 0.6 MB RAM</span>
            </div>
            <div className={styles.tier}>
              <span className="lab">Tier 2 · Chromium</span>
              <span className={styles.pct}>8%</span>
              <span className="mono" style={{ fontSize: 12, color: "#A2A59C" }}>~320 ms · full JS</span>
            </div>
          </li>
          <li className={styles.st}><span className={styles.t}>zero-selector</span><b>AST parser</b><p>Layout clustering, no CSS selectors.</p><span className={styles.flowdot} aria-hidden="true" /></li>
          <li className={styles.st} style={{ boxShadow: "inset 0 0 0 1.5px var(--sig)" }}><span className={styles.t}>−97.6% tokens</span><b>Clean payload</b><p>TOON, JSON or Markdown.</p></li>
        </ol>
      </div>
    </section>
  );
}
