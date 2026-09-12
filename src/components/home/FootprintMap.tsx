export function FootprintMap() {
  return (
    <div className="footprint">
      <div className="footprint__intro">
        <p className="eyebrow on-dark">Where we operate</p>
        <h2>International footprint</h2>
        <p>
          Two operating centers — Warsaw for European coordination, Baku for
          regional delivery — one partner for electrical infrastructure.
        </p>
      </div>

      <div className="footprint__stage" aria-hidden="true">
        <svg
          className="footprint__globe"
          viewBox="0 0 800 420"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="ocean" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#1a6bb5" />
              <stop offset="100%" stopColor="#062847" />
            </radialGradient>
            <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9ec4e8" />
              <stop offset="100%" stopColor="#5a8fbf" />
            </linearGradient>
          </defs>

          <ellipse cx="400" cy="210" rx="310" ry="168" fill="url(#ocean)" />
          <ellipse
            cx="400"
            cy="210"
            rx="310"
            ry="168"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
          />

          {/* Meridians / parallels */}
          {[0, 1, 2, 3, 4].map((i) => (
            <ellipse
              key={`m-${i}`}
              cx="400"
              cy="210"
              rx={60 + i * 55}
              ry="168"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <ellipse
              key={`p-${i}`}
              cx="400"
              cy={90 + i * 80}
              rx="310"
              ry={18 + Math.abs(2 - i) * 8}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
            />
          ))}

          {/* Simplified land blobs — Europe / Caucasus focus */}
          <path
            fill="url(#land)"
            opacity="0.88"
            d="M270 110c40-28 95-34 140-18 30 10 52 36 58 66 4 22-8 40-26 48-16 8-26 22-18 38 10 20 36 30 58 28 18-2 28 12 22 28-8 22-34 34-58 36-40 4-82-14-104-44-24-32-30-78-12-114 8-16 6-42 -60-68z"
          />
          <path
            fill="url(#land)"
            opacity="0.82"
            d="M450 155c28-10 62-4 84 18 18 18 24 46 12 68-10 18-28 28-46 30-14 2-20 16-10 26 14 14 40 12 58 2 20-10 42 0 48 20 6 22-8 44-28 52-34 14-76 6-104-18-26-22-40-58-34-92 6-34 20-58 20-106z"
          />
          <path
            fill="url(#land)"
            opacity="0.78"
            d="M510 240c34 6 68 28 78 58 8 22-2 44-22 52-22 10-48 6-66-6-14-10-32-6-38 10-6 14 2 30 16 36 20 10 16 32-6 38-30 8-64-8-82-32-18-24-18-58 0-82 20-28 52-42 142-74z"
          />

          {/* Poland marker ~52N 21E */}
          <g className="footprint__pin" transform="translate(365 148)">
            <circle r="18" className="footprint__pulse" />
            <circle r="7" fill="#f15a22" />
            <circle r="3" fill="#fff" />
          </g>
          {/* Azerbaijan marker ~40N 49E */}
          <g className="footprint__pin" transform="translate(498 198)">
            <circle r="18" className="footprint__pulse" />
            <circle r="7" fill="#f15a22" />
            <circle r="3" fill="#fff" />
          </g>
        </svg>

        <ul className="footprint__legend">
          <li>
            <span className="footprint__dot" />
            <div>
              <strong>Poland</strong>
              <span>Warsaw — European center</span>
            </div>
          </li>
          <li>
            <span className="footprint__dot" />
            <div>
              <strong>Azerbaijan</strong>
              <span>Baku — Regional operations</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
