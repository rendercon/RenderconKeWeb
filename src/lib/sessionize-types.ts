// Selected fields verified in the 2026 All export. Administrative fields are
// deliberately absent. Runtime validation remains required at the boundary.
export type SessionizeId = string | number;

export interface SessionizeLink {
  title: string;
  url: string;
  linkType: string;
}

export interface SessionizeSpeaker {
  id: SessionizeId;
  fullName: string;
  bio?: string | null;
  tagLine?: string | null;
  profilePicture?: string | null;
  isTopSpeaker?: boolean;
  links?: SessionizeLink[];
}

export interface SessionizeSession {
  id: SessionizeId;
  title: string;
  description?: string | null;
  startsAt?: string | null;
  endsAt?: string | null;
  isServiceSession?: boolean;
  speakers: SessionizeId[];
  roomId?: SessionizeId | null;
}

export interface SessionizeAll {
  speakers: SessionizeSpeaker[];
  sessions: SessionizeSession[];
  rooms: { id: SessionizeId; name: string }[];
}
