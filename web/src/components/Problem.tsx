import { RACE } from "@/lib/data";
import { ScrollTrigger } from "./ScrollTrigger";
import styles from "./Problem.module.css";

export function Problem() {
  return (
    <section className="sec" style={{ paddingTop: 60 }}>
      <div className="wrap">
        <div className="shead rv">
          <span className="lab">The problem</span>
          <h2 className="h2">Your context window is full of tracking scripts.</h2>
          <p className="lede">Traditional scrapers dump full HTML, styles and SVG trees straight into prompt tokens. Same 100-row table, four ways of feeding it to an LLM:</p>
        </div>
        <ScrollTrigger className={styles.race} activeClassName={styles.go} at={0.8}>
          {RACE.map((r) => (
            <div className={styles.rrow} key={r.name}>
              <div className={styles.nm}><b>{r.name}</b><span>{r.meta}</span></div>
              <div className={styles.rbar} aria-hidden="true">
                <i style={{ "--w": r.w, background: r.color } as React.CSSProperties} />
              </div>
              <div className={styles.v}><b>{r.tokens}</b>tokens</div>
            </div>
          ))}
        </ScrollTrigger>
      </div>
    </section>
  );
}
