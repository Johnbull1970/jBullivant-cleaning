import type { Metadata } from "next";

export const BUSINESS_NAME = "Bullivant Cleaning";
export const SITE_URL = new URL("https://bullivantcleaning.com");
export const SOCIAL_IMAGE_PATH = "/og.png";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const canonical = new URL(path, SITE_URL).toString();
  const socialImage = new URL(SOCIAL_IMAGE_PATH, SITE_URL).toString();

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BUSINESS_NAME,
      locale: "en_GB",
      type: "website",
      images: [{
        url: socialImage,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} professional window cleaning in Birmingham`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
