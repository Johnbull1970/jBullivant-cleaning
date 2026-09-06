import { QuoteBand } from "./SiteChrome";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/contact";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  highlights: { title: string; text: string }[];
  listTitle: string;
  list: string[];
  methodTitle: string;
  methodText: string;
  note?: string;
};

export function ServicePage({ eyebrow, title, intro, image, imageAlt, highlights, listTitle, list, methodTitle, methodText, note }: ServicePageProps) {
  return (
    <main>
      <section className="inner-hero">
        <div className="inner-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="hero-actions dark-actions">
            <a className="button" href="/quote">Get a Free Quote <span aria-hidden="true">→</span></a>
            <a className="text-link" href={PHONE_HREF}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
        <div className="inner-hero-media"><img src={image} alt={imageAlt} /></div>
      </section>

      <section className="feature-row reveal">
        {highlights.map((item, index) => (
          <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>
        ))}
      </section>

      <section className="service-detail editorial-grid">
        <div>
          <p className="eyebrow">What we cover</p>
          <h2>{listTitle}</h2>
          {note && <p className="accent-note">{note}</p>}
        </div>
        <ul className="lined-list">
          {list.map((item) => <li key={item}><span>{item}</span><b aria-hidden="true">↗</b></li>)}
        </ul>
      </section>

      <section className="method-panel reveal">
        <div className="method-image"><img src="/images/professional-pure-water-system.jpg" alt="Professional van-mounted cleaning system with twin hose reels" loading="lazy" /></div>
        <div className="method-copy">
          <p className="eyebrow light">Professional equipment. Considered methods.</p>
          <h2>{methodTitle}</h2>
          <p>{methodText}</p>
          <div className="mini-facts"><span>Fully insured</span><span>Family-run</span><span>Regular customers</span></div>
        </div>
      </section>
      <QuoteBand />
    </main>
  );
}
