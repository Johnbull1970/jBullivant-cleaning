import type { Metadata } from "next";
import { QuoteBand } from "../components/SiteChrome";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "About Bullivant Cleaning | Birmingham Window Cleaners", description: "Meet John and discover the family tradition and more than 40 years of hands-on experience behind Bullivant Cleaning in Birmingham.", path: "/about" });

export default function AboutPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="about-hero-copy"><p className="eyebrow light">The story behind the standard</p><h1>About Bullivant Cleaning.</h1><p>Bullivant Cleaning is led by John, bringing more than four decades of hands-on professional experience to every regular round and commercial relationship.</p></div>
        <img src="/images/professional-pure-water-system.jpg" alt="Bullivant Cleaning professional van-mounted pure-water equipment" />
      </section>

      <section className="story-section editorial-grid reveal">
        <div><p className="eyebrow">Family tradition</p><h2>80+ years behind the name. 40+ years on the tools.</h2></div>
        <div className="intro-body"><p className="lead">A family cleaning tradition spanning more than 80 years, backed by over 40 years of John’s own hands-on professional experience.</p><p>The distinction matters. One figure speaks to a long family association with cleaning; the other reflects decades of direct, practical expertise. Together they shape a service built around steady standards, honest communication and pride in a job done properly.</p><p>Many customers rely on regular visits, and that continuity has helped build a long-standing local reputation across Birmingham, Solihull and nearby communities.</p></div>
      </section>

      <section className="values-panel">
        <div className="values-image"><img src="/images/window-cleaning-van-equipment.jpg" alt="Professional poles, hoses and pure-water equipment in the cleaning van" loading="lazy" /></div>
        <div className="values-copy"><p className="eyebrow light">What matters</p><h2>Personal service. Professional equipment. No fuss.</h2><div className="values-list"><p><b>Fully insured</b><span>Professional reassurance for every property.</span></p><p><b>Family-run</b><span>Direct, accountable service from a local business.</span></p><p><b>Modern &amp; traditional</b><span>The right cleaning method chosen for the job.</span></p><p><b>Regular customers</b><span>Dependable schedules and lasting relationships.</span></p></div></div>
      </section>

      <section className="signature-section reveal"><span>“</span><blockquote>Good service is simple: arrive reliably, work carefully, and leave the whole window looking right.</blockquote><p>John</p><a className="arrow-link" href="/quote">Start a conversation <b>→</b></a></section>
      <QuoteBand eyebrow="Work with an established local cleaner" title="Decades of experience. One straightforward quote." />
    </main>
  );
}
