import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bullivant Cleaning",
    short_name: "Bullivant Cleaning",
    description: "Professional window, gutter, soffit and commercial cleaning across Birmingham and surrounding areas.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f3ed",
    theme_color: "#702c72",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
