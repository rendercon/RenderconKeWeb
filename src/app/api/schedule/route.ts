import { NextResponse } from 'next/server';
import { getProgramme } from '@/lib/sessionize';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  try {
    return NextResponse.json(await getProgramme(), { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    console.error('RenderCon 2026 schedule unavailable');
    return NextResponse.json({ error: 'The 2026 programme is temporarily unavailable. Please try again.' }, {
      status: 503, headers: { 'Cache-Control': 'no-store' },
    });
  }
}
