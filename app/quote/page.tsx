import type { Metadata } from "next";
import { QuoteForm } from "./QuoteForm";

export const metadata: Metadata = { title: "Get a Free Cleaning Quote", description: "Request a free quote from J Bullivant Cleaning for regular window, gutter, soffit or commercial cleaning." };

export default function QuotePage() {
  return (
    <main className="quote-page">
      <section className="quote-hero">
        <div><p className="eyebrow light">Free, straightforward quote</p><h1>Tell us about your property.</h1><p>Complete the details below and we’ll prepare an email in your own email app, ready for you to review and send to John.</p><div className="quote-contact-card"><span>Prefer to talk?</span><a href="tel:07855399330">07855 399330</a><small>Phone &amp; email enquiries welcomed 7 days a week</small></div></div>
        <img src="/images/traditional-window-cleaning-kit.jpg" alt="Professional traditional window cleaning kit" />
      </section>
      <section className="quote-form-wrap"><div className="quote-form-intro"><p className="eyebrow">Your enquiry</p><h2>A few useful details. No unnecessary questions.</h2><p>For window cleaning, we provide regular services rather than one-off cleans. Choose the schedule that best suits you, or ask us to advise.</p></div><QuoteForm /></section>
    </main>
  );
}
