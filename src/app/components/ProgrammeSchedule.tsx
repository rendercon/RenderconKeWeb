'use client';

import { useCallback, useEffect, useId, useMemo, useState } from 'react';
import Link from 'next/link';
import { EVENT_CONFIG } from '@/config/event';
import { formatScheduleDate, formatSessionTime, scheduleDateKey } from '@/utils/formatDate';
import type { Programme, Session } from '@/utils/types';
import SpeakerPhoto from './SpeakerPhoto';

function SessionModal({ session, onClose }: { session: Session; onClose: () => void }) {
  const titleId = useId();
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', onKey); };
  }, [onClose]);

  return <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
    <div role="dialog" aria-modal="true" aria-labelledby={titleId} className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6" onClick={event => event.stopPropagation()}>
      <div className="flex justify-between items-start gap-4 mb-6">
        <h2 id={titleId} className="text-2xl font-bold text-white">{session.title}</h2>
        <button type="button" onClick={onClose} aria-label="Close session details" className="text-slate-400 hover:text-white text-2xl">×</button>
      </div>
      <p className="text-yellow-500 text-sm">{session.startsAt && `${formatScheduleDate(session.startsAt)} · `}{formatSessionTime(session.startsAt, session.endsAt)} · EAT (Africa/Nairobi)</p>
      <p className="mt-2 text-slate-300 text-sm">{session.room || 'Room to be announced'}{session.durationMinutes !== null && ` · ${session.durationMinutes} minutes`}</p>
      {session.description && <div className="mt-6 bg-slate-700/50 rounded-lg p-6">
        <h3 className="text-sm font-semibold text-yellow-500 mb-3">Session information</h3>
        <p className="text-slate-300 whitespace-pre-line leading-relaxed">{session.description}</p>
      </div>}
      {session.speakers.length > 0 && <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {session.speakers.map(speaker => <div key={speaker.id} className="bg-slate-700/50 rounded-lg p-5">
          <div className="flex gap-4 items-center">
            <SpeakerPhoto src={speaker.speaker_image} name={speaker.fullname} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
            <div><h3 className="text-lg font-semibold text-white">{speaker.fullname}</h3>{speaker.title_role && <p className="text-sm text-slate-300">{speaker.title_role}</p>}</div>
          </div>
          {speaker.speaker_bio && <p className="mt-4 text-sm text-slate-300 whitespace-pre-line leading-relaxed">{speaker.speaker_bio}</p>}
          <div className="mt-4 flex flex-wrap gap-4">{speaker.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-purple-400 text-sm hover:underline">{link.title || 'Profile'}</a>)}</div>
        </div>)}
      </div>}
    </div>
  </div>;
}

