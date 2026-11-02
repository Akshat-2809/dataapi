import { COMPARE_HEAD, COMPARE_ROWS } from "@/lib/data";
import styles from "./Compare.module.css";

export function Compare() {
  return (
    <section className="sec" id="compare" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="shead rv">
          <span className="lab">Verified telemetry · 50,000 production pages</span>
          <h2 className="h2">Deterministic vs everything else.</h2>
        </div>
        <div className={styles.tblwrap} role="region" aria-label="Comparison" tabIndex={0}>
          <table className={styles.table}>
            <thead>
              <tr>
                {COMPARE_HEAD.map((h, i) => <th key={h} scope="col" className={i === 1 ? styles.us : undefined}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map(([cap, ...cells]) => (
                <tr key={cap}>
                  <th scope="row">{cap}</th>
                  {cells.map((c, i) => <td key={i} className={i === 0 ? styles.us : undefined}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
