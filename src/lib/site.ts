export const SITE = {
  name: "Residential Remodeling Insurance",
  domain: "residentialremodelinginsurance.com",
  url: "https://residentialremodelinginsurance.com",
  tagline: "Residential Remodeling Insurance",
  description:
    "Specialized insurance for residential remodeling contractors — GL with completed operations, workers' comp for remodeling crews, commercial auto, tools and equipment, CPL for lead and asbestos, and commercial umbrella. Licensed all 50 states. 15-minute quotes.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  legalName: "Contractors Choice Agency",
  address: {
    street: "12220 E Riggs Road Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8 am–5 pm MST",
  claimsSla: "Same-day claims reporting assistance",
  quoteSla: "Quotes in approximately 15 minutes",
  statesLicensed: 50,
} as const;

export const BRAND = {
  brandShort: "Residential Remodeling Insurance",
  brandSub: "Contractors Choice Agency",
  nicheShort: "remodeling",
  nicheCap: "Remodeling",
  nichePlural: "remodeling projects",
  nichePluralCap: "Remodeling Projects",
  operator: "remodeling contractor",
  operatorCap: "Remodeling Contractor",
  industry: "residential remodeling",
  industryCap: "Residential Remodeling",
  audience: "residential remodeling contractors",
  audienceCap: "Residential Remodeling Contractors",
  ownerTitle: "Licensed Insurance Agent",
  regionPill: "All 50 States",
  serviceSuffix: "for Remodeling Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Coverage Area", href: "/coverage" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability",
    short: "GL & Completed Ops",
    description:
      "Core protection for bodily injury, property damage, and completed-operations claims from your remodeling work.",
    icon: "ShieldCheck",
    keywords: [
      "general liability insurance for remodeling contractors",
      "residential remodeling GL",
      "completed operations coverage",
      "remodeling contractor liability",
    ],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Workers' Comp",
    description:
      "Mandatory coverage for wage replacement and medical benefits when crew members are injured on remodeling jobsites.",
    icon: "HardHat",
    keywords: [
      "workers compensation for remodeling contractors",
      "remodeling crew workers comp",
      "construction workers compensation",
      "remodeling payroll insurance",
    ],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto",
    short: "Commercial Auto",
    description:
      "Liability and physical damage coverage for the trucks, vans, and trailers your remodeling crews drive daily.",
    icon: "Truck",
    keywords: [
      "commercial auto insurance remodeling contractor",
      "contractor truck insurance",
      "remodeling vehicle coverage",
      "work truck insurance",
    ],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment",
    short: "Tools & Equipment",
    description:
      "Inland marine protection for power tools, hand tools, and specialty equipment against theft, damage, and loss at jobsites.",
    icon: "Wrench",
    keywords: [
      "tools and equipment insurance",
      "contractor equipment coverage",
      "remodeling tools theft insurance",
      "inland marine contractor",
    ],
  },
  {
    slug: "completed-operations",
    title: "Completed Operations",
    short: "Completed Ops",
    description:
      "Extended liability protection for claims arising after a remodeling project is finished — defects, water damage, and structural issues.",
    icon: "Award",
    keywords: [
      "completed operations insurance remodeling",
      "post-completion liability coverage",
      "defect claims remodeling",
      "remodeling completed operations",
    ],
  },
  {
    slug: "commercial-umbrella",
    title: "Commercial Umbrella",
    short: "Umbrella",
    description:
      "Excess liability limits above GL, auto, and employers liability to protect your remodeling business from catastrophic claims.",
    icon: "Umbrella",
    keywords: [
      "commercial umbrella remodeling contractor",
      "excess liability insurance",
      "umbrella policy contractor",
      "remodeling contractor umbrella",
    ],
  },
  {
    slug: "commercial-property",
    title: "Commercial Property",
    short: "Commercial Property",
    description:
      "Building and contents coverage for your office, shop, or storage facility against fire, theft, and weather damage.",
    icon: "Building2",
    keywords: [
      "commercial property insurance remodeling",
      "contractor office insurance",
      "remodeling business property",
      "contractor shop insurance",
    ],
  },
  {
    slug: "contractors-pollution-liability",
    title: "Contractors Pollution Liability",
    short: "CPL",
    description:
      "Specialized coverage for lead, asbestos, mold, and chemical exposure claims that standard GL explicitly excludes.",
    icon: "Droplets",
    keywords: [
      "contractors pollution liability remodeling",
      "CPL insurance lead asbestos",
      "mold coverage remodeling contractor",
      "environmental liability remodeling",
    ],
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export const LOCATIONS = [
  {
    slug: "texas",
    name: "Texas",
    region: "South Central",
    blurb:
      "Texas's booming housing market fuels demand for residential remodeling. We place GL, workers' comp, and CPL for remodeling contractors across Dallas-Fort Worth, Houston, Austin, and San Antonio.",
  },
  {
    slug: "california",
    name: "California",
    region: "Pacific Coast",
    blurb:
      "California remodeling contractors face strict licensing requirements and significant CPL exposure in older housing stock. We specialize in placing coverage for CA remodelers across the Bay Area, LA, and San Diego.",
  },
  {
    slug: "florida",
    name: "Florida",
    region: "Southeast",
    blurb:
      "Florida's active housing market and storm-driven renovation demand create a strong remodeling sector. We write GL, workers' comp, and commercial auto for remodeling contractors statewide.",
  },
  {
    slug: "southeast",
    name: "Southeast",
    region: "Multi-State",
    blurb:
      "From Atlanta to Charlotte to Nashville, Southeast remodeling markets are growing rapidly. We write remodeling contractor insurance across GA, NC, SC, TN, AL, and MS.",
  },
  {
    slug: "midwest",
    name: "Midwest",
    region: "Multi-State",
    blurb:
      "Midwest remodeling markets feature older housing stock with significant CPL and completed-operations exposure. We write coverage for remodelers in OH, IL, MI, IN, WI, MN, and MO.",
  },
  {
    slug: "northeast",
    name: "Northeast",
    region: "Multi-State",
    blurb:
      "Northeast remodelers work in some of the oldest housing stock in the country — pre-1950 homes with lead and asbestos exposure. We place coverage for NY, NJ, CT, MA, PA, and other Northeast states.",
  },
  {
    slug: "mountain-west",
    name: "Mountain West",
    region: "Multi-State",
    blurb:
      "Mountain West remodeling demand is driven by a growing population and active housing markets in CO, AZ, NV, UT, and NM. We write remodeling contractor insurance across the region.",
  },
  {
    slug: "pacific-northwest",
    name: "Pacific Northwest",
    region: "Multi-State",
    blurb:
      "Pacific Northwest remodeling markets in WA and OR are active and growing. We place GL, workers' comp, and CPL for remodeling contractors from Seattle to Portland.",
  },
] as const;

export type LocationSlug = (typeof LOCATIONS)[number]["slug"];

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Remodeling-specialist agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "Same-day claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Remodeling contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring trade contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We did a whole-home renovation and 18 months later the homeowner claimed water intrusion from a window we'd reflashed. The completed-ops coverage defended and paid — no gap, no fight. This agency builds programs with the tail that actually matters.",
    name: "Mark D.",
    role: "Remodeling Contractor",
    location: "Texas",
  },
  {
    quote:
      "Got our GL, workers' comp, and CPL all placed in one call. Josh understood our exposure on pre-1978 homes and found us solid coverage at a competitive price.",
    name: "Sarah T.",
    role: "Kitchen & Bath Remodeler",
    location: "Ohio",
  },
  {
    quote:
      "The completed-operations coverage piece was what I needed explained. They took the time and got us a policy that actually protects us after projects are done.",
    name: "Carlos M.",
    role: "Whole-Home Renovation Contractor",
    location: "Florida",
  },
] as const;
