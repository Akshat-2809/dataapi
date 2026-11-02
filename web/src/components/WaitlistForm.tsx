"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { USE_CASES, VOLUMES, waitlistSchema, type WaitlistField } from "@/lib/waitlist/schema";
import s from "./Waitlist.module.css";

type FieldErrors = Partial<Record<WaitlistField, string>>;

/** Front end only: checks the fields and shows the thank-you. Nothing is sent or stored. */
export function WaitlistForm() {
  const [done, setDone] = useState<{ name: string; email: string } | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [useCase, setUseCase] = useState<string>(USE_CASES[0]);
  const [volume, setVolume] = useState<string>(VOLUMES[1]);
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (done) doneRef.current?.focus();
  }, [done]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsed = waitlistSchema.safeParse({ name: data.get("name"), email: data.get("email"), company: data.get("company") ?? "", useCase, volume });
    if (parsed.success) {
      setDone({ name: parsed.data.name.split(/\s+/)[0], email: parsed.data.email });
      return;
    }
    const next: FieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as WaitlistField;
      if (!next[key]) next[key] = issue.message;
    }
    setErrors(next);
  }

  if (done) {
    return (
      <div className={`${s.form} ${s.done}`} ref={doneRef} tabIndex={-1} role="status" style={{ outline: "none" }}>
        <span className={s.tick} aria-hidden="true">✓</span>
        <span className="lab" style={{ color: "#00744A" }}>You&apos;re on the list</span>
        <h2 className={s.doneH}>Thanks, {done.name}.</h2>
        <p style={{ color: "var(--ink2)" }}>We&apos;ll write to <b>{done.email}</b> when your batch opens, with your 1,000 free credits.</p>
        <Link className="btn btn-ink" href="/" style={{ alignSelf: "flex-start" }}>Back to the home page</Link>
      </div>
    );
  }

  const describe = (f: WaitlistField) => (errors[f] ? `w-${f}-err` : undefined);

  return (
    <form onSubmit={onSubmit} className={s.form} noValidate>
      <div className={s.field}>
        <label htmlFor="w-name">Name</label>
        <input id="w-name" name="name" type="text" autoComplete="name" placeholder="Your name" required maxLength={120}
          aria-invalid={!!errors.name} aria-describedby={describe("name")} />
        {errors.name && <span id="w-name-err" className={s.ferr}>{errors.name}</span>}
      </div>
      <div className={s.field}>
        <label htmlFor="w-email">Work email</label>
        <input id="w-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254}
          aria-invalid={!!errors.email} aria-describedby={describe("email")} />
        {errors.email && <span id="w-email-err" className={s.ferr}>{errors.email}</span>}
      </div>
      <div className={s.field}>
        <label htmlFor="w-company">Company <span className={s.opt}>(optional)</span></label>
        <input id="w-company" name="company" type="text" autoComplete="organization" placeholder="Where you build" maxLength={120}
          aria-invalid={!!errors.company} aria-describedby={describe("company")} />
        {errors.company && <span id="w-company-err" className={s.ferr}>{errors.company}</span>}
      </div>
      <div className={s.field}>
        <span className={s.flab} id="w-use">What are you building?</span>
        <div className={s.chips} role="group" aria-labelledby="w-use">
          {USE_CASES.map((u) => (
            <button type="button" key={u} className={u === useCase ? s.on : undefined} aria-pressed={u === useCase} onClick={() => setUseCase(u)}>{u}</button>
          ))}
        </div>
      </div>
      <div className={s.field}>
        <span className={s.flab} id="w-vol">Pages per day</span>
        <div className={s.chips} role="group" aria-labelledby="w-vol">
          {VOLUMES.map((v) => (
            <button type="button" key={v} className={v === volume ? s.on : undefined} aria-pressed={v === volume} onClick={() => setVolume(v)}>{v}</button>
          ))}
        </div>
      </div>
      <button type="submit" className={`btn btn-sig ${s.send}`}>Join the waitlist</button>
      <p className={s.fine}>No card needed.</p>
    </form>
  );
}
