// Edit this file to update business details, materials and fleet availability.
import cement from "@/assets/cement.jpg";
import aggregates from "@/assets/aggregates.jpg";
import steel from "@/assets/steel.jpg";
import bricks from "@/assets/bricks.jpg";
import stone from "@/assets/stone.jpg";
import jcb from "@/assets/jcb.jpg";
import truck from "@/assets/truck.jpg";
import tractor from "@/assets/tractor.jpg";
import crane from "@/assets/crane.jpg";

export const business = {
  name: "Divya Builders",
  phone: "+91 00000 00000", // placeholder
  phoneHref: "tel:+910000000000", // placeholder
  whatsapp: "910000000000", // placeholder, digits only with country code
  email: "info@example.com", // placeholder
  address: "[Business address – to be added]",
  hours: [
    { day: "Monday – Saturday", time: "[Opening hours – to be added]" },
    { day: "Sunday", time: "[To be confirmed]" },
  ],
  mapQuery: "India", // replace with exact address for the map
};

export function whatsappLink(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const materials = [
  { name: "Cement", image: cement, desc: "OPC and PPC cement in bags for concrete, plaster and masonry work." },
  { name: "Sand", image: aggregates, desc: "Sand for concreting, plastering and brickwork, supplied in the quantity you need." },
  { name: "Aggregates", image: aggregates, desc: "Crushed stone aggregates in common sizes for concrete and road base." },
  { name: "Bricks", image: bricks, desc: "Clay bricks for walls and structural masonry, delivered to site." },
  { name: "Stone", image: stone, desc: "Building stone and blocks for foundations, walls and landscaping." },
  { name: "Steel", image: steel, desc: "TMT reinforcement bars in standard diameters for RCC work." },
];

export const otherEssentials = ["Binding wire", "Concrete blocks", "Gravel", "Murram / filling soil", "Other items on request"];

export const fleet = [
  {
    name: "JCB Backhoe Loaders",
    count: 3,
    image: jcb,
    desc: "For excavation, trenching, earthmoving, loading and general site preparation.",
    uses: ["Foundation digging", "Trenching", "Site levelling", "Loading"],
  },
  {
    name: "Trucks",
    count: 5,
    image: truck,
    desc: "For transporting sand, aggregates, debris and other construction loads.",
    uses: ["Material transport", "Debris removal", "Bulk delivery"],
  },
  {
    name: "Tractors",
    count: 3,
    image: tractor,
    desc: "With trolleys for moving bricks, sand and materials around the site.",
    uses: ["On-site material movement", "Short-distance haulage", "Site support"],
  },
  {
    name: "Cranes",
    count: 4,
    image: crane,
    desc: "For lifting and handling heavy materials. Suitability depends on load and site conditions.",
    uses: ["Lifting steel", "Material handling", "Placing heavy loads"],
  },
];

export const serviceOptions = [
  "Building materials quotation",
  "JCB rental",
  "Truck rental",
  "Tractor rental",
  "Crane rental",
  "Other",
];
