// Abstract, data-shaped mock visuals standing in for real dashboard screenshots.
// Swap the `render` functions in each case study's gallery for real <img> exports when available.

export function BarMock({ accent = "#E8A33D" }: { accent?: string }) {
  const bars = [40, 65, 30, 82, 55, 70, 46];
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full bg-ink-raised" preserveAspectRatio="none">
      <rect width="320" height="200" fill="#1D242E" />
      {[40, 80, 120, 160].map((y) => (
        <line key={y} x1="24" x2="300" y1={y} y2={y} stroke="#2A3341" strokeWidth="1" />
      ))}
      {bars.map((h, i) => (
        <rect
          key={i}
          x={30 + i * 38}
          y={180 - h}
          width="24"
          height={h}
          rx="3"
          fill={i === 3 ? accent : "#2FA491"}
          opacity={i === 3 ? 1 : 0.75}
        />
      ))}
    </svg>
  );
}

export function LineMock({ accent = "#2FA491" }: { accent?: string }) {
  const points = "10,150 45,130 80,140 115,90 150,100 185,60 220,75 255,40 290,55";
  return (
    <svg viewBox="0 0 300 180" className="h-full w-full bg-ink-raised" preserveAspectRatio="none">
      <rect width="300" height="180" fill="#1D242E" />
      {[40, 80, 120].map((y) => (
        <line key={y} x1="10" x2="290" y1={y} y2={y} stroke="#2A3341" strokeWidth="1" />
      ))}
      <polyline points={points} fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points={`${points} 290,180 10,180`} fill={accent} opacity="0.08" />
    </svg>
  );
}

export function KpiMock() {
  const tiles = [
    { label: "Revenue / Line", value: "$4.82" },
    { label: "Top Genre", value: "Rock" },
    { label: "Margin Δ", value: "+12.4%" },
    { label: "Markets", value: "24" },
  ];
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full bg-ink-raised" preserveAspectRatio="none">
      <rect width="320" height="200" fill="#1D242E" />
      {tiles.map((t, i) => {
        const x = 16 + (i % 2) * 156;
        const y = 16 + Math.floor(i / 2) * 92;
        return (
          <g key={t.label}>
            <rect x={x} y={y} width="148" height="76" rx="6" fill="#161B22" stroke="#2A3341" />
            <text x={x + 12} y={y + 28} fill="#8B93A1" fontSize="9" fontFamily="monospace">
              {t.label}
            </text>
            <text x={x + 12} y={y + 54} fill="#E6E9EF" fontSize="20" fontFamily="sans-serif" fontWeight="600">
              {t.value}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function TableMock() {
  const rows = [
    ["App Category", "Installs", "Rating"],
    ["Tools", "1.2B", "4.4"],
    ["Communication", "980M", "4.2"],
    ["Productivity", "610M", "4.3"],
    ["Entertainment", "540M", "4.1"],
  ];
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full bg-ink-raised" preserveAspectRatio="none">
      <rect width="320" height="200" fill="#1D242E" />
      {rows.map((row, r) => (
        <g key={r}>
          <rect x="14" y={16 + r * 34} width="292" height="28" fill={r === 0 ? "#161B22" : "transparent"} rx="3" />
          {row.map((cell, c) => (
            <text
              key={c}
              x={22 + c * 100}
              y={35 + r * 34}
              fontSize="10.5"
              fontFamily={r === 0 ? "monospace" : "sans-serif"}
              fill={r === 0 ? "#E8A33D" : "#E6E9EF"}
            >
              {cell}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}

export function ScatterMock() {
  const points = [
    [40, 150], [70, 120], [95, 135], [120, 90], [150, 100],
    [175, 60], [200, 75], [230, 40], [260, 55], [280, 30],
  ];
  return (
    <svg viewBox="0 0 300 180" className="h-full w-full bg-ink-raised" preserveAspectRatio="none">
      <rect width="300" height="180" fill="#1D242E" />
      <line x1="30" y1="10" x2="30" y2="165" stroke="#2A3341" />
      <line x1="30" y1="165" x2="290" y2="165" stroke="#2A3341" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={i % 3 === 0 ? "#E8A33D" : "#2FA491"} opacity="0.85" />
      ))}
      <line x1="35" y1="150" x2="285" y2="35" stroke="#E6E9EF" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
    </svg>
  );
}
