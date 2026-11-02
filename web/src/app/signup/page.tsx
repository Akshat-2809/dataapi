import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { WaitlistForm } from "@/components/WaitlistForm";
import s from "@/components/Waitlist.module.css";

export const metadata: Metadata = {
  title: "Join the waitlist — DataAPI · AutoEx™",
  description: "Join the AutoEx™ early access waitlist. 1,000 free credits when your batch opens. No card.",
  alternates: { canonical: "/signup" },
};

const PERKS = [
  ["All 13 production gateways", "7 GET + 6 POST: Markdown, JSON, TOON, tables, people, products and more."],
  ["17 ms direct sockets", "Tier 1 fast socket first, Chromium only when a page needs it."],
  ["The zero-proxy POST HTML stream", "Send the HTML your own browser agent already has. Nothing is fetched again."],
  ["The native MCP server", "For Claude Desktop, Cursor, LangChain and your own agents."],
];

export default function SignupPage() {
  return (
    <>
      <Nav />
      <main id="top" className={s.page}>
        <div className={`wrap ${s.grid}`}>
          <div className={s.intro}>
            <span className="lab">Early access batch open</span>
            <h1 className={s.h1}>1,000 free credits. <span>No card.</span></h1>
            <p className="lede">Join the AutoEx™ waitlist. When your batch opens, you get 1,000 free credits to run every gateway on your own pages.</p>
            <ul className={s.perks}>
              {PERKS.map(([title, text]) => (
                <li key={title}><div><b>{title}</b><span>{text}</span></div></li>
              ))}
            </ul>
          </div>
          <WaitlistForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
