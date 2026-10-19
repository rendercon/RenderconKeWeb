'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  getCurrentSponsors,
  getPastSponsors,
  SPONSOR_CATEGORIES,
  type Sponsor,
} from '@/config/sponsors';

function SponsorLogo({ sponsor, size }: { sponsor: Sponsor; size: 'main' | 'partner' | 'past' }) {
  const [failed, setFailed] = useState(false);
  const heights = { main: 'h-44 sm:h-52', partner: 'h-28', past: 'h-16' };
  const bounds = { main: 'max-h-40 max-w-[260px]', partner: 'max-h-24 max-w-[200px]', past: 'max-h-14 max-w-[140px]' };

  return (
    <div className={`flex items-center justify-center rounded-xl p-3 ${heights[size]} ${sponsor.logo && !failed && sponsor.logoBackground === 'light' ? 'bg-[#F5F5F7]' : 'bg-brand-dark'}`}>
      {sponsor.logo && !failed ? (
        <Image
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          unoptimized
          sizes={size === 'main' ? '260px' : size === 'past' ? '140px' : '200px'}
          className={`h-auto w-auto object-contain ${bounds[size]}`}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="px-3 text-center text-lg font-semibold text-[#F5F5F7]">{sponsor.name}</span>
      )}
    </div>
  );
}

const linkClass = 'rounded-sm hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold';

function OrganizationName({ sponsor }: { sponsor: Sponsor }) {
  return sponsor.link ? (
    <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {sponsor.name}<span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : <>{sponsor.name}</>;
}

export default function Sponsors() {
  const { sponsors, currentYear } = getCurrentSponsors();
  const pastSponsors = getPastSponsors();

  return (
    <div id="sponsors" className="scroll-mt-24" data-sponsors>
      <div className="mb-10 text-center">
        <span className="section-label">RenderCon Kenya {currentYear}</span>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Sponsors &amp; Partners</h2>
      </div>

      <div className="space-y-12">
        {SPONSOR_CATEGORIES.map(category => {
          const isMain = category.id === 'main';
          const members = sponsors.filter(sponsor => sponsor.category === category.id);
          if (!members.length) return null;

          return (
            <section key={category.id} aria-labelledby={`sponsors-${category.id}`} className="mx-auto max-w-5xl">
              <h3 id={`sponsors-${category.id}`} className={`mb-5 text-center font-semibold ${isMain ? 'text-2xl text-brand-gold' : 'text-xl text-purple-300'}`}>
                {category.title}
              </h3>
              <ul className={`mx-auto grid grid-cols-1 gap-5 ${category.id === 'special' ? 'sm:grid-cols-3' : category.id === 'organising' ? 'max-w-sm' : 'sm:grid-cols-2'} ${isMain ? 'max-w-4xl' : category.id === 'event' ? 'max-w-3xl' : ''}`}>
                {members.map(sponsor => (
                  <li key={sponsor.name} className={`min-w-0 rounded-2xl border bg-brand-dark-card p-5 text-center ${isMain ? 'border-brand-gold/40 sm:p-7' : 'border-brand-dark-border'}`}>
                    <SponsorLogo sponsor={sponsor} size={isMain ? 'main' : 'partner'} />
                    <h4 className={`mt-5 font-semibold text-[#F5F5F7] ${isMain ? 'text-xl' : 'text-base'}`}>
                      <OrganizationName sponsor={sponsor} />
                    </h4>
                    <p className={`mt-2 text-sm ${isMain ? 'text-brand-gold' : 'text-purple-300'}`}>{sponsor.label}</p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      {pastSponsors.length > 0 && (
        <section aria-labelledby="past-sponsors-title" className="mt-14 border-t border-brand-dark-border pt-8">
          <div className="mb-6 text-center">
            <h3 id="past-sponsors-title" className="text-xl font-semibold text-slate-300">Past Sponsors</h3>
            <p className="mt-2 text-sm text-slate-400">Sponsors, organisers, and community supporters from previous editions.</p>
          </div>
          <ul className="grid grid-cols-2 items-start gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {pastSponsors.map(sponsor => (
              <li key={sponsor.name} className="min-w-0 rounded-xl border border-brand-dark-border p-3 text-center">
                <SponsorLogo sponsor={sponsor} size="past" />
                <h4 className="mt-3 text-sm font-medium text-slate-300"><OrganizationName sponsor={sponsor} /></h4>
                <p className="mt-1 text-xs text-slate-400">Past {sponsor.historicalRole || 'Sponsor'}</p>
                {sponsor.history && (
                  <details className="mt-3 text-left text-xs leading-relaxed text-slate-300">
                    <summary className={`cursor-pointer text-purple-300 ${linkClass}`}>Previous support</summary>
                    {sponsor.history.map((profile, index) => (
                      <div key={index} className="mt-3 space-y-2">
                        {profile.tagline && <p className="font-medium">{profile.tagline}</p>}
                        <p>{profile.description}</p>
                        {profile.socials && (
                          <ul className="flex flex-wrap gap-x-3 gap-y-2">
                            {Object.entries(profile.socials).map(([label, url]) => (
                              <li key={label}><a href={url} target="_blank" rel="noopener noreferrer" className={`text-purple-300 ${linkClass}`} aria-label={`${sponsor.name} ${label} (opens in a new tab)`}>{label}</a></li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </details>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
