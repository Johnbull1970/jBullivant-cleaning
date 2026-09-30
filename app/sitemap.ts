import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

const routes = [
  "",
  "/window-cleaning",
  "/gutter-soffit-cleaning",
  "/commercial-cleaning",
  "/internal-cleaning",
  "/about",
  "/areas-we-cover",
  "/quote",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route || "/", SITE_URL).toString(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/quote" ? 0.9 : 0.8,
  }));
}
