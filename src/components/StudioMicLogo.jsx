import { useId } from 'react';

// Official 1-to-1 Studio Microphone Logo Mark matching client brand photo
export default function StudioMicLogo({ className = "w-5 h-5" }) {
  const notchMaskId = useId();
  const haloMaskId = useId();

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Mask for black foreground capsule */}
        <mask id={notchMaskId}>
          <rect width="100" height="100" fill="white" />
          <path d="M43 12v22M57 12v22" stroke="black" strokeWidth="5.5" strokeLinecap="round" />
        </mask>
        {/* Mask for white background halo capsule */}
        <mask id={haloMaskId}>
          <rect width="100" height="100" fill="white" />
          <path d="M43 11v23M57 11v23" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
        </mask>
      </defs>

      {/* --- LAYER 1: WHITE HALO / OUTLINE (Matches logo contrast border) --- */}
      <rect
        x="32.2"
        y="14.2"
        width="35.6"
        height="55.6"
        rx="17.8"
        fill="#FFFFFF"
        mask={`url(#${haloMaskId})`}
      />
      <path
        d="M23 44v14a27 27 0 0 0 54 0v-14"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M50 73v12"
        stroke="#FFFFFF"
        strokeWidth="11.5"
        strokeLinecap="round"
      />
      <path
        d="M33 87h34"
        stroke="#FFFFFF"
        strokeWidth="11.5"
        strokeLinecap="round"
      />

      {/* --- LAYER 2: SOLID DARK / BLACK FOREGROUND (Matches 1-to-1 mic stand) --- */}
      <rect
        x="34"
        y="16"
        width="32"
        height="52"
        rx="16"
        fill="currentColor"
        mask={`url(#${notchMaskId})`}
      />
      <path
        d="M23 44v14a27 27 0 0 0 54 0v-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M50 73v12"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <path
        d="M33 87h34"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
