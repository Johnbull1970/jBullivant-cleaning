import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header, MobileActions } from "./components/SiteChrome";
import { BUSINESS_NAME, SITE_URL, createPageMetadata } from "./lib/seo";

const homeTitle = "Bullivant Cleaning | Window Cleaners in Birmingham";
const homeDescription = "Established window cleaners in Birmingham providing professional residential, commercial, gutter, soffit and internal window cleaning across the surrounding areas.";

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  ...createPageMetadata({ title: homeTitle, description: homeDescription, path: "/" }),
  applicationName: BUSINESS_NAME,
  title: { default: homeTitle, template: `%s | ${BUSINESS_NAME}` },
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
  robots: { index: true, follow: true },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://bullivantcleaning.com/#business",
  name: "Bullivant Cleaning",
  url: "https://bullivantcleaning.com",
  telephone: "+44 7855 399330",
  email: "Bulldotcom@blueyonder.co.uk",
  image: "https://bullivantcleaning.com/og.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "24 Linden Road",
    addressLocality: "Birmingham",
    postalCode: "B30 1JU",
    addressCountry: "GB",
  },
  areaServed: ["Birmingham", "Solihull", "Shirley", "Knowle", "Dickens Heath", "Harborne", "Edgbaston", "Bromsgrove"],
  serviceType: ["Window cleaning", "Commercial window cleaning", "Internal window cleaning", "Gutter cleaning", "Soffit cleaning"],
  description: "Established window cleaners providing residential, commercial, internal, gutter and soffit cleaning across Birmingham and surrounding areas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <Footer />
        <MobileActions />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
