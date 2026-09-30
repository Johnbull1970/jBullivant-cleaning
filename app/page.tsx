import { QuoteBand } from "./components/SiteChrome";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <img className="hero-image" src="/images/reach-and-wash-window-cleaning.jpg" alt="Professional reach-and-wash window cleaning at a Birmingham home" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Established family-run cleaning specialists</p>
          <h1>Professional window cleaning<br />in Birmingham.</h1>
          <p className="hero-copy">Bullivant Cleaning provides residential and commercial window cleaning, plus gutter, soffit and internal window cleaning, across Birmingham and surrounding areas.</p>
          <div className="hero-actions">
            <a className="button" href="/quote">Get a Free Quote <span aria-hidden="true">→</span></a>
            <a className="text-link light" href="tel:07855399330">Call 07855 399330</a>
          </div>
        </div>
        <div className="hero-note">Modern pure-water systems<br />&amp; traditional detailed cleaning</div>
      </section>

      <section className="trust-strip" aria-label="Company highlights">
        <div><strong>40+</strong><span>Years’ experience</span></div>
        <div><strong>60 ft</strong><span>Approximate reach</span></div>
        <div><strong>Whole</strong><span>Frames &amp; sills included</span></div>
        <div><strong>Pure</strong><span>Streak-free water</span></div>
      </section>

      <section className="intro-section editorial-grid reveal">
        <div>
          <p className="eyebrow">Local window cleaners in Birmingham</p>
          <h2>Clean windows.<br />Clear standards.</h2>
        </div>
        <div className="intro-body">
          <p className="lead">Bullivant Cleaning combines decades of practical expertise with modern equipment and a personal, reliable service.</p>
          <p>From regular residential window cleaning to commercial properties, every clean is approached with care. Frames and sills are included as standard, leaving the whole window looking its best.</p>
          <a className="arrow-link" href="/about">Meet Bullivant Cleaning <span>→</span></a>
        </div>
      </section>

      <section className="service-showcase">
        <a className="service-feature residential reveal" href="/window-cleaning">
          <img src="/images/clean-residential-windows.jpg" alt="Clean white-framed residential windows" loading="lazy" />
          <div className="image-overlay" />
          <div className="service-feature-copy"><span>01 / Residential</span><h2>Regular care for a home that feels brighter.</h2><b>Explore residential services →</b></div>
        </a>
        <a className="service-feature commercial reveal" href="/commercial-cleaning">
          <img src="/images/window-cleaning-van-equipment.jpg" alt="Commercial window cleaning equipment used by Bullivant Cleaning" loading="lazy" />
          <div className="image-overlay" />
          <div className="service-feature-copy"><span>02 / Commercial</span><h2>Reliable standards for every working environment.</h2><b>Explore commercial services →</b></div>
        </a>
      </section>

      <section className="methods-section">
        <div className="methods-copy reveal">
          <p className="eyebrow light">How we clean</p>
          <h2>The right method for every pane.</h2>
          <p>Our pure-water reach-and-wash system lets us clean windows, frames and sills at height—safely from the ground and with no streak-causing residue.</p>
          <p>Where hands-on detail is best, we use professional traditional techniques: applicator, squeegee and scraper where appropriate. Both methods are chosen for the same reason: an excellent finish.</p>
          <a className="arrow-link light" href="/window-cleaning">Discover our approach <span>→</span></a>
        </div>
        <div className="methods-images reveal">
          <img className="method-main" src="/images/professional-pure-water-system.jpg" alt="Van-mounted pure-water window cleaning system" loading="lazy" />
          <img className="method-inset" src="/images/squeegee-and-applicator.jpg" alt="Professional applicator and squeegee cleaning kit" loading="lazy" />
          <span className="reach-badge"><b>60 ft</b> approximate reach</span>
        </div>
      </section>

      <section className="before-after-section reveal">
        <div className="before-after-heading"><p className="eyebrow">Attention to detail</p><h2>The difference is clear.</h2></div>
        <div className="before-after-grid">
          <figure><img src="/images/window-before-cleaning.jpg" alt="Window before detailed cleaning" loading="lazy" /><figcaption>Before <span>Built-up dust and weather marks</span></figcaption></figure>
          <figure><img src="/images/window-after-cleaning.jpg" alt="Window after detailed cleaning" loading="lazy" /><figcaption>After <span>A clearer, carefully finished pane</span></figcaption></figure>
        </div>
      </section>

      <section className="why-section editorial-grid reveal">
        <div>
          <p className="eyebrow">Why Bullivant Cleaning</p>
          <h2>Dependable by habit. Detailed by nature.</h2>
        </div>
        <div className="why-list">
          <article><span>01</span><div><h3>Long-standing local reputation</h3><p>Over 40 years of hands-on professional experience serving regular customers across the region.</p></div></article>
          <article><span>02</span><div><h3>Fully insured &amp; family-run</h3><p>Direct, personal service with the reassurance you expect when someone is working at your property.</p></div></article>
          <article><span>03</span><div><h3>Complete window care</h3><p>Glass, frames and sills are cleaned together as standard—never treated as an afterthought.</p></div></article>
        </div>
      </section>

      <section className="history-section">
        <img src="/images/traditional-window-cleaning-kit.jpg" alt="Traditional professional window cleaning equipment" loading="lazy" />
        <div className="history-card reveal"><p className="eyebrow light">A family tradition</p><h2>More than 80 years in cleaning.</h2><p>A family cleaning tradition spanning more than 80 years, backed by over 40 years of hands-on professional experience. That history shows in the careful work, honest advice and dependable service customers return to.</p><a className="arrow-link light" href="/about">Read our story <span>→</span></a></div>
      </section>

      <section className="areas-section editorial-grid reveal">
        <div><p className="eyebrow">Local knowledge</p><h2>Serving Birmingham, Solihull and surrounding areas.</h2></div>
        <div><p>Regular rounds cover communities across the south of Birmingham and beyond, including Shirley, Knowle, Dickens Heath, Harborne, Edgbaston and Bromsgrove.</p><div className="area-tags"><span>Birmingham</span><span>Solihull</span><span>Shirley</span><span>Knowle</span><span>+ surrounding areas</span></div><a className="arrow-link" href="/areas-we-cover">See the areas we cover <span>→</span></a></div>
      </section>

      <section className="commercial-band">
        <div className="commercial-band-copy reveal"><p className="eyebrow light">Commercial cleaning</p><h2>Consistent care for places where business happens.</h2><p>Regular window and internal cleaning for offices, shops, apartment blocks, care homes and other suitable commercial properties. Broader commercial internal cleaning is also available specifically around Solihull and Shirley.</p><a className="button button-white" href="/commercial-cleaning">Commercial services <span>→</span></a></div>
        <img src="/images/window-cleaning-van-equipment.jpg" alt="Professional commercial cleaning equipment ready for work" loading="lazy" />
      </section>
      <QuoteBand />
    </main>
  );
}
