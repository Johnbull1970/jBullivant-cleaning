"use client";

import { FormEvent, useState } from "react";

export function QuoteForm() {
  const [customerType, setCustomerType] = useState("Residential");

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) || "Not provided");
    const commercial = customerType === "Commercial" ? `
Business / Property Name: ${value("businessName")}
Commercial Property Type: ${value("commercialPropertyType")}
Approximate Building Size: ${value("buildingSize")}
Number of Buildings: ${value("numberOfBuildings")}
Internal Cleaning Required: ${value("internalRequired")}` : "";
    const body = `Free Quote Enquiry – J Bullivant Cleaning

Name: ${value("name")}
Contact: ${value("contact")}
Property Address: ${value("address")}
Postcode: ${value("postcode")}
Property Type: ${value("propertyType")}
Residential / Commercial: ${customerType}
Service Required: ${value("service")}
Number of Floors: ${value("floors")}
Conservatory: ${value("conservatory")}
Extension: ${value("extension")}
Preferred Cleaning Frequency: ${value("frequency")}
Preferred Contact Method: ${value("contactMethod")}
Best Time to Contact: ${value("bestTime")}${commercial}

Additional Message:
${value("message")}`;
    window.location.href = `mailto:Bulldotcom@blueyonder.co.uk?subject=${encodeURIComponent("Free Quote Enquiry – J Bullivant Cleaning")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="quote-form" onSubmit={prepareEmail}>
      <div className="form-section-heading"><span>01</span><div><h2>Your details</h2><p>Tell us how John can reach you.</p></div></div>
      <div className="form-grid">
        <label><span>Name *</span><input name="name" autoComplete="name" required /></label>
        <label><span>Email address or phone number *</span><input name="contact" autoComplete="email" required /></label>
        <label className="wide"><span>Property address *</span><input name="address" autoComplete="street-address" required /></label>
        <label><span>Postcode *</span><input name="postcode" autoComplete="postal-code" required /></label>
        <label><span>Property style / type *</span><select name="propertyType" required defaultValue=""><option value="" disabled>Select property type</option><option>Detached</option><option>Semi-detached</option><option>Terraced</option><option>Bungalow</option><option>Flat / apartment</option><option>Commercial property</option><option>Other</option></select></label>
      </div>

      <div className="form-section-heading"><span>02</span><div><h2>What do you need?</h2><p>A few details help us prepare a useful response.</p></div></div>
      <fieldset className="choice-fieldset"><legend>Residential or commercial? *</legend><div className="segmented"><label><input type="radio" name="customerType" value="Residential" checked={customerType === "Residential"} onChange={() => setCustomerType("Residential")} /><span>Residential</span></label><label><input type="radio" name="customerType" value="Commercial" checked={customerType === "Commercial"} onChange={() => setCustomerType("Commercial")} /><span>Commercial</span></label></div></fieldset>
      <div className="form-grid">
        <label className="wide"><span>Service required *</span><select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Regular residential window cleaning</option><option>Internal window cleaning</option><option>Gutter cleaning</option><option>Soffit cleaning</option><option>Commercial window cleaning</option><option>Commercial internal window cleaning</option><option>Commercial cleaning enquiry</option><option>Other</option></select></label>
        <label><span>Number of floors *</span><select name="floors" required defaultValue=""><option value="" disabled>Select floors</option><option>Ground floor only</option><option>2 floors</option><option>3 floors</option><option>4+ floors / please discuss</option></select></label>
        <label><span>Preferred cleaning frequency *</span><select name="frequency" required defaultValue=""><option value="" disabled>Select frequency</option><option>Every 4 weeks</option><option>Every 6 weeks</option><option>Every 8 weeks</option><option>Other regular schedule</option><option>Not applicable / please advise</option></select></label>
      </div>
      <div className="yes-no-grid">
        <fieldset><legend>Conservatory?</legend><label><input type="radio" name="conservatory" value="Yes" required /><span>Yes</span></label><label><input type="radio" name="conservatory" value="No" /><span>No</span></label></fieldset>
        <fieldset><legend>Extension?</legend><label><input type="radio" name="extension" value="Yes" required /><span>Yes</span></label><label><input type="radio" name="extension" value="No" /><span>No</span></label></fieldset>
      </div>

      {customerType === "Commercial" && <div className="commercial-fields" aria-live="polite">
        <p className="eyebrow">Commercial property details</p>
        <div className="form-grid">
          <label><span>Business / property name</span><input name="businessName" /></label>
          <label><span>Commercial property type</span><select name="commercialPropertyType" defaultValue=""><option value="" disabled>Select property type</option><option>Office</option><option>Shop / retail</option><option>Apartment block</option><option>Care home</option><option>Other</option></select></label>
          <label><span>Approximate building size</span><input name="buildingSize" placeholder="e.g. small shop, 20-room office" /></label>
          <label><span>Number of buildings</span><input name="numberOfBuildings" inputMode="numeric" /></label>
        </div>
        <fieldset className="choice-fieldset inline-choice"><legend>Internal cleaning required?</legend><div className="segmented"><label><input type="radio" name="internalRequired" value="Yes" /><span>Yes</span></label><label><input type="radio" name="internalRequired" value="No" /><span>No</span></label><label><input type="radio" name="internalRequired" value="Not sure" /><span>Not sure</span></label></div></fieldset>
      </div>}

      <div className="form-section-heading"><span>03</span><div><h2>Contact preferences</h2><p>Let us know what works best for you.</p></div></div>
      <div className="form-grid">
        <label><span>Preferred contact method *</span><select name="contactMethod" required defaultValue=""><option value="" disabled>Select contact method</option><option>Phone call</option><option>Email</option><option>Text message</option></select></label>
        <label><span>Best time to contact</span><input name="bestTime" placeholder="e.g. weekday afternoon" /></label>
        <label className="wide"><span>Additional message</span><textarea name="message" rows={6} placeholder="Anything else that would help us understand the property or service you need?" /></label>
      </div>
      <label className="consent"><input type="checkbox" name="consent" required /><span>I agree to be contacted about this enquiry. *</span></label>
      <div className="form-submit"><button className="button" type="submit">Prepare My Quote Email <span aria-hidden="true">→</span></button><p>This prepares a completed draft in your email app—it does not send automatically. Your details are only used to respond to your enquiry.</p></div>
    </form>
  );
}
