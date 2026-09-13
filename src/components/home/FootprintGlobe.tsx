export function FootprintGlobe() {
  return (
    <div className="footprint__map">
      <svg
        className="footprint__globe"
        viewBox="0 0 480 480"
        role="img"
        aria-label="Static globe highlighting Poland and Azerbaijan"
      >
        <defs>
          <radialGradient id="globe-sphere" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#1a6bb8" />
            <stop offset="45%" stopColor="#0c4a8c" />
            <stop offset="100%" stopColor="#06284f" />
          </radialGradient>
          <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
            <stop offset="55%" stopColor="rgba(12,74,140,0)" />
            <stop offset="78%" stopColor="rgba(12,74,140,0.35)" />
            <stop offset="100%" stopColor="rgba(241,90,34,0.18)" />
          </radialGradient>
          <radialGradient id="globe-shine" cx="32%" cy="28%" r="35%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <linearGradient id="globe-land" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7eb3e0" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3d7eb8" stopOpacity="0.35" />
          </linearGradient>
          <clipPath id="globe-clip">
            <circle cx="240" cy="240" r="168" />
          </clipPath>
          <filter id="globe-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>

        <circle cx="240" cy="240" r="210" fill="url(#globe-glow)" />
        <circle cx="240" cy="248" r="168" fill="rgba(0,0,0,0.22)" />
        <circle cx="240" cy="240" r="168" fill="url(#globe-sphere)" />

        <g clipPath="url(#globe-clip)" opacity="0.55">
          {[
            -120, -80, -40, 0, 40, 80, 120,
          ].map((y) => (
            <ellipse
              key={`lat-${y}`}
              cx="240"
              cy={240 + y * 0.85}
              rx={Math.max(28, 168 * Math.cos((y / 168) * (Math.PI / 2)))}
              ry="14"
              fill="none"
              stroke="rgba(180,220,255,0.22)"
              strokeWidth="1"
            />
          ))}
          {[-90, -45, 0, 45, 90].map((x) => (
            <ellipse
              key={`lon-${x}`}
              cx={240 + x * 0.15}
              cy="240"
              rx={28 + Math.abs(x) * 0.12}
              ry="168"
              fill="none"
              stroke="rgba(180,220,255,0.16)"
              strokeWidth="1"
            />
          ))}
        </g>

        <g clipPath="url(#globe-clip)" fill="url(#globe-land)">
          {/* stylized Europe / W Asia facing camera */}
          <path d="M168 148c18-22 42-34 68-36 22-2 40 6 58 18 14 10 28 14 44 10 12-3 26 2 34 14 6 10 4 24-4 34-10 12-8 28 2 38 8 8 10 22 2 32-10 14-28 18-44 16-18-2-34 8-42 24-6 12-20 18-34 14-16-4-24-20-22-36 2-14-6-28-18-36-14-10-22-26-16-42 4-10 8-16 14-20z" />
          <path d="M250 210c16-4 34-2 48 8 12 8 28 10 40 4 14-6 30-2 38 12 6 10 4 24-6 32-12 10-14 28-4 40 6 8 4 20-4 26-12 8-28 6-38-4-12-12-30-14-44-6-16 8-34 2-42-12-8-14-4-32 8-42 10-8 12-22 4-32-4-6 0-14 8-18z" />
          <path d="M150 250c20-8 42-4 58 10 10 8 26 10 38 4 8-4 20-2 26 6 8 12 2 28-10 34-14 8-22 24-16 40 4 10-2 22-14 26-14 4-28-4-32-18-4-12-16-20-28-18-14 2-28-8-32-22-4-14 4-30 16-38 8-6 12-16 8-24-2-6 4-12 14-14z" />
          <path
            d="M300 300c18-10 40-8 56 4 10 8 24 8 34 0 10-8 26-6 34 6 6 10 2 24-8 30-12 8-16 24-8 36 4 6 2 16-6 20-12 6-26 2-34-8-10-12-28-14-40-4-8 6-20 4-26-4-8-10-4-26 6-34 8-6 10-18 4-26-4-6 2-14 12-16z"
            opacity="0.7"
          />
        </g>

        <circle cx="240" cy="240" r="168" fill="url(#globe-shine)" />
        <circle
          cx="240"
          cy="240"
          r="168"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="2"
        />

        {/* connection arc Warsaw → Baku */}
        <path
          d="M208 168 C 236 148, 278 168, 292 214"
          fill="none"
          stroke="#f15a22"
          strokeWidth="2"
          strokeDasharray="5 6"
          opacity="0.85"
          filter="url(#globe-soft)"
        />

        {/* Poland — Warsaw */}
        <g className="footprint__marker">
          <circle cx="208" cy="168" r="16" fill="rgba(241,90,34,0.18)" />
          <circle cx="208" cy="168" r="7" fill="#f15a22" />
          <circle cx="208" cy="168" r="3" fill="#fff" />
          <g transform="translate(208 134)">
            <rect
              x="-46"
              y="-16"
              width="92"
              height="28"
              rx="14"
              fill="rgba(8,53,102,0.92)"
              stroke="rgba(255,255,255,0.2)"
            />
            <text
              x="0"
              y="3"
              textAnchor="middle"
              fill="#fff"
              fontSize="12"
              fontWeight="700"
              fontFamily="var(--sans), system-ui, sans-serif"
            >
              Poland
            </text>
          </g>
        </g>

        {/* Azerbaijan — Baku */}
        <g className="footprint__marker">
          <circle cx="292" cy="214" r="16" fill="rgba(241,90,34,0.18)" />
          <circle cx="292" cy="214" r="7" fill="#f15a22" />
          <circle cx="292" cy="214" r="3" fill="#fff" />
          <g transform="translate(292 250)">
            <rect
              x="-58"
              y="-2"
              width="116"
              height="28"
              rx="14"
              fill="rgba(8,53,102,0.92)"
              stroke="rgba(255,255,255,0.2)"
            />
            <text
              x="0"
              y="17"
              textAnchor="middle"
              fill="#fff"
              fontSize="12"
              fontWeight="700"
              fontFamily="var(--sans), system-ui, sans-serif"
            >
              Azerbaijan
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
