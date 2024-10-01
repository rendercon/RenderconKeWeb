// utils/formatSessions.ts
import { ApiData, Session, Speaker } from './types';
import { isDayOneSession, isDayTwoSession } from './formatDate';

export const formatSessions = (talks: ApiData): [Session[], Session[]] => {
  const allSessions = talks.sessions.map((talk) => ({
    id: talk.id,
    title: talk.title,
    description: talk.description,
    startsAt: talk.startsAt,
    endsAt: talk.endsAt,
    isServiceSession: talk.isServiceSession,
    speakers: talk.speakers
      ? talk.speakers
          .map((speakerId) =>
            talks.speakers.find((sp) => sp.id === speakerId)
          )
          .filter(Boolean) as Speaker[]
      : [],
    room: talks.rooms.find((room) => room.id === talk.roomId)?.name || 'Unknown',
  }));

  const dayOne = allSessions.filter((session) =>
    isDayOneSession(session.startsAt)
  );
  const dayTwo = allSessions.filter((session) =>
    isDayTwoSession(session.startsAt)
  );

  return [dayOne, dayTwo];
};
