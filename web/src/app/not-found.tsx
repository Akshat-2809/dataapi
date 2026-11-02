import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found — DataAPI",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={`wrap ${styles.inner}`}>
        <Link className={styles.logo} href="/" aria-label="DataAPI home">
          <LogoMark />
          <b>DataAPI</b>
        </Link>
        <span className="lab">Error 404</span>
        <h1 className={styles.big}><span className={styles.n}>404.</span> <span className={styles.s}>No signal.</span></h1>
        <p className={styles.note}>Nothing to recognise at this address.</p>
        <Link className="btn btn-ink" href="/">Back to the home page</Link>
      </div>
    </main>
  );
}
