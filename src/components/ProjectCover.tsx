import type { ProjectArtKind } from '../data/profile';
import { useReducedMotion } from '../hooks/useReducedMotion';

// Illustrated project covers, drawn in code so they stay crisp, light and on-brand.

interface Accent {
  color: string;
  light: string;
  soft: string;
  glow: string;
}

interface ArtProps {
  accent: Accent;
  animate: boolean;
}

const ACCENTS: Record<ProjectArtKind, Accent> = {
  rewards: { color: '#2dd4bf', light: '#99f6e4', soft: 'rgba(45,212,191,0.16)', glow: 'rgba(45,212,191,0.2)' },
  transfer: { color: '#38bdf8', light: '#bae6fd', soft: 'rgba(56,189,248,0.16)', glow: 'rgba(56,189,248,0.2)' },
  pos: { color: '#a78bfa', light: '#ddd6fe', soft: 'rgba(167,139,250,0.16)', glow: 'rgba(167,139,250,0.2)' },
  route: { color: '#34d399', light: '#a7f3d0', soft: 'rgba(52,211,153,0.16)', glow: 'rgba(52,211,153,0.2)' },
};

const LINE = 'rgba(255,255,255,0.14)';
const FAINT = 'rgba(255,255,255,0.06)';
const PANEL = '#0a111d';
const INK = '#05070c';

export default function ProjectCover({ kind }: { kind: ProjectArtKind }) {
  const animate = !useReducedMotion();
  const accent = ACCENTS[kind];
  const Art = { rewards: RewardsArt, transfer: TransferArt, pos: PosArt, route: RouteArt }[kind];

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0"
      style={{ backgroundImage: `radial-gradient(120% 90% at 50% 0%, ${accent.glow}, transparent 65%)` }}
    >
      <div className="bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_80%)]" />
      <svg
        viewBox="0 0 480 300"
        fill="none"
        className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      >
        <Art accent={accent} animate={animate} />
      </svg>
    </div>
  );
}

