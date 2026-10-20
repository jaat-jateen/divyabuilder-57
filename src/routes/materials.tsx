import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import cement from "@/assets/cement.jpg";
import { PageHeader } from "@/components/SiteChrome";
import { EnquiryForm } from "@/components/EnquiryForm";
import { materials, otherEssentials, whatsappLink } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/materials")({
  head: () => pageMeta("Building Materials – Divya Builders", "Cement, sand, aggregates, bricks, stone, steel and other construction essentials. Request a quotation from Divya Builders."),
  component: Materials,
});

function Materials() {
  return (
    <>
      <PageHeader eyebrow="Building materials" title="Materials for every stage of construction" intro="Tell us what you need and the quantity — we'll confirm current stock, pricing and delivery." image={cement} />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m) => (
            <article key={m.name} className="flex flex-col overflow-hidden rounded-md border bg-card shadow-sm">
              <img src={m.image} alt={m.name} loading="lazy" width={944} height={704} className="aspect-[4/3] w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-2xl font-bold uppercase text-navy">{m.name}</h2>
                <p className="mt-2 flex-1 text-muted-foreground">{m.desc}</p>
                <a href={whatsappLink(`Hello Divya Builders, I'd like a quotation for ${m.name}. Quantity: ___ Site location: ___`)} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5">
                  <MessageCircle className="h-4 w-4" /> Request price
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-md bg-muted p-6">
          <h3 className="text-xl font-bold uppercase">Other essentials</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {otherEssentials.map((o) => (
              <span key={o} className="rounded-sm border bg-card px-3 py-1.5 text-sm">{o}</span>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Stock changes from time to time — please check with us for current availability.</p>
        </div>
      </section>
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-3xl px-4">
          <EnquiryForm title="Request a quotation" defaultService="Building materials quotation" />
        </div>
      </section>
    </>
  );
}
