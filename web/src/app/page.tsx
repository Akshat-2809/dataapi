import { Calculator } from "@/components/Calculator";
import { Compare } from "@/components/Compare";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Formats } from "@/components/Formats";
import { Founder } from "@/components/Founder";
import { Hero } from "@/components/Hero";
import { Mcp } from "@/components/Mcp";
import { Nav } from "@/components/Nav";
import { Problem } from "@/components/Problem";
import { Routing } from "@/components/Routing";
import { FOUNDER_LINKEDIN, FOUNDER_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: SITE_DESCRIPTION,
  slogan: "Raw DOM. Pure signal.",
  sameAs: [SOCIAL.linkedin, SOCIAL.youtube, SOCIAL.producthunt],
  founder: { "@type": "Person", name: FOUNDER_NAME, jobTitle: "Founder & CTO", sameAs: [FOUNDER_LINKEDIN] },
  address: { "@type": "PostalAddress", addressLocality: "Navi Mumbai", addressCountry: "IN" },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <Formats />
        <Routing />
        <Calculator />
        <Mcp />
        <Compare />
        <Founder />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
