import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone, Mail } from "lucide-react";
import { PageHeader } from "@/components/SiteChrome";
import { EnquiryForm } from "@/components/EnquiryForm";
import { business, whatsappLink } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta("Contact Us – Divya Builders", "Call, WhatsApp or send an enquiry to Divya Builders for material quotations and equipment rental."),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact us" title="Let's talk about your requirement" intro="Call, WhatsApp or send the form below. Include your site location so we can plan delivery." />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-2">
          <a href={business.phoneHref} className="flex items-start gap-4 rounded-md border bg-card p-5 shadow-sm hover:border-primary">
            <Phone className="mt-1 h-6 w-6 text-primary" />
            <div><p className="font-display text-lg font-bold uppercase">Phone</p><p>{business.phone}</p></div>
          </a>
          <a href={whatsappLink("Hello Divya Builders, I'd like to make an enquiry.")} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-md border bg-card p-5 shadow-sm hover:border-primary">
            <MessageCircle className="mt-1 h-6 w-6 text-whatsapp" />
            <div><p className="font-display text-lg font-bold uppercase">WhatsApp</p><p>Message us anytime</p></div>
          </a>
          <div className="flex items-start gap-4 rounded-md border bg-card p-5 shadow-sm">
            <Mail className="mt-1 h-6 w-6 text-primary" />
            <div><p className="font-display text-lg font-bold uppercase">Email</p><p>{business.email}</p></div>
          </div>
          <div className="flex items-start gap-4 rounded-md border bg-card p-5 shadow-sm">
            <MapPin className="mt-1 h-6 w-6 text-primary" />
            <div><p className="font-display text-lg font-bold uppercase">Address</p><p>{business.address}</p></div>
          </div>
          <div className="flex items-start gap-4 rounded-md border bg-card p-5 shadow-sm">
            <Clock className="mt-1 h-6 w-6 text-primary" />
            <div>
              <p className="font-display text-lg font-bold uppercase">Business hours</p>
              {business.hours.map((h) => (<p key={h.day}><span className="font-medium">{h.day}:</span> {h.time}</p>))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3"><EnquiryForm /></div>
      </section>
      <section className="h-96 w-full">
        <iframe title="Divya Builders location" src={`https://www.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&output=embed`} className="h-full w-full border-0" loading="lazy" />
      </section>
    </>
  );
}
