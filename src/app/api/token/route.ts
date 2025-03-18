import { AccessToken } from 'livekit-server-sdk';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Get identity and room from the query string
  const url = new URL(req.url);
  const identity = url.searchParams.get('identity');
  const roomName = url.searchParams.get('room');

  // Return 400 if identity or room is missing
  if (!identity || !roomName) {
    return NextResponse.json(
      { error: 'identity and room are required parameters' },
      { status: 400 }
    );
  }

  // Get API key and secret from environment variables
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;

  // Return 500 if API key or secret is missing
  if (!apiKey || !apiSecret) {
    return NextResponse.json(
      { error: 'Server misconfigured: LiveKit API key or secret is missing' },
      { status: 500 }
    );
  }

  // Create a new token
  const at = new AccessToken(apiKey, apiSecret, {
    identity,
    // Token expires in 24 hours
    ttl: 60 * 60 * 24,
  });

  // Grant permissions to the specified room
  at.addGrant({
    roomJoin: true,
    room: roomName,
    canPublish: true, // Allow audio publishing
    canSubscribe: true, // Allow receiving other participants' audio
  });

  // Return the token
  return NextResponse.json({ token: at.toJwt() });
} 