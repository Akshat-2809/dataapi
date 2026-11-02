import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, type LegalSection, type LegalSummaryRow } from "@/components/LegalDoc";
import { LEGAL_ENTITY } from "@/lib/legal";
import { FOUNDER_LINKEDIN, FOUNDER_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — DataAPI · AutoEx™",
  description: "The rules for using the DataAPI website, its demo, its calculator and its waitlist.",
  alternates: { canonical: "/terms" },
};

const reach = <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer">{FOUNDER_NAME} on LinkedIn ↗</a>;

const SUMMARY: LegalSummaryRow[] = [
  { subject: "This website", answer: "It describes AutoEx™. It doesn’t give you access to the API, and plans may change." },
  { subject: "The waitlist", answer: "The form doesn’t send or store anything yet. Joining it isn’t a contract, and doesn’t guarantee access or credits." },
  { subject: "Demo and calculator", answer: "Illustrations built on sample data and published figures. They aren’t live results or a quote." },
  { subject: "Questions", answer: <>Message {reach}.</> },
];

const SECTIONS: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <>
        <p>
          These terms cover your use of this website (the &ldquo;Website&rdquo;), run by {LEGAL_ENTITY} (&ldquo;DataAPI&rdquo;,
          &ldquo;we&rdquo; or &ldquo;us&rdquo;). By using it, you agree to them. If you don&apos;t agree, please don&apos;t use it.
        </p>
        <p>
          They don&apos;t cover the DataAPI API, which will have its own terms. How we handle data on the Website is explained in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "waitlist",
    title: "The waitlist",
    body: (
      <ul>
        <li><b>Nothing is sent yet.</b> The form on <Link href="/signup">/signup</Link> checks your entries in your browser and shows a confirmation. What you type isn&apos;t sent to us or stored.</li>
        <li><b>No promise of access.</b> Joining the waitlist doesn&apos;t create a contract or an account, and doesn&apos;t guarantee access, a batch date or free credits.</li>
        <li><b>Offers can change.</b> The 1,000 free credits, the &ldquo;no card&rdquo; offer and anything else described on the Website may change or end without notice.</li>
      </ul>
    ),
  },
  {
    id: "demo",
    title: "The demo, calculator and figures",
    body: (
      <ul>
        <li><b>The demo is a concept demo.</b> It shows sample output built into the page. It doesn&apos;t fetch or process the pages it names.</li>
        <li><b>The calculator is an estimate.</b> It uses fixed token counts and model prices as listed by DataAPI. Real costs depend on your pages, your model and its current price.</li>
        <li><b>Benchmarks and comparisons</b> come from DataAPI&apos;s published figures. They describe typical results, not a guarantee for your use.</li>
      </ul>
    ),
  },
  {
    id: "names",
    title: "Names and trademarks",
    body: (
      <>
        <p>DataAPI and AutoEx™ are our names. Please don&apos;t use them in a way that suggests we endorse you.</p>
        <p>
          Other names on the Website, such as AI models, frameworks, cloud providers and the example websites in the demo, belong
          to their owners. They are mentioned to describe compatibility or sample data, not as an endorsement of DataAPI. The
          founder&apos;s career history describes his earlier work at other companies.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "Using the Website",
    body: (
      <ul>
        <li>Don&apos;t try to break, overload or gain unauthorised access to the Website.</li>
        <li>Don&apos;t copy the Website&apos;s content or design to pass it off as your own.</li>
      </ul>
    ),
  },
  {
    id: "warranty",
    title: "No warranty",
    body: <p>The Website is provided as it is. We try to keep it accurate and available, but we don&apos;t promise that it&apos;s complete, current or always online.</p>,
  },
  {
    id: "liability",
    title: "Limits on our liability",
    body: <p>To the extent the law allows, we aren&apos;t liable for any loss that comes from using the Website or relying on its content, including the demo, the calculator and the figures.</p>,
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: <p>We&apos;ll post the new version here with a new date. Using the Website after that means you accept the new terms.</p>,
  },
  {
    id: "contact",
    title: "Questions",
    body: <p>Message {reach}.</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Service"
      intro="The rules for using this website, its demo, its calculator and its waitlist."
      summary={SUMMARY}
      sections={SECTIONS}
    />
  );
}
