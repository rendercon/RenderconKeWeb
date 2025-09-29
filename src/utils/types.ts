// types.ts
export type Speaker = {
    id: string;
    fullname: string;
    title_role: string;
    linkedin_url: string;
    other_social: string;
    speaker_bio: string | null;
    speaker_image: string;
    session_title: string;
    session_abstract: string;
    co_presenter_info: string | null;
};
  
  export interface Room {
    id: number;
    name: string;
  }
  
  export interface Session {
    id: number;
    title: string;
    description: string;
    startsAt: string;
    endsAt: string;
    isServiceSession?: boolean;
    speakers: Speaker[];
    room: string;
  }
  
  export interface ApiData {
    sessions: {
      id: number;
      title: string;
      description: string;
      startsAt: string;
      endsAt: string;
      isServiceSession?: boolean;
      speakers?: string[]; // IDs of speakers
      roomId: number;
    }[];
    speakers: Speaker[];
    rooms: Room[];
  }
  