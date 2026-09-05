import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

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

test("all public pages server-render successfully", async () => {
  for (const route of publicRoutes) {
    const response = await render(route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, route);
    const html = await response.text();
    assert.match(html, /J Bullivant Cleaning/i, route);
    assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/i, route);
  }
});

test("homepage contains the core trust, service and contact content", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /40\+/);
  assert.match(html, /60 ft/);
  assert.match(html, /Frames &amp; sills included/);
  assert.match(html, /more than 80 years/i);
  assert.match(html, /tel:07855399330/);
  assert.match(html, /Bulldotcom@blueyonder\.co\.uk/);
  assert.match(html, /google\.com\/maps\/search/);
  assert.match(html, /https:\/\/example\.test\/og\.png/);
});

test("quote flow prepares the requested email without unwanted questions", async () => {
  const [response, source] = await Promise.all([
    render("/quote"),
    readFile(new URL("../app/quote/QuoteForm.tsx", import.meta.url), "utf8"),
  ]);
  const html = await response.text();
  assert.match(html, /Prepare My Quote Email/);
  assert.match(html, /Every 4 weeks/);
  assert.match(html, /Every 6 weeks/);
  assert.match(html, /Every 8 weeks/);
  assert.match(source, /mailto:Bulldotcom@blueyonder\.co\.uk/);
  assert.match(source, /encodeURIComponent\("Free Quote Enquiry – J Bullivant Cleaning"\)/);
  assert.match(source, /encodeURIComponent\(body\)/);
  assert.match(source, /customerType === "Commercial"/);
  assert.doesNotMatch(source, /name="windows"|name="difficultAccess"|One-off window cleaning/i);
});
