import { useState, type FormEvent } from "react";
import { serviceOptions, whatsappLink } from "@/lib/site";

export function EnquiryForm({ defaultService, title = "Send an enquiry" }: { defaultService?: string; title?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "New enquiry – Divya Builders website",
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Service: ${f.get("service")}`,
      `Location: ${f.get("location")}`,
      `Message: ${f.get("message") || "-"}`,
    ].join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-md border bg-card p-6 shadow-sm md:p-8">
      <h3 className="text-2xl font-bold uppercase text-navy">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill in your details and we'll reply on WhatsApp with availability and pricing.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Name
          <input name="name" required maxLength={80} className="field mt-1" />
        </label>
        <label className="text-sm font-medium">
          Phone number
          <input name="phone" required type="tel" pattern="[0-9+ ]{7,15}" className="field mt-1" />
        </label>
        <label className="text-sm font-medium">
          Service required
          <select name="service" defaultValue={defaultService ?? serviceOptions[0]} className="field mt-1">
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium">
          Site location
          <input name="location" required maxLength={120} className="field mt-1" />
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          Message
          <textarea
            name="message"
            rows={4}
            maxLength={1000}
            placeholder="Quantity, dates, duration of hire, or anything else we should know"
            className="field mt-1"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto">
        Send enquiry
      </button>
      {sent && <p className="mt-3 text-sm text-muted-foreground">WhatsApp opened with your enquiry — just press send.</p>}
    </form>
  );
}
