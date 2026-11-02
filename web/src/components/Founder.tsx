import Image from "next/image";
import founderPhoto from "@/assets/founder/anbu-saravanan.jpg";
import { CAREER, FOUNDER_BOOK, FOUNDER_FACTS, FOUNDER_STATS } from "@/lib/data";
import { FOUNDER_LINKEDIN, FOUNDER_NAME } from "@/lib/site";
import styles from "./Founder.module.css";

export function Founder() {
  return (
    <section className="sec" id="founder" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="shead rv">
          <span className="lab">Founder</span>
          <h2 className="h2">Built by someone who has extracted the web for over a decade.</h2>
          <p className="lede">AutoEx™ comes from years of building configurable extraction engines, from people directories across millions of sites to e-commerce catalogues in many languages.</p>
        </div>
        <div className={styles.fd}>
          <aside className={styles.fcard}>
            <div className={styles.fph}>
              <Image src={founderPhoto} alt={`${FOUNDER_NAME}, Founder & CTO of DataAPI`} sizes="(max-width: 960px) 60vw, 260px" placeholder="blur" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <h3>{FOUNDER_NAME}</h3>
              <span className="lab">Founder &amp; CTO · DataAPI</span>
            </div>
            <dl className={styles.fkv}>
              {FOUNDER_FACTS.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            <div className={styles.book}>
              <div className={styles.cv} aria-hidden="true">A Cook&apos;s Perspective</div>
              <div>
                <span className="lab">Author</span>
                <p style={{ fontWeight: 600, marginTop: 4 }}>{FOUNDER_BOOK}</p>
              </div>
            </div>
            <a className="btn btn-line" href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" style={{ alignSelf: "flex-start" }}>
              Connect on LinkedIn ↗
            </a>
          </aside>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div className={styles.fstats}>
              {FOUNDER_STATS.map(([value, text]) => (
                <div className={styles.fs} key={value}>
                  <b>{value}</b>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <blockquote className={styles.quote}>
              &ldquo;LLMs don&apos;t need a browser&apos;s entire DOM tree. <span>They need structured perception.</span>&rdquo;
            </blockquote>
            <div>
              <span className="lab">Career, in extraction</span>
              <ol className={styles.tl}>
                {CAREER.map((c) => (
                  <li className={`${styles.tli} ${c.now ? styles.now : ""}`} key={c.t}>
                    <i aria-hidden="true" />
                    <span className={styles.y}>{c.y}</span>
                    <div><b>{c.t}</b><p>{c.d}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
