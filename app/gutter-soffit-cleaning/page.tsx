import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = { title: "Gutter & Soffit Cleaning Birmingham & Solihull", description: "Professional gutter and soffit cleaning across Birmingham, Solihull and surrounding areas." };

export default function GutterPage() {
  return <ServicePage eyebrow="Exterior care" title="Gutters and soffits, carefully refreshed." intro="A considered exterior clean that lifts weathering and built-up dirt from the details that frame your property." image="/images/clean-residential-windows.jpg" imageAlt="Clean soffits, guttering and window frames on a brick home" highlights={[
    { title: "Residential properties", text: "Careful gutter and soffit cleaning for houses, bungalows, flats and apartments." },
    { title: "Commercial premises", text: "A professional service for suitable commercial buildings and managed properties." },
    { title: "Experienced at height", text: "Appropriate equipment and more than 40 years of practical cleaning experience." },
  ]} listTitle="Exterior details that deserve the same care." list={["Gutter cleaning", "Soffit cleaning", "Residential properties", "Commercial properties", "Window cleaning alongside exterior care", "A free quote based on your property"]} methodTitle="A practical approach, tailored to the property." methodText="We assess the building and use an appropriate cleaning approach for the access, materials and level of build-up. Ask John about combining gutter or soffit work with your regular window cleaning schedule." />;
}
