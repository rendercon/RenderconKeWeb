// context/ScheduleContext.tsx
"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { formatSessions } from '@/utils/formatSessions';
import { ApiData, Session } from '../../utils/types';

interface ScheduleContextProps {
  schedule: {
    dayOne: Session[];
    dayTwo: Session[];
  };
  isLoading: boolean;
}

const ScheduleContext = createContext<ScheduleContextProps | null>(null);

export const useSchedule = () => {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error("useSchedule must be used within a ScheduleProvider");
  }
  return context;
};

export const ScheduleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [schedule, setSchedule] = useState<{ dayOne: Session[]; dayTwo: Session[] }>({
    dayOne: [],
    dayTwo: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<ApiData>('https://sessionize.com/api/v2/d899srzm/view/All');
        const formattedSessions = formatSessions(data);
        setSchedule({
          dayOne: formattedSessions[0],
          dayTwo: formattedSessions[1],
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScheduleContext.Provider value={{ schedule, isLoading }}>
      {children}
    </ScheduleContext.Provider>
  );
};
