import { EVENT_CONFIG } from '@/config/event';
import { normalizeTimestamp } from '@/utils/formatDate';
import type { Programme, SessionSpeaker, Speaker } from '@/utils/types';
import type { SessionizeAll, SessionizeId } from './sessionize-types';

function record(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid Sessionize object');
  return value as Record<string, unknown>;
}

function array(value: unknown): unknown[] {
  if (!Array.isArray(value)) throw new Error('Invalid Sessionize collection');
  return value;
}

function id(value: unknown): string {
  if (typeof value === 'string' && value.trim()) return value.trim();
  if (typeof value === 'number' && Number.isSafeInteger(value) && value >= 0) return String(value);
  throw new Error('Invalid Sessionize identifier');
}

function text(value: unknown): string {
  if (value == null) return '';
  if (typeof value !== 'string') throw new Error('Invalid Sessionize text');
  return value.trim();
}

function requiredText(value: unknown): string {
  const result = text(value);
  if (!result) throw new Error('Missing Sessionize title or name');
  return result;
}

function flag(value: unknown): boolean {
  if (value == null) return false;
  if (typeof value !== 'boolean') throw new Error('Invalid Sessionize flag');
  return value;
}

function publicUrl(value: unknown): string | null {
  const url = text(value);
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol) && !parsed.username && !parsed.password ? parsed.href : null;
  } catch { return null; }
}

function unique<T extends { id: SessionizeId }>(items: T[]): void {
  if (new Set(items.map(item => id(item.id))).size !== items.length) throw new Error('Duplicate Sessionize identifiers');
}

export function validateSessionize(value: unknown): SessionizeAll {
  const data = record(value);
  const speakers = array(data.speakers).map(value => {
    const speaker = record(value);
    return {
      id: id(speaker.id), fullName: requiredText(speaker.fullName),
      bio: text(speaker.bio), tagLine: text(speaker.tagLine),
      profilePicture: publicUrl(speaker.profilePicture), isTopSpeaker: flag(speaker.isTopSpeaker),
      links: (speaker.links == null ? [] : array(speaker.links)).map(value => {
        const link = record(value);
        return { title: text(link.title), url: publicUrl(link.url) || '', linkType: text(link.linkType) };
      }),
    };
  });
  const sessions = array(data.sessions).map(value => {
    const session = record(value);
    return {
      id: id(session.id), title: requiredText(session.title), description: text(session.description),
      startsAt: text(session.startsAt), endsAt: text(session.endsAt),
      isServiceSession: flag(session.isServiceSession),
      speakers: array(session.speakers).map(id), roomId: session.roomId == null ? null : id(session.roomId),
    };
  });
  const rooms = array(data.rooms).map(value => {
    const room = record(value);
    return { id: id(room.id), name: requiredText(room.name) };
  });
  unique(speakers); unique(sessions); unique(rooms);
  return { speakers, sessions, rooms };
}

export function normalizeSessionize(value: unknown): Programme {
  const data = validateSessionize(value);
  const speakers: Speaker[] = data.speakers.map(speaker => ({
    id: id(speaker.id), fullname: speaker.fullName, title_role: speaker.tagLine || '',
    speaker_bio: speaker.bio || null, speaker_image: speaker.profilePicture || null,
    isTopSpeaker: speaker.isTopSpeaker || false,
    links: (speaker.links || []).filter(link => link.url).map(link => ({ title: link.title || link.linkType, url: link.url })),
    sessions: [],
  }));
  // Deterministic ordering: highlighted speakers, English name, then ID.
  speakers.sort((a, b) => Number(b.isTopSpeaker) - Number(a.isTopSpeaker) || a.fullname.localeCompare(b.fullname, 'en') || a.id.localeCompare(b.id, 'en'));
  const byId = new Map(speakers.map(speaker => [speaker.id, speaker]));
  const rooms = new Map(data.rooms.map(room => [id(room.id), room.name]));
  const sessions = data.sessions.map(session => {
    const sessionSpeakers = Array.from(new Set(session.speakers.map(id))).map(speakerId => {
      const speaker = byId.get(speakerId);
      if (!speaker) throw new Error('Sessionize session references a missing speaker');
      const { id, fullname, title_role, speaker_bio, speaker_image, links } = speaker;
      return { id, fullname, title_role, speaker_bio, speaker_image, links } satisfies SessionSpeaker;
    });
    const startsAt = normalizeTimestamp(session.startsAt);
    const end = normalizeTimestamp(session.endsAt);
    const endsAt = startsAt && end && end > startsAt ? end : null;
    return {
      id: id(session.id), title: session.title, description: session.description || '',
      startsAt, endsAt,
      durationMinutes: startsAt && endsAt ? (Date.parse(endsAt) - Date.parse(startsAt)) / 60000 : null,
      isServiceSession: session.isServiceSession || false, speakers: sessionSpeakers,
      room: session.roomId == null ? null : rooms.get(id(session.roomId)) || null,
    };
  });
  sessions.sort((a, b) => (a.startsAt || '9999').localeCompare(b.startsAt || '9999') || (a.room || '').localeCompare(b.room || '', 'en') || a.id.localeCompare(b.id, 'en'));
  for (const session of sessions) {
    for (const speaker of session.speakers) {
      byId.get(speaker.id)!.sessions.push({
        id: session.id, title: session.title, description: session.description,
        coPresenters: session.speakers.filter(other => other.id !== speaker.id).map(other => ({ id: other.id, fullname: other.fullname })),
      });
    }
  }
  return { year: EVENT_CONFIG.year, timeZone: EVENT_CONFIG.programme.timeZone, speakers, sessions };
}
