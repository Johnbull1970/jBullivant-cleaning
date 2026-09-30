import Link from "next/link";
import { BACKUP_EMAIL, BACKUP_EMAIL_HREF, DIRECT_QUOTE_EMAIL_HREF, MAP_HREF, PHONE_DISPLAY, PHONE_HREF, PRIMARY_EMAIL } from "../lib/contact";

const services = [
  ["Window Cleaning", "/window-cleaning"],
  ["Gutter & Soffit Cleaning", "/gutter-soffit-cleaning"],
  ["Commercial Cleaning", "/commercial-cleaning"],
  ["Internal Cleaning", "/internal-cleaning"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Bullivant Cleaning home">
        <img src="/images/bullivant-cleaning-logo.svg" alt="Bullivant Cleaning" />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <details className="nav-dropdown">
          <summary>Services <span aria-hidden="true">⌄</span></summary>
          <div className="nav-dropdown-panel">
            {services.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </div>
        </details>
        <a href="/about">About</a>
        <a href="/areas-we-cover">Areas</a>
      </nav>
      <div className="header-actions">
        <a className="header-phone" href={PHONE_HREF}><span>Call John</span> {PHONE_DISPLAY}</a>
        <a className="button button-compact" href="/quote">Get a Free Quote</a>
      </div>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
        <div className="mobile-menu-panel">
          <Link href="/">Home</Link>
          {services.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a href="/about">About</a>
          <a href="/areas-we-cover">Areas We Cover</a>
          <a href="/quote">Get a Free Quote</a>
          <a href={PHONE_HREF}>Call {PHONE_DISPLAY}</a>
        </div>
      </details>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/images/bullivant-cleaning-logo.svg" alt="Bullivant Cleaning" />
          <p>Professional residential and commercial cleaning, built on a family tradition spanning more than 80 years.</p>
          <a className="button" href="/quote">Get a Free Quote <span aria-hidden="true">→</span></a>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/">Home</Link>
          <a href="/about">About</a>
          <a href="/areas-we-cover">Areas We Cover</a>
          <a href="/quote">Free Quote</a>
        </div>
        <div>
          <p className="footer-label">Services</p>
          {services.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </div>
        <div className="footer-contact">
          <p className="footer-label">Contact</p>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          <a href={DIRECT_QUOTE_EMAIL_HREF}>{PRIMARY_EMAIL}</a>
          <a href={MAP_HREF} target="_blank" rel="noreferrer">24 Linden Road<br />Birmingham<br />B30 1JU</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Window cleaning Monday–Friday · Phone &amp; email enquiries 7 days a week</p>
        <p>Serving Birmingham, Solihull &amp; surrounding areas</p>
        <p>© 2026 Bullivant Cleaning</p>
        <a className="backup-email" href={BACKUP_EMAIL_HREF}>Backup: {BACKUP_EMAIL}</a>
      </div>
    </footer>
  );
}

export function MobileActions() {
  return (
    <div className="mobile-actions" aria-label="Quick contact actions">
      <a href={PHONE_HREF}>Call John</a>
      <a href="/quote">Free Quote</a>
    </div>
  );
}

export function QuoteBand({ eyebrow = "Let’s make things clearer", title = "A reliable clean starts with a simple conversation." }: { eyebrow?: string; title?: string }) {
  return (
    <section className="quote-band">
      <div>
        <p className="eyebrow light">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="quote-band-actions">
        <a className="button button-white" href="/quote">Get a Free Quote <span aria-hidden="true">→</span></a>
        <a href={PHONE_HREF}>Or call {PHONE_DISPLAY}</a>
      </div>
    </section>
  );
}
