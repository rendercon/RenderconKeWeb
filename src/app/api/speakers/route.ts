import { NextResponse } from 'next/server';
import { getProgramme } from '@/lib/sessionize';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Cache-Control': 'no-store',
};

export async function GET() {
  try {
    const programme = await getProgramme();
    return NextResponse.json(programme.speakers, { headers: corsHeaders });
  } catch {
    console.error('RenderCon 2026 speaker programme unavailable');
    return NextResponse.json({ error: 'The 2026 speakers are temporarily unavailable. Please try again.' }, { status: 503, headers: corsHeaders });
  }
}

export function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}
