import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X, MessageCircle } from "lucide-react";
import { business, whatsappLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/materials", label: "Building Materials" },
  { to: "/equipment", label: "Equipment Rental" },
  { to: "/why-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-navy-deep text-navy-foreground shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary font-display text-xl font-bold text-primary-foreground">D</span>
          <span className="font-display text-2xl font-bold uppercase tracking-wide">Divya Builders</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium opacity-85 hover:opacity-100"
              activeProps={{ className: "text-primary opacity-100" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
          <a href={business.phoneHref} className="btn btn-primary py-2">
            <Phone className="h-4 w-4" /> Call now
          </a>
        </nav>
        <button className="lg:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-navy px-4 pb-4 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-3 font-medium" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <a href={business.phoneHref} className="btn btn-primary mt-2 w-full">
            <Phone className="h-4 w-4" /> Call {business.phone}
          </a>
        </nav>
      )}
      <div className="hazard-stripe h-1.5" />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold uppercase">Divya Builders</p>
          <p className="mt-3 text-sm opacity-75">
            Building materials supply and heavy equipment rental for residential, commercial and infrastructure work.
          </p>
        </div>
        <div>
          <p className="font-display text-lg font-semibold uppercase text-primary">Pages</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm opacity-85">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-primary">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-display text-lg font-semibold uppercase text-primary">Get in touch</p>
          <p className="mt-3 opacity-85">{business.address}</p>
          <p className="mt-2"><a href={business.phoneHref} className="hover:text-primary">{business.phone}</a></p>
          <p className="mt-1 opacity-85">{business.email}</p>
        </div>
      </div>
      <div className="border-t border-navy py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Divya Builders. All rights reserved.
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hello Divya Builders, I'd like to make an enquiry.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="btn btn-whatsapp fixed bottom-5 right-5 z-50 rounded-full p-4 shadow-lg"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function PageHeader({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />}
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-bold uppercase md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg opacity-85">{intro}</p>
      </div>
    </section>
  );
}
