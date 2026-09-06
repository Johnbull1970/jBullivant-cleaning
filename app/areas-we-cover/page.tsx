import type { Metadata } from "next";
import { QuoteBand } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Areas We Cover | Birmingham, Solihull & Nearby", description: "Window cleaning across Birmingham, Solihull, Shirley, Knowle, Dickens Heath, Harborne, Edgbaston, Bromsgrove and surrounding areas." };

const areas = [
  ["Birmingham", "Regular residential and commercial window cleaning across the city and south Birmingham."],
  ["Solihull", "Window, gutter, soffit and commercial services, including broader internal commercial cleaning."],
  ["Shirley", "Regular window cleaning plus broader commercial internal cleaning enquiries."],
  ["Knowle", "Professional regular residential and commercial window care."],
  ["Dickens Heath", "Reliable regular rounds for homes and suitable commercial properties."],
  ["Harborne", "Residential, internal and commercial window cleaning."],
  ["Edgbaston", "Professional window care for homes, offices and suitable managed properties."],
  ["Bromsgrove", "Regular window, gutter and soffit cleaning enquiries welcome."],
] as const;

export default function AreasPage() {
  return (
    <main>
      <section className="areas-hero">
        <div><p className="eyebrow light">Local, reliable, established</p><h1>Serving Birmingham, Solihull and surrounding areas.</h1><p>Our regular rounds reach homes and businesses across the region. If your area is not listed, please still ask—these are key service areas, not the limits of where we work.</p><a className="button button-white" href="/quote">Check your postcode <span>→</span></a></div>
        <div className="map-pattern" aria-hidden="true"><span className="map-ring ring-one"></span><span className="map-ring ring-two"></span><b>B30</b></div>
      </section>

      <section className="area-list-section">
        <div className="area-list-heading"><p className="eyebrow">Our regular service area</p><h2>Local knowledge, wider reach.</h2></div>
        <div className="area-list">
          {areas.map(([area, text], index) => <article className="reveal" key={area}><span>{String(index + 1).padStart(2, "0")}</span><h3>{area}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="postcode-section editorial-grid reveal">
        <div><p className="eyebrow">Not sure if we cover you?</p><h2>Send the postcode. We’ll take it from there.</h2></div>
        <div><p>Routes evolve around our regular customers, so nearby locations may often be possible. Add your postcode and preferred service to the quote form, or call John directly for a quick conversation.</p><div className="postcode-actions"><a className="button" href="/quote">Get a Free Quote</a><a className="text-link" href="tel:07855399330">07855 399330</a></div></div>
      </section>
      <QuoteBand />
    </main>
  );
}
