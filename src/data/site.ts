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
  image: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "high-voltage-electrical-systems",
    title: "High Voltage Electrical Systems",
    short: "Design and execution from 1000 V to 6/10/35 kV.",
    summary:
      "End-to-end high-voltage work for substations, distribution and transmission assets — engineered, installed, tested and formally handed over.",
    image: "/services/high-voltage-electrical-systems.jpg",
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
    image: "/services/laboratory-center-services.jpg",
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
    image: "/services/low-voltage-power-distribution.jpg",
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
    image: "/services/low-current-and-it-systems.jpg",
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
    image: "/services/uninterruptible-power-systems.jpg",
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
    image: "/services/automation-systems.jpg",
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
    image: "/services/grounding-and-lightning-protection.jpg",
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

export type Certificate = {
  title: string;
  summary: string;
  category: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    title: "Ministry of Economy — Construction License",
    summary: "License for construction and installation works requiring permits.",
    category: "License",
    image: "/certificates/license-construction.jpg",
  },
  {
    title: "Ministry of Economy — Design License",
    summary: "Authorization for design of buildings and installations.",
    category: "License",
    image: "/certificates/license-design.jpg",
  },
  {
    title: "Ministry of Economy — Diagnostics License",
    summary:
      "Diagnostics and technical inspection at high-potential facilities.",
    category: "License",
    image: "/certificates/license-diagnostics.jpg",
  },
  {
    title: "Trademark Registration",
    summary: "Official Aktiv Enerji trademark certificate (class 37).",
    category: "Trademark",
    image: "/certificates/trademark.jpg",
  },
  {
    title: "Accreditation Attestation — ISO/IEC 17025",
    summary: "Testing laboratory accreditation by Azerbaijan Accreditation Center.",
    category: "Accreditation",
    image: "/certificates/accreditation.jpg",
  },
  {
    title: "Occupational Health & Safety",
    summary: "AZERICERT training on labor protection and safety technique.",
    category: "Training",
    image: "/certificates/ohs-azericert.jpg",
  },
  {
    title: "Safe Work & Mining Supervision",
    summary:
      "Industrial safety training under the Ministry of Emergency Situations.",
    category: "Training",
    image: "/certificates/safe-work-mining.jpg",
  },
  {
    title: "IVP & Installer Training",
    summary: "IndigoVision IVP & Installer Training certificate of completion.",
    category: "Training",
    image: "/certificates/training-ivp.jpg",
  },
  {
    title: "Sonel MPI-540-PV Training",
    summary: "Operation of Sonel MPI-540-PV — Sonel S.A. training certificate.",
    category: "Training",
    image: "/certificates/training-sonel.jpg",
  },
  {
    title: "Calibration — Fluke 1621",
    summary: "Earth ground tester calibration by Libra Calibration Center.",
    category: "Calibration",
    image: "/certificates/cal-fluke-1621.jpg",
  },
  {
    title: "Calibration — Fluke VT04",
    summary: "Infrared visual camera calibration by Libra Calibration Center.",
    category: "Calibration",
    image: "/certificates/cal-fluke-vt04.jpg",
  },
  {
    title: "Calibration — Fluke 1587",
    summary: "Multimeter calibration by Azerbaijan Metrology Institute.",
    category: "Calibration",
    image: "/certificates/cal-fluke-1587.jpg",
  },
  {
    title: "Calibration — AII-70",
    summary: "Voltage transformer calibration by Azerbaijan Metrology Institute.",
    category: "Calibration",
    image: "/certificates/cal-aii-70.jpg",
  },
  {
    title: "Calibration — Megger BM",
    summary: "Digital insulation tester calibration by Azerbaijan Metrology Institute.",
    category: "Calibration",
    image: "/certificates/cal-megger-bm.jpg",
  },
  {
    title: "Calibration — Microohmmeter AMTJ-2516C",
    summary: "Microohmmeter calibration by Azerbaijan Metrology Institute.",
    category: "Calibration",
    image: "/certificates/cal-mikroohmmeter.jpg",
  },
  {
    title: "Calibration — Sonel MPI-540",
    summary: "Multifunctional tester calibration by Azerbaijan Metrology Institute.",
    category: "Calibration",
    image: "/certificates/cal-sonel-mpi540.jpg",
  },
];

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];
