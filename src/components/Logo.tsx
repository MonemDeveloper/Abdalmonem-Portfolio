/** "AB" monogram — the same mark as public/favicon.svg. */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#99f6e4" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#0b1019" />
      <rect x="1" y="1" width="62" height="62" rx="15" fill="none" stroke="#5eead4" strokeOpacity=".35" strokeWidth="2" />
      <g
        fill="none"
        stroke="url(#logo-gradient)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-1.5 0)"
      >
        <path d="M12 46 23 18 34 46M16.5 36h13" />
        <path d="M40 18v28M40 18h7a7 7 0 0 1 0 14h-7M40 32h8a7 7 0 0 1 0 14h-8" />
      </g>
    </svg>
  );
}
