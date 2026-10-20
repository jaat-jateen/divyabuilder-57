import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle, Phone } from "lucide-react";
import crane from "@/assets/crane.jpg";
import { PageHeader } from "@/components/SiteChrome";
import { EnquiryForm } from "@/components/EnquiryForm";
import { business, fleet, whatsappLink } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/equipment")({
  head: () => pageMeta("Equipment Rental – JCB, Trucks, Tractors & Cranes | Divya Builders", "Hire JCB backhoe loaders, trucks, tractors and cranes from Divya Builders. Check availability and request rental pricing."),
  component: Equipment,
});

function Equipment() {
  return (
    <>
      <PageHeader eyebrow="Equipment rental" title="JCBs, trucks, tractors and cranes for hire" intro="Share your site location, work type and dates, and we'll confirm availability and rental rates." image={crane} />
      <section className="mx-auto max-w-7xl space-y-10 px-4 py-20">
        {fleet.map((v, i) => (
          <article key={v.name} className={`grid items-center gap-8 overflow-hidden rounded-md border bg-card shadow-sm md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
            <img src={v.image} alt={v.name} loading="lazy" width={1024} height={768} className="aspect-[4/3] h-full w-full object-cover" />
            <div className="p-6 md:p-10">
              <span className="inline-block rounded-sm bg-primary px-3 py-1 font-display text-lg font-bold uppercase text-primary-foreground">{v.count} in fleet</span>
              <h2 className="mt-3 text-4xl font-bold uppercase text-navy">{v.name}</h2>
              <p className="mt-3 text-lg text-muted-foreground">{v.desc}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {v.uses.map((u) => (
                  <li key={u} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {u}</li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={whatsappLink(`Hello Divya Builders, I'd like to check availability and pricing for ${v.name}. Site location: ___ Dates: ___`)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <MessageCircle className="h-4 w-4" /> Check availability
                </a>
                <a href={business.phoneHref} className="btn btn-navy"><Phone className="h-4 w-4" /> Call for pricing</a>
              </div>
            </div>
          </article>
        ))}
        <p className="text-sm text-muted-foreground">Availability depends on existing bookings. Crane suitability depends on load, reach and site conditions.</p>
      </section>
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-3xl px-4">
          <EnquiryForm title="Rental enquiry" defaultService="JCB rental" />
        </div>
      </section>
    </>
  );
}
