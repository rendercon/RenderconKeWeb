'use client';

import { useState } from 'react';

export default function SpeakerPhoto({ src, name, className }: { src: string | null; name: string; className?: string }) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  if (!src || failedSrc === src) {
    return <div role="img" aria-label={`${name} — photo unavailable`} className={`flex items-center justify-center bg-brand-dark-card text-slate-400 ${className || ''}`}>
      <svg className="h-12 w-12" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" /><path d="M4 22v-2a8 8 0 0116 0v2" />
      </svg>
    </div>;
  }
  // Preserve the existing image layout and support the API's CDN without
  // introducing an external avatar service or a fabricated profile photo.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={name} className={className} onError={() => setFailedSrc(src)} />;
}
