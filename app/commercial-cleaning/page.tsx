import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = { title: "Commercial Window Cleaning Birmingham & Solihull", description: "Commercial window and internal cleaning for offices, shops, apartment blocks and care homes in Birmingham and Solihull." };

export default function CommercialPage() {
  return <ServicePage eyebrow="Commercial cleaning" title="Professional standards, reliably maintained." intro="Regular commercial window cleaning and carefully managed internal cleaning for workplaces and shared buildings across Birmingham, Solihull and surrounding areas." image="/images/window-cleaning-van-equipment.jpg" imageAlt="Van-mounted system and professional equipment for commercial window cleaning" highlights={[
    { title: "Reliable regular service", text: "Planned cleaning to help your property present consistently well." },
    { title: "Inside and out", text: "External and internal commercial window cleaning available." },
    { title: "Suitable for varied premises", text: "Experience across workplaces, retail, residential blocks and care settings." },
  ]} listTitle="Commercial property types we serve." list={["Offices", "Shops and retail premises", "Flats and apartment blocks", "Care homes", "Other suitable commercial properties", "Internal commercial window cleaning"]} note="Broader commercial internal cleaning using hired cleaners is available specifically around Solihull and Shirley." methodTitle="The equipment and experience for commercial work." methodText="High-reach pure-water cleaning supports efficient, consistent exterior care, while professional traditional methods are used for close-up internal detail. We agree the right method and regular schedule around your building and working environment." />;
}
