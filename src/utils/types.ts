export interface SocialLink {
  title: string;
  url: string;
}

export interface SessionSpeaker {
  id: string;
  fullname: string;
  title_role: string;
  speaker_bio: string | null;
  speaker_image: string | null;
  links: SocialLink[];
}

export interface Speaker extends SessionSpeaker {
  isTopSpeaker: boolean;
  sessions: { id: string; title: string; description: string; coPresenters: { id: string; fullname: string }[] }[];
}

export interface Session {
  id: string;
  title: string;
  description: string;
  startsAt: string | null;
  endsAt: string | null;
  durationMinutes: number | null;
  isServiceSession: boolean;
  speakers: SessionSpeaker[];
  room: string | null;
}

export interface Programme {
  year: number;
  timeZone: string;
  speakers: Speaker[];
  sessions: Session[];
}
