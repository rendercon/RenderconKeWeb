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

export type SpeakerSubmission = {
    id: string;
    email: string;
    fullName: string;
    phoneNumber: string;
    titleRole: string;
    linkedinProfile: string;
    socialMediaLinks: string;
    sessionType: string;
    sessionRoom: string;
    sessionTime: string;
    sessionDate: string;
    speakerBio: string;
    profilePhoto: string;
    sessionTitle: string;
    targetAudience: string;
    sessionAbstract: string;
    keyTakeaways: string;
    technicalPrerequisites: string;
    sessionUniqueness: string;
    passportCountry: string;
    dietaryRestrictions: string;
    accessibilityRequirements: string;
    specialEquipmentNeeds: string;
    coPresenterInfo: string;
    additionalComments: string;
    codeOfConductAgreement: string;
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
  