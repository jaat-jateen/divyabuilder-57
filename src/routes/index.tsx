import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle, Package, Truck, HardHat } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { business, fleet, materials, whatsappLink } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Divya Builders – Building Materials & Heavy Equipment Rental",
      "Cement, sand, aggregates, bricks, stone and steel, plus JCB, truck, tractor and crane rental for your construction project.",
    ),
  component: Index,
});

const services = [
  { icon: Package, title: "Building Materials Supply", text: "Cement, sand, aggregates, bricks, stone, steel and other essentials, delivered to your site.", to: "/materials" as const },
  { icon: Truck, title: "Heavy Equipment Rental", text: "JCBs, trucks, tractors and cranes available for excavation, transport and lifting.", to: "/equipment" as const },
  { icon: HardHat, title: "Construction Project Support", text: "Materials and machines coordinated together, so your work keeps moving on schedule.", to: "/why-us" as const },
];

function Index() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-navy-deep text-navy-foreground">
        <img src={hero} alt="Construction site with JCB, trucks and crane" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-20">
          <p className="font-semibold uppercase tracking-widest text-primary">Materials · Machinery · Site support</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-bold uppercase leading-[0.95] md:text-7xl">
            Building materials and heavy equipment, from one supplier
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-90">
            Divya Builders supplies construction materials and rents out JCBs, trucks, tractors and cranes for residential,
            commercial and infrastructure work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/materials" className="btn btn-primary">Explore Materials <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/equipment" className="btn btn-outline-light">Enquire About Rentals</Link>
          </div>
        </div>
      </section>

      <section className="hazard-stripe h-2" />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-2xl">
          <p className="font-semibold uppercase tracking-widest text-muted-foreground">What we do</p>
          <h2 className="mt-2 text-4xl font-bold uppercase text-navy md:text-5xl">Our services</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.title} to={s.to} className="group rounded-md border-t-4 border-primary bg-card p-7 shadow-sm transition-shadow hover:shadow-md">
              <s.icon className="h-9 w-9 text-navy" />
              <h3 className="mt-4 text-2xl font-bold uppercase">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:underline">Learn more <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-semibold uppercase tracking-widest text-primary">Our fleet</p>
              <h2 className="mt-2 text-4xl font-bold uppercase md:text-5xl">15 machines ready for hire</h2>
            </div>
            <Link to="/equipment" className="btn btn-primary">View fleet & enquire</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fleet.map((v) => (
              <div key={v.name} className="overflow-hidden rounded-md bg-navy-deep">
                <img src={v.image} alt={v.name} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
                <div className="flex items-center justify-between p-4">
                  <h3 className="text-xl font-bold uppercase">{v.name}</h3>
                  <span className="rounded-sm bg-primary px-2 py-1 font-display text-lg font-bold text-primary-foreground">×{v.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-semibold uppercase tracking-widest text-muted-foreground">Materials</p>
            <h2 className="mt-2 text-4xl font-bold uppercase text-navy md:text-5xl">Construction essentials</h2>
          </div>
          <Link to="/materials" className="btn btn-navy">All materials</Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {materials.map((m) => (
            <div key={m.name} className="group relative overflow-hidden rounded-md">
              <img src={m.image} alt={m.name} loading="lazy" width={944} height={704} className="aspect-square w-full object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep to-transparent p-3">
                <p className="font-display text-xl font-bold uppercase text-navy-foreground">{m.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold uppercase text-primary-foreground md:text-4xl">Need a price or want to check availability?</h2>
            <p className="mt-1 text-primary-foreground/80">Call or message us with your requirement and site location.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={business.phoneHref} className="btn btn-navy"><Phone className="h-4 w-4" /> Call now</a>
            <a href={whatsappLink("Hello Divya Builders, I'd like a price / availability.")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
