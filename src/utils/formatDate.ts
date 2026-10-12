import { EVENT_CONFIG } from '@/config/event';

const localTimestamp = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})(?::(\d{2})(\.\d{1,7})?)?$/;
const offsetTimestamp = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})(?::(\d{2})(\.\d{1,7})?)?(Z|[+-]\d{2}:\d{2})$/;

// Explicit UTC instants keep parsing independent of server/visitor timezone.
export function normalizeTimestamp(value: string | null | undefined): string | null {
  if (!value) return null;
  const local = value.match(localTimestamp);
  const match = local || value.match(offsetTimestamp);
  if (!match) return null;
  const [year, month, day] = match[1].split('-').map(Number);
  const [hour, minute] = match[2].split(':').map(Number);
  const second = Number(match[3] || 0);
  const calendar = new Date(Date.UTC(year, month - 1, day));
  if (calendar.getUTCFullYear() !== year || calendar.getUTCMonth() !== month - 1 || calendar.getUTCDate() !== day || hour > 23 || minute > 59 || second > 59) return null;
  const instant = new Date(local ? `${value}${EVENT_CONFIG.programme.offsetForLocalTimestamps}` : value);
  return Number.isFinite(instant.getTime()) ? instant.toISOString() : null;
}

export function scheduleDateKey(instant: string | null): string | null {
  if (!instant) return null;
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: EVENT_CONFIG.programme.timeZone, year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date(instant));
  const part = (type: string) => parts.find(p => p.type === type)?.value;
  return `${part('year')}-${part('month')}-${part('day')}`;
}

export function formatScheduleDate(instant: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: EVENT_CONFIG.programme.timeZone, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  }).format(new Date(instant));
}

export function formatSessionTime(start: string | null, end: string | null): string {
  if (!start) return 'Time to be announced';
  const format = new Intl.DateTimeFormat('en-GB', {
    timeZone: EVENT_CONFIG.programme.timeZone, hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  });
  return end ? `${format.format(new Date(start))} – ${format.format(new Date(end))}` : `${format.format(new Date(start))} · End time to be announced`;
}
