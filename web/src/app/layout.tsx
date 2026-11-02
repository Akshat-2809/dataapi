import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Martian_Mono, Onest } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: "variable", axes: ["opsz"], variable: "--font-bricolage" });
const onest = Onest({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-onest" });
const martian = Martian_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-martian", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F5F0",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${bricolage.variable} ${onest.variable} ${martian.variable}`}>
      <body>{children}</body>
    </html>
  );
}