export default function ProgrammeSchedule({ compact = false }: { compact?: boolean }) {
  const [programme, setProgramme] = useState<Programme | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [room, setRoom] = useState('');
  const [day, setDay] = useState('');
  const [selected, setSelected] = useState<Session | null>(null);
  const controlId = useId();
  const closeModal = useCallback(() => setSelected(null), []);

  const load = useCallback(async (signal?: AbortSignal) => {
    setLoading(true); setError(false);
    try {
      const response = await fetch('/api/schedule', { signal });
      if (!response.ok) throw new Error('Programme unavailable');
      const data: Programme = await response.json();
      if (data.year !== EVENT_CONFIG.year || !Array.isArray(data.sessions)) throw new Error('Invalid programme');
      if (!signal?.aborted) setProgramme(data);
    } catch {
      if (!signal?.aborted) setError(true);
    } finally {
      if (!signal?.aborted) setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    void load(controller.signal);
    return () => controller.abort();
  }, [load]);

  const rooms = useMemo(() => Array.from(new Set(programme?.sessions.flatMap(session => session.room ? [session.room] : []) || [])).sort(), [programme]);
  const dates = useMemo(() => Array.from(new Set(programme?.sessions.flatMap(session => {
    const key = scheduleDateKey(session.startsAt); return key ? [key] : [];
  }) || [])).sort(), [programme]);
  const filtered = useMemo(() => (programme?.sessions || []).filter(session => {
    const haystack = [session.title, session.description, session.room || '', ...session.speakers.flatMap(speaker => [speaker.fullname, speaker.title_role])].join(' ').toLocaleLowerCase('en');
    return haystack.includes(searchTerm.trim().toLocaleLowerCase('en')) && (!room || session.room === room) && (!day || scheduleDateKey(session.startsAt) === day);
  }), [programme, searchTerm, room, day]);
  const visible = compact ? filtered.slice(0, 6) : filtered;
  const groups = new Map<string, Session[]>();
  for (const session of visible) {
    const key = scheduleDateKey(session.startsAt) || 'unscheduled';
    groups.set(key, [...(groups.get(key) || []), session]);
  }

  return <div>
    <p className="mb-5 text-sm text-slate-400">All times in EAT (Africa/Nairobi).</p>
    {!compact && <div className="mb-8 bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 flex flex-col md:flex-row gap-4">
      <label className="flex-grow" htmlFor={`${controlId}-search`}><span className="sr-only">Search sessions and speakers</span>
        <input id={`${controlId}-search`} type="search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} placeholder="Search sessions, speakers, or roles..." className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
      </label>
      <label htmlFor={`${controlId}-room`}><span className="sr-only">Filter by room</span>
        <select id={`${controlId}-room`} value={room} onChange={event => setRoom(event.target.value)} className="w-full md:w-auto px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"><option value="">All rooms</option>{rooms.map(name => <option key={name}>{name}</option>)}</select>
      </label>
      {dates.length > 1 && <label htmlFor={`${controlId}-day`}><span className="sr-only">Filter by date</span>
        <select id={`${controlId}-day`} value={day} onChange={event => setDay(event.target.value)} className="w-full md:w-auto px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"><option value="">All dates</option>{dates.map(date => <option key={date}>{date}</option>)}</select>
      </label>}
    </div>}
    {error && <div role="alert" className="text-center py-6 text-slate-400">
      <p>Unable to load the 2026 programme right now.</p>
      <button type="button" className="btn-secondary mt-4 px-5 py-2.5 text-sm" disabled={loading} onClick={() => { void load(); }}>Try Again</button>
    </div>}
    {loading && !programme && <div aria-label="Loading programme" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{[0, 1, 2].map(i => <div key={i} className="animate-pulse rounded-lg bg-slate-800/50 h-52" />)}</div>}
    {programme && <>
      {!compact && <p className="mb-6 text-slate-300">Showing {filtered.length} of {programme.sessions.length} sessions</p>}
      {filtered.length === 0 && <p className="text-center py-6 text-slate-400">{programme.sessions.length === 0 ? 'The 2026 programme has not been published yet.' : 'No sessions found. Try adjusting your search or filters.'}</p>}
      {Array.from(groups.entries()).map(([key, sessions]) => <section key={key} className="mb-10">
        <h3 className="text-xl font-semibold text-white mb-5">{key === 'unscheduled' ? 'Time to be announced' : formatScheduleDate(sessions[0].startsAt!)}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map(session => <button type="button" key={session.id} onClick={() => setSelected(session)} className="text-left bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700 hover:border-yellow-500/50 focus-visible:outline focus-visible:outline-yellow-500">
            <p className="text-sm text-yellow-500 mb-2">{formatSessionTime(session.startsAt, session.endsAt)}</p>
            <h4 className="font-semibold text-white mb-4">{session.title}</h4>
            <div className="space-y-3">{session.speakers.map(speaker => <div key={speaker.id} className="flex items-center gap-3">
              <SpeakerPhoto src={speaker.speaker_image} name={speaker.fullname} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
              <span className="text-sm text-slate-300">{speaker.fullname}</span>
            </div>)}</div>
            <p className="mt-4 pt-4 border-t border-slate-700 text-xs text-slate-400">{session.room || 'Room to be announced'}{session.isServiceSession && ' · Programme activity'}</p>
          </button>)}
        </div>
      </section>)}
      {compact && <Link href={EVENT_CONFIG.links.schedule2026} className="btn-secondary inline-flex text-sm px-6 py-3">View full 2026 programme</Link>}
    </>}
    {selected && <SessionModal session={selected} onClose={closeModal} />}
  </div>;
}
