/**
 * Clean monochrome/brand SVG client marks for the marquee.
 * Recreated as sharp vector logos (not the low-res reference screenshots).
 */
const fs = require("fs");
const path = require("path");

const dir = path.join("public", "clients");
fs.mkdirSync(dir, { recursive: true });

const ink = "#0c4a8c";
const dark = "#1a1a1a";

function wordmark(name, opts = {}) {
  const {
    w = 220,
    h = 64,
    size = 22,
    weight = 700,
    tracking = 0,
    color = ink,
    sub = "",
    subSize = 9,
  } = opts;
  const subBlock = sub
    ? `<text x="${w / 2}" y="${h * 0.78}" text-anchor="middle" fill="${color}" font-family="Arial, Helvetica, sans-serif" font-size="${subSize}" font-weight="600" letter-spacing="2">${sub}</text>`
    : "";
  const y = sub ? h * 0.42 : h * 0.58;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${name}">
  <text x="${w / 2}" y="${y}" text-anchor="middle" fill="${color}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="${weight}" letter-spacing="${tracking}">${name}</text>
  ${subBlock}
</svg>
`;
}

const logos = {
  "asg-aviation.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 72" role="img" aria-label="ASG Aviation">
  <text x="120" y="34" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="800" letter-spacing="1">ASG</text>
  <path d="M148 18 L162 10 L158 22 Z" fill="${ink}"/>
  <text x="120" y="56" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="9" font-weight="600" letter-spacing="2.2">AVIATION SERVICES GROUP</text>
</svg>`,

  "mars-overseas.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 72" role="img" aria-label="Mars Overseas">
  <text x="120" y="36" text-anchor="middle" fill="${ink}" font-family="Arial Black, Arial, sans-serif" font-size="30" font-weight="900" letter-spacing="1">MARS</text>
  <ellipse cx="128" cy="30" rx="34" ry="9" fill="none" stroke="${ink}" stroke-width="2"/>
  <text x="150" y="56" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="10" font-weight="700" letter-spacing="2">OVERSEAS</text>
</svg>`,

  "bakcell.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 64" role="img" aria-label="Bakcell">
  <path d="M18 40 C22 22 38 12 48 18 C40 20 34 30 36 42 C28 38 22 40 18 40 Z" fill="#e31c23"/>
  <path d="M34 18 C44 8 58 14 54 28 C50 20 42 18 34 18 Z" fill="#e31c23"/>
  <text x="68" y="40" fill="${dark}" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700">bakcell</text>
</svg>`,

  "rabitebank.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 64" role="img" aria-label="Rabitəbank">
  <path d="M12 12 H40 Q52 12 52 28 Q52 44 36 48 H12 Z M24 24 H36 Q40 24 40 30 Q40 36 34 36 H24 Z" fill="#00a3e0"/>
  <text x="68" y="42" fill="${dark}" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700">Rabitəbank</text>
</svg>`,

  "azertexnolayn.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 80" role="img" aria-label="Azertexnolayn">
  <circle cx="130" cy="28" r="18" fill="none" stroke="${ink}" stroke-width="3"/>
  <circle cx="130" cy="28" r="11" fill="none" stroke="${ink}" stroke-width="2"/>
  <rect x="118" y="10" width="24" height="10" rx="1" fill="${ink}"/>
  <rect x="126" y="4" width="8" height="8" fill="${ink}"/>
  <text x="130" y="28" text-anchor="middle" dominant-baseline="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="9" font-weight="800">ATL</text>
  <text x="130" y="66" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="800" letter-spacing="1.5">AZERTEXNOLAYN</text>
</svg>`,

  "saffron.svg": wordmark("SAFFRON", {
    w: 240,
    h: 72,
    size: 26,
    weight: 500,
    tracking: 4,
    sub: "RESTAURANT GROUP",
    subSize: 9,
  }),

  "ferrari.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 64" role="img" aria-label="Ferrari">
  <text x="20" y="42" fill="${dark}" font-family="Georgia, Times, serif" font-size="32" font-weight="700" font-style="italic">Ferrari</text>
  <rect x="18" y="14" width="72" height="3" fill="${dark}"/>
</svg>`,

  "socar.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 64" role="img" aria-label="SOCAR">
  <path d="M22 48 C18 34 24 22 32 14 C30 26 36 34 34 48 Z" fill="#e31c23"/>
  <path d="M34 48 C30 30 40 18 46 12 C44 24 50 34 48 48 Z" fill="#009639"/>
  <path d="M46 48 C42 32 52 20 58 14 C56 26 62 36 60 48 Z" fill="#00aeef"/>
  <text x="78" y="42" fill="${dark}" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="800" letter-spacing="1">SOCAR</text>
</svg>`,

  "ask-arena.svg": wordmark("ask arena", {
    w: 220,
    h: 64,
    size: 26,
    weight: 800,
    color: dark,
  }),

  "absheron-hotel-group.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 72" role="img" aria-label="Absheron Hotel Group">
  <text x="130" y="34" text-anchor="middle" fill="${ink}" font-family="Georgia, Times, serif" font-size="30" font-weight="700" letter-spacing="2">AHG</text>
  <text x="130" y="56" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="9" font-weight="600" letter-spacing="2.4">ABSHERON HOTEL GROUP</text>
</svg>`,

  "technol.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 64" role="img" aria-label="Technol">
  <text x="110" y="42" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="800" font-style="italic" letter-spacing="1">Technol</text>
</svg>`,

  "azercosmos.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 64" role="img" aria-label="Azercosmos">
  <path d="M18 40 C28 18 48 14 58 28" fill="none" stroke="#0082c8" stroke-width="3" stroke-linecap="round"/>
  <path d="M16 32 C30 12 52 10 62 24" fill="none" stroke="#0082c8" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M20 48 C34 24 54 20 64 34" fill="none" stroke="#0082c8" stroke-width="2" stroke-linecap="round"/>
  <text x="78" y="40" fill="${dark}" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="600">azercosmos</text>
</svg>`,

  "azermaya.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 72" role="img" aria-label="Azermaya">
  <path d="M28 42 L36 18 L44 42 Z" fill="none" stroke="#e31c23" stroke-width="2.5"/>
  <path d="M18 44 Q28 28 36 42" fill="none" stroke="#2e7d32" stroke-width="2.5"/>
  <path d="M36 42 Q44 28 54 44" fill="none" stroke="#2e7d32" stroke-width="2.5"/>
  <text x="36" y="58" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="8">1973</text>
  <text x="78" y="42" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="800">azermaya</text>
</svg>`,

  "baku-hospitality-group.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 72" role="img" aria-label="Baku Hospitality Group">
  <text x="130" y="34" text-anchor="middle" fill="${ink}" font-family="Georgia, Times, serif" font-size="28" font-weight="700">Baku.</text>
  <text x="130" y="56" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="9" font-weight="600" letter-spacing="2.5">HOSPITALITY GROUP</text>
</svg>`,

  "lezzet.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 64" role="img" aria-label="Ləzzət">
  <ellipse cx="100" cy="32" rx="78" ry="22" fill="#d0d0d0"/>
  <text x="100" y="38" text-anchor="middle" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="800" letter-spacing="2">LƏZZƏT</text>
</svg>`,

  "nati.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 64" role="img" aria-label="Nati">
  <path d="M16 40 C20 16 48 10 70 18 C90 10 120 14 140 28 C150 36 148 48 130 50 C100 54 60 52 36 48 C24 46 14 48 16 40 Z" fill="#cfcfcf"/>
  <text x="78" y="40" text-anchor="middle" fill="#fff" font-family="Georgia, Times, serif" font-size="26" font-style="italic" font-weight="700">Nati</text>
</svg>`,

  "bmu.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 72" role="img" aria-label="BMU">
  <rect x="8" y="14" width="44" height="44" rx="4" fill="#00bcd4"/>
  <circle cx="30" cy="28" r="4" fill="#fff"/>
  <circle cx="22" cy="36" r="4" fill="#fff"/>
  <circle cx="38" cy="36" r="4" fill="#fff"/>
  <circle cx="30" cy="44" r="4" fill="#fff"/>
  <line x1="60" y1="18" x2="60" y2="54" stroke="#999" stroke-width="1"/>
  <text x="74" y="38" fill="${dark}" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="800">BMU</text>
  <text x="74" y="56" fill="${dark}" font-family="Arial, Helvetica, sans-serif" font-size="8" font-weight="600" letter-spacing="1">BAKI MÜHƏNDİSLİK UNİVERSİTETİ</text>
</svg>`,

  "azza.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 72" role="img" aria-label="Azza Gastronom">
  <rect width="200" height="72" rx="4" fill="#4a2c0a"/>
  <rect x="88" y="8" width="24" height="12" rx="2" fill="#d4a017"/>
  <text x="100" y="42" text-anchor="middle" fill="#d4a017" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="800">azza</text>
  <line x1="56" y1="50" x2="144" y2="50" stroke="#d4a017" stroke-width="1"/>
  <text x="100" y="62" text-anchor="middle" fill="#d4a017" font-family="Arial, Helvetica, sans-serif" font-size="8" font-weight="600" letter-spacing="2">GASTRONOM</text>
</svg>`,

  "lukoil.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 64" role="img" aria-label="LUKOIL">
  <rect x="8" y="12" width="40" height="40" fill="#e31c23"/>
  <path d="M18 20 V44 H28 V34 H34 V20 H28 V28 H22 V20 Z" fill="#fff"/>
  <text x="60" y="42" fill="${dark}" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="800" letter-spacing="1">LUKOIL</text>
</svg>`,

  "port-baku-walk.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 80" role="img" aria-label="Port Baku Walk">
  <path d="M70 28 V14 H78 V28 H86 V10 H94 V28 H102 V16 H110 V32" fill="none" stroke="${ink}" stroke-width="2"/>
  <path d="M66 34 Q110 40 154 34" fill="none" stroke="${ink}" stroke-width="1.5"/>
  <path d="M70 38 Q110 44 150 38" fill="none" stroke="${ink}" stroke-width="1.5"/>
  <text x="110" y="58" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2">PORT BAKU</text>
  <text x="110" y="72" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="600" letter-spacing="3">WALK</text>
</svg>`,

  "azercell-mark.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 64" role="img" aria-label="Azercell">
  <path d="M28 44 C12 44 10 20 28 18 C46 16 48 36 34 38 C42 42 38 48 28 44 Z" fill="none" stroke="#7ac143" stroke-width="4" stroke-linecap="round"/>
  <text x="64" y="42" fill="${dark}" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700">Azercell</text>
</svg>`,

  // Teal geometric mark from references — stylized M / open form (kept as icon + name plate)
  "matrix-mark.svg": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 64" role="img" aria-label="Client mark">
  <g transform="translate(68,8)">
    <path d="M4 4 H14 V36 L24 48 L34 36 V4 H44 V40 L24 60 L4 40 Z" fill="#00a8b5"/>
    <rect x="18" y="4" width="4" height="32" fill="#fff" opacity="0.35"/>
    <rect x="40" y="4" width="8" height="36" fill="#7ed4db"/>
  </g>
</svg>`,
};

for (const [file, svg] of Object.entries(logos)) {
  fs.writeFileSync(path.join(dir, file), svg);
  console.log("wrote", file);
}

console.log("done", Object.keys(logos).length);
