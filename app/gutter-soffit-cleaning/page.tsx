import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Gutter & Soffit Cleaning Birmingham | Bullivant Cleaning", description: "Professional gutter and soffit cleaning for homes and suitable commercial properties across Birmingham, Solihull and surrounding areas.", path: "/gutter-soffit-cleaning" });

export default function GutterPage() {
  return <ServicePage eyebrow="Exterior care" title="Gutter and soffit cleaning in Birmingham." intro="A considered exterior cleaning service across Birmingham and surrounding areas that lifts weathering and built-up dirt from the details that frame your property." image="/images/clean-residential-windows.jpg" imageAlt="Gutter and soffit cleaning service at a Birmingham home" highlights={[
    { title: "Residential properties", text: "Careful gutter and soffit cleaning for houses, bungalows, flats and apartments." },
    { title: "Commercial premises", text: "A professional service for suitable commercial buildings and managed properties." },
    { title: "Experienced at height", text: "Appropriate equipment and more than 40 years of practical cleaning experience." },
  ]} listTitle="Exterior details that deserve the same care." list={["Gutter cleaning", "Soffit cleaning", "Residential properties", "Commercial properties", "Window cleaning alongside exterior care", "A free quote based on your property"]} methodTitle="A practical approach, tailored to the property." methodText="We assess the building and use an appropriate cleaning approach for the access, materials and level of build-up. Ask John about combining gutter or soffit work with your regular window cleaning schedule." />;
}
