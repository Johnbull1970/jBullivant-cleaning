import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = { title: "Window Cleaning Birmingham & Solihull", description: "Regular residential and commercial window cleaning in Birmingham, Solihull, Shirley, Knowle and surrounding areas." };

export default function WindowCleaningPage() {
  return <ServicePage eyebrow="Residential & commercial" title="Window cleaning, done properly." intro="Reliable regular window cleaning with the reach, equipment and experience to care for the whole window—not only the glass." image="/images/reach-and-wash-window-cleaning.jpg" imageAlt="Reach-and-wash cleaning of an upper-floor residential window" highlights={[
    { title: "Regular residential rounds", text: "Dependable 4, 6, 8-week or another regular schedule to suit your home." },
    { title: "Frames & sills included", text: "We clean the whole window as standard for a noticeably better finish." },
    { title: "Internal or external", text: "Exterior cleaning plus careful internal window cleaning where requested." },
  ]} listTitle="Flexible service for homes and businesses." list={["Houses and bungalows", "Flats and apartments", "Internal window cleaning", "Commercial window cleaning", "Offices, shops and care homes", "Apartment blocks and suitable commercial properties"]} note="Regular window cleaning only—we do not offer one-off regular window cleans." methodTitle="Pure water reach, traditional precision." methodText="Our reach-and-wash system uses purified water for a streak-free finish at heights of approximately 60 ft. Traditional applicator, squeegee and scraper techniques remain invaluable wherever close-up, detailed cleaning is most appropriate." />;
}
