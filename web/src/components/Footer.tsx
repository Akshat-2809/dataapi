import Link from "next/link";
import { SOCIAL } from "@/lib/site";
import styles from "./Footer.module.css";

const COLUMNS: { head: string; links: [label: string, href: string][] }[] = [
  {
    head: "Product",
    links: [
      ["AutoEx™ structured extraction", "/#formats"],
      ["Plain HTML ingestion (POST)", "/#formats"],
      ["Scrape to clean Markdown", "/#formats"],
      ["Dual-tier routing", "/#routing"],
    ],
  },
  {
    head: "Developers",
    links: [
      ["Live demo", "/#engine"],
      ["MCP & code samples", "/#mcp"],
      ["Cost calculator", "/#calculator"],
      ["Compare", "/#compare"],
    ],
  },
  {
    head: "Company",
    links: [
      ["Founder", "/#founder"],
      ["Join the waitlist", "/signup"],
    ],
  },
  {
    head: "Follow",
    links: [
      ["LinkedIn ↗", SOCIAL.linkedin],
      ["YouTube ↗", SOCIAL.youtube],
      ["Product Hunt ↗", SOCIAL.producthunt],
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.foot}>
      <div className="wrap">
        <div className={styles.fg}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Link className={styles.logo} href="/#top" aria-label="DataAPI home"><b>DataAPI</b><small>AutoEx™</small></Link>
            <p style={{ color: "var(--ink2)", fontSize: 15, maxWidth: "30ch" }}>Deterministic web content recognition, engineered for AI agents and LLMs.</p>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.head} aria-labelledby={`f-${col.head}`}>
              <h2 className={styles.head} id={`f-${col.head}`}>{col.head}</h2>
              <ul>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    {href.startsWith("http") ? <a href={href} target="_blank" rel="noopener noreferrer">{label}</a> : <Link href={href}>{label}</Link>}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className={styles.legal}>
          <span>© 2026 DataAPI · AutoEx™</span>
          <Link href="/#top">Back to the top ↑</Link>
        </div>
      </div>
    </footer>
  );
}
