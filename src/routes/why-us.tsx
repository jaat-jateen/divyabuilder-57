import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Truck, MessageCircle, Users, Award } from "lucide-react";
import jcb from "@/assets/jcb.jpg";
import { PageHeader } from "@/components/SiteChrome";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/why-us")({
  head: () => pageMeta("Why Choose Us – Divya Builders", "Dependable service, a varied equipment fleet, easy communication and a focus on quality — why customers work with Divya Builders."),
  component: WhyUs,
});

const reasons = [
  { icon: ShieldCheck, t: "Dependable service", d: "We confirm what we can deliver and when, and we stick to it." },
  { icon: Truck, t: "A varied fleet", d: "3 JCBs, 5 trucks, 3 tractors and 4 cranes — the right machine for excavation, transport or lifting." },
  { icon: MessageCircle, t: "Easy to reach", d: "Call or WhatsApp us for quick answers on stock, availability and rates." },
  { icon: Users, t: "Customer-focused support", d: "Whether it's a single house or a larger site, we listen to your requirement and plan around it." },
  { icon: Award, t: "Commitment to quality", d: "We supply materials and maintain machines to a standard we'd use on our own work." },
];

function WhyUs() {
  return (
    <>
      <PageHeader eyebrow="Why choose us" title="Materials and machines you can rely on" intro="One supplier for materials and equipment means simpler coordination and fewer delays on site." image={jcb} />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div key={r.t} className="relative rounded-md border bg-card p-7 shadow-sm">
              <span className="absolute right-5 top-4 font-display text-5xl font-bold text-muted">0{i + 1}</span>
              <r.icon className="h-9 w-9 text-primary" />
              <h2 className="mt-4 text-2xl font-bold uppercase text-navy">{r.t}</h2>
              <p className="mt-2 text-muted-foreground">{r.d}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center rounded-md bg-navy p-7 text-navy-foreground">
            <h2 className="text-2xl font-bold uppercase">Planning a project?</h2>
            <p className="mt-2 opacity-85">Tell us what you need and we'll help you work out materials and equipment.</p>
            <Link to="/contact" className="btn btn-primary mt-5 self-start">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
