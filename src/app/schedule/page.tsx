'use client';
import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useSchedule } from '../context/ScheduleContext';
import { Session } from '../../utils/types';
import { format } from 'date-fns';
import { Header } from '../components/Header';
import Footer from '../components/Footer';

const SchedulePage = () => {
  const { schedule, isLoading } = useSchedule();
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const [selectedSession, setSelectedSession] = useState<Session | null>(null); // Track the selected session

  if (isLoading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="py-10 px-6 min-h-screen">
        {/* Tabs for switching between days */}
        <div className="flex justify-center mb-8">
          <button
            className={`text-xl font-semibold px-4 py-2 ${
              activeDay === 'day1' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-400'
            }`}
            onClick={() => {
              setActiveDay('day1');
              setSelectedSession(null); // Reset the selected session when switching days
            }}
          >
            Fri, Day 1
          </button>
          <button
            className={`text-xl font-semibold px-4 py-2 ${
              activeDay === 'day2' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-400'
            }`}
            onClick={() => {
              setActiveDay('day2');
              setSelectedSession(null); // Reset the selected session when switching days
            }}
          >
            Sat, Day 2
          </button>
        </div>

        {/* If a session is selected, show the session details. Otherwise, show the schedule list */}
        {selectedSession ? (
          <SessionDetails session={selectedSession} onBack={() => setSelectedSession(null)} />
        ) : (
          <DaySchedule sessions={activeDay === 'day1' ? schedule.dayOne : schedule.dayTwo} onSelectSession={setSelectedSession} />
        )}
      </div>
      <Footer />
    </>
  );
};

// Props for DaySchedule component
interface DayScheduleProps {
  sessions: Session[];
  onSelectSession: (session: Session) => void;
}

// DaySchedule component, list of sessions
const DaySchedule: React.FC<DayScheduleProps> = ({ sessions, onSelectSession }) => (
  <div>
    {sessions.map((session, idx) => (
      <div
        key={idx}
        className="border border-w-1 text-white p-6 rounded-lg mb-6 cursor-pointer hover:bg-purple-800 transition max-w-4xl mx-auto"
        onClick={() => onSelectSession(session)} // Click handler to show session details
      >
        <div className="flex items-center space-x-0 mb-4 flex-wrap gap-4">
          {session.speakers.map((speaker, index) => (
            <div key={index} className="flex items-center justify-center gap-5">
              <img
                src={speaker.profilePicture || '/path-to-default-image'}
                alt={speaker.fullName}
                className="w-24 h-24 rounded-[10px]"
              />
              <div className="ml-4">
                <p className="font-semibold text-yellow-500">{speaker.fullName}</p>
                <p className="text-sm">{speaker.tagLine}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-yellow-500 mb-2 flex items-center pt-8">
          <FaMapMarkerAlt className="mr-2" /> {session.room}
        </div>
        <h3 className="text-lg font-bold mb-1">{session.title}</h3>
        <p className="text-sm">
          {format(new Date(session.startsAt), 'hh:mm a')} - {format(new Date(session.endsAt), 'hh:mm a')}
        </p>
      </div>
    ))}
  </div>
);

// Props for SessionDetails component
interface SessionDetailsProps {
  session: Session;
  onBack: () => void;
}

// SessionDetails component to show details of a selected session
const SessionDetails: React.FC<SessionDetailsProps> = ({ session, onBack }) => (
  <div className="bg-violet-900 text-white p-6 rounded-lg mb-6">
    <button onClick={onBack} className="text-yellow-500 mb-4">← Back to schedule</button>
    <h1 className="text-2xl font-bold mb-4">{session.title}</h1>
    <div className="flex items-center space-x-0 mb-4 flex-wrap gap-4">
      {session.speakers.map((speaker, index) => (
        <div key={index} className="flex items-center justify-center gap-5">
          <img
            src={speaker.profilePicture || '/path-to-default-image'}
            alt={speaker.fullName}
            className="w-24 h-24 rounded-[10px]"
          />
          <div className="ml-4">
            <p className="font-semibold text-yellow-500">{speaker.fullName}</p>
            <p className="text-sm">{speaker.tagLine}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="text-yellow-500 mb-2 flex items-center">
      <FaMapMarkerAlt className="mr-2" /> {session.room}
    </div>
    <h3 className="text-lg font-bold mb-2">About</h3>
    <p className="text-sm mb-4">{session.description}</p>
    <div className="text-sm">
      <p><strong className='text-yellow-500'>Date:</strong> {format(new Date(session.startsAt), 'EEEE, MMM d, yyyy')}</p>
      <p><strong className='text-yellow-500'>Time:</strong> {format(new Date(session.startsAt), 'hh:mm a')} - {format(new Date(session.endsAt), 'hh:mm a')}</p>
      <p><strong className='text-yellow-500'>Venue:</strong> {session.room}</p>
    </div>
  </div>
);

export default SchedulePage;
