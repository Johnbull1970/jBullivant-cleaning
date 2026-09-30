import type { Metadata } from "next";
import { QuoteForm } from "./QuoteForm";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/contact";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Free Window Cleaning Quote Birmingham | Bullivant Cleaning", description: "Request a free quote from Bullivant Cleaning for residential, commercial, internal, gutter or soffit cleaning across Birmingham and surrounding areas.", path: "/quote" });

export default function QuotePage() {
  return (
    <main className="quote-page">
      <section className="quote-hero">
        <div><p className="eyebrow light">Free, straightforward quote</p><h1>Get a free cleaning quote.</h1><p>Tell Bullivant Cleaning about your property and we’ll prepare an email in your own email app, ready for you to review and send to John.</p><div className="quote-contact-card"><span>Prefer to talk?</span><a href={PHONE_HREF}>{PHONE_DISPLAY}</a><small>Phone &amp; email enquiries welcomed 7 days a week</small></div></div>
        <img src="/images/traditional-window-cleaning-kit.jpg" alt="Professional traditional window cleaning kit" />
      </section>
      <section className="quote-form-wrap"><div className="quote-form-intro"><p className="eyebrow">Your enquiry</p><h2>A few useful details. No unnecessary questions.</h2><p>For window cleaning, we provide regular services rather than one-off cleans. Choose the schedule that best suits you, or ask us to advise.</p></div><QuoteForm /></section>
    </main>
  );
}
