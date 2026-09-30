import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Commercial Window Cleaning Birmingham | Bullivant Cleaning", description: "Reliable commercial window cleaning in Birmingham and Solihull for offices, shops, apartment blocks, care homes and other suitable properties.", path: "/commercial-cleaning" });

export default function CommercialPage() {
  return <ServicePage eyebrow="Commercial cleaning" title="Commercial window cleaning in Birmingham." intro="Regular commercial window cleaning and carefully managed internal cleaning for workplaces and shared buildings across Birmingham, Solihull and surrounding areas." image="/images/window-cleaning-van-equipment.jpg" imageAlt="Commercial window cleaning by Bullivant Cleaning in Birmingham" highlights={[
    { title: "Reliable regular service", text: "Planned cleaning to help your property present consistently well." },
    { title: "Inside and out", text: "External and internal commercial window cleaning available." },
    { title: "Suitable for varied premises", text: "Experience across workplaces, retail, residential blocks and care settings." },
  ]} listTitle="Commercial property types we serve." list={["Offices", "Shops and retail premises", "Flats and apartment blocks", "Care homes", "Other suitable commercial properties", "Internal commercial window cleaning"]} note="Broader commercial internal cleaning using hired cleaners is available specifically around Solihull and Shirley." methodTitle="The equipment and experience for commercial work." methodText="High-reach pure-water cleaning supports efficient, consistent exterior care, while professional traditional methods are used for close-up internal detail. We agree the right method and regular schedule around your building and working environment." />;
}