/** Booking calendar with a loyalty/cashback card. */
function RewardsArt({ accent, animate }: ArtProps) {
  const cells = Array.from({ length: 20 }, (_, i) => ({ row: Math.floor(i / 5), col: i % 5 }));

  return (
    <g transform="translate(-12 0)">
      <rect x="92" y="62" width="184" height="184" rx="18" fill={PANEL} stroke={LINE} />
      <rect x="112" y="80" width="70" height="8" rx="4" fill="rgba(255,255,255,0.42)" />
      <rect x="112" y="96" width="44" height="6" rx="3" fill="rgba(255,255,255,0.16)" />
      <path d="M92 114h184" stroke={FAINT} />
      {cells.map(({ row, col }) => {
        const selected = row === 1 && col === 2;
        const booked = (row === 2 && col === 3) || (row === 0 && col === 4);
        return (
          <rect
            key={`${row}-${col}`}
            x={112 + col * 30}
            y={128 + row * 28}
            width="22"
            height="22"
            rx="6"
            fill={selected ? accent.color : booked ? accent.soft : 'rgba(255,255,255,0.03)'}
            stroke={selected ? 'none' : 'rgba(255,255,255,0.08)'}
          />
        );
      })}
      <path d="M177 167l4 4 8-9" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="236" y="104" width="160" height="124" rx="18" fill="#0c1624" stroke={accent.color} strokeOpacity="0.4" />
      <circle cx="280" cy="152" r="24" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
      <circle
        cx="280"
        cy="152"
        r="24"
        stroke={accent.color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="113 151"
        transform="rotate(-90 280 152)"
      />
      <polygon
        points="280,143 282.23,148.93 288.56,149.22 283.61,153.17 285.29,159.28 280,155.8 274.71,159.28 276.39,153.17 271.44,149.22 277.77,148.93"
        fill={accent.light}
      />
      <rect x="318" y="138" width="58" height="8" rx="4" fill="rgba(255,255,255,0.45)" />
      <rect x="318" y="154" width="40" height="6" rx="3" fill="rgba(255,255,255,0.18)" />
      <rect x="254" y="194" width="124" height="20" rx="10" fill={accent.soft} stroke={accent.color} strokeOpacity="0.35" />
      <rect x="266" y="201.5" width="52" height="5" rx="2.5" fill={accent.light} fillOpacity="0.7" />

      <g transform="translate(398 76)">
        <circle r="20" fill={accent.soft} stroke={accent.color} strokeOpacity="0.7" />
        <path d="M-6 7 6-7" stroke={accent.light} strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="-5" cy="-5" r="2.6" stroke={accent.light} strokeWidth="1.8" />
        <circle cx="5" cy="5" r="2.6" stroke={accent.light} strokeWidth="1.8" />
        {animate && (
          <animateTransform
            attributeName="transform"
            type="translate"
            additive="sum"
            values="0 0;0 -6;0 0"
            dur="4s"
            repeatCount="indefinite"
          />
        )}
      </g>
    </g>
  );
}

const SEND_PATH = 'M186 118C220 58 262 58 294 118';
const RECEIVE_PATH = 'M294 182C262 242 220 242 186 182';

/** Two phones exchanging a transfer. */
function TransferArt({ accent, animate }: ArtProps) {
  return (
    <g>
      <Phone x={88} accent={accent} primary />
      <Phone x={296} accent={accent} />

      <path d={SEND_PATH} stroke={accent.color} strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round">
        {animate && <animate attributeName="stroke-dashoffset" from="10" to="0" dur="0.8s" repeatCount="indefinite" />}
      </path>
      <path d="M284.9 111.55 294 118l-.3-11.15" stroke={accent.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={RECEIVE_PATH} stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
      <path d="M195.25 188.25 186 182l.55 11.15" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="200" y="36" width="80" height="24" rx="12" fill="#0c1a2a" stroke={accent.color} strokeOpacity="0.5" />
      <circle cx="214" cy="48" r="5" fill={accent.color} />
      <rect x="224" y="45" width="44" height="6" rx="3" fill="rgba(255,255,255,0.5)" />

      <circle cx="240" cy="150" r="17" fill={accent.soft} stroke={accent.color} strokeOpacity="0.45" />
      <path d="M232.5 150.5l5 5 10-11" stroke={accent.light} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

      {animate && (
        <circle r="4" fill={accent.light}>
          <animateMotion dur="2.8s" repeatCount="indefinite" path={SEND_PATH} />
        </circle>
      )}
    </g>
  );
}

function Phone({ x, accent, primary = false }: { x: number; accent: Accent; primary?: boolean }) {
  return (
    <g>
      <rect x={x} y="64" width="96" height="172" rx="18" fill={PANEL} stroke={LINE} />
      <rect x={x + 32} y="74" width="32" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <circle cx={x + 48} cy="118" r="16" fill={accent.soft} stroke={accent.color} strokeOpacity="0.55" />
      <circle cx={x + 48} cy="113" r="5" fill={accent.light} fillOpacity="0.8" />
      <path d={`M${x + 39} 127a9 7 0 0 1 18 0z`} fill={accent.light} fillOpacity="0.8" />
      <rect x={x + 20} y="146" width="56" height="8" rx="4" fill="rgba(255,255,255,0.42)" />
      <rect x={x + 28} y="160" width="40" height="6" rx="3" fill="rgba(255,255,255,0.16)" />
      <rect
        x={x + 16}
        y="204"
        width="64"
        height="18"
        rx="9"
        fill={primary ? accent.color : 'none'}
        stroke={primary ? 'none' : accent.color}
        strokeOpacity="0.6"
      />
    </g>
  );
}

/** POS terminal with a card, contactless waves and encryption lock. */
function PosArt({ accent, animate }: ArtProps) {
  const keys = Array.from({ length: 12 }, (_, i) => ({ row: Math.floor(i / 3), col: i % 3 }));

  return (
    <g transform="translate(10 0)">
      <g>
        <rect x="204" y="30" width="72" height="46" rx="7" fill={accent.soft} stroke={accent.color} strokeOpacity="0.7" />
        <rect x="204" y="40" width="72" height="8" fill={accent.color} fillOpacity="0.28" />
        <rect x="214" y="56" width="14" height="10" rx="2" fill={accent.light} fillOpacity="0.75" />
        {animate && (
          <animateTransform attributeName="transform" type="translate" values="0 0;0 6;0 0" dur="3.2s" repeatCount="indefinite" />
        )}
      </g>

      <rect x="180" y="62" width="120" height="196" rx="22" fill="#0e1122" stroke="rgba(255,255,255,0.16)" />
      <rect x="200" y="59" width="80" height="6" rx="3" fill={INK} />
      <rect x="196" y="82" width="88" height="60" rx="10" fill={accent.soft} stroke={accent.color} strokeOpacity="0.45" />
      <circle cx="240" cy="104" r="11" fill={accent.color} fillOpacity="0.25" stroke={accent.color} />
      <path d="M235 104l3.5 3.5 6.5-7" stroke={accent.light} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="214" y="122" width="52" height="6" rx="3" fill="rgba(255,255,255,0.35)" />
      {keys.map(({ row, col }) => {
        const enter = row === 3 && col === 2;
        return (
          <rect
            key={`${row}-${col}`}
            x={198 + col * 30}
            y={156 + row * 22}
            width="24"
            height="16"
            rx="6"
            fill={enter ? accent.color : 'rgba(255,255,255,0.06)'}
            fillOpacity={enter ? 0.85 : 1}
            stroke={enter ? 'none' : 'rgba(255,255,255,0.08)'}
          />
        );
      })}

      {['M316 98q9 14 0 28', 'M327 90q15 22 0 44', 'M338 82q21 30 0 60'].map((d, i) => (
        <path key={d} d={d} stroke={accent.color} strokeWidth="2.2" strokeLinecap="round" opacity={0.9 - i * 0.28} />
      ))}

      <circle cx="130" cy="150" r="30" fill={accent.soft} stroke={accent.color} strokeOpacity="0.3" />
      <rect x="119" y="148" width="22" height="18" rx="4" stroke={accent.light} strokeWidth="1.8" />
      <path d="M123 148v-5a7 7 0 0 1 14 0v5" stroke={accent.light} strokeWidth="1.8" />
      <circle cx="130" cy="157" r="2" fill={accent.light} />
      <path d="M160 150h20" stroke={accent.color} strokeOpacity="0.4" strokeDasharray="3 4" />
    </g>
  );
}

const ROUTE_PATH = 'M100 222C160 222 170 150 232 150S300 90 364 86';

/** City map with a live trip from pickup to destination. */
function RouteArt({ accent, animate }: ArtProps) {
  return (
    <g>
      {[70, 150, 230].map((y) => (
        <path key={`h${y}`} d={`M30 ${y}H450`} stroke={FAINT} />
      ))}
      {[110, 230, 350].map((x) => (
        <path key={`v${x}`} d={`M${x} 20V280`} stroke={FAINT} />
      ))}
      <path d="M0 196C120 188 190 120 480 112" stroke="rgba(255,255,255,0.045)" strokeWidth="14" strokeLinecap="round" />
      <path d="M150 300 270 0" stroke="rgba(255,255,255,0.035)" strokeWidth="12" />

      <path d={ROUTE_PATH} stroke={accent.color} strokeOpacity="0.18" strokeWidth="10" strokeLinecap="round" />
      <path d={ROUTE_PATH} stroke={accent.color} strokeWidth="3" strokeLinecap="round" />

      <circle cx="100" cy="222" r="13" fill={accent.soft} />
      <circle cx="100" cy="222" r="6" fill={accent.color} />
      <circle cx="100" cy="222" r="2.5" fill={INK} />

      <ellipse cx="364" cy="89" rx="9" ry="3" fill={accent.color} fillOpacity="0.25" />
      <path d="M364 86C364 86 351 72 351 62A13 13 0 1 1 377 62C377 72 364 86 364 86Z" fill={accent.color} />
      <circle cx="364" cy="62" r="5" fill={INK} />

      <rect x="252" y="178" width="118" height="40" rx="12" fill="#0b1a16" stroke={accent.color} strokeOpacity="0.35" />
      <circle cx="272" cy="198" r="8" stroke={accent.color} strokeWidth="1.8" />
      <path d="M272 193.5v5l3 2" stroke={accent.light} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="288" y="190" width="58" height="6" rx="3" fill="rgba(255,255,255,0.5)" />
      <rect x="288" y="202" width="38" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />

      {animate ? (
        <g>
          <circle r="7.5" fill="#ecfdf5" stroke={accent.color} strokeWidth="3" />
          <animateMotion dur="6s" repeatCount="indefinite" path={ROUTE_PATH} />
        </g>
      ) : (
        <circle cx="232" cy="150" r="7.5" fill="#ecfdf5" stroke={accent.color} strokeWidth="3" />
      )}
    </g>
  );
}
