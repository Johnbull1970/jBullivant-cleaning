import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = { title: "Internal Window Cleaning Birmingham", description: "Professional internal window cleaning for homes and commercial properties across Birmingham and Solihull." };

export default function InternalPage() {
  return <ServicePage eyebrow="Inside the property" title="A detailed finish, inside and out." intro="Professional internal window cleaning for residential and commercial properties, completed with care around your rooms, furnishings and working environment." image="/images/squeegee-and-applicator.jpg" imageAlt="Professional squeegee and applicator for detailed internal window cleaning" highlights={[
    { title: "Residential interiors", text: "Careful internal cleaning for homes, flats and apartments." },
    { title: "Commercial interiors", text: "Window cleaning for offices, shops, care homes and suitable workplaces." },
    { title: "Hands-on detail", text: "Professional applicator, squeegee and scraper methods where appropriate." },
  ]} listTitle="Careful cleaning within your space." list={["Internal residential windows", "Internal commercial windows", "Offices and shops", "Flats and apartment blocks", "Care homes", "Combined inside-and-out service"]} note="Broader commercial internal cleaning with hired cleaners is available specifically around Solihull and Shirley; please ask for details." methodTitle="Traditional technique at its best." methodText="Internal glass benefits from close-up control. Professional applicators loosen residue, squeegees create a clear finish and scrapers are used only where appropriate. It is a precise, proven method—not an outdated one." />;
}
