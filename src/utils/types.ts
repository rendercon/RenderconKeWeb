// types.ts
export interface Speaker {
    id: string;
    fullName: string;
    tagLine?: string;
    profilePicture?: string;
  }
  
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
  