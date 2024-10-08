// utils/formatDate.ts
export const isDayOneSession = (date: string): boolean => {
    const targetDate = new Date('2025-10-03');
    const sessionDate = new Date(date);
    return sessionDate.getUTCDate() === targetDate.getUTCDate();
  };
  
  export const isDayTwoSession = (date: string): boolean => {
    const targetDate = new Date('2025-10-04');
    const sessionDate = new Date(date);
    return sessionDate.getUTCDate() === targetDate.getUTCDate();
  };
  