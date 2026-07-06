import type { Metadata } from 'next';
import AttendExperience from '../components/AttendExperience';

export const metadata: Metadata = {
  title: 'Attend RenderCon Kenya 2026',
  description:
    'Tickets, venue details, schedule updates, and attendee FAQs for RenderCon Kenya 2026.',
};

export default function AttendPage() {
  return <AttendExperience />;
}
