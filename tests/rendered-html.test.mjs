import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  BACKUP_EMAIL_HREF,
  DIRECT_QUOTE_EMAIL_HREF,
  MAP_HREF,
  PHONE_HREF,
  PRIMARY_EMAIL,
  QUOTE_SUBJECT,
  buildQuoteMailto,
} from "../app/lib/contact.ts";

const publicRoutes = [
  "/",
  "/window-cleaning",
  "/gutter-soffit-cleaning",
  "/commercial-cleaning",
  "/internal-cleaning",
  "/about",
  "/areas-we-cover",
  "/quote",
];

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`https://example.test${pathname}`, { headers: { accept: "text/html", host: "example.test" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

function anchorsFrom(html) {
  return [...html.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)].map((match) => ({
    href: match[1].replaceAll("&amp;", "&"),
    text: match[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
  }));
}

test("all public pages and internal links resolve", async () => {
  for (const route of publicRoutes) {
    const response = await render(route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, route);
    const html = await response.text();
    assert.match(html, /J Bullivant Cleaning/i, route);
    assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/i, route);
    assert.doesNotMatch(html, /href=""|href="#"|javascript:void\(0\)/i, route);

    for (const anchor of anchorsFrom(html)) {
      if (anchor.href.startsWith("/") && !anchor.href.startsWith("//")) {
        assert.ok(publicRoutes.includes(anchor.href), `${route}: broken internal link ${anchor.href}`);
      }
      if (/free quote|check your postcode|start a conversation/i.test(anchor.text)) {
        assert.equal(anchor.href, "/quote", `${route}: quote CTA ${anchor.text}`);
      }
    }
  }
});

test("contact links use the exact destinations", async () => {
  const response = await render();
  const html = await response.text();
  const anchors = anchorsFrom(html);
  const phoneLinks = anchors.filter((link) => link.href.startsWith("tel:"));
  assert.ok(phoneLinks.length > 0);
  assert.ok(phoneLinks.every((link) => link.href === PHONE_HREF));
  assert.ok(anchors.some((link) => link.href === DIRECT_QUOTE_EMAIL_HREF && link.text === PRIMARY_EMAIL));
  assert.ok(anchors.some((link) => link.href === BACKUP_EMAIL_HREF && /backup/i.test(link.text)));
  assert.ok(anchors.some((link) => link.href === MAP_HREF && /24 Linden Road/i.test(link.text)));
  assert.match(DIRECT_QUOTE_EMAIL_HREF, /subject=Free%20Quote%20Enquiry%20%E2%80%93%20J%20Bullivant%20Cleaning$/);
});

test("quote email safely encodes punctuation and includes every residential field", () => {
  const mailto = buildQuoteMailto({
    name: "A & B O’Connor",
    contact: "alex+quote@example.test / 07123 456789",
    address: "1 King’s Road, Flat #4",
    postcode: "B30 1AA",
    propertyType: "Semi-detached",
    customerType: "Residential",
    service: "Windows & soffits",
    floors: "2 floors",
    conservatory: "No",
    extension: "Yes",
    frequency: "Every 6 weeks",
    contactMethod: "Email",
    bestTime: "After 5pm",
    message: "Please call; side gate code: #42.",
  });
  assert.doesNotMatch(mailto, /[\s#’]/);
  const parsed = new URL(mailto);
  assert.equal(parsed.pathname, PRIMARY_EMAIL);
  assert.equal(parsed.searchParams.get("subject"), QUOTE_SUBJECT);
  const body = parsed.searchParams.get("body") ?? "";
  for (const expected of [
    "Name: A & B O’Connor",
    "Email / Phone: alex+quote@example.test / 07123 456789",
    "Property Address: 1 King’s Road, Flat #4",
    "Postcode: B30 1AA",
    "Property Type: Semi-detached",
    "Residential / Commercial: Residential",
    "Service Required: Windows & soffits",
    "Number of Floors: 2 floors",
    "Conservatory: No",
    "Extension: Yes",
    "Preferred Cleaning Frequency: Every 6 weeks",
    "Preferred Contact Method: Email",
    "Best Time to Contact: After 5pm",
    "Additional Message:\nPlease call; side gate code: #42.",
  ]) assert.ok(body.includes(expected), expected);
  assert.doesNotMatch(body, /Commercial Details/);
});

test("commercial quote fields appear only for commercial enquiries", () => {
  const mailto = buildQuoteMailto({
    name: "Test User",
    contact: "test@example.test",
    address: "2 Test Street",
    postcode: "B90 1AA",
    propertyType: "Commercial property",
    customerType: "Commercial",
    service: "Commercial window cleaning",
    floors: "3 floors",
    conservatory: "No",
    extension: "No",
    frequency: "Every 8 weeks",
    contactMethod: "Phone call",
    bestTime: "Morning",
    message: "Reception access.",
    businessName: "Test Offices Ltd",
    commercialPropertyType: "Office",
    buildingSize: "Three-storey office",
    numberOfBuildings: "2",
    internalRequired: "Not sure",
  });
  const body = new URL(mailto).searchParams.get("body") ?? "";
  assert.match(body, /Commercial Details/);
  assert.match(body, /Business \/ Property Name: Test Offices Ltd/);
  assert.match(body, /Commercial Property Type: Office/);
  assert.match(body, /Approximate Building Size: Three-storey office/);
  assert.match(body, /Number of Buildings: 2/);
  assert.match(body, /Internal Cleaning Required: Not sure/);
});

test("quote form validates before opening a real mail composer", async () => {
  const [response, formSource, cssSource] = await Promise.all([
    render("/quote"),
    readFile(new URL("../app/quote/QuoteForm.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  const html = await response.text();
  assert.match(html, /Prepare My Quote Email/);
  assert.match(formSource, /form\.checkValidity\(\)/);
  assert.match(formSource, /form\.reportValidity\(\)/);
  assert.match(formSource, /window\.location\.assign\(mailtoUrl\)/);
  assert.doesNotMatch(formSource, /sent successfully|name="windows"|name="difficultAccess"|One-off window cleaning/i);
  assert.match(cssSource, /\.hero-shade\s*\{\s*pointer-events:\s*none/);
  assert.match(cssSource, /\.service-feature img, \.image-overlay\s*\{\s*pointer-events:\s*none/);
  assert.match(cssSource, /\.mobile-menu-panel\s*\{[^}]*max-height:\s*calc\(100dvh - 144px\)[^}]*overflow-y:\s*auto/s);
  assert.match(cssSource, /\.mobile-menu > summary\s*\{[^}]*min-height:\s*44px[^}]*width:\s*44px/s);
  assert.match(cssSource, /\.segmented input:focus-visible \+ span/);
});
