"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";
import styles from "./Nav.module.css";

const LINKS = [
  ["/#engine", "Engine"],
  ["/#formats", "Formats"],
  ["/#calculator", "Pricing"],
  ["/#mcp", "MCP & Docs"],
  ["/#compare", "Compare"],
  ["/#founder", "Founder"],
];

/** Below 1240px the links fold into the Menu button; below 560px the credits button moves into it too. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.nav}>
      <div className={`wrap ${styles.navin}`}>
        <Link className={styles.logo} href="/#top" aria-label="DataAPI home">
          <LogoMark />
          <b>DataAPI</b>
          <small>AutoEx™</small>
        </Link>
        <nav className={`${styles.links} ${open ? styles.open : ""}`} id="links" aria-label="Main">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} onClick={close}>{label}</Link>
          ))}
          <span className={styles.menuCtas}>
            <Link className="btn btn-ink" href="/signup" style={{ minHeight: 42 }} onClick={close}>Get 1,000 credits</Link>
          </span>
        </nav>
        <div className={styles.navr}>
          <Link className={`btn btn-ink ${styles.cta}`} href="/signup" style={{ minHeight: 42 }}>Get 1,000 credits</Link>
          <button type="button" className={`btn btn-line ${styles.menuBtn}`} aria-expanded={open} aria-controls="links" style={{ minHeight: 42 }} onClick={() => setOpen((o) => !o)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
