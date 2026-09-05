import Link from "next/link";

const services = [
  ["Window Cleaning", "/window-cleaning"],
  ["Gutter & Soffit Cleaning", "/gutter-soffit-cleaning"],
  ["Commercial Cleaning", "/commercial-cleaning"],
  ["Internal Cleaning", "/internal-cleaning"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="J Bullivant Cleaning home">
        <img src="/images/j-bullivant-logo.png" alt="J Bullivant Cleaning Services" />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <details className="nav-dropdown">
          <summary>Services <span aria-hidden="true">⌄</span></summary>
          <div className="nav-dropdown-panel">
            {services.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </div>
        </details>
        <Link href="/about">About</Link>
        <Link href="/areas-we-cover">Areas</Link>
      </nav>
      <div className="header-actions">
        <a className="header-phone" href="tel:07855399330"><span>Call John</span> 07855 399330</a>
        <Link className="button button-compact" href="/quote">Get a Free Quote</Link>
      </div>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
        <div className="mobile-menu-panel">
          <Link href="/">Home</Link>
          {services.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link href="/about">About</Link>
          <Link href="/areas-we-cover">Areas We Cover</Link>
          <Link href="/quote">Get a Free Quote</Link>
          <a href="tel:07855399330">Call 07855 399330</a>
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
          <img src="/images/j-bullivant-logo.png" alt="J Bullivant Cleaning Services" />
          <p>Professional residential and commercial cleaning, built on a family tradition spanning more than 80 years.</p>
          <Link className="button" href="/quote">Get a Free Quote <span aria-hidden="true">→</span></Link>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/areas-we-cover">Areas We Cover</Link>
          <Link href="/quote">Free Quote</Link>
        </div>
        <div>
          <p className="footer-label">Services</p>
          {services.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </div>
        <div className="footer-contact">
          <p className="footer-label">Contact</p>
          <a href="tel:07855399330">07855 399330</a>
          <a href="mailto:Bulldotcom@blueyonder.co.uk">Bulldotcom@blueyonder.co.uk</a>
          <a href="https://www.google.com/maps/search/?api=1&query=24+Linden+Road+Birmingham+B30+1JU" target="_blank" rel="noreferrer">24 Linden Road<br />Birmingham<br />B30 1JU</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Window cleaning Monday–Friday · Phone &amp; email enquiries 7 days a week</p>
        <p>Serving Birmingham, Solihull &amp; surrounding areas</p>
        <p>© 2026 J Bullivant Cleaning</p>
        <a className="backup-email" href="mailto:bullivants@msn.com">Backup: bullivants@msn.com</a>
      </div>
    </footer>
  );
}

export function MobileActions() {
  return (
    <div className="mobile-actions" aria-label="Quick contact actions">
      <a href="tel:07855399330">Call John</a>
      <Link href="/quote">Free Quote</Link>
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
        <Link className="button button-white" href="/quote">Get a Free Quote <span aria-hidden="true">→</span></Link>
        <a href="tel:07855399330">Or call 07855 399330</a>
      </div>
    </section>
  );
}
