// utils/formatDate.ts
export const isDayOneSession = (date: string): boolean => {
    const targetDate = new Date('2024-10-04');
    const sessionDate = new Date(date);
    return sessionDate.getUTCDate() === targetDate.getUTCDate();
  };
  
  export const isDayTwoSession = (date: string): boolean => {
    const targetDate = new Date('2024-10-05');
    const sessionDate = new Date(date);
    return sessionDate.getUTCDate() === targetDate.getUTCDate();
  };
  