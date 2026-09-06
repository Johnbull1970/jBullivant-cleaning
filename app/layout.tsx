import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { Footer, Header, MobileActions } from "./components/SiteChrome";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "j-bullivant-cleaning.sites.openai.com";
  const protocol = requestHeaders.get("x-forwarded-proto") || "https";
  const base = new URL(`${protocol}://${host}`);
  const title = "J Bullivant Cleaning | Window Cleaning Birmingham & Solihull";
  const description = "Family-run residential and commercial window cleaning across Birmingham, Solihull and surrounding areas.";
  const socialImage = new URL("/og.png", base).toString();
  return {
    metadataBase: base,
    title: { default: title, template: "%s | J Bullivant Cleaning" },
    description,
    icons: { icon: "/images/j-bullivant-logo.png" },
    openGraph: { title, description, images: [{ url: socialImage, width: 1200, height: 630, alt: "J Bullivant Cleaning—clear results built over generations" }], type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "J Bullivant Cleaning",
  telephone: "+44 7855 399330",
  email: "Bulldotcom@blueyonder.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "24 Linden Road",
    addressLocality: "Birmingham",
    postalCode: "B30 1JU",
    addressCountry: "GB",
  },
  areaServed: ["Birmingham", "Solihull", "Shirley", "Knowle", "Dickens Heath", "Harborne", "Edgbaston", "Bromsgrove"],
  openingHours: ["Mo-Fr window cleaning", "Mo-Su phone and email enquiries"],
  description: "Family-run residential and commercial window cleaning with more than 40 years of hands-on professional experience.",
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
