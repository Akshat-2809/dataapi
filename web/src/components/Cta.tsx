import Link from "next/link";
import styles from "./Cta.module.css";

export function Cta() {
  return (
    <section id="start">
      <div className="wrap">
        <div className={styles.cta}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="lab" style={{ color: "#E6FAF0" }}>Early access batch open</span>
            <h2>1,000 free credits. No card.</h2>
            <p>All 13 production gateways, 17 ms direct sockets, the zero-proxy POST HTML stream and the native MCP server.</p>
          </div>
          <div className={styles.btns}>
            <Link className="btn btn-ink" href="/signup">Claim 1,000 free credits</Link>
            <a className="btn" href="#engine" style={{ background: "rgba(255,255,255,.16)", color: "#FFFFFF" }}>Try the live demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
