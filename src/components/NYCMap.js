import React from 'react'

/**
 * Hand-built stylized NYC map.
 * Shapes are intentionally abstract — Manhattan as the central spine,
 * Brooklyn/Queens hugging the east, Bronx top, Jersey hinted at the west.
 * Pinned locations are positioned by trial-and-error to read right
 * rather than match GPS.
 */
const NYCMap = () => (
    <svg
        viewBox="0 0 520 620"
        className="nyc-map"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="A stylized map of New York City"
    >
        {/* Water */}
        <rect x="0" y="0" width="520" height="620" fill="var(--paper-deep)" />

        {/* Subtle hatching texture on water */}
        <defs>
            <pattern id="hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="var(--paper-shadow)" strokeWidth="0.5" opacity="0.6" />
            </pattern>
            <pattern id="land-grain" patternUnits="userSpaceOnUse" width="6" height="6">
                <circle cx="1" cy="1" r="0.4" fill="var(--ink-faint)" opacity="0.35" />
            </pattern>
        </defs>
        <rect x="0" y="0" width="520" height="620" fill="url(#hatch)" />

        {/* New Jersey (west) */}
        <path
            d="M 0 80 L 130 70 L 145 200 L 155 360 L 140 500 L 120 620 L 0 620 Z"
            fill="var(--paper)"
            stroke="var(--ink)"
            strokeWidth="1.5"
        />
        <text x="40" y="280" fontFamily="var(--serif)" fontSize="11" fill="var(--ink-3)" fontStyle="italic">NEW</text>
        <text x="40" y="294" fontFamily="var(--serif)" fontSize="11" fill="var(--ink-3)" fontStyle="italic">JERSEY</text>

        {/* The Bronx (top) */}
        <path
            d="M 200 0 L 410 0 L 410 110 L 360 130 L 290 120 L 240 130 L 195 100 Z"
            fill="var(--paper)"
            stroke="var(--ink)"
            strokeWidth="1.5"
        />
        <text x="290" y="55" fontFamily="var(--serif)" fontSize="11" fill="var(--ink-3)" fontStyle="italic">THE BRONX</text>

        {/* Manhattan — the spine */}
        <path
            d="M 220 110 L 256 110 L 268 220 L 268 320 L 254 430 L 234 530 L 222 460 L 215 350 L 210 230 Z"
            fill="var(--paper)"
            stroke="var(--ink)"
            strokeWidth="1.8"
        />
        <text
            x="234"
            y="200"
            fontFamily="var(--serif)"
            fontSize="11"
            fill="var(--ink-2)"
            textAnchor="middle"
            fontWeight="600"
            transform="rotate(8 234 200)"
        >
            MANHATTAN
        </text>

        {/* Queens (east) */}
        <path
            d="M 290 110 L 510 100 L 520 230 L 500 310 L 460 340 L 380 330 L 310 310 L 290 240 Z"
            fill="var(--paper)"
            stroke="var(--ink)"
            strokeWidth="1.5"
        />
        <text x="400" y="220" fontFamily="var(--serif)" fontSize="11" fill="var(--ink-3)" fontStyle="italic">QUEENS</text>

        {/* Brooklyn (southeast) */}
        <path
            d="M 280 360 L 380 350 L 480 360 L 510 440 L 470 530 L 380 560 L 300 540 L 270 460 Z"
            fill="var(--paper)"
            stroke="var(--ink)"
            strokeWidth="1.5"
        />
        <text x="370" y="460" fontFamily="var(--serif)" fontSize="11" fill="var(--ink-3)" fontStyle="italic">BROOKLYN</text>

        {/* Land grain overlay */}
        <rect x="120" y="0" width="400" height="620" fill="url(#land-grain)" />

        {/* Compass rose (top-left) */}
        <g transform="translate(60, 50)">
            <circle cx="0" cy="0" r="18" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1" />
            <path d="M 0 -14 L 3 0 L 0 14 L -3 0 Z" fill="var(--ink)" />
            <text x="0" y="-22" fontFamily="var(--mono)" fontSize="8" fill="var(--ink)" textAnchor="middle" fontWeight="600">N</text>
        </g>

        {/* Pin: Meta NYC (Astor Place area, lower Manhattan) */}
        <g className="pin pin-meta">
            <line x1="238" y1="340" x2="238" y2="370" stroke="var(--ink)" strokeWidth="1.2" />
            <circle cx="238" cy="370" r="6" fill="var(--route-red)" stroke="var(--ink)" strokeWidth="1.5" />
            <line x1="238" y1="340" x2="298" y2="340" stroke="var(--ink)" strokeWidth="1" strokeDasharray="2 2" />
            <text x="304" y="338" fontFamily="var(--mono)" fontSize="10" fill="var(--ink)" fontWeight="600">META · RL WEARABLES</text>
            <text x="304" y="350" fontFamily="var(--mono)" fontSize="8.5" fill="var(--ink-3)">770 BROADWAY · CURRENT</text>
        </g>

        {/* Pin: Apartment / "the loop" */}
        <g className="pin pin-home">
            <line x1="246" y1="440" x2="246" y2="468" stroke="var(--ink)" strokeWidth="1.2" />
            <rect x="240" y="466" width="12" height="12" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.5" transform="rotate(45 246 472)" />
            <line x1="246" y1="440" x2="170" y2="440" stroke="var(--ink)" strokeWidth="1" strokeDasharray="2 2" />
            <text x="165" y="438" fontFamily="var(--mono)" fontSize="10" fill="var(--ink)" textAnchor="end" fontWeight="600">HOME BASE</text>
            <text x="165" y="450" fontFamily="var(--mono)" fontSize="8.5" fill="var(--ink-3)" textAnchor="end">EVENINGS · WEEKENDS</text>
        </g>

        {/* Pin: Running loop (Central Park) */}
        <g className="pin pin-run">
            <ellipse cx="245" cy="260" rx="14" ry="22" fill="none" stroke="var(--route-green)" strokeWidth="1.6" strokeDasharray="3 3" />
            <line x1="259" y1="260" x2="320" y2="240" stroke="var(--ink)" strokeWidth="1" strokeDasharray="2 2" />
            <text x="326" y="238" fontFamily="var(--mono)" fontSize="10" fill="var(--ink)" fontWeight="600">THE LOOP</text>
            <text x="326" y="250" fontFamily="var(--mono)" fontSize="8.5" fill="var(--ink-3)">6.1 MI · CP RESERVOIR</text>
        </g>

        {/* Pin: Pickleball (Brooklyn) */}
        <g className="pin pin-pickle">
            <circle cx="380" cy="450" r="5" fill="var(--route-yellow)" stroke="var(--ink)" strokeWidth="1.4" />
            <line x1="380" y1="450" x2="380" y2="500" stroke="var(--ink)" strokeWidth="1" strokeDasharray="2 2" />
            <text x="380" y="514" fontFamily="var(--mono)" fontSize="10" fill="var(--ink)" textAnchor="middle" fontWeight="600">SUN COURTS</text>
            <text x="380" y="526" fontFamily="var(--mono)" fontSize="8.5" fill="var(--ink-3)" textAnchor="middle">PICKLE · PADEL · SPIKE</text>
        </g>

        {/* Pin: Rave / music spot (Brooklyn) */}
        <g className="pin pin-music">
            <circle cx="395" cy="395" r="5" fill="var(--route-blue)" stroke="var(--ink)" strokeWidth="1.4" />
            <circle cx="395" cy="395" r="10" fill="none" stroke="var(--route-blue)" strokeWidth="0.8" opacity="0.5" />
            <circle cx="395" cy="395" r="15" fill="none" stroke="var(--route-blue)" strokeWidth="0.6" opacity="0.3" />
            <line x1="395" y1="395" x2="395" y2="368" stroke="var(--ink)" strokeWidth="1" strokeDasharray="2 2" />
            <text x="395" y="360" fontFamily="var(--mono)" fontSize="10" fill="var(--ink)" textAnchor="middle" fontWeight="600">THE WAREHOUSE</text>
            <text x="395" y="372" fontFamily="var(--mono)" fontSize="8.5" fill="var(--ink-3)" textAnchor="middle">HOUSE · 130 BPM</text>
        </g>

        {/* Frame */}
        <rect x="4" y="4" width="512" height="612" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
        <rect x="9" y="9" width="502" height="602" fill="none" stroke="var(--ink)" strokeWidth="0.5" />

        {/* Bottom legend strip */}
        <text x="20" y="600" fontFamily="var(--mono)" fontSize="8" fill="var(--ink-3)" letterSpacing="0.1em">
            FIG. 01 · A FIELD GUIDE TO NEW YORK CITY — H. KHUBCHANDANI, 2026
        </text>
    </svg>
)

export default NYCMap
