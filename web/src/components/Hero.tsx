import Link from "next/link";
import { TICKER } from "@/lib/data";
import { Machine } from "./Machine";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <span className={styles.kick}><i />Deterministic web content recognition · live on Product Hunt</span>
        <h1 className={styles.h1}><span className={styles.n}>Raw DOM.</span> <span className={styles.s}>Pure signal.</span></h1>
        <div className={styles.hrow}>
          <p className="lede">AutoEx™ reads a web page the way your agent needs it: layout semantics and structure recognised in milliseconds, delivered as clean Markdown, JSON or TOON. No hallucinations. No fragile selectors.</p>
          <div className={styles.hcta}>
            <Link className="btn btn-sig" href="/signup">Start building free</Link>
            <a className="btn btn-line" href="#engine">Try it below</a>
          </div>
        </div>

        <Machine />

        <div className={styles.ticker}>
          {TICKER.map(([value, text]) => (
            <div className={styles.tk} key={value}>
              <b>{value}</b>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
