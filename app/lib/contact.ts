export const PRIMARY_EMAIL = "Bulldotcom@blueyonder.co.uk";
export const BACKUP_EMAIL = "bullivants@msn.com";
export const PHONE_DISPLAY = "07855 399330";
export const PHONE_HREF = "tel:07855399330";
export const QUOTE_SUBJECT = "Free Quote Enquiry – J Bullivant Cleaning";
export const DIRECT_QUOTE_EMAIL_HREF = `mailto:${PRIMARY_EMAIL}?subject=${encodeURIComponent(QUOTE_SUBJECT)}`;
export const BACKUP_EMAIL_HREF = `mailto:${BACKUP_EMAIL}`;
export const MAP_HREF = "https://www.google.com/maps/search/?api=1&query=24+Linden+Road+Birmingham+B30+1JU";

export type QuoteEmailValues = {
  name: string;
  contact: string;
  address: string;
  postcode: string;
  propertyType: string;
  customerType: string;
  service: string;
  floors: string;
  conservatory: string;
  extension: string;
  frequency: string;
  contactMethod: string;
  bestTime: string;
  message: string;
  businessName?: string;
  commercialPropertyType?: string;
  buildingSize?: string;
  numberOfBuildings?: string;
  internalRequired?: string;
};

export function buildQuoteEmailBody(values: QuoteEmailValues): string {
  const lines = [
    QUOTE_SUBJECT,
    "",
    `Name: ${values.name}`,
    `Email / Phone: ${values.contact}`,
    `Property Address: ${values.address}`,
    `Postcode: ${values.postcode}`,
    `Property Type: ${values.propertyType}`,
    `Residential / Commercial: ${values.customerType}`,
    `Service Required: ${values.service}`,
    `Number of Floors: ${values.floors}`,
    `Conservatory: ${values.conservatory}`,
    `Extension: ${values.extension}`,
    `Preferred Cleaning Frequency: ${values.frequency}`,
    `Preferred Contact Method: ${values.contactMethod}`,
    `Best Time to Contact: ${values.bestTime}`,
  ];

  if (values.customerType === "Commercial") {
    lines.push(
      "",
      "Commercial Details",
      `Business / Property Name: ${values.businessName || "Not provided"}`,
      `Commercial Property Type: ${values.commercialPropertyType || "Not provided"}`,
      `Approximate Building Size: ${values.buildingSize || "Not provided"}`,
      `Number of Buildings: ${values.numberOfBuildings || "Not provided"}`,
      `Internal Cleaning Required: ${values.internalRequired || "Not provided"}`,
    );
  }

  lines.push("", "Additional Message:", values.message);
  return lines.join("\n");
}

export function buildQuoteMailto(values: QuoteEmailValues): string {
  return `mailto:${PRIMARY_EMAIL}?subject=${encodeURIComponent(QUOTE_SUBJECT)}&body=${encodeURIComponent(buildQuoteEmailBody(values))}`;
}
