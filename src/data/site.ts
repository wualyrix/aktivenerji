export const site = {
  name: "Aktiv Enerji",
  tagline: "Electrical Infrastructure. Built With You.",
  description:
    "Aktiv Enerji designs, builds, tests and maintains critical electrical infrastructure for industrial, commercial and utility projects — from Poland and Azerbaijan.",
  email: "info@aktivenerji.az",
  phone: "+994 50 275 64 06",
  phoneHref: "tel:+994502756406",
  whatsapp: "https://wa.me/994502756406",
  supportHours: "10:00 – 18:00, every day",
  social: {
    facebook: "https://www.facebook.com/aktivenerji.az",
    instagram: "https://www.instagram.com/aktivenerji.az/",
  },
  offices: [
    {
      label: "Poland",
      lines: ["ul. Bukowińska 22, Lok. 53", "02-703 Warszawa, Poland"],
    },
    {
      label: "Azerbaijan",
      lines: ["40 Jafar Jabbarli", "Caspian Business Center, AZ 1065"],
    },
  ],
  stats: [
    { value: "10+", label: "Years of experience" },
    { value: "20+", label: "Specialists" },
    { value: "150,666", label: "m² project area delivered" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "high-voltage-electrical-systems",
    title: "High Voltage Electrical Systems",
    short: "Design and execution from 1000 V to 6/10/35 kV.",
    summary:
      "End-to-end high-voltage work for substations, distribution and transmission assets — engineered, installed, tested and formally handed over.",
    points: [
      "Transformer substation construction",
      "High-voltage switchgear installation",
      "Overhead and underground HV lines",
      "Project design and implementation",
      "Laboratory inspection with accredited handover",
      "Formal delivery to relevant authorities where required",
    ],
  },
  {
    slug: "laboratory-center-services",
    title: "Laboratory Center Services",
    short: "Accredited testing and diagnostics from 0.4 kV to 35 kV.",
    summary:
      "Our in-house Laboratory Center diagnoses and tests electrical equipment across substations, plants, offices and production sites — with mobile labs and modern instrumentation.",
    points: [
      "Cable line testing (VLF, DC hipot)",
      "Fault location (TDR, SIM, DECAY, ICE)",
      "Tan Delta and partial discharge diagnostics",
      "Power, voltage and current transformer testing",
      "Transformer oil testing",
      "Grounding resistance and soil resistivity measurement",
      "Switchgear, insulator, motor and generator testing",
    ],
  },
  {
    slug: "low-voltage-power-distribution",
    title: "Low Voltage Power Distribution",
    short: "Panels, lighting, busbar and LV cable systems.",
    summary:
      "Complete low-voltage distribution design and installation, verified through our laboratory and documented for safe handover.",
    points: [
      "LV distribution panels",
      "Indoor and outdoor lighting",
      "Busbar systems",
      "Cable laying and routing",
      "Power factor compensation",
      "Laboratory verification of completed works",
    ],
  },
  {
    slug: "low-current-and-it-systems",
    title: "Low-Current & IT Systems",
    short: "FO, data, CCTV, fire alarm and building networks.",
    summary:
      "Design, installation and laboratory-backed testing of low-current signal systems and information technology infrastructure.",
    points: [
      "Fire detection and alarm",
      "Telephone and data networks",
      "FO, SMATV, IP and CCTV systems",
      "Access, parking and intercom systems",
      "Nurse call and hospital systems",
      "Conference, PA and presentation systems",
      "Server, network and SCADA-related works",
    ],
  },
  {
    slug: "uninterruptible-power-systems",
    title: "Uninterruptible Power Systems",
    short: "Generators, UPS and resilient power for critical sites.",
    summary:
      "Design and delivery of uninterrupted power for production facilities and offices — from generators and UPS to automated transfer systems.",
    points: [
      "Generator design and installation",
      "UPS system installation",
      "Sustainable / backup power panel design",
      "Automation of transfer and supply logic",
      "Laboratory services for verification",
    ],
  },
  {
    slug: "automation-systems",
    title: "Automation Systems",
    short: "Smart building, energy control and SCADA.",
    summary:
      "Automation, smart-home and remote-control systems with testing, documentation and registration of completed works.",
    points: [
      "Smart home systems",
      "Building and lighting automation",
      "Energy control systems",
      "SCADA integration",
      "Laboratory verification",
    ],
  },
  {
    slug: "grounding-and-lightning-protection",
    title: "Grounding & Lightning Protection",
    short: "Earthing and lightning systems designed for real soil and risk.",
    summary:
      "Soil resistivity measurement, earthing and lightning protection design, installation, official testing and documentation.",
    points: [
      "Lightning protection design and installation",
      "Earthing system design and installation",
      "Soil-specific resistivity measurement",
      "Official testing and documentation",
    ],
  },
];

export type Project = {
  title: string;
  summary: string;
  location: string;
  solution: string;
  metric?: { value: string; label: string };
};

export const projects: Project[] = [
  {
    title: "Azercell Lighting & Cabling",
    summary: "Lighting and cable installation supporting telecom facility operations.",
    location: "Azerbaijan",
    solution: "Low Voltage Power Distribution",
    metric: { value: "Azercell", label: "Telecom infrastructure partner" },
  },
  {
    title: "Nakhchivan Server Room",
    summary: "Server room power distribution and supporting electrical works.",
    location: "Nakhchivan, Azerbaijan",
    solution: "Low Voltage Power Distribution",
    metric: { value: "Critical", label: "IT power environment" },
  },
  {
    title: "Azercosmos Lightning Protection",
    summary: "Lightning transmission system delivery for space-industry facilities.",
    location: "Azerbaijan",
    solution: "Grounding & Lightning Protection",
    metric: { value: "Azercosmos", label: "National space agency site" },
  },
  {
    title: "McDonald’s Distribution & Cabling",
    summary: "Distribution boards, cable trays and assembly across restaurant fit-outs.",
    location: "Azerbaijan",
    solution: "Low Voltage Power Distribution",
    metric: { value: "Multi-site", label: "Retail electrical packages" },
  },
  {
    title: "Rahat Market Electrical Works",
    summary: "Cable trays, distribution boards and fit-out electrical packages.",
    location: "Azerbaijan",
    solution: "Low Voltage Power Distribution",
  },
  {
    title: "Nasosnu Medical Station",
    summary: "Lighting plus low-current and IT systems for a medical facility.",
    location: "Azerbaijan",
    solution: "Low-Current & IT Systems",
  },
  {
    title: "SOCAR & Industrial Clients",
    summary: "Electrical packages delivered for energy and industrial operators.",
    location: "Azerbaijan",
    solution: "High Voltage Electrical Systems",
    metric: { value: "SOCAR", label: "Energy sector reference" },
  },
  {
    title: "European Center — Poland",
    summary: "Warsaw-based European presence supporting regional coordination.",
    location: "Warsaw, Poland",
    solution: "Company Footprint",
    metric: { value: "PL + AZ", label: "Two operating centers" },
  },
];

export const clients = [
  "Azercell",
  "Bakcell",
  "SOCAR",
  "LUKOIL",
  "Azercosmos",
  "McDonald's",
  "Coca-Cola",
  "Ferrari Center",
  "Port Baku Mall",
  "ASG Aviation",
  "Rabitebank",
  "Technol",
];

export const certificates = [
  "Azerbaijan Ministry of Economy License",
  "Occupational Health & Safety",
  "Safe Work & Mining Supervision",
  "IVP and Installer Training",
  "Sonel Training",
  "Accreditation Attestation",
  "Calibration Certificates",
];

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];
