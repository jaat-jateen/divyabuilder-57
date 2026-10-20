import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero.jpg";
import bricks from "@/assets/bricks.jpg";
import { PageHeader } from "@/components/SiteChrome";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/about")({
  head: () => pageMeta("About Us – Divya Builders", "Learn about Divya Builders, our approach to construction material supply and equipment rental, and how we work with customers."),
  component: About,
});

const values = [
  { t: "Quality materials", d: "We supply materials suited to the job and are upfront about what's in stock." },
  { t: "Dependable equipment", d: "Our machines are maintained so they are ready to work when you need them." },
  { t: "Clear communication", d: "Straight answers on availability, timing and pricing — by phone or WhatsApp." },
  { t: "Long-term relationships", d: "We want customers to come back for their next project, so we treat every order with care." },
];

function About() {
  return (
    <>
      <PageHeader eyebrow="About us" title="A practical partner for your construction work" intro="Materials and machinery for contractors, builders, developers and individual home builders." image={hero} />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold uppercase text-navy">Who we are</h2>
          <div className="mt-5 space-y-4 text-lg text-muted-foreground">
            <p>
              Divya Builders supplies building materials and rents heavy equipment for construction projects of all sizes. We work
              with contractors, builders, developers, infrastructure companies and individuals building their own homes.
            </p>
            <p>
              Our aim is simple: get the right materials and the right machines to your site on time, and keep you informed along the
              way. Having both under one roof means fewer calls for you and better coordination on site.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary mt-8">Talk to us</Link>
        </div>
        <img src={bricks} alt="Stacked bricks at a material yard" loading="lazy" width={944} height={704} className="rounded-md shadow-lg" />
      </section>
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold uppercase text-navy">How we work</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-md bg-card p-6 shadow-sm">
                <CheckCircle2 className="h-7 w-7 text-primary" />
                <h3 className="mt-3 text-xl font-bold uppercase">{v.t}</h3>
                <p className="mt-2 text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
