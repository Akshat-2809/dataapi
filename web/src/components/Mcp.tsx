import { MCP_TOOLS, WORKS_WITH } from "@/lib/data";
import { CodeTabs } from "./CodeTabs";
import styles from "./Mcp.module.css";

export function Mcp() {
  return (
    <section className="sec" id="mcp" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="shead rv">
          <span className="lab">Model Context Protocol · AI agent ready</span>
          <h2 className="h2">Give any agent instant web context.</h2>
          <p className="lede">A native MCP server for Claude, Cursor, LangChain and autonomous agents. Your agent discovers the tools and gets structured TOON back in under 30 ms.</p>
        </div>
        <div className={styles.mcp}>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div>
              <span className="lab">7 production schemas</span>
              <div className={styles.tools} style={{ marginTop: 10 }}>
                {MCP_TOOLS.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
            <div>
              <span className="lab">Works with</span>
              <div className={styles.works}>
                {WORKS_WITH.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
            <p style={{ color: "var(--ink2)" }}>Universal REST API too: cURL, Python, Node.js and Go, in three lines.</p>
          </div>
          <CodeTabs />
        </div>
      </div>
    </section>
  );
}
