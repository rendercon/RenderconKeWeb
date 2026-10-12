import type { Metadata } from 'next';
import AttendExperience from '../components/AttendExperience';
import { EVENT_CONFIG } from '@/config/event';

export const metadata: Metadata = {
  title: 'Attend RenderCon Kenya 2026',
  description:
    `Attend RenderCon Kenya 2026 at ${EVENT_CONFIG.venue.fullAddress}. Find tickets, the programme, and attendee FAQs.`,
};

export default function AttendPage() {
  return <AttendExperience />;
}
