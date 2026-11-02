import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, type LegalSection, type LegalSummaryRow } from "@/components/LegalDoc";
import s from "@/components/LegalDoc.module.css";
import { LEGAL_ENTITY } from "@/lib/legal";
import { FOUNDER_LINKEDIN, FOUNDER_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — DataAPI · AutoEx™",
  description: "What this website collects, why, who sees it, and how to reach us.",
  alternates: { canonical: "/privacy" },
};

const reach = <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer">{FOUNDER_NAME} on LinkedIn ↗</a>;

const SUMMARY: LegalSummaryRow[] = [
  { subject: "The waitlist form", answer: "It doesn’t send or store what you type. It stays in your browser and is gone when you leave the page." },
  { subject: "Cookies and tracking", answer: "None. No analytics, no advertising cookies, no tracking pixels." },
  { subject: "What we never do", answer: "Sell your data, use it for advertising, or follow you around the web." },
  { subject: "To reach us", answer: <>Message {reach}.</> },
];

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          This website is run by {LEGAL_ENTITY} (&ldquo;DataAPI&rdquo;, &ldquo;we&rdquo; or &ldquo;us&rdquo;), the maker of AutoEx™,
          deterministic web content recognition for AI agents and LLMs.
        </p>
        <p>This policy covers this website only. It doesn&apos;t cover the DataAPI API or any other service.</p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <h3>When you use the waitlist form</h3>
        <p>Nothing. The form checks your entries in your browser and shows a confirmation. What you type isn&apos;t sent to us or stored anywhere.</p>
        <h3>When you use the demo and the calculator</h3>
        <p>Nothing. They run in your browser with sample data built into the page. No web page is fetched and nothing you pick is sent to us.</p>
        <h3>When you visit</h3>
        <p>
          Our hosting provider keeps standard request logs (IP address, time, page, browser) for security and reliability. We use
          no cookies, analytics or advertising tools, and our fonts are served from our own domain.
        </p>
      </>
    ),
  },
  {
    id: "why-we-use-it",
    title: "Why we use it",
    body: (
      <ul>
        <li><b>To keep the website safe</b> and running.</li>
        <li><b>To meet legal duties</b> and answer lawful requests.</li>
      </ul>
    ),
  },
  {
    id: "who-can-see-it",
    title: "Who can see it",
    body: (
      <>
        <p>Only where needed:</p>
        <ul>
          <li><b>Our hosting provider,</b> which runs the website and keeps its request logs.</li>
          <li><b>Authorities and courts,</b> where the law requires it or to protect our legal rights.</li>
        </ul>
        <p>Our hosting provider may process these logs outside your country.</p>
      </>
    ),
  },
  {
    id: "how-long",
    title: "How long we keep it",
    body: <p>Hosting logs are kept by our hosting provider for a short period under its own retention policy. We keep nothing else, because the form stores nothing.</p>,
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>
          Depending on where you live, you may have the right to ask what data we hold about you, to correct or erase it, and to
          complain to a data protection authority. Because the form stores nothing, the only data connected to your visit is the
          hosting logs described above.
        </p>
        <p>To make a request, message {reach}.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "How to reach us",
    body: (
      <div className={s.stuck}>
        <p><b>{LEGAL_ENTITY}</b></p>
        <p>Message {reach}, with &ldquo;Privacy&rdquo; in the first line.</p>
      </div>
    ),
  },
  {
    id: "other-sites",
    title: "Other websites",
    body: <p>Some links lead to other websites, such as our social profiles. Their own privacy policies apply there, not this one.</p>,
  },
  {
    id: "changes",
    title: "When this policy changes",
    body: (
      <p>
        We&apos;ll post the new version here with a new date. If the waitlist form starts sending or storing what you type, this
        policy will say so first. See also our <Link href="/terms">Terms of Service</Link>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      intro="What this website collects when you visit or join the waitlist, why, and what happens to it."
      summary={SUMMARY}
      sections={SECTIONS}
    />
  );
}
