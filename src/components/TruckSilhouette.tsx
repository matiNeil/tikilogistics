export default function TruckSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e6c667" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e6c667" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* trailer */}
      <rect x="60" y="60" width="620" height="180" rx="6" fill="#0d0d0f" stroke="url(#rim)" strokeWidth="1.5" />
      <rect x="60" y="60" width="620" height="4" fill="#e6c667" opacity="0.5" />
      {/* cab */}
      <path
        d="M700 240V130c0-8 4-15 11-19l70-38c10-6 22-9 34-9h55c17 0 31 14 31 31v145z"
        fill="#0d0d0f"
        stroke="url(#rim)"
        strokeWidth="1.5"
      />
      {/* windshield */}
      <path d="M726 128l58-52c6-5 14-8 22-8h20v60z" fill="#1c1c1f" stroke="#e6c667" strokeOpacity="0.4" strokeWidth="1" />
      {/* headlight */}
      <circle cx="885" cy="200" r="6" fill="#e6c667" opacity="0.85" />
      {/* chassis line */}
      <rect x="60" y="238" width="835" height="6" fill="#0a0a0b" />
      {/* wheels */}
      {[150, 300, 500, 650, 800].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="252" r="26" fill="#08080a" stroke="#e6c667" strokeOpacity="0.35" strokeWidth="2" />
          <circle cx={cx} cy="252" r="9" fill="#e6c667" opacity="0.25" />
        </g>
      ))}
      {/* ground shadow */}
      <ellipse cx="470" cy="285" rx="470" ry="10" fill="#e6c667" opacity="0.08" />
    </svg>
  );
}
